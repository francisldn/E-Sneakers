import Display from "./Display";
import AddToCart from './AddToCart'
import {products} from './ProductData';


const ProductContainer = () => {
    
    return (
        <div className="sm:flex sm:justify-start h-[900px] sm:h-full sm:mx-8">
            <div>
                <Display />
            </div>
            <div className="sm:ml-3 lg:ml-20 lg:mr-14 sm:mr-5 xl:mt-20 xl:w-[445px]">
                <div className="flex justify-start flex-col m-[24px] mx-4">
                    <p className="text-xs text-orange font-semibold tracking-wider">SNEAKER COMPANY</p>
                    <h1 className="mt-3 text-[28px] font-bold leading-8 sm:leading-tight item-title">{products[0].name}</h1>
                    <p className="leading-7 sm:leading-relaxed text-grey mt-3 text-[15px]">{products[0].description}</p>
                </div>
                <div className="flex gap-4 ml-6 items-center mx-4 sm:flex-col sm:ml-4 sm:justify-start sm:items-start sm:gap-2 sm:-mt-3">
                    <div className="flex flex-1 gap-5 sm:gap-5">
                        <h1 className="text-[28px] font-bold">{products[0].price}</h1>
                        <div className="bg-[#FFEEE2] p-1 text-orange font-semibold rounded-md">{products[0].discount}</div>
                    </div>
                    <div className="flex justify-self-end mr-0">
                        <div className="font-semibold text-[#B6BCC8] mr-5 line-through">{products[0].originalprice}</div>
                    </div>
                </div>
                <div>
                    <AddToCart/>
                </div>
            </div>
        </div>
    );
}

export default ProductContainer;