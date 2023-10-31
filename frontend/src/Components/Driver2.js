import React from 'react';
import './Driver1.css';

const DriverDetail = ({ name, age, licenseNumber, vehicleType,id,route, vehiclenumber, imageUrl , experiance,emergencyContact}) => (
  <div className="driver-card">
    <img src={imageUrl="https://i.pinimg.com/originals/e1/d4/a2/e1d4a22996ce2ca890b5ddc0dc665893.jpg"} alt={name} className="driver-image" />
    <div className="driver-info">
      <h2>{name}</h2>
      <p>Name: Jane Smith {name}</p>
      <p>ID: 2 {id}</p>
      <p>Age: 32 {age}</p>
      <p>Experiance: 10years {experiance}</p>
      <p>License Number: 893{licenseNumber}</p>
      <p>Vehicle Type: Bus{vehicleType}</p>
      <p>Route: Route 202{route}</p>
      <p>Vehicle Number: #B456{vehiclenumber}</p>
      <p>Emergency Contact: 9456823865 {emergencyContact}</p>
    </div>
  </div>
);

export default DriverDetail;
