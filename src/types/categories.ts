export interface SubSubcategory {
  name: string;
  image: string;
}

export interface Subcategory {
  name: string;
  image: string;
  subSubcategories?: SubSubcategory[];
}

export interface MainCategoryData {
  name: string; // The main category name
  subcategories: Subcategory[];
}

export type AllCategories = Record<string, MainCategoryData>;

// Represents the data structure of a document in the 'subcategories' subcollection in Firestore
export interface FirebaseSubcategoryData {
  id: string; // Document ID from Firestore
  name: string;
  description?: string;
  image: string;
  subSubcategories?: SubSubcategory[];
}

// Represents a main category document along with its fetched subcategories
export interface MainCategoryWithSubcategories extends MainCategoryData {
  id: string; // ID of the main category document
  subcategoriesData: FirebaseSubcategoryData[]; // Fetched subcategory documents
}