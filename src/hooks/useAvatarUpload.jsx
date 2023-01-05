/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../services/firebase.config';
import { selectUser } from '../features/userSlice';

const useAvatarUpload = () => {
  const user = useSelector(selectUser);
  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type.includes('image')) {
      setFile(selected);
    } else {
      setFile(null);
    }
  };

  useEffect(() => {
    if (file) {
      const storageRef = ref(storage, `avatars/${user.uid}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPercentage(progress);
          setLoading(true);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setPhotoURL(downloadURL);
            setLoading(false);
          });
        }
      );
    }
  }, [file, user.uid]);

  return {
    file,
    handleFileChange,
    photoURL,
    percentage,
    loading,
  };
};

export default useAvatarUpload;
