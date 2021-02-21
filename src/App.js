import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import { OfficeState } from './hookReduser/officeState';

function App() {
    return (
        <>
            <OfficeState>
                <Header/>
                <Content/>
            </OfficeState>
        </>
    );
}

export default App;
