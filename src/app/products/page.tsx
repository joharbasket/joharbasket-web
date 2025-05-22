"use client";

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchAllCollections } from '@/lib/features/products/productSlice';
import { Product } from '@/lib/types';
import Card from '@/components/Card';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';
import { Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import AddProductModal from '@/components/AddProductModal';
import { useDisclosure } from '@chakra-ui/react';

type Category = "pooja" | "cosmetics" | "grocery" | "stationary";

export interface subCategory {
  name: string;
}

export interface category {
  name: string;
  subCategories: subCategory[];
}

export interface Collection {
  name: string;
  categories: category[];
}

export const CollectionData: Collection[] = [
  {
    name: "Grocery",
    categories: [
      {
        name: "Atta , Rice & Dal",
        subCategories: [
          {
            name: "Atta"
          },
          {
            name: "Rice"
          },
          {
            name: "Dal & Pulses"
          },
          {
            name: "Poha Daliya & Other Grains"
          },
        ]
      },
      {
        name: "Biscuit & Cookies",
        subCategories: [
          {
            name: "Biscuits"
          },
          {
            name: "Cookies"
          },
          {
            name: "Cream Biscuits"
          },
          {
            name: "Glucose & Digestive"
          },
          {
            name: "Rusks & Waffers"
          },
          {
            name: "Sweet & Salty"
          },
        ]
      },
      {
        name: "Cleaning Essentials",
        subCategories: [
          {
            name: "Cleaning Tools Shoe Care"
          },
          {
            name: "Detergent Powder & Bars"
          },
          {
            name: "Dishwash Gel & Bar"
          },
          {
            name: "Disinfectant"
          },
          {
            name: "Floor & Surface Cleaner"
          },
          {
            name: "Liquid Detergent & Additive"
          },
          {
            name: "Toilet & Bathroom Cleaner"
          },
        ]
      },
      {
        name: "Cold Drinks & Juices",
        subCategories: [
          {
            name: "Fruit Juices"
          },
          {
            name: "Lassi Shakes & More"
          },
          {
            name: "Soda & Mixers"
          },
          {
            name: "Water & Energy Drink"
          },
          {
            name: "Soft Drinks"
          },
        ]
      },
      {
        name: "Dairy , Breads & Eggs",
        subCategories: [
          {
            name: "Cheese & Butter"
          },
          {
            name: "Paneer & Cream"
          }
        ]
      },
      {
        name: "Ice Cream & More",
        subCategories: [
          {
            name: "Cones"
          },
          {
            name: "Cups"
          },
          {
            name: "Kulfi"
          },
          {
            name: "Sticks"
          },
          {
            name: "Tube"
          },
          {
            name: "Cake Sandwich & More"
          }
        ]
      },
      {
        name: "Instant Food & Sauces",
        subCategories: [
          {
            name: "Batter & Mixes"
          },
          {
            name: "Cereals Muesli & More"
          },
          {
            name: "Dry Fruits"
          },
          {
            name: "Ketchup & Sauces"
          },
          {
            name: "Noodles Delight"
          },
          {
            name: "Peanut Butter & Spreads"
          }
        ]
      },
      {
        name: "Masala, Oil & More",
        subCategories: [
          {
            name: "Ghee"
          },
          {
            name: "Oils"
          },
          {
            name: "Pickles"
          },
          {
            name: "Powdered Spices"
          },
          {
            name: "Salt Sugar & Jaggery"
          },
          {
            name: "Whole Spices"
          }
        ]
      },
      {
        name: "Snacks & Munchies",
        subCategories: [
          {
            name: "Chips & Crisps"
          },
          {
            name: "Namkeen"
          },
          {
            name: "Papad & More"
          },
          {
            name: "Popcorn Makhana & More"
          }
        ]
      },
      {
        name: "Sweet Lover",
        subCategories: [
          {
            name: "Cakes & Rolls"
          },
          {
            name: "Chocolates"
          },
          {
            name: "Chocolates Gift Packs"
          },
          {
            name: "Desi Sweets"
          },
          {
            name: "Energy Bar"
          },
          {
            name: "Mouth Freshener & Candies"
          }
        ]
      },
      {
        name: "Tea, Coffee & Drink Mixes",
        subCategories: [
          {
            name: "Coffee"
          },
          {
            name: "Drink Mixes"
          },
          {
            name: "Ready To Drink"
          },
          {
            name: "Tea & Herbal Teas"
          }
        ]
      },
      {
        name: "Baby",
        subCategories: [
          {
            name: "Baby Food"
          },
          {
            name: "Baby Oral Care"
          },
          {
            name: "Baby Skin & Hair Care"
          },
          {
            name: "Baby Wipes & Tissues"
          },
          {
            name: "Diapers & More"
          }
        ]
      }
    ]
  },
  {
    name: "Cosmetics",
    categories: [
      {
        name: "Bath & Body",
        subCategories: [
          {
            name: "Conditioner"
          },
          {
            name: "Face Wash & Scrubs"
          },
          {
            name: "Handwash"
          },
          {
            name: "Oral Care"
          },
          {
            name: "Shampoo"
          },
          {
            name: "Shaving Cream"
          },
          {
            name: "Shower Gel"
          },
          {
            name: "Soaps"
          }
        ]
      },
      {
        name: "Feminine Hygiene",
        subCategories: [
          {
            name: "Hair Removal & Razors"
          },
          {
            name: "Intimate"
          },
          {
            name: "Sanitary"
          }
        ]
      },
      {
        name: "Hair Care",
        subCategories: [
          {
            name: "Hair Accessories"
          },
          {
            name: "Hair Colour"
          },
          {
            name: "Hair Oil & Gel"
          },
          {
            name: "Hair Serum"
          }
        ]
      },
      {
        name: "Makeup & Beauty",
        subCategories: [
          {
            name: "Bindi Bangle & More"
          },
          {
            name: "Blush & Highlighters"
          },
          {
            name: "Cleaner & Toners"
          },
          {
            name: "Foundation & Compact"
          },
          {
            name: "Kajal & Eyeliners"
          },
          {
            name: "Lipstick & Gloss"
          },
          {
            name: "Nail Accessories"
          },
          {
            name: "Primers & Concealers"
          }
        ]
      },
      {
        name: "Pharma & Wellness",
        subCategories: [
          {
            name: "Cotton & Bandage"
          },
          {
            name: "Digestive Care"
          },
          {
            name: "Disinfectant"
          },
          {
            name: "Honey & Chyawanprash"
          },
          {
            name: "Pain Relief"
          },
          {
            name: "Protein Supplements"
          }
        ]
      },
      {
        name: "Skin & Face Care",
        subCategories: [
          {
            name: "Body Lotion"
          },
          {
            name: "Cream"
          },
          {
            name: "Face Mask, Gel And More"
          },
          {
            name: "Facewash And Scrubs"
          },
          {
            name: "Hand And Foot Care"
          },
          {
            name: "Lip And Eye Care"
          },
          {
            name: "Perfume, Deo And Talc"
          },
          {
            name: "Sunscreen And Serum"
          }
        ]
      }
    ]
  },
  {
    name: "Pooja",
    categories: [{
      name: "Pooja essential ",
      subCategories: []
    },
    {
      name: "Offerings ",
      subCategories: []
    },
    {
      name: "Pooja Accessories",
      subCategories: []
    },
    ]
  },
  {
    name: "Stationary",
    categories: [
      {
        name: "Paper",
        subCategories: [
          {
            name: "Books & Magazines"
          },
          {
            name: "Colour Paper"
          },
          {
            name: "Craft & Hobbies"
          }
        ]
      },
      {
        name: "Writing Instruments",
        subCategories: [
          {
            name: "Pen & Markers"
          },
          {
            name: "School Supplies"
          },
          {
            name: "Sketch Colour"
          }
        ]
      },
      {
        name: "Office Supplies",
        subCategories: [
          {
            name: "Files & Office Needs"
          },
          {
            name: "Glue Tape & Sticker"
          },
          {
            name: "Stapler & Scissors"
          }
        ]
      }
    ]
  }
];

export default function ProductsPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, grocery, cosmetics, stationary, pooja } = useAppSelector(state => state.productReducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [selectedCollection, setSelectedCollection] = useState<Category>("grocery");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Map<string, Set<string>>>(new Map());

  // Load all collections
  useEffect(() => {
    dispatch(fetchAllCollections());
  }, [dispatch]);

  // Update categories and subcategories when collection changes
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

    // Create category and subcategory map with unique values
    const categoryMap = new Map<string, Set<string>>();
    const uniqueCategories = new Set<string>();
    const uniqueSubcategories = new Map<string, Set<string>>();

    products.forEach((product) => {
      if (product.category) {
        uniqueCategories.add(product.category);
        
        if (!uniqueSubcategories.has(product.category)) {
          uniqueSubcategories.set(product.category, new Set());
        }
        
        if (product.subCategory) {
          uniqueSubcategories.get(product.category)?.add(product.subCategory);
        }
      }
    });

    // Convert Sets to sorted arrays for consistent ordering
    uniqueCategories.forEach(category => {
      const subcats = Array.from(uniqueSubcategories.get(category) || []);
      categoryMap.set(category, new Set(subcats));
    });

    setCategories(categoryMap);
    setSelectedCategory("all");
    setSelectedSubcategory("all");
  }, [selectedCollection, grocery, cosmetics, stationary, pooja]);

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
            <option value="grocery">Grocery</option>
            <option value="cosmetics">Cosmetics</option>
            <option value="stationary">Stationary</option>
            <option value="pooja">Pooja</option>
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
            {Array.from(categories.keys())
              .sort((a, b) => a.localeCompare(b))
              .map((category) => (
                <option key={category} value={category}>
                  {category}
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
              Array.from(categories.get(selectedCategory) || [])
                .sort((a, b) => a.localeCompare(b))
                .map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
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
