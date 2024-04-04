import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Adicione esta importação

const firebaseConfig = {
  apiKey: "AIzaSyAxdPHSnBVV5idYyM7bQ94kfi7SVufqVtc",
  authDomain: "smart-43b09.firebaseapp.com",
  projectId: "smart-43b09",
  storageBucket: "smart-43b09.appspot.com",
  messagingSenderId: "792178265446",
  appId: "1:792178265446:web:f365a5ef136f2eb9254ca7"
};

const app = initializeApp(firebaseConfig);


const firestore = getFirestore(app); 

export const auth = getAuth(app);
export { firestore }; 
