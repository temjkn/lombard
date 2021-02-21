import React from 'react';
import Calendar from './Calendar';
import DepositItem from './DepositItem';

const Payments = () => {
    return (
        <div className='payments'>
            <div className='deposit-wrap'>
                <DepositItem/>
                <DepositItem/>
            </div>
            <div className='calendar-wrap'>
                <Calendar/>
            </div>
        </div>
    );
};

export default Payments;