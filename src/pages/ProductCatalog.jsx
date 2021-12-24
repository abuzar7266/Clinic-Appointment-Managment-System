import React from 'react'
import ProductCard from '../components/productcard/productcard'

const ProductInfo = {
  id:"1",
  quantity:"7",
  productdescription:"Granite Mountain Bike",
  category: "Bicycle",
  rentcharges: "1000",
  maxDayLimit: "10",
  finePerDay: "50",
  thumbnail: "../../public/assets/img/prod-1.png"
}


const ProductCatalog = () => {
    return (
      

        <div>
        
        <h1 className="nice">Product Catalog</h1>
        <br /><br />
        <div className='row'>
         <ProductCard productinfo={ProductInfo} />
         <ProductCard productinfo={ProductInfo} />
         <ProductCard productinfo={ProductInfo} />
         <ProductCard productinfo={ProductInfo} />
         <ProductCard productinfo={ProductInfo} />
         <ProductCard productinfo={ProductInfo} />
         <ProductCard productinfo={ProductInfo} />
         <ProductCard productinfo={ProductInfo} />
         <ProductCard productinfo={ProductInfo} />                  

        </div>
        </div>

    )
}

export default ProductCatalog