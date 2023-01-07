import { useState } from 'react';
import { useSelector } from 'react-redux';
import avatar from '../../assets/avatar.png';
import edit from '../../assets/edit.png';
import BlogPosts from './BlogPosts';
import EditProfile from './EditProfile';
import { selectUser } from '../../features/userSlice';

const UserProfile = () => {
  const user = useSelector(selectUser);

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {isEditing ? (
        <EditProfile setIsEditing={setIsEditing} />
      ) : (
        <>
          <div className="flex flex-col items-center justify-center relative">
            <img
              src={user.photoURL || avatar}
              alt=""
              className="w-40 h-40 rounded-full "
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 bg-refubookBlue p-2 rounded-full cursor-pointer"
              onClick={handleEdit}
            >
              <img src={edit} alt="" className="w-6 h-6" />
            </button>
          </div>
          <span className="text-refubookBlack font-medium text-lg mt-4 ">
            {user.displayName}
          </span>
          <BlogPosts />
        </>
      )}
    </div>
  );
};

export default UserProfile;
