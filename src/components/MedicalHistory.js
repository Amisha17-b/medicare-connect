// src/components/MedicalHistory.js
import React from 'react';

const MedicalHistory = () => {
  const history = [
    { date: '2024-01-01', details: 'Routine Checkup' },
    { date: '2024-03-15', details: 'Blood Test' },
  ];

  return (
    <div>
      <h2>Medical History</h2>
      <ul>
        {history.map((record, index) => (
          <li key={index}>
            {record.date}: {record.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalHistory;
