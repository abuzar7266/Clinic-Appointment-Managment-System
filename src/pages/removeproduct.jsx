import React,{useState} from 'react'


const RemoveProduct = () => {
  
  const [productid, setproductid] = useState(null);

 
  function prevent(event){ event.preventDefault(); }

  function HandleRemoveProduct(){
   
    console.log("Product Id => "+productid);

  }  

return (



    <div className='col-4'>
      <div className='card'>
      
      <div className='card__header'>
         <h3>Remove Product</h3>
         <p>Enter the product id to set its status to unavailable</p>
      </div> 


      <div className="form-items">

          <form onSubmit={prevent} >
            <input className="form-control" onChange={(e)=>setproductid(e.target.value)}  type="text" name="productid" placeholder="Product Id" required />
                         
            <br></br>
            <div className="form-button">
              <button id="submit" onClick={HandleRemoveProduct}  type="submit" className="ibtn">Remove</button>  

            </div>
          </form>

        </div>

      </div>

      </div>




);


}

export default RemoveProduct;