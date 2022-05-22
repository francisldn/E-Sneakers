import {products} from './ProductData'
import {ContextProvider} from '../AppContext'

const Cart = () => {
    const {number, setNumber, setAddItem, addItem} = ContextProvider();

    const totalAmount = (price: string, quantity: number) => {
        let priceNumber = Number(price.slice(1));
        return (priceNumber * quantity).toFixed(2);
    }

    const ClickDelete = () => {
        setNumber(0)
        setAddItem(false)
    }

    return (
        <div className="flex flex-col absolute z-10 h-[256px] bg-[rgb(255,255,255)] rounded-xl top-20 inset-x-4 sm:max-w-[360px] sm:max-h-[256px] drop-cart sm:ml-auto sm:right-10">
            <div className="text-[16px] font-semibold p-5 sm:p-4">Cart</div>
            <hr className="text-[#E4E9F2]"/>
            <div className="flex flex-col mt-7 text-[15px] leading-6 mx-auto  text-grey">
                {number > 0 && addItem
                    ? (<>
                    <div className="flex gap-4">
                        <div className="w-[50px] h-[50px] rounded-md overflow-hidden">
                            <img src={products[0].thumbnailimage} alt="" />
                        </div>
                        <div className="">
                            <div>{products[0].name}</div>
                            <div>{`${products[0].price} x ${number} = $${totalAmount(products[0].price, number)}`}
                            </div>
                        </div>
                        <div className="w-[14px] h-[16px] my-auto cursor-pointer" onClick={ClickDelete}>
                                <img src="/images/icon-delete.svg" alt="" />
                        </div>
                        
                    </div>
                    <div className="flex bg-orange h-[56px] rounded-lg mt-5 text-xs font-semibold text-[rgb(255,255,255)] cursor-pointer hover:opacity-60">
                        <div className="mx-auto my-auto cursor-pointer">
                            Checkout
                        </div>
                    </div>
                    </>
                    )
                    : <div className="mx-auto my-7 font-semibold">
                            Your cart is empty.
                    </div>
                }
            </div>
        </div>
    );
}

export default Cart;