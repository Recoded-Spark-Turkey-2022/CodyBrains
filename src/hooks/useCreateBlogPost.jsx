import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FieldValue, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';

function useCreateBlogPost() {
  const [isCreating, setIsCreating] = useState(false);
  const user = useSelector((state) => state.user);

  const createBlogPost = async (title, content) => {
    setIsCreating(true);
    try {
      await collection('users')
        .doc(user.uid)
        .update({
          blogPosts: FieldValue.arrayUnion({ title, content }),
        });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
    }
    setIsCreating(false);
  };

  return { isCreating, createBlogPost };
}

export default useCreateBlogPost;
