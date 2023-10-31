import React from 'react';
import './Driver1.css';

const DriverDetails = ({ name, age, licenseNumber, vehicleType,id,route, vehiclenumber, imageUrl,experiance ,emergencyContact}) => (
  <div className="driver-card">
    <img src={imageUrl="https://www.myherodesign.com/wp-content/uploads/2016/06/Asian_Male_Suspicious.gif"} alt={name} className="driver-image" />
    <div className="driver-info">
      <h2>{name}</h2>
      <p>Name: John Doe {name}</p>
      <p>ID: 1 {id}</p>
      <p>Age: 29{age}</p>
      <p>Experiance: 4years {experiance}</p>
      <p>License Number: 479{licenseNumber}</p>
      <p>Vehicle Type: Bus{vehicleType}</p>
      <p>Route: Route 101{route}</p>
      <p>Vehicle Number: #A123{vehiclenumber}</p>
      <p>Emergency Contact: 7956412843 {emergencyContact}</p>
    </div>
  </div>
);

export default DriverDetails;
