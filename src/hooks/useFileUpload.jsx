/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Swal from 'sweetalert2';
import { storage } from '../services/firebase.config';

const useFirebaseFileUpload = () => {
  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [percentage, setPercentage] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type.includes('image')) {
      setFile(selected);
    } else {
      setFile(null);
    }
  };

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress === 100) {
            Swal.fire({
              icon: 'success',
              title: 'Upload complete',
              text: 'Your image has been uploaded',
            });
          }

          setPercentage(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            setPhotoURL(downloadURL);
          });
        }
      );
    };
    // eslint-disable-next-line no-unused-expressions
    file && uploadFile();
  }, [file]);

  return {
    file,
    handleFileChange,
    photoURL,
    percentage,
  };
};

export default useFirebaseFileUpload;
