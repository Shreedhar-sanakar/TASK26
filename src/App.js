import React from 'react';
import './index.css';
import {Card, CardContent, Typography, CardActions, Button, Grid} from '@mui/material';

// import MenuIcon from '@mui/icons-material/Menu';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function App() {
  return (
    <Grid container spacing={2} style={{margin:'auto', padding:'auto'}}>
      <Grid item>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         FREE
        </Typography>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
        <b>$0/month</b>
        </Typography>
        <Typography >
        Single User
          <br />
          {'5GB Storage'}     <br />
          {'Unlimited Public Projects'}          <br />
          {'Community Access'}          <br />
          {'Unlimited Private Projects'}          <br />
          {'Dedicated Phone Support'}          <br />
          {'Free Subdomain'}          <br />
          {'Monthly Status Reports'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Button</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         PLUS
        </Typography>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
        <b>$0/month</b>
        </Typography>
        <Typography variant="h7">
        Single User
          <br />
          {'5GB Storage'}     <br />
          {'Unlimited Public Projects'}          <br />
          {'Community Access'}          <br />
          {'Unlimited Private Projects'}          <br />
          {'Dedicated Phone Support'}          <br />
          {'Free Subdomain'}          <br />
          {'Monthly Status Reports'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Button</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         PRO
        </Typography>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
        <b>$0/month</b>
        </Typography>
        <Typography variant="h7">
        Single User
          <br />
          {'5GB Storage'}     <br />
          {'Unlimited Public Projects'}          <br />
          {'Community Access'}          <br />
          {'Unlimited Private Projects'}          <br />
          {'Dedicated Phone Support'}          <br />
          {'Free Subdomain'}          <br />
          {'Monthly Status Reports'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Button</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
  );
}






