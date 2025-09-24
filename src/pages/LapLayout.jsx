import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Drawer, Typography,List, ListItem, ListItemText} from "@mui/material";
import { green } from "@mui/material/colors";
import AddExpense from "./AddExpense";
import DashBoard from "./DashBoard";
import AddIncome from "./AddIncome";
import AllTransactions from "./AllTransactions";
import IncomeTrans from "./IncomeTrans"; 
import ExpenseTrans from "./ExpenseTrans";

function LapLayout() {
      const menuList = (
            <List>
                <ListItem button component={Link} to="/dashboard" >
                  <ListItemText primary="DashBoard"  primaryTypographyProps={{
                    sx: { color: green[600],fontWeight: "bold"}}}/>
                  </ListItem>
              <ListItem button component={Link} to="/add-income" >
                <ListItemText primary="Add Income"  primaryTypographyProps={{sx: { 
                  color: green[600],fontWeight: "bold"}}}/>
                </ListItem>
              <ListItem button component={Link} to="/add-expense" >
                <ListItemText primary="Add Expense"  primaryTypographyProps={{
                  sx: { color: green[600], fontWeight: "bold" } }} />
                </ListItem>
              <ListItem button component={Link} to="/all-transactions" >
                <ListItemText primary="All Transactions" primaryTypographyProps={{
                  sx: { color: green[600],fontWeight: "bold"}}} />
              </ListItem>
              <ListItem button component={Link} to="/income-trans" >
                <ListItemText primary="Income Transactions" primaryTypographyProps={{
                  sx: { color: green[600],fontWeight: "bold"}}} />
                </ListItem>
              <ListItem button component={Link} to="/expense-trans" >
                <ListItemText primary="Expense Transactions" primaryTypographyProps={{
                  sx: { color: green[600],fontWeight: "bold"}}} />
              </ListItem>
            </List>);

            return(
                  <Router>
                  <Box sx={{display:"flex",width: "100%" }}>
                      <Box  sx={{width:240 ,mt:2}}>
                         {menuList}
                      </Box>   
                       {/* Main Content */}
                       <Box component="main" sx={{ flexGrow: 1, p: 3 ,display: "block"  }}>
                           <Routes>
                            <Route path="/dashboard" element={<DashBoard />} />
                            <Route path="/add-income" element={<AddIncome />} />
                           <Route path="/add-expense" element={<AddExpense />} />
                            <Route path="/all-transactions" element={<AllTransactions />} />
                           <Route path="/income-trans" element={<IncomeTrans />} />
                           <Route path="/expense-trans" element={<ExpenseTrans />} />
                           <Route path="/" element={<Box><Typography   sx={{fontFamily:"Dancing Script" , fontWeight: "bold",
                                                     fontSize: { sm: "2rem", md: "3rem", lg: "4rem"  },lineHeight: 1.4,wordWrap: "break-word", }} >  Empower your Finances, Empower your Life</Typography> </Box>} />
                          </Routes>
                       </Box>
                  </Box>
                 </Router>
  );
}

export default LapLayout;