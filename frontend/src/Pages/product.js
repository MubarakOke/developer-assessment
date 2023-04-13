import React, { useEffect, useState } from 'react'

import Navbar from '../Components/navbar'
import Card from '../Components/card'
import HttpClient from '../Utils/helpers/external/httpRequest';
import productQuery from '../Utils/helpers/query/product'



function Product() {
    const [productList, setProductList]= useState([])

    useEffect(()=>{
        async function fetchdata(){
            let headers= {"Content-Type": "application/json"}
            let query= productQuery.allProduct("id", "name", "description", "sku", "price", "image")
         
            let response= await HttpClient.post("/graphql", query, {headers})
            setProductList(response.data.allProducts)
        }
        fetchdata()
    }, [])

    const renderProductCard= ()=>{
        if (productList){
            return productList.map((item, index)=>{
                return (
                    <div key={index} className='tablet:w-[100%]'>
                        <Card product={item} />
                    </div>)
            })
        }
        return <div className='text-center'>No Product</div>
    }
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className='mx-auto mt-3 w-[80%] tablet:w-[80%] laptop:w-[70%] desktop:w-[60%] tablet:grid tablet:grid-cols-2 tablet:gap-x-10'>
            {renderProductCard()}
        </div>
    </div>
  )
}

export default Product