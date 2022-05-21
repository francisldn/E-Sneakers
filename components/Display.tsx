import {useRef, useState} from 'react';
import TogglePrevious from './TogglePrevious';
import ToggleNext from './ToggleNext';
import ProductImageSelect from './ProductImageSelect'
import ProductFrame from './ProductFrame';
import {ContextProvider} from '../AppContext';

const Display = () => {
    const {ImagePopUp} = ContextProvider();
    
    return (
        <>
        <div className="flex z-1">
            <div className="sm:hidden">
                <TogglePrevious />
            </div>
            <div className="sm:flex sm:flex-col sm:my-16">
                <div className="min-h-[300px] max-h-[400px] w-screen sm:h-[565px] sm:max-w-[445px] sm:max-h-[445px] sm:rounded-xl overflow-hidden sm:cursor-pointer" onClick={ImagePopUp}>
                    <ProductFrame />
                </div>
                <ProductImageSelect />
            </div>
            <div className="sm:hidden">
                <ToggleNext />
            </div>
        </div>
        </>
    );
}

export default Display;