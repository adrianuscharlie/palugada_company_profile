// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore,doc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: "palugada-6d502",
  storageBucket: "palugada-6d502.appspot.com",
  messagingSenderId: process.env.MESSAGINGID,
  appId: process.env.APPID,
};

// Create a reference with an initial file path and name

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
export const getProducts = async () => {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach( async(product) => {
     await getDownloadURL(ref(storage, product.data().image)).then((image) => {
      data.push({
        id:product.id,
        desc: product.data().desc,
        name: product.data().name,
        tag: product.data().tag,
        image: image,
      });
    });
  });
  return data;
};

export const getProduct=async(id)=>{
  console.log(id)
  const docRef=doc(db,'products',id);
  const docSnap=await getDoc(docRef);

  if(docSnap.exists()){
    console.log(docSnap)
    return docSnap.data();
  }else{
    console.log('Document not found')
  }
}
