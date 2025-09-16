import React, { useState ,useEffect} from "react";
import {Box,TextField,MenuItem,Button,Typography} from  '@mui/material';
import Ledger from "./Ledger";
//this is our child component which we are rendering in app.js
//we are using handleAddTransaction with the name onAdd from app.js and editData

const AddTransactionForm = ({ onAdd,editData }) => {
                              const [formData, setFormData] = useState({
                              date: "",
                              type: "income",
                              amount: "",
                              category: "",
                              note: ""
                            });


//every time transcation is edited reneder all controls textfield etc with fresh values
useEffect(() => {
                  if (editData) {
                                setFormData({ ...editData });
                                }
                }, [editData]);
  
  
const handleSubmit = (e) => {
            e.preventDefault();
            //storing all user input in transaction
            const transaction = {
                     ...formData,
                    id: formData.id||Date.now(),
                    amount: parseFloat(formData.amount)
                              };
    
    
onAdd(transaction); // send data to app.jsx handleaddtransaction function
//after adidng data render textfields and all controls with empty data
setFormData({ date:  new Date().toISOString().split("T")[0], type: "income", amount: "", category: "", note: "" });
};

const incomeCat = ["Salary", "Freelance", "Investments","Business","RentalIncome" ,"Other"];
const expenseCat = [ "Transport","Travel", "Rent", "Shopping", "Entertainment","Groceries","HealthCare","Education", "Miscellaneous"];
//we have a form with date type amount categor and note input along with a button
return (

  <form onSubmit={handleSubmit}>
      <h1>Add /Delete Transactions</h1>
      <Box sx={{display:'flex',flexDirection:{ xs: 'column', sm: 'row' },pl:'10',alignItems: { xs: 'center', sm: 'flex-start' }, gap:'9px'}} >
          <TextField type="date"  id="date" name="date" required value={formData.date} onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })}/>
          
          <TextField select label="Type" value={formData.type} onChange={(e) => 
                      setFormData({ ...formData, type: e.target.value })} sx={{ mb: 2 }}>
                  <MenuItem value="income">Income</MenuItem>
                  <MenuItem value="expense">Expense</MenuItem>
          </TextField>
           
          <TextField type="number"  label="amount" name="amount" value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: e.target.value })}  required />
          
           <TextField select   label="category" name="category" value={formData.category}
           onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })} required sx={{minWidth:190}}>
              {(formData.type === "income" ? incomeCat : expenseCat).map(
    (cat, idx) => (
      <MenuItem key={idx} value={cat} >
        {cat}
      </MenuItem>
    )
  )}
  </TextField>
          
          <TextField label="note" type="text" name="note" value={formData.note} onChange={(e) =>
                        setFormData({ ...formData, note: e.target.value })} />
     

          <Button type="submit" className="mirror-button">save</Button>
      
      </Box>
    {/*using child component Ledger.code is in ledger.jsx */}
      <Ledger></Ledger>
    </form>
  );

}
export default AddTransactionForm;