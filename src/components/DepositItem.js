import React, { useState } from 'react';
import dropdownImg from '../img/dropdown.jpg'

const DepositItem = () => {
    const [dropdown, setDropdown] = useState(false)
    const handleClickDropdown = () => {
        dropdown ? setDropdown(false) : setDropdown(true)
    }
    return (
        <div>
            <div className='deposit-item'>
                <div className='deposit-item_left'>
                    <div className='deposit-item-row'>
                        <h3 className='deposit-subtittle'>Залог кольца</h3>
                        <div className='deposit-price_item'>20000 тг</div>
                    </div>
                    <div className='deposit-item-row'>
                        <span className='deposit-item_description'>Следующий платёж 19.11.2019</span>
                        <span className='deposit-item_description gray'>ежемесячно</span>
                    </div>
                </div>
                <div onClick={()=>handleClickDropdown()}>
                    <img className={dropdown ? 'rotate' : null} src={dropdownImg} alt='dropdown'/>
                </div>
            </div>
            {dropdown ?
                <div className='deposit-wrap-description'>
                    <h2 className='deposit-tittle'>ЗАЛОГ КОЛЬЦА</h2>
                    <span className='deposit-text'>Сумма займа</span>
                    <div className='deposit_price'>20000 тг</div>
                    <div className='deposit-description'>
                        <h3>Подробно</h3>
                        <div className='deposit-description-row'>
                            <p className='deposit-description-item gray'>Название</p>
                            <p className='deposit-description-item'>Залог кольца</p>
                        </div>
                        <div className='deposit-description-row'>
                            <p className='deposit-description-item gray'>Дата получения:</p>
                            <p className='deposit-description-item'>02.02.2019</p>
                        </div>
                        <div className='deposit-description-row'>
                            <p className='deposit-description-item gray'>Заложено:</p>
                            <p className='deposit-description-item'>Кольцо</p>
                        </div>
                    </div>
                </div>
            : null}
        </div>
    );
};

export default DepositItem;