import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
  
    const [weekday, monthDay] = formattedDate.split(', ');
    const [month, day] = monthDay.split(' ');
  
    return `${weekday}  -  ${month} ${day}`;
  };
  

    const formatTime = (date) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = date.toLocaleTimeString(undefined, options);
  
    const [time, meridiem] = formattedTime.split(' ');
    const [hour, minutes, seconds] = time.split(':');
  
    return (
      <div className="time">
        {hour}:{minutes}
            <div className="time-meridian">
                <div className="meridian">{meridiem}</div>
                <div className="seconds">{seconds}</div>
            </div>
      </div>
    );
  };  
  
  
  return (
    <div className="digital">
      <h1>{formatTime(currentTime)}</h1>
      <p>{formatDate(currentTime)}</p>
    </div>
  );
};

export default DigitalClock;