import React from 'react';
import Expense from "./Expense";
import PropTypes from 'prop-types';

const ExpenseList = ({expenses}) => {
    return (
        <div className='expenses-incurred'>
            <h2>Expenses incurred</h2>
            {
                expenses && expenses.length > 0 ? (
                    expenses.map(expense => (
                        <Expense
                            expense={expense}
                            key={expense.id}
                        />
                    ))
                ) : (
                    <p>Without expenses</p>
                )
            }

        </div>
    );
};

ExpenseList.propTypes = {
    expenses: PropTypes.array.isRequired
};

export default ExpenseList;