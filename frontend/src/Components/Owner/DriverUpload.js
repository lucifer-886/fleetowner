import React, { useState } from 'react';

function DriverUpload() {
  const [driverData, setDriverData] = useState({
    name: '',
    licenseNumber: '',
    contactNumber: '',
    vehicle: '',
    status: '',
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDriverData({
      ...driverData,
      [name]: value,
    });
  };

  const handleUpload = () => {
    fetch('/api/upload-driver', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(driverData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Driver uploaded:', data);
        // Reset the form or provide feedback to the user
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Upload Driver</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={driverData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="licenseNumber"
          placeholder="License Number"
          value={driverData.licenseNumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={driverData.contactNumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="vehicle"
          placeholder="Vehicle"
          value={driverData.vehicle}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={driverData.status}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={driverData.rating}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleUpload}>
          Upload Driver
        </button>
      </form>
    </div>
  );
}

export default DriverUpload;
