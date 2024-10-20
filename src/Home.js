import React, { useState, useEffect } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Instagram } from '@mui/icons-material';
import { X } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import logo from './logo.png';
import flood from './flood.jpg';
import fire from './fire.png';
import tornado from './tornado.png';
import earthquake from './earthquake.jpg'
import floodrescue from './floodrescue.png'
import wildfire from './wildfire.png'
import front from './home.png'; // Home image
import about from './aboutus.png';
import { useNavigate } from 'react-router-dom';
import { Paper, Grid } from '@mui/material';
import './App.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Newfile from './newfile';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

// ... res
const itemData = [
  {
    img: flood,
    title: 'Flood',
    author: 'John Doe',
  },
  {
    img: earthquake,
    title: 'Earthquake Aftermath',
    author: 'Jane Smith',
  },
  {
    img: fire,
    title: 'Fire Response',
    author: 'Michael Johnson',
  },
  {
    img: tornado,
    title: 'Tornado',
    author: 'Linda Carter',
  },
  {
    img: floodrescue,
    title: 'Flood Rescue',
    author: 'Tom Smith',
  },
  {
    img: wildfire,
    title: 'Wildfire',
    author: 'Alice Brown',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [windSpeed, setWindSpeed] = useState(0);
  const windThreshold = 20; // Example threshold value, set it according to your logic

  const speakAltText = () => {
    const altText = "A modern disaster management platform interface showcasing real-time updates on natural disasters, emergency response tools, and community safety resources, designed to enhance preparedness and communication during crises."; // Replace with your alt text
    const utterance = new SpeechSynthesisUtterance(altText);
    window.speechSynthesis.speak(utterance);
  };
  const sendEarthquakeAlert = () => {
    NotificationManager.warning(
      'Earthquake Alert!',
      'An earthquake has been detected in Mumbai. Please take necessary precautions.',
      5000 // Notification duration (in milliseconds)
    );
  };
  const checkWindSpeed = () => {
    // Simulating wind speed change; replace this with real wind speed data fetching
    const newWindSpeed = Math.floor(Math.random() * 30); // Random wind speed for simulation

    setWindSpeed(newWindSpeed);
    console.log('Current Wind Speed:', newWindSpeed);

    if (newWindSpeed > windThreshold) {
      NotificationManager.warning(
        'Wind Alert!',
        `Wind speed has increased to ${newWindSpeed} km/h. Please take necessary precautions.`,
        5000 // Notification duration (in milliseconds)
      );
    }
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      checkWindSpeed();
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  // Navigation Functions for external links
  const openInstagram = () => {
    window.open('https://www.instagram.com', '_blank');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com', '_blank');
  };

  const openX = () => {
    window.open('https://www.x.com', '_blank');
  };

  const goTonext = () => {
    navigate('/newpage');
  };

  // Disaster management features
  const features = [
    {
      name: 'Real-Time Disaster Monitoring',
      content: 'View real-time data on natural disasters, including live updates on weather patterns, seismic activities, and flood warnings.',
    },
    {
      name: 'AI-Driven Predictions',
      content: 'Our AI models predict the likelihood of future disasters, allowing communities to prepare in advance.',
    },
    {
      name: 'Multi-Channel Alerts',
      content: 'Receive instant notifications via SMS, social media, or email about disaster updates and safety precautions.',
    },
    {
      name: 'Community-Based Alerts',
      content: "Enable local communities to share updates, receive real-time alerts, and coordinate evacuation or response efforts.",
    },
    {
      name: 'User-Friendly Dashboards',
      content: 'Monitor real-time disaster data, track emergency response efforts, and access resource allocation insights on one intuitive dashboard.',
    },
  ];

  // Mission Statements
  const mission = [
    {
      name: 'Improve communication and coordination',
      content: 'Develop tools that facilitate seamless information sharing and collaboration among emergency responders, volunteers, and affected populations.',
    },
    {
      name: 'Enhance situational awareness',
      content: 'Create a platform that provides real-time data and insights to help emergency responders make informed decisions.',
    },
    {
      name: 'Enhance resource allocation',
      content: 'Create platforms that optimize the distribution of essential supplies and services to those in need.',
    },
    {
      name: 'Promote disaster preparedness',
      content: 'Provide resources and educational materials to help individuals and communities build resilience and mitigate the impact of future disasters.',
    },
  ];

  return (
    <div className="home">

    
      {/* App Bar Header */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
          <Toolbar>
            <IconButton size="large" edge="start" color="white" aria-label="menu" sx={{ mr: 2,backgroundColor:'white' }}>
              <Search />
            </IconButton>
            <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <img src={logo} alt="displaying logo That Trifecta Muse" width={150} />
            </Typography>
            <IconButton size="large" edge="start" color="#c9c7b8" aria-label="menu" sx={{ mr: 4 ,backgroundColor:'white'}} onClick={openInstagram}>
              <Instagram />
            </IconButton>
            <IconButton size="large" edge="start" color="#c9c7b8" aria-label="menu" sx={{ mr: 4 ,backgroundColor:'white'}} onClick={openX}>
              <X />
            </IconButton>
            <IconButton size="large" edge="start" color="#c9c7b8" aria-label="menu" sx={{ mr: 4 ,backgroundColor:'white'}} onClick={openFacebook}>
              <Facebook />
            </IconButton>
            <IconButton size="large" edge="start" color="#c9c7b8" aria-label="record voice" sx={{ mr: 2, backgroundColor: 'white' }} onClick={speakAltText}>
              <RecordVoiceOverIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
   {/* Navigation Bar */}
   <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ marginTop: 2, backgroundColor: "black", color: 'white' }}>
          <Box sx={{ height: '100px', justifyContent: "center", alignContent: 'center' }}>
            <Button href="#home" title="Home" sx={{ color: 'white' }}>Home</Button>
            <Button href="#latest" title="Live Data Feed" sx={{ color: 'white' }}>Live Data Feed</Button>
            <Button href="#about" title="About Us" sx={{ color: 'white' }}>About Us</Button>
            <Button href="#features" title="Features" sx={{ color: 'white' }}>Features</Button>
            <Button href="#contact" title="Contact Us" sx={{ color: 'white' }}>Contact Us</Button>
            <Button onClick={() => navigate('/dashboard')} title="Dashboard" sx={{ color: 'white' }}>
  Dashboard
</Button>

          </Box>
        </AppBar>
      </Box>

      {/* Front Image with Quote */}
      <Box sx={{ position: 'relative', textAlign: 'center', color: 'white', marginTop: 2 }}>
        <img src={front} alt="front" style={{ width: '100%' }} />
        <Typography variant="h4" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold' }}>
          "Disasters teach us the value of preparedness."
        </Typography>
      </Box>

   
      {/* Live Data Feed Section */}
      <button onClick={sendEarthquakeAlert}>Send Earthquake Alert</button>

      {/* Notification Container */}
      <NotificationContainer />
      <Box id="latest" sx={{ backgroundColor: 'white', padding: '2%' }}>
        <Typography variant="h3" sx={{ marginBottom: '1%', textAlign: 'center', fontFamily: 'Atteron', color: 'black' }}>
          ..... Live Data Feed .....
        </Typography>
        <Typography variant="body2" sx={{ color: 'black', textAlign: 'center' }}>
          Get the latest real-time updates on weather, seismic activities, and other disaster events from across the globe.
        </Typography>
        <br />
<Newfile/>
      </Box>
            {/* Features Section */}
            <Box sx={{  padding: '5%' ,background: 'linear-gradient(to right, black, white)',  }}>
  <Box
    id="features"
    sx={{
      padding: '5%',
      backgroundColor: '#f4f4f4',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',

    }}
  >
    <Typography
      variant="h4"
      sx={{
        marginBottom: '2%',
        textAlign: 'center',
        fontFamily: 'Atteron',
        color: 'black',
      }}
    >
      Our Features
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
      {features.map((feature, index) => (
        <Paper
          key={index}
          sx={{
            padding: '10px',
            backgroundColor: '#f5f5f5',
            width: '250px',
            minHeight: '300px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '5px' ,textAlign: 'center',}}>
            {feature.name}
          </Typography>
          <Typography variant="body2">{feature.content}</Typography>
        </Paper>
      ))}
    </Box>
  </Box>
</Box>


      {/* About Us Section */}
      <Box id="about" sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'black', padding: '2%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'Menu', padding: '2%' }}>
          <img src={about} style={{ maxWidth: '50%' }} alt="about us" />
          <Box sx={{ textAlign: 'justify', maxWidth: '60%', marginLeft: '5%', marginRight: '3%' }}>
            <Typography className='new-arrival' variant="h3" sx={{ marginBottom: '1%', textAlign: 'center', fontFamily: 'Atteron' }}>
              About <br />
              Us
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', fontFamily: 'Anahaw' }}>
              Empowering Communities with Real-Time Disaster Insights
            </Typography>
            <br />
            <Typography variant="body2">
              We're a dedicated team working to deliver cutting-edge disaster management solutions through data-driven insights and community-focused tools.
              With our web platform, individuals, organizations, and authorities can access real-time disaster data, predictive insights, and effective communication channels.
            </Typography>
            <br />
          </Box>
        </Box>
      </Box>

      {/* Image List Section */}
      <Box sx={{ backgroundColor: 'black', padding: '2%' }}>
        <Typography variant="h4" sx={{ marginBottom: '2%', textAlign: 'center', fontFamily: 'Atteron' }}>
          Disaster Gallery
        </Typography>
        <Grid container spacing={2}>
          {itemData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 1 }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ textAlign: 'center' }}>Author: {item.author}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>



      {/* Mission Statements Section */}
      <Box sx={{  padding: '5%' ,background: 'linear-gradient(to right, black, white)',  }}>
  <Box
    id="features"
    sx={{
      padding: '5%',
      backgroundColor: '#f4f4f4',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',

    }}
  >
    <Typography
      variant="h4"
      sx={{
        marginBottom: '2%',
        textAlign: 'center',
        fontFamily: 'Atteron',
        color: 'black',
      }}
    >
      Our Mission
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
      {mission.map((mission, index) => (
        <Paper
          key={index}
          sx={{
            padding: '10px',
            backgroundColor: '#f5f5f5',
            width: '250px',
            minHeight: '300px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '5px' ,textAlign: 'center',}}>
            {mission.name}
          </Typography>
          <Typography variant="body2">{mission.content}</Typography>
        </Paper>
      ))}
    </Box>
  </Box>
</Box>

      {/* Contact Us Section */}
      <Box id="contact" sx={{ backgroundColor: '#f4f4f4', padding: '4%', display: 'flex', justifyContent: 'flex-start' }}>
  <Box sx={{ maxWidth: '500px', marginLeft: '25px' }}>
    <Typography variant="h4" sx={{ marginBottom: '2%', textAlign: 'left', fontFamily: 'Atteron', fontWeight: 'bold' }}>
      Contact Us
    </Typography>
    <Paper sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginBottom: '10px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <EmailIcon sx={{ marginRight: '10px', color: '#3f51b5' }} />
      <Typography variant="body1">Email: support@disasterwatch.com</Typography>
    </Paper>
    <Paper sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginBottom: '10px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <PhoneIcon sx={{ marginRight: '10px', color: '#3f51b5' }} />
      <Typography variant="body1">Phone: +123-456-7890</Typography>
    </Paper>
    <Paper sx={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <LocationOnIcon sx={{ marginRight: '10px', color: '#3f51b5' }} />
      <Typography variant="body1">Address: 123 Emergency Road, Disaster City</Typography>
    </Paper>
  </Box>
</Box>

    </div>
  );
} 