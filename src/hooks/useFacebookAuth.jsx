import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { signInWithPopup } from 'firebase/auth';
import { auth, db, facebookProvider } from '../services/firebase.config';
import { setUser } from '../features/userSlice';

function useFacebookAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginWithFacebook = async () => {
    try {
      const { user } = await signInWithPopup(auth, facebookProvider);
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        dispatch(setUser(docSnap.data()));
        navigate('/');
        window.location.reload();
      } else {
        await setDoc(doc(db, 'users', user.uid), {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL,
        });
        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
          })
        );
        navigate('/');
        window.location.reload();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
    }
  };

  return { handleLoginWithFacebook };
}

export default useFacebookAuth;
