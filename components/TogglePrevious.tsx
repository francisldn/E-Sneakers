import {ContextProvider} from '../AppContext';
import {images} from './ProductData';

const TogglePrevious = () => {
    const {setImgCount, setImage, imgCount} = ContextProvider();
    
    const clickPrevious = () => {
        setImgCount(prev => {
            if(prev === 0) {
                return prev + 3;
            } else {
                return prev -1;
            }
        })
        setImage(images[imgCount].fullsize)
    }
    
    return (
        <div className="flex flex-1 w-[40px] absolute h-[40px] rounded-full bg-[rgb(255,255,255)] items-center top-52 left-4 cursor-pointer z-0" onClick={clickPrevious}>
                <img src="/images/icon-previous.svg" alt="" className="flex object-fill ml-3"/>
        </div>
    );
}

export default TogglePrevious;