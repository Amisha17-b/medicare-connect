// src/components/AppointmentScheduler.js
import React, { useState } from 'react';

const AppointmentScheduler = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSchedule = () => {
    alert(`Appointment scheduled for ${date} at ${time}`);
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleSchedule}>Schedule</button>
    </div>
  );
};

export default AppointmentScheduler;
