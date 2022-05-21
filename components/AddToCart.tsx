import {ContextProvider} from '../AppContext';
import {useState} from 'react';

const AddToCart = () => {
    const {number, setNumber, ClickAdd, ClickMinus, setAddItem, addItem} = ContextProvider();
    
    const AddCart = () => {
        if(number>0){
            setAddItem(true);
        }
    }

    return (
        <div className="sm:flex sm:items-center">
            <div className="flex place-content-around items-center px-1 h-[56px] gap-6 bg-[#F6F8FD] font-semibold rounded-lg box-border mx-3 justify-self-center my-5 sm:min-w-[157px]">
                <div className="cursor-pointer">
                    <img src="/images/icon-minus.svg" alt="" onClick={ClickMinus}/>
                </div>
                <div>{addItem? 0: number}</div>
                <div className="cursor-pointer">
                    <img src="/images/icon-plus.svg" alt="" onClick={ClickAdd}/>
                </div>
            </div>
            <div className="flex place-content-center gap-5 bg-orange h-[56px] px-1 rounded-lg mx-3 justify-self-center items-center text-xs font-semibold text-[rgb(255,255,255)] sm:min-w-[230px] cursor-pointer cart-shadow hover:opacity-60" onClick={AddCart}>
                <div className="w-4 h-4">
                    <img src="/images/icon-cart-white.svg" alt="" className="cart"/>
                </div>
                <span onClick={AddCart}>Add to cart</span>
            </div>
        </div>
    );
}

export default AddToCart;