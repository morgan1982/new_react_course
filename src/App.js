import './App.css';

import Expenses from './components/Expenses/Expenses';

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
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
