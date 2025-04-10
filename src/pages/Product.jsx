import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { assets } from "../assets/assets"; // Import the assets object


export const Product = () => {
  return (
   <>
   <div
      className="relative w-full h-180 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/banner_product.png')" }}
      id="Header"
    >
   </div>
   <Breadcrumbs/>
   
   </>
    
  )
}
