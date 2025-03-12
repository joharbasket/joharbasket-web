// import React, { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '@/lib/hooks'; // Adjust the import based on your project structure
// import { getSubcategories } from '@/lib/features/subcategories'; // Import the async action
// import Image from 'next/image';

// const SubcategoryFetcher = ({ category }: { category: string }) => {
//   const dispatch = useAppDispatch();
//   const { cosmetics, grocery, pooja, stationary, notifications } = useAppSelector(state => state.subcategoriesReducers); // Adjust based on your state structure
//   const loading = useAppSelector(state => state.subcategoriesReducers.loading); // If you have a loading state
//   const error = useAppSelector(state => state.subcategoriesReducers.error); // If you have an error state

//   useEffect(() => {
//     // Dispatch the action to fetch subcategories when the component mounts
//     dispatch(getSubcategories(category));
//   }, [dispatch, category]);

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error fetching subcategories: {error}</p>}
//       <div>
//         {/* {category === 'cosmetics' && cosmetics.map(sub => (
//           <div key={sub.name}>
//             <h3>{sub.name}</h3>
//             <Image src={sub.image} alt={sub.name} height={200} width={200} />
//           </div>
//         ))} */}
//         {category === 'grocery' && grocery.map(sub => (
//           <div key={sub.name}>
//             <h3>{sub.name}</h3>
//             <Image src={sub.image} alt={sub.name} height={200} width={200} />
//           </div>
//         ))}
//         {/* Repeat for other categories */}
//       </div>
//     </div>
//   );
// };

// export default SubcategoryFetcher;