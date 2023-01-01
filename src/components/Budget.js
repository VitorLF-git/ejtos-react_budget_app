
import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';




const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [localBudget, setLocalBudget] = useState('');

    const setBudget = (event) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: event,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
            <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    step='10'
                    style={{ marginLeft: '2rem', size: 10 }}
                    onChange={(event) => setBudget(event.target.value)}>

                </input>
            </span>
        </div>
    );
};

export default Budget;