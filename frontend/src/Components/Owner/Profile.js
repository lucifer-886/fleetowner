import React from 'react';
import Navbar from '../Navbar';
import Driverprofile from './Driverprofile';
export default function Profile() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1 bg-dark text-light p-0">
          <Navbar />
        </div>
        <div className="col-md-9 p-3">
          <Driverprofile/>
        </div>
      </div>
    </div>
  );
}