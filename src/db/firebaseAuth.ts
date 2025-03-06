import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getAuth,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

import { initFirebase } from "./firebaseSDK";
const app = initFirebase();
const auth = getAuth(app);
const db = getFirestore(app);

export async function googleAuth() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    const { email, emailVerified, displayName, phoneNumber, photoURL, uid } =
      result.user;
    const data = {
      email,
      emailVerified,
      displayName,
      phoneNumber,
      photoURL,
      uid,
    };
    return data;
  } catch (e: any) {
    const errorCode = e.code;
    const errorMessage = e.message;
    const email = e.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(e);
    const data = { errorCode, errorMessage, email, credential };
    return Promise.reject(new Error(errorMessage));
  }
}

export const signout = async () => {
  try {
    const data = await signOut(auth);
    return data;
  } catch (error: any) {
    return Promise.reject(new Error(error));
  }
};

export const verifyIsAdmin = async (userEmail: any) => {
  const adminRef = collection(db, "admin");
  const data = await getDocs(adminRef);
  let admins: any = [];
  data.forEach((doc) => {
    const data = doc.data();
    if (doc.id === "adminEmails") {
      admins = data.list;
    }
  });
  const isAdmin = admins.includes(userEmail);
  return isAdmin;
};
