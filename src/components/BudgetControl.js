import React from 'react';
import PropTypes from 'prop-types';

const BudgetControl = ({budget, remainingBudge}) => {

    //Get percent for get css class
    const percent = ((budget - remainingBudge) / (budget)) * 100;

    let alertType = 'alert-danger';
    if (percent < 33) {
        alertType = 'alert-success';
    } else if (percent < 66) {
        alertType = 'alert-warning';
    }
    return (
        <>
            <div className='alert alert-primary'>
                Budget: $ {budget}
            </div>
            <div className={`alert ${alertType}`}>
                Remaining budge: $ {remainingBudge}
            </div>
        </>
    );
};

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    remainingBudge: PropTypes.number.isRequired
};


export default BudgetControl;