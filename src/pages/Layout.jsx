import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Drawer, Typography,List, ListItem, ListItemText, AppBar,Toolbar, IconButton} from "@mui/material";
import { green } from "@mui/material/colors";
import AddExpense from "./AddExpense";
import DashBoard from "./DashBoard";
import AddIncome from "./AddIncome";
import MenuIcon from "@mui/icons-material/Menu";
import AllTransactions from "./AllTransactions";
import IncomeTrans from "./IncomeTrans"; 
import ExpenseTrans from "./ExpenseTrans";
import { useState } from "react";
function Layout() {
        const [open, setOpen] = useState(false);
        const toggleDrawer = () => {
              setOpen(!open);
                        };
        const menuList = (
            <List>
                <ListItem button component={Link} to="/dashboard"  onClick={toggleDrawer}>
                    <ListItemText primary="DashBoard"  primaryTypographyProps={{
                      sx: { color: green[600],fontWeight: "bold"}}}/>
                    </ListItem>
                <ListItem button component={Link} to="/add-income" onClick={toggleDrawer}>
                <ListItemText primary="Add Income"  primaryTypographyProps={{
                     sx: { color: green[600], fontWeight: "bold"} }}/>
                </ListItem>
                <ListItem button component={Link} to="/add-expense" onClick={toggleDrawer}>
                <ListItemText primary="Add Expense"  primaryTypographyProps={{
                   sx: { color: green[600], fontWeight: "bold" }}} />
                </ListItem>
                <ListItem button component={Link} to="/all-transactions" onClick={toggleDrawer}>
                <ListItemText primary="All Transactions" primaryTypographyProps={{
                      sx: {  color: green[600], fontWeight: "bold"}  }} />
                </ListItem>
                <ListItem button component={Link} to="/income-trans" onClick={toggleDrawer}>
                <ListItemText primary="Income Transactions" primaryTypographyProps={{
                    sx: {    color: green[600], fontWeight: "bold"   }}} />
                </ListItem>
                <ListItem button component={Link} to="/expense-trans" onClick={toggleDrawer}>
                <ListItemText primary="Expense Transactions" primaryTypographyProps={{
                   sx: { color: green[600],fontWeight: "bold" } }} />
              </ListItem>
            </List>);
           
           return(
           <Router>
              <AppBar position="fixed" sx={{ bgcolor: "transparent",zIndex: (theme) => theme.zIndex.drawer + 1}}>
              <Toolbar>
                 <IconButton color="inherit" edge="start"   onClick={toggleDrawer} sx={{ mr: 2 }}>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" sx={{ flexGrow: 1 }}>
                      Explore
                  </Typography>
              </Toolbar>
              </AppBar>
                <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                  <Box sx={(theme) => theme.mixins.toolbar} />
                    {menuList}
              </Drawer>
        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/add-income" element={<AddIncome />} />
            <Route path="/add-expense" element={<AddExpense />} />
            <Route path="/all-transactions" element={<AllTransactions />} />
            <Route path="/income-trans" element={<IncomeTrans />} />
            <Route path="/expense-trans" element={<ExpenseTrans />} />
            <Route path="/" element={  <Box>  <Typography   sx={{fontFamily:"Dancing Script",
              fontSize: { xs: "2rem", sm: "2.2rem", md: "3.5rem" }, lineHeight: 1.4,wordWrap: "break-word",}} >
                  Empower your Finances , Empower your Life</Typography> </Box>} />
      
             </Routes>
          </Box>
       </Router>
  );
}

export default Layout;