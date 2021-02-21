import React, { useContext, useState } from 'react';
import { OfficeContext } from '../hookReduser/officeContext';
import CalendarItem from './CalendarItem';

const Calendar = () => {
    const {historyPayments} = useContext(OfficeContext);
    const [tabIndex,setTabIndex] = useState(1);
    return (
        <>
            <div className='calendar-btn-wrap'>
                {historyPayments.map((item, index) => (
                    <button
                        className={tabIndex == index ? ' calendar-btn active' : 'calendar-btn'}
                        key = {index}
                        onClick = {() => setTabIndex(index)}
                    >
                        {item.year}
                    </button>
                ))}
            </div>
            <div className='calendar-items-wrap'>
                {historyPayments[tabIndex].payments.map((item,index)=>(
                    <CalendarItem key = {index} month = {item.month} price = {item.price} status = {item.status}/>
                ))}
            </div>
        </>
    );
};

export default Calendar;