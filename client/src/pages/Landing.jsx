import React from 'react'
import { NavLink } from 'react-router-dom'

import { Grid, Typography, Box, Button, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Navbar from "../components/Navbar";

function Landing() {
  const classes = useStyles();
  return (
    <>
    <div>
        <Navbar />
        <Box className={classes.heroBox}>
        <Grid container spacing={6} className={classes.gridContainer}>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h3"
              fontWeight={700}
              style={{ color: '#232946' }}
              className={classes.title}
            >
              Vote in your own way
            </Typography>
            <Typography
              variant="h6"
              style={{ color: '#232946' }}
              className={classes.subtitle}
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
              className={classes.largeImage}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
    </>
  )
}

export default Landing

const useStyles = makeStyles((theme) => ({
  toolBar: {
    height: '10vh',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: 'white',
  },
  logo: {
    color: 'blue',
    cursor: 'pointer',
  },
  link: {
    color: '#000',
  },
  menuIcon: {
    color: '#000',
  },
  formContainer: {
    flexGrow: 1,
    padding: '10px',
    maxWidth: '700px',
    margin: '30px auto',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '100%',
    },
  },
  form: {
    marginTop: '30px',
  },
  formHeading: {
    textAlign: 'center',
    marginTop: '40px',
  },
  heroBox: {
    width: '100%',
    display: 'flex',
    minHeight: '730px',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#d4d8f0',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1300px',
    padding: '50px',
  },
  aboutUsContainer: {
    width: '100%',
    padding: '50px',
    display: 'flex',
    minHeight: '400px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutUsSubtitle: {
    opacity: '0.7',
    paddingBottom: '30px',
    fontSize: '18px',
  },
  title: {
    paddingBottom: '15px',
    color: '#232946',
  },
  subtitle: {
    opacity: '0.4',
    paddingBottom: '30px',
    color: '#232946',
  },
  largeImage: {
    width: '100%',
  },
  sectionGridContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '30px',
  },
  sectionGridItem: {
    backgroundColor: '#fffffe',
    textAlign: 'center',
    padding: '50px 30px',
    width: '200px',
    borderRadius: '10px',
    margin: '10px !important',
  },
  inputField: {
    marginBottom: '20px !important',
  },
  textArea: {
    width: '100%',
    marginBottom: '20px',
    fontSize: '16px',
    padding: '10px',
  },
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    miHeight: '10vh',
    padding: '20px',
    justifyContent: 'center',
    backgroundColor: '#f2f0f1',
    flexDirection: 'column',
  },
  footerText: {
    paddingBottom: '10px',
  },
  footerDate: {
    opacity: '0.4',
  },
  testimonialCard: {
    backgroundColor: '#fff',
    padding: '10px',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
  },
  testimonialStatement: {
    paddingBottom: '25px',
  },
  avatar: {
    marginRight: '10px',
  },
  testimonialPosition: {
    fontSize: '14px',
    opacity: '0.6',
  },
}));