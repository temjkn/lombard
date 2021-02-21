import React from 'react';

const CalendarItem = ({month,price,status}) => {
    return (
        <div className='calendar-item'>
            <span className='calendar-item-month'>{month}</span>
            <span className='calendar-item-price'>{price} тг.</span>
            {status ?
                <button className='calendar-item-status active' onClick={() => alert('Оплатить')}>Оплатить</button>
                : <div className='calendar-item-status'>Погашен</div>
            }
        </div>
    );
};

export default CalendarItem;