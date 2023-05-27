import React, { useState, useEffect } from 'react';

//Creating the Timer function as arrow functions to take countdown state
const Timer = () => {
  const [countdown, setCountdown] = useState(10);
  let timer;

  //Creating the UseEffect
  useEffect(() => {
    timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

 


};

export default Timer;
