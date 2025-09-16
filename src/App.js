import React from "react";
import {Grid,Box,Typography} from '@mui/material';
import m from './images/wallet.webp';      
import './mybtn.css';
import AppContextProvider from "./context/AppContext";
import { ToastContainer } from "react-toastify";


import Layout from "./pages/Layout";

const App = () => {
  return (
    <>
      <Grid container sx={{ minHeight: "100vh" }}>
        
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
        <Grid item xs={12}     >
          <AppContextProvider>
            <Layout />
          </AppContextProvider>
        </Grid>
      </Grid>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;