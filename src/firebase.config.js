// Imported the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from 'firebase/auth';

// Our web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAmwckD_1j2hUhWkVSvlD2VgofbM3IYKVk', // Your API Key
  authDomain: 'codybrains-8bac4.firebaseapp.com', // Your Auth Domain
  projectId: 'codybrains-8bac4', // Your Project ID
  storageBucket: 'codybrains-8bac4.appspot.com', // Your Storage Bucket
  messagingSenderId: '787254578201', // Your Messaging Sender ID
  appId: '1:787254578201:web:84965537d78ead0ccf6e88', // Your App ID
  measurementId: 'G-KRFH8X6LVE', // Your Measurement ID
}
// Initialize Firebase and export the functions
export const app = initializeApp(firebaseConfig); // Initialize the app
export const db = getFirestore(app); // Initialize the firestore service
export const auth = getAuth(); // Initialize the auth service

// Export the providers
export const facebookProvider = new FacebookAuthProvider();
export const googleProvider = new GoogleAuthProvider();
