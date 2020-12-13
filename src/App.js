import WeatherCard from './components/WeatherCard';
import Nav from './components/Nav';
import Footer from './components/Footer';

import './App.css'

function App() {
  return (
    <div className="page style">
      <Nav />
      <WeatherCard />
      <Footer />
    </div>
  );
}

export default App;
