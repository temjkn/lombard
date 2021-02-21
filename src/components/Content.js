import React, { useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { OfficeContext } from '../hookReduser/officeContext';

import Login from "./Login";
import Messages from "./Messages";
import Payments from "./Payments";

const Content = () => {
    const {tittle} = useContext(OfficeContext);
    return (
        <div className="l-container">
            <BrowserRouter>
                    <h1 className='officeTitle'>{tittle}</h1>
                    <div className='content-wrap'>
                        <Login/>
                        <div>
                            <Route path="/payments" render={()=>
                                <Payments/>
                            }/>
                            <Route path="/messages" render={()=>
                                <Messages/>
                            }/>
                        </div>
                    </div>
            </BrowserRouter>
        </div>
    );
};

export default Content;