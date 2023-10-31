import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import axios from 'axios';
import './Home.css';
import './Driver.css';
import Carousel from './Carousel'; // Import the Carousel component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
  const [driverData, setDriverData] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const [vehicleData, setVehicleData] = useState({
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3JAFw-Ls3XcAd1QjDGt_XTCWoLrbZxrOKZEOKSElhNVB31flW7Y5pRRXqXGQbOaUHZ4&usqp=CAU',
    owned: 30,
    stops: 5,
    distance: 100,
    insuranceRenewalDate: '2023-12-31',
    previousStop: 'Previous Stop',
    nextStop: 'Next Stop',
    liveLocation: 'Coordinates',
  });

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  useEffect(() => {
    // Fetch driver details based on the authenticated user's email
    if (authUser) {
      axios
        .get(`http://localhost:3000/user/${authUser.email}`)
        .then((response) => {
          setDriverData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching driver data:', error);
        });
    }
  }, [authUser]);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-fluid home-container">
      <div className="row">
        <div className="col-md-2">
          {/* Navbar content */}
        </div>

        <div className="col-md-10">
          <Carousel></Carousel>
          {/* Four boxes for Driver Details, Vehicle Details, Routes, and Status */}
          <div className="dashboard">
            <div className="panel">
              <h2>Vehicle Details</h2>
              <div className="vehicle-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p>Number of Vehicles owned: {vehicleData.owned}</p>
                  <p>Stops: {vehicleData.stops}</p>
                  <p>Distance: {vehicleData.distance}</p>
                  <p>Insurance Renewal Date: {vehicleData.insuranceRenewalDate}</p>
                  <p>Live Location: {vehicleData.liveLocation}</p>
                  
                 {/*<p>Next Stop: {vehicleData.nextStop}</p>
                  <p>Previous Stop: {vehicleData.previousStop}</p>*/}
                </div>
                <div className="vehicle-image">
                  <img src={vehicleData.imageUrl} alt="Vehicle" />
                </div>
              </div>
            </div>

            <div className="panel">
           
      <h2>Drivers Details</h2>
      {driverData ? (
        <div>
          <p>Name: {driverData.name}</p>
          <p>Email: {driverData.email}</p>
          <p>Age: {driverData.age}</p>
          <p>Experience: {driverData.experience}</p>
          <p>License Number: {driverData.licenseNumber}</p>
        </div>
      ) : (
        <div>
          
          <Link to="/Driver1">Driver 1</Link>
          <br></br>
          <Link to="/Driver2">Driver 2</Link> {/* Add links for Driver 2, 3, etc. */}
          <br></br>
          <Link to="/Driver3">Driver 3</Link>
          <br></br>
          <Link to="/Driver4">Driver 4</Link>
          <br></br>
          <Link to="/Driver5">Driver 5</Link>
          <br></br>
          <Link to="/Driver6">Driver 6</Link> {/* Add links for Driver 2, 3, etc. */}
          <br></br>
          <Link to="/Driver7">Driver 7</Link>
          <br></br>
          <Link to="/Driver8">Driver 8</Link>
          <br></br>
          <Link to="/Driver9">Driver 9</Link>
        </div>
      )}
    </div>

    


 <div className="panel">
  <h2>Routes</h2>
  <div className="image-row">
    <div className="image-container">
      <img
        src="https://www.caronrentals.com/images/city/mangalore-to-puttur-round-trip_123653.jpg"
        alt="Routes Map"
        style={{ maxWidth: 'auto', height: '150px' }}
      />
      <figcaption>Driver 1</figcaption>
    </div>
    <div className="image-container">
      <img
        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201806/salem_to_chennai_1.png?v2J9zzUk.iY1.InZ.IwQ_jkAz9mCC5dw"
        alt="Routes Map"
        style={{ maxWidth: 'auto', height: '150px' }}
      />
      <figcaption>Driver 2</figcaption>
    </div>
  </div>
  <div className="image-row">
    <div className="image-container">
      <img
        src="https://amazingindiablog.in/wp-content/uploads/2018/04/Best-Road-Route-from-Bangalore-to-Mangalore-via-Chickmagaluru.png"
        alt="Routes Map"
        style={{ maxWidth: 'auto', height: '150px' }}
      />
      <figcaption>Driver 3</figcaption>
    </div>
    <div className="image-container">
      <img
        src="https://www.team-bhp.com/forum/attachments/route-travel-queries/1236892d1399183749-art-travelling-between-bangalore-mangalore-udupi-blr-ctga-smg-trtli-udi.jpg"
        alt="Routes Map"
        style={{ maxWidth: 'auto', height: '150px' }}
      />
      <figcaption>Driver 4</figcaption>
        {/*<Link to="/Driverlist">Driver 4</Link>*/}

    </div>
  </div>
</div>




            <div className="panel">
              <h2>Monthly Performance</h2>
              <ul className="engine-status-list">
                <li>Engine Status: Working</li>
                <li>Average of passangers: 78%</li>
                <li>Battery: 90%</li>
                <li>Temperature: 25°C</li>
                <li>Speed: 60 km/hr</li>
                <li>Lights: On</li>
                <li>Petrol Level: 70%</li>
                <li>Tilt: 5%</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Upcoming Schedules</h2>
              <ul className="upcoming-schedules-list">
                <p></p>
                <p>
                  <FontAwesomeIcon icon={faBus} />
                  <span>Mangalore to Puttur</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faBus} />
                  <span>BC Road to Mangalore</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faBus} />
                  <span>Adyar to State Bank</span>
                </p>
                {/* Add more schedule locations as needed */}
              </ul>
        
            </div>
            <footer className="footer">
        &copy; 2023 Your Company. All rights reserved.
      </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
