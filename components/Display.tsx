import {useState} from 'react';
import TogglePrevious from './TogglePrevious';
import ToggleNext from './ToggleNext';
import {ContextProvider} from '../AppContext';
import {images} from './ProductData';

const Display = () => {
    const {image} = ContextProvider()

    const ImagePopUp = () => {

    }

    const ImageSelect = () => {}

    return (
        <div className="flex z-1">
            <div className="sm:hidden">
                <TogglePrevious />
            </div>
            <div className="sm:flex sm:flex-col sm:my-16">
                <div className="min-h-[300px] max-h-[400px] w-screen sm:h-[565px] sm:max-w-[445px] sm:max-h-[445px] sm:rounded-xl overflow-hidden cursor-pointer" onClick={ImagePopUp}>
                    <img src={image} alt="product image" className="object-fill"/>
                </div>
                <div className="hidden sm:flex sm:flex-row sm:gap-8 sm:max-w-[445px] sm:mt-5">
                    {images.map(image => (
                        <div className="h-[88px] w-[88px] rounded-xl overflow-hidden cursor-pointer hover:opacity-60" key={image.fullsize} onClick={ImageSelect}>
                            <img src={image.fullsize} alt="product image" className="object-fill" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="sm:hidden">
                <ToggleNext />
            </div>
        </div>
    );
}

export default Display;