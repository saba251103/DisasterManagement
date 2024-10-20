import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, Drawer, Box, CssBaseline, Paper, List, ListItem, ListItemText } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import disasterManagementTips from './tips'; // Tips Component
import { useNavigate } from 'react-router-dom';

const earthquakeAPI = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson';
const fireAPI = 'https://eonet.gsfc.nasa.gov/api/v3/events?status=open&category=wildfires';

const fetchEarthquakeData = async () => {
  try {
    const response = await axios.get(earthquakeAPI);
    return response.data.features.map((quake) => ({
      place: quake.properties.place,
      magnitude: quake.properties.mag,
      time: new Date(quake.properties.time).toLocaleString(),
    }));
  } catch (error) {
    console.error('Error fetching earthquake data:', error);
    return [];
  }
};

const fetchFireData = async () => {
  try {
    const response = await axios.get(fireAPI);
    return response.data.events.map((fire) => ({
      title: fire.title,
      location: fire.geometries[0].coordinates,
      date: new Date(fire.geometries[0].date).toLocaleString(),
    }));
  } catch (error) {
    console.error('Error fetching fire data:', error);
    return [];
  }
};

const fetchFloodData = async () => {
  return [
    { region: 'California', waterLevel: 'High', alertLevel: 'Severe' },
    { region: 'Texas', waterLevel: 'Medium', alertLevel: 'Moderate' },
  ];
};

const drawerWidth = 240;

const Dashboard = () => {
  const [disasterType, setDisasterType] = useState('Flood');
  const [disasterData, setDisasterData] = useState([]);
  const [chartData, setChartData] = useState({});
  const [showTips, setShowTips] = useState(false);
  
  const navigate = useNavigate(); // Move useNavigate here

  useEffect(() => {
    const fetchData = async () => {
      if (disasterType === 'Earthquake') {
        const data = await fetchEarthquakeData();
        setDisasterData(data);
        createChartData(data, 'magnitude', 'time');
      } else if (disasterType === 'Fire') {
        const data = await fetchFireData();
        setDisasterData(data);
      } else if (disasterType === 'Flood') {
        const data = await fetchFloodData();
        setDisasterData(data);
      } else if (disasterType === 'Weather') {
        navigate('/newfile');
      } else if (disasterType === 'Tips') {
        setShowTips(true);
      }
      else if (disasterType === 'AI Predict') {
        navigate('/predict'); // Navigate to Predict component
      }
    };

    fetchData();
  }, [disasterType, navigate]); // Include navigate in the dependency array

  const createChartData = (data, valueKey, labelKey) => {
    setChartData({
      labels: data.map((item) => item[labelKey]),
      datasets: [
        {
          label: `${disasterType} Data Trend`,
          data: data.map((item) => item[valueKey]),
          fill: false,
          backgroundColor: '#3f51b5',
          borderColor: '#3f51b5',
          pointBorderWidth: 2,
        },
      ],
    });
  };

  const handleDisasterTypeChange = (type) => {
    setDisasterType(type);
    setShowTips(false);
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: 'black', color: 'white' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: 'white' }}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{color:'black'}}>
            Disaster Monitoring Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { 
            width: drawerWidth, 
            boxSizing: 'border-box', 
            backgroundColor: '#757575' // Changed to grey shade
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button onClick={() => handleDisasterTypeChange('Flood')}>
              <ListItemText primary="Flood" />
            </ListItem>
            <ListItem button onClick={() => handleDisasterTypeChange('Earthquake')}>
              <ListItemText primary="Earthquake" />
            </ListItem>
            <ListItem button onClick={() => handleDisasterTypeChange('Fire')}>
              <ListItemText primary="Fire" />
            </ListItem>
            <ListItem button onClick={() => handleDisasterTypeChange('Weather')}>
              <ListItemText primary="Weather" />
            </ListItem>
            <ListItem button onClick={() => handleDisasterTypeChange('Tips')}>
              <ListItemText primary="Tips" />
            </ListItem>
            <ListItem button onClick={() => handleDisasterTypeChange('AI Predict')}>
              <ListItemText primary="AI Predict" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Grid container spacing={3}>
          {showTips ? (
            disasterManagementTips.map((tip, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
                  <CardContent>
                    <Typography variant="h6">{tip.title}</Typography>
                    {tip.tips.map((t, idx) => (
                      <Typography key={idx}>- {t}</Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            disasterData.length > 0 ? (
              disasterData.map((disaster, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
                    <CardContent>
                      <Typography variant="h6">{disasterType} Data</Typography>
                      {disasterType === 'Flood' && (
                        <>
                          <Typography>Region: {disaster.region}</Typography>
                          <Typography>Water Level: {disaster.waterLevel}</Typography>
                          <Typography>Alert Level: {disaster.alertLevel}</Typography>
                        </>
                      )}
                      {disasterType === 'Earthquake' && (
                        <>
                          <Typography>Location: {disaster.place}</Typography>
                          <Typography>Magnitude: {disaster.magnitude}</Typography>
                          <Typography>Date: {disaster.time}</Typography>
                        </>
                      )}
                      {disasterType === 'Fire' && (
                        <>
                          <Typography>Fire: {disaster.title}</Typography>
                          <Typography>
                            Location: {disaster.location?.join(', ') || 'Location data not available'}
                          </Typography>
                          <Typography>Date: {disaster.date}</Typography>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography>No data available for {disasterType}.</Typography>
            )
          )}
        </Grid>

        {disasterType === 'Earthquake' && chartData.labels && (
          <Paper elevation={3} sx={{ padding: '20px', marginTop: '30px', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
            <Typography variant="h5" gutterBottom>
              {disasterType} Magnitude Over Time
            </Typography>
            <Line data={chartData} />
          </Paper>
        )}
        {disasterType === 'Flood' && (
          <Paper elevation={3} sx={{ padding: '20px', marginTop: '30px', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
            <Typography variant="h5" gutterBottom>
              Flood Data Trend
            </Typography>
            <Bar
              data={{
                labels: ['California', 'Texas'],
                datasets: [
                  {
                    label: 'Water Levels',
                    data: [10, 5], // Replace with your static data values
                    backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;