import React, { useState ,useEffect,useContext} from "react";
import {Box,TextField,MenuItem,Button,Typography} from  '@mui/material';
import {AppContext} from "../context/AppContext";

//    <Box sx={{display:'flex',flexDirection:{ xs: 'column', sm: 'row' },pl:'10',alignItems: { xs: 'center', sm: 'flex-start' }, gap:'9px'}} >


const AddIncome = ({editIncData,onClose}) =>
{
    const {addInc}=useContext(AppContext);
    
    const [formData,setformData]=useState({
        amount:"",
        type:"income",
        category:"",
        description:""
        ,date:""
    })

    useEffect(() => {
      if (editIncData) {
                    setformData({ ...editIncData });
                    }
    }, [editIncData]);

  const handleSubmit =(e)=>{
        e.preventDefault()
        const amount=Number(formData.amount)
       const  id=formData.id || Date.now()
        addInc(amount,formData.type,formData.category,formData.description,formData.date,id)
        setformData({
          amount: "",
          type: "income",
          category: "",
          description: "",
          date: "",
          id: null
        });
        if (onClose)
           onClose(); 
    }

    return (

      <Box component="form" onSubmit={handleSubmit}
      sx={{ display:'flex', flexDirection:'column',
        background: "#fff",padding: "12px", borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",gap:3, 
        width: { xs: "90%", sm: "320px", md: "350px" },
        maxWidth: "100%", 
      }}
    >
     
<Typography variant="h4" sx={{ color:"#5D3FD3", fontSize: "24px" }}>
  Add Income Form
</Typography>
          
          <TextField label="Enter Date" type="date"  id="date" name="date" InputLabelProps={{
    shrink: true }} required value={formData.date} onChange={(e) =>
                        setformData({ ...formData, date: e.target.value })}/>
          
    <TextField type="number"  label="Enter Amount" name="amount" value={formData.amount}
          onChange={(e) =>
            setformData({ ...formData, amount: e.target.value })}  required />
    <TextField select   label="Enter Category" name="category" value={formData.category}
           onChange={(e) =>
            setformData({ ...formData, category: e.target.value })} required sx={{minWidth:190}}>
                    <MenuItem value="salary">salary</MenuItem>
                    <MenuItem value="business">business</MenuItem>
                        <MenuItem value="freelance">freelance</MenuItem>
                <MenuItem value="rental income">rental income</MenuItem>              
                    <MenuItem value="others">others</MenuItem>
            </TextField>
          
          
            <TextField   label="Enter Description" name="description" value={formData.description}
          onChange={(e) =>
            setformData({ ...formData, description: e.target.value })}   />        
     <Box
  sx={{
    display: "flex",
    gap: 2,
    flexWrap: "wrap", // allows wrapping
    justifyContent: "center", // keeps them centered
  }}

  >   
   <Button type="submit" className="mirror-button" sx={{color:"#5D3FD3"}}>{editIncData ? "Update" : "Add"}</Button>
  {onClose && <Button type="Button" onClick={onClose}>Cancel</Button>} 
</Box>      
    
    </Box>
  );

};
export default AddIncome;