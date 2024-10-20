import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Box, Typography, LinearProgress, Card, CardContent } from '@mui/material';

const disasterData = [
  { date: '2024-10-20', event: 'Flood', risk: 'High', details: 'Severe rainfall predicted in coastal areas.' },
  { date: '2024-10-21', event: 'Flood', risk: 'Medium', details: 'Rainfall reducing, but flood risk remains.' },
  { date: '2024-10-22', event: 'Earthquake', risk: 'Medium', details: 'Potential seismic activity near fault lines.' }
];

const graphData = [
  { day: 'Monday', riskLevel: 4 },
  { day: 'Tuesday', riskLevel: 7 },
  { day: 'Wednesday', riskLevel: 2 },
  { day: 'Thursday', riskLevel: 8 },
  { day: 'Friday', riskLevel: 5 }
];

const RiskIndicator = ({ risk }) => {
  const getColor = () => {
    if (risk === 'High') return 'red';
    if (risk === 'Medium') return 'orange';
    return 'green';
  };
  
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" component="div" gutterBottom>
        Risk Level: {risk}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={risk === 'High' ? 100 : risk === 'Medium' ? 60 : 30}
        sx={{ height: 10, backgroundColor: 'lightgrey', '& .MuiLinearProgress-bar': { backgroundColor: getColor() } }}
      />
    </Box>
  );
};

const TimelineItem = ({ date, event, details, risk }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h5">{event}</Typography>
      <Typography color="textSecondary">{date}</Typography>
      <Typography variant="body2">{details}</Typography>
      <RiskIndicator risk={risk} />
    </CardContent>
  </Card>
);

const Predict = () => {
  return (
    <Box sx={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>AI-Based Disaster Predictions</Typography>

      {/* Timeline of Events */}
      <Typography variant="h5" gutterBottom>Upcoming Events:</Typography>
      {disasterData.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}

      {/* Graph of Risk Levels */}
      <Typography variant="h5" gutterBottom>Disaster Risk Levels (Next 5 Days):</Typography>
      <LineChart width={600} height={300} data={graphData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis domain={[0, 10]} />
        <Tooltip />
        <Line type="monotone" dataKey="riskLevel" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </Box>
  );
};

export default Predict;