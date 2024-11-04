import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div style={{ fontSize: '2rem', fontFamily: 'Arial', textAlign: 'center' }}>
      <p>Current Time:</p>
      <p>{formattedTime}</p>
    </div>
  );
};

export default DigitalClock;
