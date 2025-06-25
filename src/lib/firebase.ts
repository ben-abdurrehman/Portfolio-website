// /lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCM17i0heMOhqb-tj6w0Mnejs7Z1CwmZcg',
  authDomain: 'ben-portfolio-website.firebaseapp.com',
  projectId: 'ben-portfolio-website',
  storageBucket: 'ben-portfolio-website.firebasestorage.app',
  messagingSenderId: '868517422068',
  appId: '1:868517422068:web:93b4e12964cd67486f4fa1',
  measurementId: "G-JY9MC20K4N",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
