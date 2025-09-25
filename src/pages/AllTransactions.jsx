import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Box }from "@mui/material"
const AllTransactions = () =>{

        const {IncomeData,ExpenseData} =useContext(AppContext)
        const allTransactions=[...IncomeData,...ExpenseData]

return(
    <Box >
        <Box component="h1"  sx={{ fontFamily: "Dancing Script"}}> All Transactions</Box>
        <Box  sx={{ overflowX: "auto", width: "100%",borderRadius: "12px",
                 boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",mt: 2}}>
            <table style={{width: "100%", borderCollapse: "collapse",fontFamily: "Arial, sans-serif"}}>
                <thead>
                    <tr>
                        <th style={{ background: "#FF9A8B", color: "#fff", padding: "12px", textAlign: "left" }}>Name</th>
                        <th style={{ background: "#FF9A8B", color: "#fff", padding: "12px", textAlign: "left" }}>Category</th>
                        <th style={{ background: "#FF9A8B", color: "#fff", padding: "12px", textAlign: "left" }}>Date</th>
                        <th style={{ background:"#FF9A8B", color: "#fff", padding: "12px", textAlign: "left" }}>type</th>
                        <th style={{ background: "#FF9A8B", color: "#fff", padding: "12px", textAlign: "left" }}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {allTransactions.map((transaction,index)=>(
                        <tr key={index }style={{ borderBottom: "1px solid #ddd" }} >
                            <td style={{ padding: "10px" }}>
                                {transaction.description}
                            </td>
                            <td style={{ padding: "10px" }}>
                                {transaction.category}
                            </td>
                            <td style={{ padding: "10px" }}>
                                {(new Date (transaction.date).toLocaleDateString())}
                            </td>
                            <td  style={{ padding: "10px" }}>
                                {transaction.type==='income'?"income":"Expense"}
                            </td>
                            <td  style={{ padding: "10px" }}>
                                {transaction.amount}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Box>
    </Box>
)
}
export default AllTransactions;