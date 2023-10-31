import React, { useState } from 'react';
import axios from 'axios';

const UploadToday = () => {
  const [formData, setFormData] = useState({
    task: '',
    time: '',
    image: '',
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
      // Make a POST request to your server's /api/today endpoint
      await axios.post('http://localhost:3000/api/today', formData);

      // Clear the form after successful addition
      setFormData({
        task: '',
        time: '',
        image: '',
      });

      console.log("Today's schedule added successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-upload">
      <h2>Add Today's Schedule</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            id="task"
            name="task"
            value={formData.task}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            type="text"
            className="form-control"
            id="time"
            name="time"
            value={formData.time}
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadToday;
