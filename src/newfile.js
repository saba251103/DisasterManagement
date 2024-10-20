import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, TextField, Button, Container } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './App.css';  // Add a CSS file for the headlines animation

// Setting up default Leaflet icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

const Newfile = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [city, setCity] = useState('Mumbai');  // Default city
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch weather data for the given city
  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
        params: {
          key: '12ff22346603402b97854945242010',  // Replace with your WeatherAPI key
          q: city
        }
      });
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching weather data.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch earthquake data from USGS API
  const fetchEarthquakeData = async () => {
    try {
      const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson');
      setEarthquakeData(response.data.features);
    } catch (error) {
      console.error('Error fetching earthquake data:', error);
    }
  };

  // Initial fetch for both weather and earthquake data
  useEffect(() => {
    fetchWeather(city);
    fetchEarthquakeData();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    if (city) {
      fetchWeather(city);
    }
  };

  return (
    <Container style={{ paddingTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#3f51b5' }}>
      </Typography>

      <Grid container spacing={4}>
        {/* Weather Data Display */}
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <TextField
                  label="Enter City"
                  variant="outlined"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  sx={{backgroundColor:'white',color:'black'}}

                />
              </Grid>
              <Grid item>
                <Button variant="contained" sx={{backgroundColor:'white',color:'black'}} type="submit">
                  Get Weather
                </Button>
              </Grid>
            </Grid>
          </form>

          {loading ? (
            <Typography align="center">Loading weather data...</Typography>
          ) : error ? (
            <Typography align="center" color="error">{error}</Typography>
          ) : weatherData ? (
            <Card style={{ background: '#f5f5f5', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <CardContent>
                <Typography variant="h5" align="center">
                  Weather in {weatherData.location.name}, {weatherData.location.country}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="h6">{weatherData.current.temp_c}°C</Typography>
                    <Typography>{weatherData.current.condition.text}</Typography>
                    <Typography>Last Updated: {weatherData.current.last_updated}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Humidity: {weatherData.current.humidity}%</Typography>
                    <Typography>Wind: {weatherData.current.wind_kph} km/h</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ) : null}
        </Grid>

        {/* Earthquake Data & Map */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" align="center">
            Recent Earthquakes (Magnitude greater than 2.5)
          </Typography>

          <MapContainer
            center={[20, 0]}  // Default center of the map (latitude, longitude)
            zoom={2}
            style={{ height: '400px', width: '100%', marginBottom: '20px' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {earthquakeData.map((quake) => (
              <Marker
                key={quake.id}
                position={[
                  quake.geometry.coordinates[1], // latitude
                  quake.geometry.coordinates[0], // longitude
                ]}
              >
                <Popup>
                  <Typography>
                    <strong>Magnitude: {quake.properties.mag}</strong> <br />
                    Location: {quake.properties.place} <br />
                    Time: {new Date(quake.properties.time).toLocaleString()}
                  </Typography>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Moving headlines for recent earthquakes */}
          <div className="news-ticker-container">
            <div className="news-ticker">
              <ul>
                {earthquakeData.map((quake) => (
                  <li key={quake.id}>
                    {new Date(quake.properties.time).toLocaleString()} - {quake.properties.place} (Mag: {quake.properties.mag})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Newfile;