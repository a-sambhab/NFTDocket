import React from 'react'
import { NavLink } from 'react-router-dom'

import { Grid, Typography, Box, Button, Stack } from '@mui/material';

import Navbar from "../components/Navbar";

function Landing() {
  const heroBox = {
    width: '100%',
    display: 'flex',
    minHeight: '600px',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const gridContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1300px',
    padding: '50px',
  };

  return (
    <>
    <div>
        <Navbar />
        <Box className={heroBox}>
        <Grid container spacing={6} className={gridContainer}>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h3"
              fontWeight={700}
              style={{ color: '#232946', paddingBottom: '15px' }}
            >
              Vote in your own way
            </Typography>
            <Typography
              variant="h6"
              style={{ color: '#232946', opacity: '0.4', paddingBottom: '30px' }}
            >
              Start your process by creating a room, write proposals and make
              your team register as a VOTEE in the room and make your decisions
              in a smoother and faster way...
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="left"
            >
            <NavLink to='createseller'>
              <Button variant="contained">Seller</Button>
              </NavLink>
              <NavLink to='buyer'>
              <Button variant="outlined">Buyer</Button>
              </NavLink>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src="https://res.cloudinary.com/sambitsankalp/image/upload/v1655060810/hackathons/image_1_bameyw.png"
              alt="My Team"
              style={{width: '100%'}}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
    </>
  )
}

export default Landing
