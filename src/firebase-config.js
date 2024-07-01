import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAZTTfhGzS4reT__uKulu8wPGqSqRGG10w',
  authDomain: 'blogapp-51476.firebaseapp.com',
  projectId: 'blogapp-51476',
  storageBucket: 'blogapp-51476.appspot.com',
  messagingSenderId: '291395596004',
  appId: '1:291395596004:web:b7eb4c6a222ce25e4046f1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
