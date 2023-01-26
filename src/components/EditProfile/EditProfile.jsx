import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectUser } from '../../features/userSlice';
import useEditProfile from '../../hooks/useUpdateProfile';
import useAvatarUpload from '../../hooks/useAvatarUpload';
import Loading from '../Icons/Loading';
import camera from '../../assets/camera.png';

const EditProfile = ({ setIsEditing }) => {

  const { t } = useTranslation();

  const user = useSelector(selectUser);

  const { file, handleFileChange, photoURL, loading, percentage } =
    useAvatarUpload();

  const { register, handleSubmit, onSubmit, errors, reset } = useEditProfile();

  const handleCancel = () => {
    setIsEditing(false);
    reset();
  };

  const roundedPercentage = Math.round(percentage);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <form
        onSubmit={handleSubmit((data) =>
          onSubmit(data, photoURL, setIsEditing)
        )}
        className="flex flex-col items-center justify-center gap-4"
      >
        <div className="flex flex-col items-center justify-center relative">
          {loading && file ? (
            <Loading />
          ) : (
            <img
              src={photoURL || user.photoURL}
              alt="avatar"
              className="w-40 h-40 rounded-full"
            />
          )}

          <label
            htmlFor="photoURL"
            className="absolute bottom-0 right-0 bg-refubookBlue p-2 rounded-full cursor-pointer"
          >
            <img src={camera} alt="" className="w-6 h-6" />
            <input
              type="file"
              id="photoURL"
              name="photoURL"
              className="hidden"
              {...register('photoURL', {
                value: photoURL,
              })}
              onChange={handleFileChange}
            />
          </label>

          {errors.photoURL && (
            <span className="text-red-500 text-sm">
              {errors.photoURL?.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          {percentage > 0 && (
            <div className="w-full flex mt-4 h-2 bg-gray-300 rounded-full max-w-xs">
              <div
                className="h-full bg-refubookBlue rounded-full"
                style={{ width: `${percentage}%` }}
              />
              <p className="text-center">{roundedPercentage}%</p>
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-2 md:gap-10 w-full">
          <label
            htmlFor="name"
            className="text-refubookBlue w-full font-medium text-lg"
          >
            {t('Name')}:
            <input
              type="text"
              id="name"
              className="w-full border border-refubookGray p-2 rounded-md text-refubookBlack"
              {...register('name')}
            />
          </label>
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
          <label
            htmlFor="surname"
            className="text-refubookBlue w-full font-medium text-lg"
          >
            {t('Surname')}:
            <input
              type="text"
              id="surname"
              className="w-full border border-refubookGray p-2 rounded-md text-refubookBlack"
              {...register('surname')}
            />
          </label>
          {errors.surname && (
            <span className="text-red-500 text-sm">
              {errors.surname.message}
            </span>
          )}
        </div>
        <div className="flex  items-center justify-center gap-2 w-full">
          <label
            htmlFor="biography"
            className="text-refubookBlue w-full font-medium text-lg"
          >
            {t('Biography')}:
            <textarea
              id="biography"
              name="biography"
              className="w-full border border-refubookGray p-1 rounded-md text-refubookBlack"
              {...register('biography')}
            />
          </label>
          {errors.biography && (
            <span className="text-red-500 text-sm">
              {errors.biography.message}
            </span>
          )}
        </div>
        <div className="flex  items-center justify-center gap-2 w-full">
          <label
            htmlFor="location"
            className="text-refubookBlue w-full font-medium text-lg"
          >
            {t('Location')}:
            <input
              type="text"
              id="location"
              name="location"
              className="w-full border border-refubookGray p-2 rounded-md text-refubookBlack"
              {...register('location')}
            />
          </label>
          {errors.location && (
            <span className="text-red-500 text-sm">
              {errors.location.message}
            </span>
          )}
        </div>
        <div className="flex  items-center justify-evenly gap-2 w-full max-w-xs">
          <button
            type="submit"
            className=" group relative flex w-28 justify-center rounded-full border border-transparent bg-refubookBlue py-2 px-4  text-sm font-medium mt-8 text-refubookWhite hover:bg-refubookLightBlue focus:outline-none focus:ring-2 focus:ring-[#331416] focus:ring-offset-2"
          >
            {t('Save')}
          </button>
          <button
            type="button"
            className="group relative flex w-28 justify-center rounded-full border border-transparent bg-refubookWhite py-2 px-4 text-sm font-medium mt-8 text-refubookBlack hover:bg-refubookLightBlue focus:outline-none focus:ring-2 focus:ring-[#331416] focus:ring-offset-2"
            onClick={handleCancel}
          >
            {t('Cancel')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
