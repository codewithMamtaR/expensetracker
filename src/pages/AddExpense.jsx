import React, { useState ,useEffect,useContext} from "react";
import {Box,TextField,MenuItem,Button,Typography} from  '@mui/material';
import {AppContext} from "../context/AppContext";

const AddExpense = ({editExpData,onClose}) =>
{

    const {addExp}=useContext(AppContext);
    const [formData,setformData]=useState({
        amount:"",
        type:"Expense",
        category:"",
        description:""
        ,date:""
    })

     useEffect(() => {
          if (editExpData) {
                        setformData({ ...editExpData });
                        }
        }, [editExpData]);


    const handleSubmit =(e)=>{
        e.preventDefault()
        const amount=Number(formData.amount)
        const  id=formData.id || Date.now()
        
        addExp(amount,formData.type,formData.category,formData.description,formData.date,id)
        setformData({
          amount:"",
          type:"Expense",
          category:"",
          description:"",
          date:"",
          id:null
      });
      if (onClose) onClose(); 
  
    
    }

    return (

      <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display:'flex',
        flexDirection:'column',
        background: "#fff",
        padding: "12px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",gap:3,
        width: { xs: "90%", sm: "320px", md: "350px" }, 
        maxWidth: "100%"
      }}
    >
     
<Typography variant="h4" sx={{ color:"#5D3FD3", fontSize: "24px" }}>
  Add Expense Form
</Typography>
  <TextField type="date" label="Enter Date"  id="date" name="date" InputLabelProps={{
    shrink: true }} required value={formData.date} onChange={(e) =>
                        setformData({ ...formData, date: e.target.value })}/>
          
          
            
          <TextField type="number"  label="Enter Amount" name="amount" value={formData.amount}
          onChange={(e) =>
            setformData({ ...formData, amount: e.target.value })}  required />
  
          
           <TextField select   label="Enter Category" name="category" value={formData.category}
           onChange={(e) =>
            setformData({ ...formData, category: e.target.value })} required sx={{minWidth:190}}>
                    <MenuItem value="Transport">Transport</MenuItem>
                    <MenuItem value="Travel">Travel</MenuItem>
                        <MenuItem value="Rent">Rent</MenuItem>
                <MenuItem value="Shoppiing">Shopping</MenuItem>              
                    <MenuItem value="Entertainment">Entertainment</MenuItem>
                    <MenuItem value="Groceries">Groceries</MenuItem>
                    <MenuItem value="Healthcare">Healthcare</MenuItem>
                    <MenuItem value="Education">Education</MenuItem>
                    <MenuItem value="Miscellnaeous">Miscellaneous</MenuItem>
            </TextField>
                   
            <TextField   label="Enter Description" name="description" value={formData.description}
               onChange={(e) =>
                 setformData({ ...formData, description: e.target.value })}   />        
<Box
  sx={{
    display: "flex",
    gap: 2,
    flexWrap: "wrap", 
    justifyContent: "center", 
  }}
>
          
      <Button type="submit">{editExpData ? "Update" : "Add"}</Button>
      {onClose && <Button type="Button" onClick={onClose}>Cancel</Button>}
      </Box>
      </Box>
  );

}
export default AddExpense;