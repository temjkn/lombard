import React, { useReducer } from 'react';
import { OfficeContext } from './officeContext';
import { TITTLE,OfficeReducer } from './officeReducer';

export const OfficeState = ({children}) =>{
    const initialState = {
        tittle: '',
        historyPayments: [
            {
                year: 2018,
                payments:[
                    {
                        month : 'Январь',
                        price : 10567,
                        status : false
                    },
                    {
                        month : 'Декабрь',
                        price : 10502,
                        status : false
                    },
                    {
                        month : 'Январь',
                        price : 17250,
                        status : true
                    },
                    {
                        month : 'Январь',
                        price : 10567,
                        status : false
                    },
                    {
                        month : 'Август',
                        price : 10502,
                        status : false
                    },
                    {
                        month : 'Октябрь',
                        price : 17250,
                        status : false
                    },
                ]
            },
            {
                year: 2019,
                payments:[
                    {
                        month : 'Январь',
                        price : 10567,
                        status : true
                    },
                    {
                        month : 'Август',
                        price : 10502,
                        status : false
                    },
                    {
                        month : 'Октябрь',
                        price : 17250,
                        status : true
                    },
                ]
            },
            {
                year: 2020,
                payments:[
                    {
                        month : 'Январь',
                        price : 10567,
                        status : false
                    },
                    {
                        month : 'Август',
                        price : 10502,
                        status : false
                    },
                    {
                        month : 'Октябрь',
                        price : 17250,
                        status : false
                    },
                ]
            },
        ]
    }

    const [state,dispatch] = useReducer(OfficeReducer, initialState);

    const setTittle = (tittle) => dispatch({type: TITTLE,tittle})

    return (
        <OfficeContext.Provider value = {{
            setTittle,
            tittle : state.tittle,
            historyPayments : state.historyPayments
        }}
        >
            {children}
        </OfficeContext.Provider>
    )
}