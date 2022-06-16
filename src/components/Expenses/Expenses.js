import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = ({expenses}) => (
  <Card className='expenses'>
      {expenses.map(({ title, amount, date }, i) => (
        <ExpenseItem title={title} amount={amount} date={date} key={i}/>
      ))}
  </Card>
)

export default Expenses;