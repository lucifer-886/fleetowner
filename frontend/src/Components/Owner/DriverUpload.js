import React, { useState } from 'react';
import axios from 'axios';

const UploadPage = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    image: '',
    licenseNumber: '',
    contactNumber: '',
    vehicle: '',
    status: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make a POST request to your server's /api/books endpoint
    // Change this line to use the correct endpoint /api/drivers
await axios.post('http://localhost:3000/api/drivers', formData);

  
      // Clear the form after successful addition
      setFormData({
        id:'',
        name: '',
        image: '',
        licenseNumber: '',
        contactNumber: '',
        vehicle: '',
        status: '',
        rating: '',
      });
  
      console.log('New driver added successfully');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="container-upload">
      <h2>Add Driver</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
  <label htmlFor="licenseNumber" className="form-label">
    License Number
  </label>
  <input
    type="number"
    className="form-control"
    id="licenseNumber"
    name="licenseNumber"
    value={formData.licenseNumber}
    onChange={handleChange}
  />
</div>
<div className="mb-3">
  <label htmlFor="contactNumber" className="form-label">
    Contact Number
  </label>
  <input
    className="form-control"
    id="contactNumber"
    name="contactNumber"
    value={formData.contactNumber}
    onChange={handleChange}
  ></input>
</div>
<div className="mb-3">
  <label htmlFor="rating" className="form-label">
    Rating
  </label>
  <input
    type="number"
    className="form-control"
    id="rating"
    name="rating"
    value={formData.rating}
    onChange={handleChange}
  />
</div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="vehicle" className="form-label">
            vehicle
          </label>
          <input
            type="text"
            className="form-control"
            id="vehicle"
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            status
          </label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadPage;