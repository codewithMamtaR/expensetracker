import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Drawer, Typography,List, ListItem, ListItemText } from "@mui/material";
import { green } from "@mui/material/colors";
import AddExpense from "./AddExpense";
import DashBoard from "./DashBoard";
import AddIncome from "./AddIncome";
import m from "../images/coins.jpg";
import AllTransactions from "./AllTransactions";
import IncomeTrans from "./IncomeTrans"; 
import ExpenseTrans from "./ExpenseTrans";

function Layout() {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        {/* Sidebar */}
        <Drawer variant="permanent" anchor="left" sx={{width: { xs: 200, sm: 280, md: 400 },flexShrink: 0 }}>
                  <Box sx={{ width: 400, mt: 2 }}>


            <DashBoard />
            <List>
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
        </Drawer>

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/add-income" element={<AddIncome />} />
            <Route path="/add-expense" element={<AddExpense />} />
            <Route path="/all-transactions" element={<AllTransactions />} />
            <Route path="/income-trans" element={<IncomeTrans />} />
            <Route path="/expense-trans" element={<ExpenseTrans />} />
            <Route path="/" element={<Box><Typography sx={{fontFamily:"Dancing Script",fontSize:"100px"}} >  Empower your Finances , Empower your Life</Typography> </Box>} />
      
        </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default Layout;