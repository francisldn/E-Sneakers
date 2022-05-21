import NavBar from "./NavBar"
import {Dispatch, SetStateAction, ReactNode} from 'react';

interface LayoutProps {
    children: ReactNode,
}

export default function Layout({children}:LayoutProps) {
    
    return (
        <div className="sm:mx-5 lg:mx-52">
            <NavBar/>
            <hr className="border-[#979797]"/>
            <main>{children}</main>
        </div>
    )
}