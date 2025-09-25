import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {Box,Typography,useTheme, useMediaQuery} from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, Legend ,ResponsiveContainer} from "recharts";

const DashBoard = ()=>{

    const {IncomeData,ExpenseData} = useContext(AppContext);
    const totalIncome=IncomeData.reduce((sum,item) =>sum +parseFloat(item.amount),0);
    const totalExpense=ExpenseData.reduce((sum,item) =>sum +parseFloat(item.amount),0);
    const totalBalance=parseFloat(totalIncome-totalExpense);

    const data = [
        { name: "Inc", value: totalIncome },
        { name: "Exp", value: totalExpense },
        { name: "Bal", value: totalBalance },
      ];
    
     const COLORS=["#FF9A8B", "#FF6A88", "#FF99AC"];
     
     const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("md")); 
     return (
          <>
<Box sx={{ width: "100%" }}>

      <Box sx={{ mb: 2 }}>
        <Typography component="h1" sx={{ fontFamily: "Dancing Script", fontSize: "40px", fontWeight: "bold" }}>
          DashBoard
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography component="h3" sx={{ fontSize: "1.2rem" ,fontFamily: "Dancing Script"}}>
          Income vs Expense vs Balance
        </Typography>
      </Box>

      <Box sx={{  display: "flex", flexDirection: isLaptop ? "row" : "column", gap: 4,width: "100%"  }} >
      
      <Box  sx={{ minHeight: isLaptop ? 500 : 300 ,  minWidth: isLaptop ? "90%" : "100%",flex: 1,overflow: "visible",position: "relative"  }}>
      <ResponsiveContainer width="100%" height={isLaptop ? 500 : 300}   overflow="visible">
      
      <PieChart margin={{ top: 20, right: 40, left: 40, bottom: 20 }} >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={isLaptop ? "90%" : "70%"}
          fill="#8884d8"
          dataKey="value"
          label={({ name, value }) => `${name}: ${value}`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip   wrapperStyle={{ zIndex: 2000 }}   />
        <Legend />

      </PieChart>
      
      </ResponsiveContainer>

</Box>
   


      <Box   sx={{ flex: 1,display: "flex",flexDirection: "column",gap: 3}}>
           
            <Box>
                <Box component="h1" sx={{fontFamily: "Dancing Script"}}>Total Income</Box>
                <Typography>₹{totalIncome.toFixed(2)}</Typography>
            </Box>
        
            <Box>
                <Box component="h1" sx={{fontFamily: "Dancing Script"}} >Total Expense</Box>
                <Typography>₹{totalExpense.toFixed(2)}</Typography>
            </Box>

            <Box>
              <Box component="h1" sx={{fontFamily: "Dancing Script"}}>Total Balance</Box>
              <Typography>₹{totalBalance.toFixed(2)}</Typography>
           </Box>
    </Box>
    </Box>
 </Box>   
    </>
    )
}
export default DashBoard;