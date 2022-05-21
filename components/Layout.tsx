import NavBar from "./NavBar"
import {Dispatch, SetStateAction, ReactNode} from 'react';
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
            <hr className="border-[#E4E9F2] mt-3.5"/>
            <main>{children}</main>
        </div>
        </>
    )
}