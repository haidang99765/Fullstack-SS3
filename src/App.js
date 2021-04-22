 import React from 'react';
import './App.css';
import ExpenseItem from './components/expenseItem'; //với thẻ tự định nghĩa thì phải viết hoa chữ cái đầu tiên
import Card from './components/Card';
import expenseForm from './components/expenseForm';

function App() { //đây là 1 React component, và đây cũng là JSX, JSX là JS + XML (HTML là 1 tập con của XML)
  const date = new Date();

  const expenseData = [
    {price: 20, description: "Dell", date: new Date(2021, 4, 22)},
    {price: 200, description: "Asus", date: new Date(2021, 3, 22)},
    {price: 20, description: "Gigabyte", date: new Date(2021, 1, 22)},
    {price: 1000, description: "Steelseries", date: new Date(2020, 2, 22)},
  ];

  return (
    <>
      <expenseForm/>
        <Card> 
          <ExpenseItem date={expenseData[0].date} price={expenseData[0].price} description={expenseData[0].description}>
              {/* <button>Click me</button> */}
          </ExpenseItem>
          <ExpenseItem date={expenseData[1].date} price={expenseData[1].price} description={expenseData[1].description}/> 
          <ExpenseItem date={expenseData[2].date} price={expenseData[2].price} description={expenseData[2].description}/> 
          <ExpenseItem date={expenseData[3].date} price={expenseData[3].price} description={expenseData[3].description}/> 
        </Card>
    </>
    );
}

export default App;
