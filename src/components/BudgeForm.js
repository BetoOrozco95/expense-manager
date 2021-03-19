import React, {useState} from 'react';
import Error from "./Error";
import PropTypes from 'prop-types';

const BudgeForm = ({ setShowBudgeForm, setTotalBudget }) => {
    const [budge, setBudge] = useState(0);
    const [error, setError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        //Validation for budget, must be a number and greater than 0
        if (budge < 1 || isNaN(budge)) {
            setError(true);
            return;
        }

        // Clear error state
        setError(false);

        // Hide this component when budget is submitted correctly
        setShowBudgeForm(false);

        // Save new budget
        setTotalBudget(budge)
    };

    return (
        <div>
            <h2>WEEKLY BUDGET</h2>
            {
                error && <Error message='Budge is not valid'/>
            }
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Place your budge'
                    onChange={e => setBudge(parseInt(e.target.value))}
                />
                <input
                    type='submit'
                    value='Save budge'
                    className='button-primary u-full-width'
                />
            </form>
        </div>
    );
};

BudgeForm.propTypes = {
    setShowBudgeForm: PropTypes.func.isRequired,
    setTotalBudget: PropTypes.func.isRequired,
};

export default BudgeForm;