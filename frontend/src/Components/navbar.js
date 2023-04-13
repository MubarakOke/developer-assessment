import React from 'react'
import productContext from '../Context/product'
import {BsCart} from "react-icons/bs";

function Navbar() {
    const {cartItem}= React.useContext(productContext);

  return (
    <div className="bg-[#BB9338] ">
        <div className="flex justify-between py-[15px] text-[white] items-center mx-auto w-[80%] tablet:w-[80%] laptop:w-[70%] desktop:w-[60%]">
            <div>Product</div>
            <div className='flex items-center cursor-pointer'>
                <BsCart size="20" /> 
                <span className='ml-[10px] text-[18px]'>{cartItem.length}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar