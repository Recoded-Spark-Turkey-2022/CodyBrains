import { useState } from 'react';
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
import { db } from '../services/firebase.config';
import { selectUser } from '../features/userSlice';

export const useCreateBlogPost = () => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const createBlogPost = async (content) => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        title,
        content,
        date: Timestamp.fromDate(new Date()),
        author: {
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        },
      });
      await updateDoc(doc(db, 'users', user.uid), {
        posts: arrayUnion({
          id: docRef.id,
          title,
          date: Timestamp.fromDate(new Date()),
          content,
        }),
      });
      setLoading(false);
      navigate(`/post/${docRef.id}`);
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
    }
  };

  return { title, setTitle, createBlogPost, loading };
};
