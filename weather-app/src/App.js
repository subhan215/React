
import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Now</h1>
      </header>
      <main className="App-main">
        <div className="input-container">
          <Input />
          {weather.searchCity && <Button value="Search" onClick={weather.fetchData} />}
        </div>
        {weather.data && (
          <div className="card-container">
            <Card />
            <Button value="Refresh" onClick={weather.fetchData} />
          </div>
        )}
      </main>
      <footer className="App-footer">
        <p>© 2024 Weather App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
