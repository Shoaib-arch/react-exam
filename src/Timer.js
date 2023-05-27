import React, { useState, useEffect } from 'react';

//Creating the Timer function as arrow functions to take countdown state
const Timer = () => {
  const [countdown, setCountdown] = useState(10);
  let timer;

  
  useEffect(() => {
    timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);



  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timer);
      
      
      // Perform any actions when the timer reaches 0
    }
  }, [countdown]);

  // conditioning in returning
  return (
    <div>
      {countdown > 0 ? (
        <h1>{countdown}</h1>
      ) : (
        <h1>Time Up</h1>
      )}
    </div>
  );
};

export default Timer;
