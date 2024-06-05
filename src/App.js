import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Ecosystem from './components/Ecosystem';
import Carousel from './components/Carousel';
import EndangeredSpecies from './components/EndangeredSpecies';
import Climate from './components/Climate';
import GlobalWarming from './components/GlobalWarming';
import { WeatherData, Weather } from './components/Weather';
import CovidTracker from './components/CovidStats';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  const [message, setMessage] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    setWs(socket);

    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.onmessage = (event) => {
      setMessage(event.data);
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (message) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(message);
    } else {
      console.error('WebSocket connection not established');
    }
  };

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Ecosystem />
      <Carousel />
      <EndangeredSpecies />

      <div className='Info'>
        <Climate />
        <GlobalWarming />
      </div>

      <div className="containerWC my-4">
        <div className="row">
          <h1>Other Related News: </h1>
          <div className="col-12 col-md-6">
            <Weather />
            <WeatherData />
          </div>
          <div className="col-12 col-md-6">
            <CovidTracker />
          </div>
        </div>
      </div>

      <ContactUs />
      <Footer />

      <div>
        <h2>WebSocket Message:</h2>
        <p>{message}</p>
        <button onClick={() => sendMessage('Hello from client')}>Send Message</button>
      </div>
    </div>
  );
}

export default App;
