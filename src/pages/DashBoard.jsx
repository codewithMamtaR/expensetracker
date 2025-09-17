import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {Box,Typography} from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, Legend ,ResponsiveContainer} from "recharts";

const DashBoard = ()=>{

    const {IncomeData,ExpenseData} = useContext(AppContext);
    const totalIncome=IncomeData.reduce((sum,item) =>sum +parseFloat(item.amount),0);
    const totalExpense=ExpenseData.reduce((sum,item) =>sum +parseFloat(item.amount),0);
    const totalBalance=parseFloat(totalIncome-totalExpense);

    const data = [
        { name: "Income", value: totalIncome },
        { name: "Expense", value: totalExpense },
        { name: "Balance", value: totalBalance },
      ];
    
     const COLORS=["#FF9A8B", "#FF6A88", "#FF99AC"];
     return (
          <>
<Box >

 <Box component="h1" sx={{ fontFamily:"Dancing Script" ,fontSize:"40 px"}}>DashBoard</Box>

      <Box component="h3">Income vs Expense vs Balance</Box>

      <Box sx={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>

      <PieChart >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label={({ name, value }) => `${name}: ${value}`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

</ResponsiveContainer>
</Box>
   


      <Box>
           
            <Box>
                <Box component="h1">Total Income</Box>
                <Typography>₹{totalIncome.toFixed(2)}</Typography>
            </Box>
        
            <Box>
                <Box component="h1" >Total Expense</Box>
                <Typography>₹{totalExpense.toFixed(2)}</Typography>
            </Box>

            <Box>
              <Box component="h1">Total Balance</Box>
              <Typography>₹{totalBalance.toFixed(2)}</Typography>
           </Box>
    </Box>
    
 </Box>   
    </>
    )
}
export default DashBoard;