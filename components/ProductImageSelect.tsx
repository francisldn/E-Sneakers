import {images} from './ProductData';
import {useRef} from 'react'
import {ContextProvider} from '../AppContext';

const ProductImageSelect = () => {
    const {setImage} = ContextProvider();
    const divRef = useRef<HTMLDivElement>(null)
    
    const ImageSelect = (e: React.MouseEvent| React.PointerEvent) => {
        const target = e.target as HTMLElement;
        const srcVal = target.attributes[0].value;
        setImage(srcVal);
        console.log(divRef.current!.children[0].children[0].attributes[0].value)

        for(let i =0; i<divRef.current!.children.length; i++) {
            divRef.current!.children[i].classList.remove('image-select')
            if(divRef.current!.children[i].children[0].attributes[0].value === srcVal){
                divRef.current!.children[i].classList.add('image-select');
            }
        }
    }

    return (
        <>
        <div className="hidden sm:flex sm:flex-row sm:gap-8 sm:max-w-[445px] sm:mt-5" ref={divRef}>
                    {images.map(image => (
                        <div className="h-[88px] w-[88px] rounded-xl overflow-hidden cursor-pointer" key={image.fullsize} onClick={(e) => ImageSelect(e)}>
                            <img src={image.fullsize} alt="product image" className="w-full h-full hover:opacity-40" />
                        </div>
                    ))}
            </div>
        </>
    );
}

export default ProductImageSelect;