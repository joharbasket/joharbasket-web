"use client";

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getProduct } from '@/lib/features/products/productSlice';
import { Product } from '@/lib/types';
import Loading from '@/components/Loading';
import { useParams } from 'next/navigation';
import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(state => state.productReducer);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (params.id) {
        const productId = Array.isArray(params.id) ? params.id[0] : params.id;
        const result = await dispatch(getProduct({ id: productId, collection: 'all' })).unwrap();
        setProduct(result);
      }
    };

    fetchProduct();
  }, [dispatch, params.id]);

  if (loading) {
    return (
      <div className="w-full h-screen">
        <Loading />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme="blue"
            mt={4}
            onClick={() => router.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        leftIcon={<ArrowBackIcon />}
        colorScheme="blue"
        mb={6}
        onClick={() => router.back()}
      >
        Back to Products
      </Button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2 p-6">
            <div className="relative h-96 w-full">
              <Image
                src={product.imageUrl || '/placeholder.png'}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Price</h2>
                <p className="text-2xl font-bold text-blue-600">₹{product.price}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-700">Category</h2>
                <p className="text-gray-600">{product.category || 'Not specified'}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-700">Subcategory</h2>
                <p className="text-gray-600">{product.subCategory || 'Not specified'}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-700">Description</h2>
                <p className="text-gray-600">{product.description || 'No description available'}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-700">Stock</h2>
                <p className="text-gray-600">{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-700">Product ID</h2>
                <p className="text-gray-600">{product.productId}</p>
              </div>
            </div>

            <div className="mt-8">
              <Button
                colorScheme="blue"
                size="lg"
                width="full"
                onClick={() => {
                  // Add to cart functionality can be implemented here
                  console.log('Add to cart:', product);
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
