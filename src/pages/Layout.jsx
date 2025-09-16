import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Drawer, Typography,List, ListItem, ListItemText } from "@mui/material";
import { green } from "@mui/material/colors";
import AddExpense from "./AddExpense";
import DashBoard from "./DashBoard";
import AddIncome from "./AddIncome";

import AllTransactions from "./AllTransactions";
import IncomeTrans from "./IncomeTrans"; 
import ExpenseTrans from "./ExpenseTrans";

function Layout() {
  return (
    <Router>
      
 <Box sx={{display :"flex"}}>       
                  <Box sx={{ width: "100%", mt: 2 }}>


           
            <List>
              
            <ListItem button component={Link} to="/dashboard">
                <ListItemText primary="DashBoard"  primaryTypographyProps={{
      sx: { 
        color: green[600],   // try different shades
        fontWeight: "bold"
      }
    }}/>
              </ListItem>
              <ListItem button component={Link} to="/add-income">
                <ListItemText primary="Add Income"  primaryTypographyProps={{
      sx: { 
        color: green[600],   // try different shades
        fontWeight: "bold"
      }
    }}/>
              </ListItem>
              <ListItem button component={Link} to="/add-expense">
                <ListItemText primary="Add Expense"  primaryTypographyProps={{
    sx: { color: green[600], fontWeight: "bold" } // 500, 600, 700 → darker
  }} />
              </ListItem>
              <ListItem button component={Link} to="/all-transactions">
                <ListItemText primary="All Transactions" primaryTypographyProps={{
      sx: { 
        color: green[600],   // try different shades
        fontWeight: "bold"
      }
    }} />
              </ListItem>
              <ListItem button component={Link} to="/income-trans">
                <ListItemText primary="Income Transactions" primaryTypographyProps={{
      sx: { 
        color: green[600],   // try different shades
        fontWeight: "bold"
      }
    }} />
              </ListItem>
              <ListItem button component={Link} to="/expense-trans">
                <ListItemText primary="Expense Transactions" primaryTypographyProps={{
      sx: { 
        color: green[600],   // try different shades
        fontWeight: "bold"
      }
    }} />
              </ListItem>
            </List>
          </Box>
        
        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/add-income" element={<AddIncome />} />
            <Route path="/add-expense" element={<AddExpense />} />
            <Route path="/all-transactions" element={<AllTransactions />} />
            <Route path="/income-trans" element={<IncomeTrans />} />
            <Route path="/expense-trans" element={<ExpenseTrans />} />
            <Route path="/" element={<Box><Typography   sx={{fontFamily:"Dancing Script",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                            lineHeight: 1.4,
                wordWrap: "break-word",
  }} >  Empower your Finances , Empower your Life</Typography> </Box>} />
      
        </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default Layout;