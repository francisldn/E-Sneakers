import NavBar from "./NavBar"
import {ReactNode} from 'react';
import {ContextProvider} from '../AppContext';
import LightBox from './LightBox';
interface LayoutProps {
    children: ReactNode,
}

export default function Layout({children}:LayoutProps) {
    const {popUp} = ContextProvider();
   
    return (
        <>
        {popUp && <LightBox />}
        <div className="mx-0 lg:mx-10 xl:mx-52">
            <NavBar/>
            <hr className="hidden sm:block sm:border-[#E4E9F2] sm:mt-3.5"/>
            <div>{children}</div>
        </div>
        </>
    )
}