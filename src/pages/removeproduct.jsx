import React from 'react'
import Button from '@material-ui/core/Button'

const RemoveProduct = () => {

return (



    <div className='col-4'>
      <div className='card'>
      
      <div className='card__header'>
         <h3>Remove Product</h3>
         <p>Enter the product id to set its status to unavailable</p>
      </div> 


      <div className="form-items">

          <form>
            <input className="form-control" type="text" name="productid" placeholder="Product Id" required />
                         
            <br></br>
            <div className="form-button">
              <button id="submit" type="submit" className="ibtn">Remove</button>  

            </div>
          </form>

        </div>

      </div>

      </div>




);


}

export default RemoveProduct;