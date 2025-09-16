import React,{ useContext,useState } from "react";
import { AppContext } from "../context/AppContext";
import {Box,Button} from "@mui/material";

import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


import AddExpense from "../pages/AddExpense";

const ExpenseTrans = () =>
{
    const {ExpenseData} =useContext(AppContext)
    const [editExpData, seteditExpData] = useState(null);    
    const trans=[...ExpenseData]
    const {delExp}=useContext(AppContext);
     const handleDeleteTransaction = (txn) => {
    delExp(txn);
       }
       const handleEditTransaction = (txn) => {
        seteditExpData({...txn});
        
           }

           const handleEditDone = () => {
                seteditExpData(null); // close form after save/cancel
              };


     return (
         
    <Box>
        <h2>Expense Transactions:</h2>
    
        <List sx={{ padding: 0 }}>
             {trans.map((transaction, index) => (
               <ListItem
                 key={index}
                 divider
                 sx={{
                   display: "flex",
                   justifyContent: "space-between",
                   alignItems: "center",
                 }}
               >
                 {/* Transaction details */}
                 <ListItemText
                   primary={`${new Date(transaction.date).toLocaleDateString()} — ${transaction.description}`}
                   secondary={`${transaction.type} | ${transaction.category} | ₹${transaction.amount}`}
                 />
           
                 
                 <ListItemSecondaryAction>
                   <IconButton
                     edge="end"
                     color="primary"
                     onClick={() => handleEditTransaction(transaction)}
                     sx={{ mr: 1 }}
                   >
                     <EditIcon />
                   </IconButton>
                   <IconButton
                     edge="end"
                     color="error"
                     onClick={() => handleDeleteTransaction(transaction)}
                   >
                     <DeleteIcon />
                   </IconButton>
                 </ListItemSecondaryAction>
               </ListItem>
             ))}
           </List>
           
    

{editExpData && (
        <Box mt={4}>
          <AddExpense editExpData={editExpData}      onClose={handleEditDone} />
        </Box>
      )}
        </Box>
    
);
}

export default ExpenseTrans;