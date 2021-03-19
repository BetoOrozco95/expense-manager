import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({expense}) => {
    const {name, total} = expense;
    return (
        <li>
            <p>
                {name}
                <span className='expense'>$ {total}</span>
            </p>
        </li>
    );
};

Expense.propTypes = {
    expense: PropTypes.object.isRequired
};

export default Expense;