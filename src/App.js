import React from "react";
import {Grid,Box,Typography} from '@mui/material';
import m from './images/wallet.webp';      
import './mybtn.css';
import AppContextProvider from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import Layout from "./pages/Layout";

const App = () => {
return(
  <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "200px", sm: "300px", md: "300px" }, 
          backgroundImage: `url(${m})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bold",
            fontFamily: "serif",
            
            letterSpacing: { xs: 1, sm: 3, md: 5 }, 
            fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" },
            textAlign: "center",
          }}
        >
          Expense Tracker
        </Typography>
      </Box>
<AppContextProvider>
  <Layout/>
  </AppContextProvider>
  <ToastContainer position="top-right" autoClose={3000} />
</>
  );
}

export default App;

