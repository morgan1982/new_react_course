import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Car Insuranse', amount: 294.4, date: new Date(2021, 2, 28)},
    { title: 'SuperMarket', amount: 300, date: new Date(2021, 2, 29)},
    { title: 'Taxes', amount: 500, date: new Date(2021, 3, 28)},
    { title: 'Toys', amount: 25, date: new Date(2021, 3, 10)}
  ]

  const numbers = [1, 2, 3, 4];

  const double = (nums) => nums.map(num => num * 2)

  console.log(double(numbers))

  return (
    <div className="App">
      {expenses.map(({ title, amount, date }, i) => (
        <ExpenseItem title={title} amount={amount} date={date} key={i}/>
      ))}
    </div>
  );
}

export default App;
