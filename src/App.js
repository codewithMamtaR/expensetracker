import React from "react";
import {Grid,Box,Typography, useMediaQuery, useTheme} from '@mui/material';
import m from './images/wallet.webp';      
import './mybtn.css';
import AppContextProvider from "./context/AppContext";
import { ToastContainer } from "react-toastify";

import LapLayout from "./pages/LapLayout";
import Layout from "./pages/Layout";

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  
  return (
    <>
      <Grid container sx={{ minHeight: "100vh" ,pb: "80px"}}>
        
        <Grid item xs={12} >
          <Box
            sx={{
              width: "100vw",
              minHeight: { xs: "250px", sm: "300px", md: "300px" },
              backgroundImage: `url(${m})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: { xs: 2, sm: 0 },
              py: { xs: 4, sm: 0 },
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontFamily: "serif",
                letterSpacing: { xs: 1, sm: 3, md: 5 },
                fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" },
                lineHeight: 1.2,
                textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
              }}
            >
              Expense Tracker
            </Typography>
          </Box>
        </Grid>

        {/* Sidebar / Layout */}
        <Grid item xs={12}>
          <AppContextProvider>
            {isMobile ? <Layout /> : <LapLayout />}
          </AppContextProvider>
        </Grid>
      
      </Grid>

      <ToastContainer position="top-right" autoClose={3000} />
      
      <Box  component="footer"
              sx={{
                      py: 2,
                      textAlign: 'center',
                      bgcolor: '#f5f5f5',
                      position: 'fixed',
                      width: '100%',
                      bottom: 0,
                       height: "60px"
           }}
         >
                      <Typography variant="body2">&copy; built by mamta</Typography>
         </Box>
    </>
  );
};

export default App;










        
    