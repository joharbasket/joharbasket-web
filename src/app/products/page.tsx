"use client";

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchAllCollections } from '@/lib/features/products/productSlice';
import { Product } from '@/lib/types';
import Card from '@/components/Card';
import Loading from '@/components/Loading';
import { Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import AddProductModal from '@/components/AddProductModal';
import { useDisclosure } from '@chakra-ui/react';
import { CollectionData, Collection, category, subCategory } from '@/lib/collections';

type Category = "pooja" | "cosmetics" | "grocery" | "stationary";

export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const { loading, grocery, cosmetics, stationary, pooja } = useAppSelector(state => state.productReducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [selectedCollection, setSelectedCollection] = useState<Category>("grocery");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Get current collection data
  const currentCollection = CollectionData.find(col => col.name.toLowerCase() === selectedCollection.toLowerCase());

  // Load all collections
  useEffect(() => {
    dispatch(fetchAllCollections());
  }, [dispatch]);

  // Filter products based on selections
  useEffect(() => {
    let products: Product[] = [];
    switch (selectedCollection) {
      case 'grocery':
        products = grocery;
        break;
      case 'cosmetics':
        products = cosmetics;
        break;
      case 'stationary':
        products = stationary;
        break;
      case 'pooja':
        products = pooja;
        break;
    }

    let filtered = products;

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply subcategory filter
    if (selectedSubcategory !== "all") {
      filtered = filtered.filter(product => product.subCategory === selectedSubcategory);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query) ||
        product.subCategory?.toLowerCase().includes(query)
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCollection, selectedCategory, selectedSubcategory, searchQuery, grocery, cosmetics, stationary, pooja]);

  const handleAddNewProduct = () => {
    onOpen();
  };

  if (loading) {
    return (
      <div className="w-full h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6 mb-8">
        {/* Header with Search and Add Button */}
        <div className="flex justify-between items-center gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name, category, or subcategory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="blue"
            onClick={handleAddNewProduct}
          >
            Add New Product
          </Button>
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap gap-4">
          {/* Collection Dropdown */}
          <select
            value={selectedCollection}
            onChange={(e) => {
              setSelectedCollection(e.target.value as Category);
              setSelectedCategory("all");
              setSelectedSubcategory("all");
            }}
            className="px-4 py-2 border rounded-md min-w-[200px]"
          >
            {CollectionData.map((col: Collection) => (
              <option key={col.name} value={col.name.toLowerCase()}>
                {col.name}
              </option>
            ))}
          </select>

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedSubcategory("all");
            }}
            className="px-4 py-2 border rounded-md min-w-[200px]"
          >
            <option value="all">All Categories</option>
            {currentCollection?.categories.map((cat: category) => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* Subcategory Dropdown */}
          <select
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            className="px-4 py-2 border rounded-md min-w-[200px]"
            disabled={selectedCategory === "all"}
          >
            <option value="all">All Subcategories</option>
            {selectedCategory !== "all" &&
              currentCollection?.categories
                .find(cat => cat.name === selectedCategory)
                ?.subCategories.map((sub: subCategory) => (
                  <option key={sub.name} value={sub.name}>
                    {sub.name}
                  </option>
                ))
            }
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.productId} details={product} category={selectedCollection} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No products found matching your criteria.</p>
        </div>
      )}

      {/* Add Product Modal */}
      <AddProductModal 
        isOpen={isOpen} 
        onClose={onClose} 
        sub={selectedCollection}
      />
    </div>
  );
}
