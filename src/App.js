import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/ExpenseItem';

function App() {

  const numbers = [1, 2, 3, 4];

  const double = (nums) => nums.map(num => num * 2)

  console.log(double(numbers))

  return (
    <div className="App">
      <ExpenseItem/>
    </div>
  );
}

export default App;
