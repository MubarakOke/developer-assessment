import React from 'react'
import {HiOutlineShoppingBag} from "react-icons/hi";
import CheckoutOverlay from '../Components/overlay'

function Card({product}) {
    const {name, image, price}= product
    const [open, setOpen] = React.useState(false);
    const handleOverlayOpening = () => setOpen(true);
    const handleOverlayClosing = () => setOpen(false);

  return (
    <div className="bg-[#F6F6F6] w-[100%] p-[5px] mb-[20px]">
        <div className="">
            <div>
                <img className="w-[100%] h-[200px]" src={image} alt={`${name}`}/>
            </div>
            <div className="flex justify-between items-start mt-4 mb-2">
                <div>
                    <div className="text-[20px] text-[#BB9338] font-bold">{name}</div>
                    <div className="text-[18px] text-[#BB9338]"># {price}</div>
                </div>
                <div onClick={handleOverlayOpening}>
                    <HiOutlineShoppingBag size="28" className="text-black mt-1 font-bold cursor-pointer"/>
                </div>
            </div>
        </div>
        <CheckoutOverlay open={open} onClose={handleOverlayClosing} product={product}/>
    </div>
  )
}

export default Card