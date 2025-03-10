//components/Products.tsx

"use client";
import Card from '@/components/Card';

import AllSubcategoriesComponent from '../AllSubCategory';

import Loading from "@/components/Loading";
import { fetchProductsFrom, getProduct, fetchProductsInitial } from '@/lib/features/products/productSlice';
import { useAppSelector } from '@/lib/hooks';
import { useAppDispatch } from '@/lib/store';
import React, { useEffect, useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { useDisclosure } from '@chakra-ui/react';
import AddProductModal from '@/components/AddProductModal';
import { notFound } from 'next/navigation';
import { getSubcategories } from '@/lib/features/subcategories';
import { Product } from '@/lib/types';
import Tab from './Tab';
type Category = "pooja" | "cosmetics" | "grocery" | "stationary";
export default function Products({ category }: { category: Category }) {
  const user = useAppSelector(state => state.authReducer.user);
  const { loading, sub } = useAppSelector(state => state.productReducer)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const loadingConditonA = (sub.length === 0);

  const [subcategory, setSubcategory] = useState<string>('all');
  const subs = useAppSelector(state => state.subcategoriesReducers[category]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  useEffect(() => {
    let timeout: any = null;
    const fetchProducts = async () => {
      await dispatch(fetchProductsInitial(category));
      const timeout = setTimeout(() => {
        dispatch(fetchProductsFrom(category));
      }, 10000);
      return timeout;
    }
    fetchProducts().then(res => {
      timeout = res;
    })
    dispatch(getSubcategories(category));
    return () => {
      clearTimeout(timeout);
      console.log(category)
    }
  }, [category, dispatch])

  // if (!(user?.isAdmin)) {
  //   return notFound();
  // }

  useEffect(() => {
    const res = sub.filter(s => {
      if (subcategory === 'all') {
        return true;
      }
      if (s.category === subcategory) {
        //console.log(sub)
        console.log(subcategory)
        return true;
      }
    }) 
    setFiltered(res);
    console.log(sub);
    console.log(subcategory);

  }, [subcategory, sub])

  // Filtering logic based on button selection
  const handleFilter = (filterType: string) => {
    let filteredProducts: Product[];

    switch (filterType) {
      case "complete" :
        filteredProducts = sub.filter(s => s.category && s.subCategory);
        break;
      case "no-cat" :
        filteredProducts = sub.filter(s => !s.category && s.subCategory);
        break;
      case "no-subcat" :
        filteredProducts = sub.filter(s => s.category && !s.subCategory);
        break;
      case "none" :
        filteredProducts = sub.filter(s => !s.category && !s.subCategory);
        break;
      default:
        filteredProducts = sub;
    }
    setFiltered(filteredProducts);
    setSelectedFilter(filterType)
  }

  return (
    <>
      {loadingConditonA ? <div className="w-full h-screen">
        <Loading />
      </div> :
        <>
        <Tab subs={subs} subcategory={subcategory} setSubcategory={setSubcategory}/>

        <div className='flex flex-row gap-10 mb-10'>
            <button
              className={`tooltip-container px-5 py-2 mx-5 w-50 rounded-md text-white font-semibold ${selectedFilter === 'complete' ? 'bg-black' : 'bg-green-400'}`}
              onClick={() => handleFilter('complete')}
            ><span className="tooltip-text">Filter Products with both Category and Subcategory</span>
              Complete
            </button>
            <button
              className={`tooltip-container px-5 py-2 mx-5 w-50 rounded-md text-white font-semibold ${selectedFilter === 'no-cat' ? 'bg-black' : 'bg-yellow-500'}`}
              onClick={() => handleFilter('no-cat')}
            ><span className="tooltip-text">Filter Products with no Category but Subcategory</span>
              no-cat
            </button>
            <button
              className={`tooltip-container px-5 py-2 mx-5 w-50 rounded-md text-white font-semibold ${selectedFilter === 'no-subcat' ? 'bg-black' : 'bg-orange-500'}`}
              onClick={() => handleFilter('no-subcat')}
            ><span className="tooltip-text">Filter Products with Category but no Subcategory</span>
              no-subcat
            </button>
            <button
              className={`tooltip-container px-5 py-2 mx-5 w-50 rounded-md text-white font-semibold ${selectedFilter === 'none' ? 'bg-black' : 'bg-red-500'}`}
              onClick={() => handleFilter('none')}
            ><span className="tooltip-text">Filter Products with Neither Category nor Subcategory</span>
              NONE!
            </button>
          </div>

          <div className='grid md:grid-cols-4 place-items-center'>

            {
              filtered.map((val: any) => <Card key={val.productId} details={val} category={category} />)
            }
          </div>

          {/* <AllSubcategoriesComponent/> */}

        </>
      }
      <div className=' fixed bottom-5 right-5'>
        <IoMdAddCircle className=' text-4xl cursor-pointer'
          onClick={onOpen} />
      </div>
      <> <AddProductModal isOpen={isOpen} onClose={onClose} sub={category} /></>
    </>
  )
}

