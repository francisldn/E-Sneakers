import NavBar from "./NavBar"
import {ReactNode, useRef, useCallback, useEffect} from 'react';
import {ContextProvider} from '../AppContext';
import LightBox from './LightBox';
interface LayoutProps {
    children: ReactNode,
}

export default function Layout({children}:LayoutProps) {
    const {popUp, setCartOpen, cartOpen, toggleCart} = ContextProvider();
    const divRef = useRef<HTMLDivElement>(null)

    const toggleCloseCart = (e:MouseEvent) => {
        if(divRef.current === e.target) {
            toggleCart()
        } 
    }

    const EscapeCloseCart = useCallback((e) => {
        if(e.key === 'Escape' && cartOpen) {
            setCartOpen(false);
        }
    },[setCartOpen, cartOpen])

    useEffect(()=> {
        document.addEventListener('keydown',EscapeCloseCart)
        return () => document.removeEventListener('keydown',EscapeCloseCart)
    },[EscapeCloseCart])

    return (
        <>
        {popUp && <LightBox />}
        <div className="mx-0 lg:mx-10 xl:mx-52">
            <NavBar/>
            <hr className="hidden sm:block sm:border-[#E4E9F2] sm:mt-3.5"/>
            <main onClick={(e) => toggleCloseCart(e)} ref={divRef}>{children}</main>
        </div>
        </>
    )
}