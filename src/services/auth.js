/* eslint-disable no-console */
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from './firebase.config';

export const registerUser = async (data) => {
  try {
    // Create a new user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    // Update the user's profile
    await updateProfile(userCredential.user, {
      displayName: data.displayName,
      photoURL: data.photoURL,
    });

    // Save the user's data to Firestore
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      email: data.email,
      displayName: data.displayName,
      photoURL: data.photoURL,
    });

    // Return the user's ID
    return userCredential.user.uid;
  } catch (error) {
    // Handle errors
    //
    return error;
  }
};

export const loginUser = async (user) => {
  try {
    // Sign in the user
    const userCredential = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    // Return the user's ID
    return userCredential.user.uid;
  } catch (error) {
    // Handle errors
    //
    return error;
  }
};

export const logoutUser = async () => {
  try {
    // Sign out the user
    await signOut(auth);
    // Return a success message
    return 'You have been logged out.';
  } catch (error) {
    // Handle errors
    //
    return error;
  }
};

export const onAuthStateChange = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        resolve(user);
      },
      reject
    );
  });
};
