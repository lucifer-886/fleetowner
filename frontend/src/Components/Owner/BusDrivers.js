import React, { useState, useEffect } from 'react';
import './BusDriver.css';
import DriverUpload from './DriverUpload';
export default function BusDrivers(props) {
  const [busDrivers, setBusDrivers] = useState([]);

  const fetchDriverData = () => {
    // Replace 'http://your-backend-api-url/drivers' with the actual API endpoint URL.
    fetch('http://localhost:5000/api/drivers')
      .then((response) => response.json())
      .then((data) => setBusDrivers(data))
      .catch((error) => console.error('Error:', error));
  };

  useEffect(() => {
    fetchDriverData();
  }, []);

  const cardTextStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Times, serif',
  };

  const cardStyle = {
    backgroundColor: 'white',
    transition: 'transform 0.2s',
    width: '100%',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'Times, serif',
  };

  return (
    <>
      <div className="bus-schedule-bg">
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="row">
            <div className="col-md-3">
              {/* You can include a sidebar or navigation here */}
            </div>
            <div className="col-md-9">
              <h2 className="schedule-header mt-5" style={headerStyle}>
                Driver List
              </h2>

              <div className="row">
                {busDrivers.map((driver) => (
                  <div key={driver.id} className="col-md-4">
                    <div className="carde h-100 driver-card" style={cardStyle}>
                      <img src={driver.image} alt={driver.name} className="carde-img-top driver-image" />
                      <hr className="my-3 hr" /> {/* Add a blue line after the image */}
                      <div className="carde-body">
                        <h5 className="carde-title text-center driver-name" style={cardTextStyle}>
                          {driver.name}
                        </h5>
                        <div className="text-center">
                          <p className="carde-text driver-rating" style={cardTextStyle}>
                            <strong>Rating:</strong> {driver.rating}
                          </p>
                        </div>
                        <p className="carde-text" style={cardTextStyle}>
                          <strong>License Number:</strong> {driver.licenseNumber}
                          <br />
                          <strong>Contact Number:</strong> {driver.contactNumber}
                          <br />
                          <strong>Vehicle:</strong> {driver.vehicle}
                          <br />
                          <strong>Status:</strong> {driver.status}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div><DriverUpload/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
