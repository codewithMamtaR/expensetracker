import React,{useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import {Box} from "@mui/material";
import { List, ListItem, ListItemText,  IconButton } from "@mui/material";
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
        <Box component="h2"  sx={{ fontFamily: "Dancing Script"}}>Income History:</Box>

      

<List sx={{ padding: 0 }}>
  {trans.map((transaction, index) => (
    <ListItem
      key={index}
      divider
      sx={{
        display: "flex",flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", sm: "center" },gap:1
      }}
    >
      {/* Transaction details */}
      <ListItemText
        primary={`${new Date(transaction.date).toLocaleDateString()} — ${transaction.description}`}
        primaryTypographyProps={{
          sx: {
            fontWeight: 500,
            whiteSpace: { xs: "normal", sm: "nowrap" }, // wrap on mobile, single line on bigger screens
          },
        }}
        secondary={`${transaction.type} | ${transaction.category} | ₹${transaction.amount}`}
      />

      
<Box sx={{ display: "flex", gap: 1, alignSelf: { xs: "flex-end", sm: "center" } }}>
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
      </Box>
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