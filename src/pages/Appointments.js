// src/pages/Appointments.js
import React from 'react';
import CustomNavbar from '../components/Navbar';
import AppointmentScheduler from '../components/AppointmentScheduler';

const Appointments = () => {
  return (
    <div>
      <CustomNavbar />
      <AppointmentScheduler />
    </div>
  );
};

export default Appointments;
