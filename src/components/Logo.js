import React from 'react';
import logo from '../assets/logo.png';
import logoGray from '../assets/logoGray.png';
import logoColored from '../assets/logoColored.png';

const Logo = props => {
  const variant = () => {
    if (props.colored) {
      return logoColored;
    }
    if (props.gray) {
      return logoGray;
    }
    return logo;
  };

  return <img src={ variant() } alt='logo' />;
};

export default Logo