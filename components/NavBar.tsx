import {useState} from 'react';
import SmallMenu from './SmallMenu';
import Cart from './Cart';
import {ContextProvider} from '../AppContext';

const NavBar = () => {
    const {menuOpen, setMenuOpen, setCartOpen, cartOpen, number} = ContextProvider()
    
    const showMenu = () => {
        setMenuOpen(true);
    }

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    }
    
    return (
        <nav className="text-3xl flex pt-5 pl-5 space-around pb-5 z-10">
            {menuOpen && <SmallMenu setMenuOpen={setMenuOpen}/>}
            <div className="flex gap-5 flex-1">
                {cartOpen && 
                    <Cart/>
                }
                <div className="sm:hidden pt-2 cursor-pointer" onClick={showMenu}>
                    <img src="/images/icon-menu.svg" alt="object-fill" />
                </div>
                <h1 className="font-semibold -mt-1 stretch hero-shadow md:filter:none sm:self-center">sneakers</h1>
            </div>
            <div className="flex flex-row sm:justify-between sm:w-full">
                <div className="list-none hidden sm:list-item sm:self-center sm:flex-1">
                    <ul className="flex text-xs p-3 gap-3 sm:p-2 sm:gap-4 sm:ml-10">
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
               
                <div className="flex justify-self-end gap-5 pr-5 sm:gap-8">
                    {number > 0 && (<div className="flex absolute text-[rgb(255,255,255)] w-[19px] h-[13px] rounded-xl ml-2 bg-orange text-[10px]">
                        <div className="self-center mx-auto font-semibold">{number}</div>
                    </div>)}
                    <div className="pt-2 sm:self-center sm:justify-self-end" onClick={toggleCart}>
                        <img src="/images/icon-cart.svg" alt="object-fill" />
                    </div>
                    <div className="pt-2 h-[24px] w-[24px] sm:h-[50px] sm:w-[50px] sm:justify-self-end">
                        <img src="/images/image-avatar.png" alt="object-fill" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;