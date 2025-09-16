import React,{useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import {Box,Button} from "@mui/material";
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIncome from "../pages/AddIncome";

const IncomeTrans = () =>
{
      const {IncomeData} =useContext(AppContext)
      const [editIncData, seteditIncData] = useState(null);

      const trans=[...IncomeData]
      const {delInc}=useContext(AppContext);
      const handleDeleteTransaction = (txn) => {
              delInc(txn);
       }
       
       const handleEditTransaction = (txn) => {
            seteditIncData({ ...txn});
    }

    const handleEditDone = () => {
      seteditIncData(null); // close form after save/cancel
    };

       return (
         
    <Box>
        <Box component="h2">Income Transactions:</Box>

      

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


  
{editIncData && (
        <Box mt={4}>
          <AddIncome editIncData={editIncData}   onClose={handleEditDone}  />
        </Box>
      )}


        </Box>
    
);
}

export default IncomeTrans;