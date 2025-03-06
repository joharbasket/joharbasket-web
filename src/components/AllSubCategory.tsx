import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

type Subcategory = {
  name: string;
  image: string;
};

const AllSubcategoriesComponent = () => {
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllSubcategories = useCallback(async () => {
    try {
      const response = await fetch("/api/subcategory/all");
      if (!response.ok) throw new Error("Failed to fetch");
  
      const result = await response.json();
      console.log("API Response:", result); // Debugging
  
      // Ensure it's an array before setting state
      if (Array.isArray(result.subcategories)) {
        setSubcategories(result.subcategories);
      } else {
        throw new Error("Invalid data format: Expected an array");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);
  

  useEffect(() => {
    fetchAllSubcategories();
  }, [fetchAllSubcategories]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>All Subcategories</h2>
      <ul>
        {subcategories.map((sub, index) => (
          <li key={index}>
            <h3>{sub.name}</h3>
            <Image src={sub.image} alt={sub.name} width={100} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllSubcategoriesComponent;
