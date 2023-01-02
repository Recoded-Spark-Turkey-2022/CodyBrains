import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth, db, facebookProvider } from '../services/firebase.config';
import { setUser } from '../features/userSlice';

function useFacebookAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          dispatch(
            setUser({
              uid: user.uid,
              email: user.email,
              name: user.displayName,
              photoURL: user.photoURL,
              biography: '',
              location: '',
            })
          );
        } else {
          await setDoc(userRef, {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            photoURL: user.photoURL,
            biography: '',
            location: '',
          });
          dispatch(
            setUser({
              uid: user.uid,
              email: user.email,
              name: user.displayName,
              photoURL: user.photoURL,
              biography: '',
              location: '',
            })
          );
        }
      }
    });
  }, [dispatch]);

  const handleLoginWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const { displayName, email, photoURL, uid, biography, location } =
        result.user;
      dispatch(
        setUser({
          uid,
          email,
          displayName,
          photoURL,
          biography,
          location,
        })
      );

      Swal.fire('Success', 'Login Success', 'success');
      navigate('/');
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  };

  return { handleLoginWithFacebook };
}

export default useFacebookAuth;
