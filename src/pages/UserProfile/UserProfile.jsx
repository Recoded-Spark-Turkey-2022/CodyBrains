import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import avatar from '../../assets/avatar.png';
import edit from '../../assets/edit.png';
import { selectUser } from '../../features/userSlice';
import { EditProfile, UserBlogPosts } from '../../components';

const UserProfile = () => {
  const user = useSelector(selectUser);

  if (!user) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You need to be logged in to view this page',
    });
    return <Navigate to="/" />;
  }

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className=" container mx-auto flex flex-col items-center  gap-4 min-h-screen ">
      {isEditing ? (
        <EditProfile setIsEditing={setIsEditing} />
      ) : (
        <>
          <div className="flex flex-col items-center justify-center relative">
            <img
              src={user ? user.photoURL : avatar}
              onError={(e) => {
                e.target.onerror = avatar;
              }}
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
          <UserBlogPosts user={user} />
        </>
      )}
    </div>
  );
};

export default UserProfile;
