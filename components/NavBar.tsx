import Link from 'next/link'
import SmallMenu from './SmallMenu';
import Cart from './Cart';
import {ContextProvider} from '../AppContext';

const NavBar = () => {
    const {menuOpen, setMenuOpen, cartOpen, number, addItem, toggleCart} = ContextProvider()
    
    const showMenu = () => {
        setMenuOpen(true);
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
                <h1 className="font-semibold -mt-1 stretch hero-shadow md:filter:none sm:self-center">
                    <Link href="/">
                        <a>sneakers</a>
                    </Link>
                </h1>
            </div>
            <div className="flex flex-row sm:justify-between sm:w-screen">
                <div className="list-none hidden sm:list-item self-center flex-1">
                    <ul className="flex text-[15px] text-[#69707D] pl-4 ml-6">
                        <li className="cursor-pointer absolute top-6 pb-6 menu-select">Collections</li>
                        <li className="cursor-pointer absolute top-6 pb-6 menu-select ml-[7rem]">Men</li>
                        <li className="cursor-pointer absolute top-6 pb-6 menu-select ml-[11rem]">Women</li>
                        <li className="cursor-pointer absolute top-6 pb-6 menu-select ml-[17rem]">About</li>
                        <li className="cursor-pointer absolute top-6 pb-6 menu-select ml-[22rem]">Contact</li>
                    </ul>
                </div>
               
                <div className="flex justify-self-end gap-7 sm:gap-8">
                    {number > 0 && addItem && (<div className="flex absolute text-[rgb(255,255,255)] w-[19px] h-[13px] rounded-xl ml-2 bg-orange text-[10px] sm:top-6 cursor-pointer" onClick={toggleCart}>
                        <div className="self-center mx-auto font-semibold">{number}</div>
                    </div>)}
                    <div className="pt-2 sm:self-center sm:justify-self-end cursor-pointer" onClick={toggleCart}>
                        <img src="/images/icon-cart.svg" alt="object-fill" />
                    </div>
                    <div className="max-h-[35px] max-w-[35px] sm:h-[50px] sm:w-[50px] sm:justify-self-end cursor-pointer">
                        <img src="/images/image-avatar.png" alt="object-fill" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;