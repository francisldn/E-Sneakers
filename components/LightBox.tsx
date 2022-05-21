import ProductFrame from "./ProductFrame";
import ProductImageSelect from "./ProductImageSelect";
import TogglePrevious from "./TogglePrevious";
import ToggleNext from "./ToggleNext";
import { ContextProvider } from "../AppContext";

const LightBox = () => {
    const {setPopUp, popUp} = ContextProvider()
    const CloseLightBox = () => {
        setPopUp(!popUp)
    }
    return (
        <div className="hidden sm:fixed sm:min-w-full sm:h-full sm:bg-[rgb(0,0,0,0.8)] sm:z-10 sm:flex sm:flex-col sm:justify-center sm:items-center" onClick={CloseLightBox}>
            <div className="z-20 flex flex-col max-w-[606px] max-h-[722px]">
                <div className="self-end mr-12 mb-5" onClick={CloseLightBox}>
                    <img src="/images/icon-close-white.svg" alt=""/>
                </div>
                <div className="flex self-end">
                    <div className="z-30">   
                        <TogglePrevious />
                    </div>
                    <div className="max-h-[550px] max-w-[606px] rounded-xl overflow-hidden">
                        <ProductFrame />
                    </div>
                    <div className="z-30">
                        <ToggleNext />
                    </div>
                </div>
            </div>
            <div className="z-20 max-w-[550px]">
                <ProductImageSelect />
            </div>
        </div>
    );
}

export default LightBox;