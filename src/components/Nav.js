import React from 'react';
import { useAppState } from '../state/PageWrapper';
import { useScrollFreeze } from '../hooks/useScrollFreeze';

const Nav = () => {
  const { isMenuOpen, toggleMenu } = useAppState();
  useScrollFreeze();

  if (!isMenuOpen) return null;
  return (
    <div>
      Nav
      <button onClick={toggleMenu}>Close</button>
    </div>
  );
};

export default Nav;
