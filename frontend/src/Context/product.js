import { createContext, useState } from "react"

const productContext= createContext()

export function ProductProvider({children}) {
    const [cartItem, setCartItem]= useState([]) 
    const addToCart= (product)=>{
        setCartItem((prevState)=>[...prevState, ...product])
    }
    return (
        <productContext.Provider value={{cartItem, addToCart}}>
            {children}
        </productContext.Provider>
    )
}

export default productContext