import React from 'react';
import { Button } from 'antd';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <Button type="primary" className="login-btn">Login</Button>
      <Button className="profile-btn">Profile</Button>
    </div>
  );
};

export default Header;
