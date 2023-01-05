import { useState } from 'react';
import { useSelector } from 'react-redux';
import avatar from '../../assets/avatar.png';
import edit from '../../assets/edit.png';
import BlogPosts from './BlogPosts';
import EditProfile from './EditProfile';

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);

  const profilePic = user.photoURL || avatar;

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
            <img src={profilePic} alt="" className="w-40 h-40 rounded-full " />
            <button
              type="button"
              className="absolute bottom-0 right-0 bg-refubookBlue p-2 rounded-full cursor-pointer"
              onClick={handleEdit}
            >
              <img src={edit} alt="" className="w-6 h-6" />
            </button>
            <span className="text-refubookGray font-medium text-lg mt-2">
              {user.displayName}
            </span>
          </div>
          <BlogPosts />
        </>
      )}
    </div>
  );
};

export default UserProfile;
