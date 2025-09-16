import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function Ledger() {
                    //initial values showInput is false month is empty and summary is null
                    const [showInput, setShowInput] = useState(false);
                    const [month, setMonth] = useState('');
                    const [summary, setSummary] = useState(null);
                    //as soon as user clicks ledger button
                    const handleLedgerClick = () => {
                                    setShowInput(true);//showInput is true so that data can be renderd
                                    setSummary(null); // reset previous result
                                                    };

const handleMonthChange = (e) => {
                                setMonth(e.target.value); //"2024-01"
                                  };
//user provides month and year and ask to calculate net income
const handleCalculate = () => {
  //get the data from local storage and save it in stored object
    const stored = localStorage.getItem('transactions');
    if (!stored) return;
    //initialize allData with empty object
    let allData = {};


    try {
          allData = JSON.parse(stored);//now we have all transactions in allData
        } catch (error) {
          console.error('Error parsing transactions:', error);
          return;
        }


    
    const [year, mon] = month.split('-');//getting the year and month input from user
    const yearTransactions = allData[year]; // now we are getting data only of input year in yearTransactions
        //if that year contains no transcations totalIncome and totalExpense will be zero
    if (!Array.isArray(yearTransactions)) {
            console.log('No transactions for selected year');
              setSummary({
              totalIncome: 0,
              totalExpense: 0,
              net: 0,
                });
              return;
        }
//if input year contains some transcations the following code will run 
    let totalIncome = 0;//initializing variable with 0
    let totalExpense = 0;//initializing variable with 0
//for each transaction in a particular input user
    yearTransactions.forEach((tx) => {
      const txDate = new Date(tx.date);//extract date from data retrieved from local storage for each transaction
      const txYear = txDate.getFullYear().toString();//from this date get year and month
      const txMonth = (txDate.getMonth() + 1).toString().padStart(2, '0');
      //we have txYear and txMonth containing retrieved  data from local storage for a parrticular year
      //if this data matches with user input mon we will increase total income and totalExpense respectively
      if ( txMonth === mon) {
        if (tx.type === 'income') {
          totalIncome += Number(tx.amount);
        } else if (tx.type === 'expense') {
          totalExpense += Number(tx.amount);
        }
      }
    });
//evaluated total  income and expense will be set in summary variable 
    setSummary({
      totalIncome,
      totalExpense,
      net: totalIncome - totalExpense,
    });
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Button  className="mirror-button"       onClick={handleLedgerClick}>
        Ledger
      </Button>
      {/*conditional rendering if showInput is true show date and button  */}
      {showInput && (
        <Box sx={{ mt: 2 }}>
          <TextField type="month" label="Select Month" InputLabelProps={{ shrink: true }}
                 onChange={handleMonthChange}/>
          <Button  className="mirror-button"      variant="outlined" sx={{ ml: 2 }} onClick={handleCalculate}>
            Calculate
          </Button>
        </Box>
      )}
{/*if summary is containig some calculated values render the calculations to user  */}
      {summary && (
        <Box sx={{ mt: 3 }}>
          <Typography>Total Income: ₹{summary.totalIncome}</Typography>
          <Typography>Total Expense: ₹{summary.totalExpense}</Typography>
          <Typography fontWeight="bold">Net Income: ₹{summary.net}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default Ledger;