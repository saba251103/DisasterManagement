import * as React from 'react';
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
import logo from './logo.png';
import front from './home.png'; // Home image
import about from './aboutus.png';
import { useNavigate } from 'react-router-dom';
import { Paper, Grid } from '@mui/material';
import './App.css';

// ImageList data with disaster-related images
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1601758123927-4a36c0e29d63',
    title: 'Flood',
    author: 'John Doe',
  },
  {
    img: 'https://images.unsplash.com/photo-1588092317190-96f8e8a4c263',
    title: 'Earthquake Aftermath',
    author: 'Jane Smith',
  },
  {
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    title: 'Fire Response',
    author: 'Michael Johnson',
  },
  {
    img: 'https://images.unsplash.com/photo-1559087316-36d9fb2d82e3',
    title: 'Tornado',
    author: 'Linda Carter',
  },
  {
    img: 'https://images.unsplash.com/photo-1501644898240-aaf0d3e76542',
    title: 'Flood Rescue',
    author: 'Tom Smith',
  },
  {
    img: 'https://images.unsplash.com/photo-1579705745864-8509c275b849',
    title: 'Wildfire',
    author: 'Alice Brown',
  },
];

export default function Home() {
  const navigate = useNavigate();

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
            <IconButton size="large" edge="start" color="#c9c7b8" aria-label="menu" sx={{ mr: 2 ,backgroundColor:'white'}} onClick={openFacebook}>
              <Facebook />
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
      <Box id="latest" sx={{ backgroundColor: 'black', padding: '2%' }}>
        <Typography variant="h3" sx={{ marginBottom: '1%', textAlign: 'center', fontFamily: 'Atteron', color: 'white' }}>
          ..... Live Data Feed .....
        </Typography>
        <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
          Get the latest real-time updates on weather, seismic activities, and other disaster events from across the globe.
        </Typography>
        <br />
        <Button fullWidth sx={{ backgroundColor: '#dee2d4', padding: '2%', color: 'black' }}>
          <Button variant="body2" sx={{ textAlign: 'center', fontFamily: 'Anahaw' }} onClick={goTonext}>
            Explore Real-Time Data
          </Button>
        </Button>
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
      <Box id="contact" sx={{ backgroundColor: 'white' }}>
        <footer className="footer">
          <Box sx={{ justifyContent: 'left', textAlign: 'left', marginLeft: '25px' }}>
            <Typography variant="h4">Contact Us</Typography>
            <Typography variant="body1">Email: support@disasterwatch.com</Typography>
            <Typography variant="body1">Phone: +123-456-7890</Typography>
            <Typography variant="body1">Address: 123 Emergency Road, Disaster City</Typography>
          </Box>
        </footer>
        <Box sx={{ marginTop: 6 }}>
          <Typography variant="body2">&copy; 2024 DisasterWatch. All rights reserved.</Typography>
          <br />
        </Box>
      </Box>
    </div>
  );
}
