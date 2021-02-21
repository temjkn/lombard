import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { OfficeContext } from '../hookReduser/officeContext';
import userImg from '../img/user.jpg';

const Login = () => {
    const {setTittle} = useContext(OfficeContext);
    return (
        <div className='login'>
            <img src={userImg} alt='avatar_img'/>
            <h2>Сильва Остап</h2>
            <div>
                <NavLink activeClassName = 'navActive' className='nav' to='/payments' onClick={()=>setTittle('Платежи')}>Платежи</NavLink>
                <NavLink activeClassName = 'navActive' className='nav' to='/messages' onClick={()=>setTittle('Уведомления')}>Уведомления</NavLink>
                <NavLink activeClassName = 'navActive' className='nav' to='/password' onClick={()=>setTittle('Изменить пароль')}>Изменить пароль</NavLink>
                <div>Выйти</div>
            </div>
            {/* <ul>
                <li>
                    <NavLink activeClassName = 'navActive' className='nav' to='/payments' onClick={()=>setTittle('Платежи')}>Платежи</NavLink>
                </li>
                <li>
                    <NavLink activeClassName = 'navActive' className='nav' to='/messages' onClick={()=>setTittle('Уведомления')}>Уведомления</NavLink>
                </li>
                <li>
                    <NavLink activeClassName = 'navActive' className='nav' to='/password' onClick={()=>setTittle('Изменить пароль')}>Изменить пароль</NavLink>
                </li>
                <li>
                    Выйти
                </li>
            </ul> */}
        </div>
    );
};

export default Login;