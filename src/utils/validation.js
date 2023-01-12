import * as Yup from 'yup';

const editProfileValidation = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Surname is required'),
  bio: Yup.string().max(200, 'Bio must be 200 characters or less'),
  location: Yup.string(),
});

export default editProfileValidation;
