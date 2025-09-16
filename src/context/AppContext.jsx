import {children, createContext, useEffect, useState} from  "react";

import {toast} from 'react-toastify';

//context api allows u to share state across the entire app  or between multiple components without passing
//props manually


//we are giving values to everyone


export const AppContext= createContext ();
 const AppContextProvider = ({children}) =>{
    
    const [ExpenseData,setExpenseData] =useState([])
    const [IncomeData,setIncomeData] =useState([])
    

    useEffect(() => {
        const storedIncome = JSON.parse(localStorage.getItem("IncomeInfo")) || [];
        const storedExpense = JSON.parse(localStorage.getItem("ExpenseInfo")) || [];
        setIncomeData(storedIncome);
        setExpenseData(storedExpense);
      }, []);




    const addInc=async(amount,type,category,description,date,id)=>
{
    
    
    try{
        

        const existing = JSON.parse(localStorage.getItem("IncomeInfo")) || [];
      
        // 2. Create a new transaction object



        const newTransaction = {
          
          amount,
          type,
          category,
          description,
          date,
          id
        };
    
  
  
        const index = existing.findIndex(txn => txn.id === id);
        //if no match it returns -1

        let updated;
        if (index !== -1) {
          // ✅ Update existing transaction
          existing[index] = newTransaction;
          updated = [...existing];
          toast.success("Income updated");
        } else {
          // ✅ Add new transaction
          updated = [...existing, newTransaction];
          toast.success("Income added");
        }
    
  
  
        
    
        // 4. Save back to localStorage
        localStorage.setItem("IncomeInfo", JSON.stringify(updated));
    
        // 5. Update state (optional, if you are showing transactions in UI)
        setIncomeData(updated);
    
        
      } 
    
    catch(error)
    {
        console.log(error)
    }

};

const addExp=async(amount,type,category,description,date,id)=>
    {
        
        
        try{
            
    
            const existing = JSON.parse(localStorage.getItem("ExpenseInfo")) || [];
          
            // 2. Create a new transaction object
            const newTransaction = {
              
              amount,
              type,
              category,
              description,
              date,
              id
            };
        
            // 3. Add the new transaction to array
            const index = existing.findIndex(txn => txn.id === id);

            let updated;
            if (index !== -1) {
              // ✅ Update existing transaction
              existing[index] = newTransaction;
              updated = [...existing];
              toast.success("Expense updated");
            } else {
              // ✅ Add new transaction
              updated = [...existing, newTransaction];
              toast.success("Expense added");
            }
        
      
      
            
        
            // 4. Save back to localStorage
            localStorage.setItem("ExpenseInfo", JSON.stringify(updated));
        
            // 5. Update state (optional, if you are showing transactions in UI)
            setExpenseData(updated);
    
            // 6. Show success
            
          } 
        
        catch(error)
        {
            console.log(error)
        }
    
    };

    const delInc=async(txn)=>
      {
          
          
          try{
            const existing = JSON.parse(localStorage.getItem("IncomeInfo")) || [];

            // 2. Remove the transaction with the given id
            const updated = existing.filter((tx) => tx.id !== txn.id);
          
      
            localStorage.setItem("IncomeInfo", JSON.stringify(updated));
            
       
      
          
      
              setIncomeData(updated);
      
        
              toast.success("Income deleted");
            } 
          
          catch(error)
          {
              console.log(error)
          }
      
      };
  

      const delExp=async(txn)=>
        {
            
            
            try{
              const existing = JSON.parse(localStorage.getItem("ExpenseInfo")) || [];
  
              // 2. Remove the transaction with the given id
              const updated = existing.filter((tx) => tx.id !== txn.id);
            
        
              localStorage.setItem("ExpenseInfo", JSON.stringify(updated));
              
         
        
            
        
                setExpenseData(updated);
        
          
                toast.success("Expense deleted");
              } 
            
            catch(error)
            {
                console.log(error)
            }
        
        };
    
  

    
    return (
       < AppContext.Provider value = {{addExp,addInc,IncomeData,ExpenseData,delInc,delExp}} >
    {children}
    </AppContext.Provider>
    );
};

export default AppContextProvider;