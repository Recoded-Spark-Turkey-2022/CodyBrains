import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase.config';
import { selectUser, setUser } from '../features/userSlice';
import editProfileValidation from '../utils/validation';

function useEditProfile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    validationSchema: editProfileValidation,
  });

  const onSubmit = async (data, photoURL, setIsEditing) => {
    const { name, surname, biography, location } = data;
    const displayName = `${name} ${surname}`;
    const userRef = doc(db, 'users', user.uid);

    await updateDoc(userRef, {
      displayName,
      biography,
      location,
      photoURL,
    });
    dispatch(setUser({ ...user, displayName, biography, location, photoURL }));
    Swal.fire({
      icon: 'success',
      title: 'Profile updated successfully',
      showConfirmButton: false,
      timer: 1500,
    });
    setIsEditing(false);
    reset();
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    reset,
  };
}

export default useEditProfile;
