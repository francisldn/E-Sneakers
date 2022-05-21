import {ContextProvider} from '../AppContext';
import {images} from './ProductData';

const ToggleNext = () => {
    const {setImgCount, setImage, imgCount} = ContextProvider();
    
    const clickNext = () => {
        setImgCount(prev => {
            if(prev === 3) {
                return 0;
            } else {
                return prev +1;
            }
        })
        setImage(images[imgCount].fullsize);
    }
    
    return (
        <div className="flex w-[40px] h-[40px] absolute rounded-full bg-[rgb(255,255,255)] items-center top-52 right-4 cursor-pointer" onClick={clickNext}>
            <img src="/images/icon-next.svg" alt="" className="flex object-fill ml-3 z-0"/>
        </div>
    );
}

export default ToggleNext;