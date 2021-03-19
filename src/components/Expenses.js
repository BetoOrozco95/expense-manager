import React, {useState} from 'react';
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import BudgetControl from "./BudgetControl";
import PropTypes from 'prop-types';

const Expenses = ({totalBudget}) => {

    const [expenses, setExpenses] = useState([]);
    const [remainingBudge, setRemainingBudge] = useState(totalBudget);

    /* useEffect(() => {
         if(expenses.length > 0 ) {
            setRemainingBudge( totalBudget - expenses.reduce((a, b) => a + (b['total'] || 0), 0));
         }
     }, [expenses, totalBudget]);*/

    return (
        <div className='row'>
            <div className='one-half column'>
                <ExpenseForm
                    expenses={expenses}
                    setExpenses={setExpenses}
                    setRemainingBudge={setRemainingBudge}
                    remainingBudge={remainingBudge}
                />
            </div>
            <div className='one-half column'>
                <ExpenseList
                    expenses={expenses}
                />
                <BudgetControl
                    budget={totalBudget}
                    remainingBudge={remainingBudge}
                />
            </div>
        </div>
    );
};

Expenses.propTypes = {
    totalBudget: PropTypes.number.isRequired
};

export default Expenses;