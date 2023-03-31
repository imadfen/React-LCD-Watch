import React, {useState, useEffect} from 'react';
import HoursMinutes from './components/HoursMinutes';
import AMPM from './components/AMPM';
import Seconds from './components/Seconds';
import TheDate from './components/TheDate';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="App">
      <HoursMinutes/>
      <AMPM/>
      <Seconds/>
      <TheDate/>
    </div>
  );
}

export default App;