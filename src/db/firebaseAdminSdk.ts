type FirebaseAdminAppParams = {
  projectId: string;
  clientEmail: string;
  storageBucket: string;
  privateKey: string;
};
import admin from "firebase-admin";
export function formatKey(key: any){
    return key.replace(/\\n/g, "\n")

}
function createFirebaseAdminApp(params: FirebaseAdminAppParams) {
  const privateKey = params.privateKey.split(String.raw`\n`).join('\n');
  if (admin.apps.length > 0) {
    console.log("Already");
    
    return admin.app();
  }
  console.log("New instance");
  
  const cert = admin.credential.cert({
    projectId: params.projectId,
    clientEmail: params.clientEmail,
    privateKey: privateKey,
  });
  return admin.initializeApp({
    credential :cert,
    projectId : params.projectId,
    storageBucket : params.storageBucket,
  });
}

export async function initAdmin() {
    const params = {
        projectId : process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
        clientEmail : process.env.FIREBASE_CLIENT_EMAIL  as string,
        privateKey : process.env.FIREBASE_PRIVATE_KEY  as string,
        storageBucket : process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET  as string,
    }
    return createFirebaseAdminApp(params)
}