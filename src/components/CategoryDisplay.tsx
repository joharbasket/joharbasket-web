// src/components/CategoryDisplay.tsx
"use client";

import { useEffect, useState } from 'react';
import { AllCategories } from '@/types/categories'; // Adjust path as necessary

const CategoryDisplay = () => {
  const [categoriesData, setCategoriesData] = useState<AllCategories | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/categories');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: AllCategories = await response.json();
        setCategoriesData(data);
        console.log("Fetched Categories Data:", JSON.stringify(data, null, 2));
      } catch (err: any) {
        console.error("Failed to fetch categories:", err);
        setError(err.message || 'Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading categories...</p>;
  }

  if (error) {
    return <p>Error loading categories: {error}</p>;
  }

  // You can render the data here if needed, for now, it's just logged.
  // Example:
  // return (
  //   <div>
  //     <h2>Categories Loaded (Check Console)</h2>
  //     {/* <pre>{JSON.stringify(categoriesData, null, 2)}</pre> */}
  //   </div>
  // );

  return (
    <div>
      <p>Category data has been fetched and logged to the console.</p>
      <p>Open your browser's developer console to view the data.</p>
    </div>
  );
};

export default CategoryDisplay;