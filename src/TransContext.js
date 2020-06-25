import React, {createContext,useReducer} from 'react';
import TransactionReducer from './TransReducer';


const initalTransactions = [
    {description:'Food',amount: +40},
    {description:'Bike',amount: +500},
    {description:'camera',amount: -100},

]

export const TransactionContext =  createContext(initalTransactions);


export const TransactionProvider = ({children}) => {
          let [state,dispatch] = useReducer(TransactionReducer,initalTransactions);
        
        
          function addTransaction(transObj){
              dispatch({
                  type: 'ADD',
                  payload: {
                      amount: transObj.amount,
                      description: transObj.description
                  }
              })
          }


          return(
                   <TransactionContext.Provider value= {{
                           transactions: state,
                           addTransaction
                        }
                   }>
                     {children}
                  </TransactionContext.Provider>
          )


        }
