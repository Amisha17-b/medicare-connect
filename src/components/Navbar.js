// src/components/Navbar.js
import React from 'react';
import { Navbar } from '@shadcn/ui';

const CustomNavbar = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <a href="/">Medicare</a>
      </Navbar.Brand>
      <Navbar.Nav>
        <Navbar.Item>
          <a href="/appointments">Appointments</a>
        </Navbar.Item>
        <Navbar.Item>
          <a href="/history">History</a>
        </Navbar.Item>
      </Navbar.Nav>
    </Navbar>
  );
};

export default CustomNavbar;
