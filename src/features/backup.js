/* import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {
  auth,
  db,
  storage,
  facebookProvider,
  googleProvider,
} from '../utils/firebase.config';

// Create a thunk to register a user
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (payload, { rejectWithValue }) => {
    try {
      // Create a user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );

      // Update the user's profile
      await updateProfile(userCredential.user, {
        displayName: payload.displayName,
      });

      // Create a reference to the user's document
      const userDocRef = doc(db, 'users', payload.uid);

      // Create the user's document
      await setDoc(userDocRef, {
        uid: payload.uid,
        displayName: payload.displayName,
        email: payload.email,
        photoURL: payload.photoURL,
      });

      // Return the user's ID
      return userCredential.user.uid;
    } catch (error) {
      // Handle errors
      return rejectWithValue(error.message);
    }
  }
);

// Create a thunk to login a user
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (payload, { rejectWithValue }) => {
    try {
      // Sign in the user
      const userCredential = await signInWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );

      // Return the user's ID
      return userCredential.user.uid;
    } catch (error) {
      // Handle errors
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'user/signout',
  async (payload, { rejectWithValue }) => {
    try {
      return signOut(auth);
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  }
);


// Create a thunk to upload a user's profile picture
export const uploadProfilePicture = createAsyncThunk(
  'user/uploadProfilePicture',
  async (payload, { rejectWithValue }) => {
    try {
      // Create a reference to the user's document
      const userDocRef = doc(db, 'users', payload.uid);

      // Create a reference to the user's profile picture
      const profilePictureRef = ref(
        storage,
        `users/${payload.uid}/profilePicture`
      );

      // Upload the profile picture
      const uploadTask = await uploadBytesResumable(
        profilePictureRef,
        payload.photoURL
      );

      // Get the profile picture's download URL
      const downloadURL = await getDownloadURL(uploadTask.ref);

      // Update the user's profile picture
      await updateProfile(payload.user, {
        photoURL: downloadURL,
      });

      // Update the user's profile picture in the database
      await setDoc(userDocRef, { photoURL: downloadURL }, { merge: true });

      // Return the user's profile picture
      return downloadURL;
    } catch (error) {
      // Handle errors
      return rejectWithValue(error.message);
    }
  }
);

export const signInWithGoogle = createAsyncThunk(
  'user/signInWithGoogle',
  async (
    payload, {
      rejectWithValue
    }
  ) => {
    try {
      const {
        user
      } = await signInWithRedirect(auth, googleProvider);




      const docRef = doc(db, 'Users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
         displayName: user.displayName,

          email: user.email
        });
      }
      payload();
      return JSON.stringify(user);
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  }
)


export const signInWithFacebook = createAsyncThunk(
  'user/signInWithFacebook',
  async (payload, {
    rejectWithValue
  }) => {
    try {
      const {
        user
      } = await signInWithRedirect(auth, facebookProvider);



      const docRef = doc(db, 'Users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
         displayName: user.displayName,

          email: user.email
        });
      }
      payload();
      return JSON.stringify(user);
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  }
)


// Create a slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    // Create a reducer to logout a user
    logoutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    // Create a reducer to register a user
    builder.addCase(registerUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.status = 'idle';
      state.user = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    });

    // Create a reducer to login a user
    builder.addCase(loginUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = 'idle';
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    });

    // Create a reducer to upload a user's profile picture
    builder.addCase(uploadProfilePicture.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(uploadProfilePicture.fulfilled, (state, action) => {
      state.status = 'idle';
      state.user.photoURL = action.payload;
    });
    builder.addCase(uploadProfilePicture.rejected, (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    });

    // Create a reducer to login a user with Facebook
    builder.addCase(signInWithFacebook.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(signInWithFacebook.fulfilled, (state, action) => {
      state.status = 'idle';
      state.user = action.payload;
    });
    builder.addCase(signInWithFacebook.rejected, (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    });

    // Create a reducer to login a user with Google
    builder.addCase(signInWithGoogle.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
      state.status = 'idle';
      state.user = action.payload;
    });
    builder.addCase(signInWithGoogle.rejected, (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    });

    // Create a reducer to logout a user
    builder.addCase(logoutUser.pending, (state) => {
      state.status = 'loading';
    }
    );
    builder.addCase(logoutUser.fulfilled, (state) => {
      
  },
});

// Export the slice's actions and reducer
export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;


 try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(userCredential.data, {
        displayName: data.displayName,
        photoURL: data.picURL,
      });

      const userData = {
        displayName: data.displayName,
        photoURL: data.picURL,
        email: data.email,
        createdAt: serverTimestamp(),
      };

      const userCollectionRef = doc(db, 'users', userCredential.user.uid);
      await setDoc(userCollectionRef, userData);

      dispatch(
        login({
          displayName: userCredential.user.displayName,
          email: userCredential.user.email,
          photoURL: userCredential.user.photoURL,
          uid: userCredential.user.uid,
        })
      );

      Swal.fire({
        icon: 'success',
        title: 'Welcome to Refubook',
        text: 'You have successfully registered',
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
    }
 */
