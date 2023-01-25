/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  Timestamp,
  doc,
  addDoc,
  updateDoc,
  collection,
  arrayUnion,
} from 'firebase/firestore';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../services/firebase.config';
import { selectUser } from '../features/userSlice';

export const useCreateBlogPost = () => {
  const [file, setFile] = useState(null);
  const [headerPhoto, setHeaderPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const id = uuidv4();

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type.includes('image')) {
      setFile(selected);
    } else {
      setFile(null);
    }
  };

  const uploadImage = async () => {
    const storageRef = ref(getStorage(), `posts/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setHeaderPhoto(downloadURL);
        });
        Swal.fire({
          title: 'Your header image uploaded',
          text: 'Check out the preview',
          allowOutsideClick: false,
        });
      }
    );
  };

  useEffect(() => {
    if (file) {
      uploadImage();
    }
  }, [file]);

  const createBlogPost = async (content) => {
    setLoading(true);
    if (!title || !headerPhoto || !content) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all the fields',
      });
      setLoading(false);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'blogs'), {
        id,
        title,
        date: Timestamp.fromDate(new Date()),
        content,
        headerPhoto,
        author: {
          name: user.displayName,
          id: user.uid,
          photo: user.photoURL,
        },
      });
      await updateDoc(doc(db, 'users', user.uid), {
        posts: arrayUnion({
          id: docRef.id,
          title,
          date: Timestamp.fromDate(new Date()),
          content,
          headerPhoto,
        }),
      });

      await Swal.fire({
        title: 'Your post created',
        text: 'Redirecting to your profile',
        timer: 2000,
        allowOutsideClick: false,
        timerProgressBar: true,
      });

      setLoading(false);
      navigate('/profile');
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
    }
  };

  return {
    title,
    setTitle,
    createBlogPost,
    loading,
    handleFileChange,
    uploadImage,
    file,
    headerPhoto,
  };
};
