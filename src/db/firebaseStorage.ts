
// import { getStorage } from "firebase/storage";
// import {
//     getFirestore,
//     collection,
//     doc,
//     setDoc,
//     getDocs,
//   } from "firebase/firestore";
//   import { initFirebase } from "./firebaseSDK";
//   const app = initFirebase();
// export async function updateDoc(collection: any, docId: any, data: any) {
// //   const storage = getStorage(app);
// const db = getFirestore(app);
//   const updateData = {
//     name: data.name,
//     description: data.description,
//     price: data.price,
//     discountedPrice: data.discountedPrice,
//     inStock: data.inStock,
//     isFeatured: data.isFeatured,
//   };

//   const dataRef = db.collection(collection).doc(docId);
//   const res = await dataRef.update(updateData);
//   const file: File | null = data.get("file[]") as unknown as File;

//   console.log(data);
//   console.log(file);

//   const bytes = await file.arrayBuffer();
//   const buffer = Buffer.from(bytes);
//   const storage = getStorage();
//   const imageRef = ref(`images/${file.name}`);
//   await uploadBytes(imageRef, buffer);

//   const imageUrl = await getDownloadURL(imageRef);
//   await docRef.update({ image: imageUrl });
//   console.log("Image uploaded and details updated!");

//   return res;
// }
