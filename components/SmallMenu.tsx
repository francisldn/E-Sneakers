import {Dispatch, SetStateAction} from 'react';

interface SmallMenuProps {
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const SmallMenu = ({setMenuOpen}:SmallMenuProps) => {

    const closeMenu= () => {
        setMenuOpen(false);
    }


    return (
        <>
            <div className="absolute w-full h-[900px] bg-[rgb(0,0,0,0.7)] top-0 left-0 z-10">
            </div>
            <div className="absolute w-[250px] h-[900px] bg-[rgb(255,255,255)] top-0 left-0 z-20">
                <div className="w-14 h-14 p-5 cursor-pointer" onClick={closeMenu}>
                    <img src="/images/icon-close.svg" alt="" className="object-fill"/>
                </div>
                <div>
                    <ul className="list-none text-[18px] font-semibold ml-5 mt-6 flex flex-col gap-4">
                        <li className="cursor-pointer">Collections</li>
                        <li className="cursor-pointer">Men</li>
                        <li className="cursor-pointer">Women</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                </div>
            </div>
        </>
        );
    }

export default SmallMenu;