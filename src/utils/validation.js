import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  displayName: Yup.string().required('Username is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  password2: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  photoURL: Yup.mixed().required('Avatar is required'),
});

export default validationSchema;
