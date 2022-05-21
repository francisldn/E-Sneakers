import {ContextProvider} from '../AppContext';

const ProductFrame = () => {
    const {image} = ContextProvider();
    
    return (
        <>
            <img src={image} alt="product image" className="object-fill"/>
        </>
    );
}

export default ProductFrame;