import WeatherCard from './components/WeatherCard';
import Nav from './components/Nav';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import { getIP, getWeatherData, isMetric } from './components/assets/js/WeatherData';

import './App.css'

const global = {
  isMetric: false,
  IP: undefined,
  current: {},
  forecast: {},
  location: {},
}

export const Store = React.createContext(global);

function App() {

  const [context, setContext] = useState(Store);
  useEffect(() =>{
    (async () => {
      const IP =  await getIP();
      const Data =  await getWeatherData(IP); 
      const METRIC = await isMetric(Data.location);
      await setContext({
          ...context, 
          IP,
          current: Data.current,
          forecast: Data.forecast,
          location: Data.location,
          isMetric: METRIC,
      });
    })();
  }, []);

  return (
    <Store.Provider value={[context, setContext]}>
      <div className="page style">
        <Nav />
        <WeatherCard />
        <Footer />
      </div>
    </Store.Provider>
  );
}

export default App;
