import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Box }from "@mui/material"
const AllTransactions = () =>{

        const {IncomeData,ExpenseData} =useContext(AppContext)
        const allTransactions=[...IncomeData,...ExpenseData]

return(
    <Box >
        <Box component="h1"> All Transactions</Box>
        <Box>
            <table border="1">
                <thead>
                    <tr>
                        <th >Name</th>
                        <th >Category</th>
                        <th >Date</th>
                        <th >type</th>
                        <th >Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {allTransactions.map((transaction,index)=>(
                        <tr key={index } >
                            <td>
                                {transaction.description}
                            </td>
                            <td>
                                {transaction.category}
                            </td>
                            <td>
                                {(new Date (transaction.date).toLocaleDateString())}
                            </td>
                            <td>
                                {transaction.type==='income'?"income":"Expense"}
                            </td>
                            <td>
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