// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'; // Import ref from Firebase Storage
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwohstluG3CaEBkgMPO-SVJY5bHlenjXg",
  authDomain: "olx-react-clone-c26fe.firebaseapp.com",
  projectId: "olx-react-clone-c26fe",
  storageBucket: "olx-react-clone-c26fe.appspot.com",
  messagingSenderId: "354992977502",
  appId: "1:354992977502:web:df074429a17994a35aa6cf"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const storage = getStorage(app);

export default app;
export { auth, db, storage };