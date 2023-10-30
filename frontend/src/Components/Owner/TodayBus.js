import React, { useState,useEffect } from 'react';
import Navbar from '../Navbar';
import './TodayBus.css';
import axios from 'axios';
import Uploadtoday from './Uploadtoday';
export default function TodayBus() {
  const [todaySchedules, setTodaySchedules] = useState([]);

  useEffect(() => {
    const fetchTodaySchedules = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/today');
        setTodaySchedules(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodaySchedules();
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
    width: '100%', // Adjusted width to take the full width of the column
  };

  const highlightCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Lighter shade of white
    transform: 'scale(1.05)',
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
              <Navbar />
            </div>
            <div className="col-md-9">
              <h2 className="schedule-header mt-5" style={headerStyle}>
                Today's Schedule
              </h2>

              <div className="row">
                {todaySchedules.map((item) => (
                  <div
                    key={item.id}
                    className="col-md-4 mb-4" // Divide each row into 4 columns
                  >
                    <div
                      className="card h-100"
                      style={cardStyle}
                    >
                      <img
                        src={item.image}
                        alt={item.task}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center" style={cardTextStyle}>
                          {item.task}
                        </h5>
                        <div className="text-center">
                          <p className="card-text" style={cardTextStyle}>
                            <strong>Time:</strong> {item.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Uploadtoday/>
              <h2 className="schedule-header" style={headerStyle}>
                Tomorrow's Schedule
              </h2>

              <div className="row">
                {todaySchedules.map((item) => (
                  <div
                    key={item.id}
                    className="col-md-4 mb-4" // Divide each row into 4 columns
                  >
                    <div
                      className="card h-100"
                      style={cardStyle}
                    >
                      <img
                        src={item.image}
                        alt={item.task}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center" style={cardTextStyle}>
                          {item.task}
                        </h5>
                        <div className="text-center">
                          <p className="card-text" style={cardTextStyle}>
                            <strong>Time:</strong> {item.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}