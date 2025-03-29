import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBmJOunINFKIK8HYtHC9MfDHQjAK-ug53o",
  authDomain: "ecommerce-bharatgo.firebaseapp.com",
  projectId: "ecommerce-bharatgo",
  storageBucket: "ecommerce-bharatgo.appspot.com",
  messagingSenderId: "699898523172",
  appId: "1:699898523172:web:9090909090909090909090"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 