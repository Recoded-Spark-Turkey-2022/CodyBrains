import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProfileNavbar from '../ProfileNavbar/ProfileNavbar';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return location.pathname === '/profile' || location.pathname === '/write' ? (
    <ProfileNavbar setIsOpen={setIsOpen} isOpen={isOpen} />
  ) : (
    <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
  );
};

export default Header;
