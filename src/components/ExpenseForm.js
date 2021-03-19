import React, {useState} from 'react';
import Error from "./Error";
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';

const ExpenseForm = ({expenses, setExpenses,setRemainingBudge, remainingBudge}) => {

    const initialError = {
        status: false,
        message: 'Sin error'
    };
    const initialExpense = {
        id: '',
        name: '',
        total: ''
    };


    const [error, setError] = useState(initialError);
    const [expense, setExpense] = useState(initialExpense);

    const {name, total} = expense;
    const {status: errorStatus, message: errorMessage} = error;

    const handleFieldsFormChange = e => {
        setExpense({
            ...expense,
            [e.target.name]: parseInt(e.target.value) ?  parseInt(e.target.value) : e.target.value
        })
    };

    const handleFormSubmit = e => {
        e.preventDefault();

        // Prevent blank fields
        for (const index in expense) {
            if (index === 'id') continue;
            if (!expense[index]) {
                setError({
                    status: true,
                    message: 'All fields are required'
                });
                return;
            }
        }

        //Validation for budget, must be a number and greater than 0
        if (total < 1 || isNaN(total)) {
            setError({
                status: true,
                message: 'The field "Spending amount" must be a valid amount expense'
            });
            return;
        }

        // Clear error state
        setError(initialError);

        //Create new expense width id
        setExpenses([
            ...expenses,
            {
                ...expense,
                id: uuidv4()
            }
        ]);

        // Subtract the current budget amount to the total
        setRemainingBudge(remainingBudge - total);

        // Clear expense form
        setExpense(initialExpense);
    };


    return (
        <>
            <h2>Expense form</h2>
            {
                errorStatus && <Error message={errorMessage}/>
            }
            <form
                onSubmit={handleFormSubmit}
            >
                <div className='field'>
                    <label>Expense name</label>
                    <input
                        placeholder='Exam. Gasoline'
                        type='text'
                        className='u-full-width'
                        name='name'
                        value={name}
                        onChange={handleFieldsFormChange}
                    />
                </div>

                <div className='field'>
                    <label>Spending amount</label>
                    <input
                        placeholder='Exam. 500'
                        type='number'
                        className='u-full-width'
                        name='total'
                        value={total}
                        onChange={handleFieldsFormChange}
                    />
                </div>

                <input
                    placeholder='Exam. 500'
                    type='submit'
                    className='button-primary u-full-width'
                    value='Add expense'
                />

            </form>
        </>
    );
};

ExpenseForm.propTypes = {
    expenses: PropTypes.array.isRequired,
    setExpenses: PropTypes.func.isRequired,
    setRemainingBudge: PropTypes.func.isRequired,
    remainingBudge: PropTypes.number.isRequired
};

export default ExpenseForm;