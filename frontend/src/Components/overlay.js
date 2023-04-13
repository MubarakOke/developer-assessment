import React, {useState, useContext} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import toast from "react-hot-toast";
import productContext from '../Context/product';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "350px",
    bgcolor: 'background.paper',    
    p: 4,
  };

function CheckoutOverlay({open, onClose, product}) {
    const {name, image, price, description, sku}= product
    const [counter, setCounter]= useState(1)
    const {addToCart}= useContext(productContext)

    const handleIncreaseCounter= ()=>{
        setCounter(counter+1)
    }
    const handleOverlayClose= ()=>{
        setCounter(1)
        onClose()
    }
    const handleDecreaseCounter= ()=>{
        if (counter===1)return 
        else{setCounter(counter-1)}
    }
    const handleAddToCart= ()=>{
        let products= []
        for (let i=0; i<counter; i++){
            products.push(product)
        }
        addToCart(products)
        toast.success("Item added to cart")
        setCounter(1)
        onClose(false)
    }
  return (
    <>
    <Modal open={open} onClose={handleOverlayClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
    <Box sx={style}>
        <img className="w-[100%] h-[200px]" src={image} alt={`${name}`}/>
        <Typography  sx={{ mt: 1 }}>
            <div className="text-[20px] text-[#BB9338] font-bold">{name}</div>
            <div className="text-[18px] text-[#BB9338]"># {price}</div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <div className='font-bold'>DESCRIPTION:</div>
            <div>{description}</div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <div className='font-bold'>SKU:</div>
            <div>{sku}</div>
        </Typography>
        <Typography sx={{ mt: 3 }}>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center w-[150px]'>
                    <div onClick={handleDecreaseCounter} className="px-3 py-2 text-[18px] bg-[#BB9338] cursor-pointer">-</div>
                    <div>{counter}</div>
                    <div onClick={handleIncreaseCounter} className="px-3 py-2 text-[18px] bg-[#BB9338] cursor-pointer">+</div>
                </div>
                <div className='font-bold text-[20px]'>
                    # {price * counter}
                </div>
            </div>

        </Typography>
        <Typography sx={{ mt: 3 }}>
            <div onClick={handleAddToCart} className='text-center font-bold text-[18px] cursor-pointer text-[red]'>Add To Cart</div>
        </Typography>
    </Box> 
    </Modal>
    </>
  )
}

export default CheckoutOverlay