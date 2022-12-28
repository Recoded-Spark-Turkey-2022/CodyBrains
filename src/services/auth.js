import { onAuthStateChanged, signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { auth } from './firebase.config';

export const logoutUser = async () => {
  try {
    // Sign out the user
    await signOut(auth);
    // Return a success message
    return Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'You have been logged out',
    });
  } catch (error) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
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
