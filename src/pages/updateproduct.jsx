import React from 'react'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'



class DisplayImage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        image: null
      };
  
      this.onImageChange = this.onImageChange.bind(this);
    }
  
    onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        this.setState({
          image: URL.createObjectURL(img)
        });
      }
    };
  
    render() {
      return (
        <div>
          <div>
            <div>
              <img src={this.state.image} />
              <h1>Update Image</h1>
              <input type="file" name="myImage" onChange={this.onImageChange} />
            </div>
          </div>
        </div>
      );
    }
  }

const ProductCard = () => {

    return (
       
            <div className="col-sm-1 col-lg-3">
              <div className="product-item">
                <ul className="product-icon-top">
                  <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                </ul>
                <a href="single-shop.html" className="product-img">
                <img className="lazy" src="../assets/img/prod-1.png" data-src="../assets/img/prod-1.png" /></a>
                
                <div className="product-item-cover">
                  <div className="price-cover">
                    <div className="new-price">$1.699</div>
                    <div className="old-price">$1.799</div>
                  </div>
                  <h6 className="prod-title"><a href="single-shop.html">Granite Peak 24" <br />Girls Mountain Bike</a></h6>

                </div>
                <div className="prod-info">
                  <ul className="prod-list">
                    <li>Frame Size: <span>17</span></li>
                    <li>Class: <span>City</span></li>
                    <li>Number of speeds: <span>7</span></li>
                    <li>Type: <span>Rigid</span></li>
                    <li>Country registration: <span>USA</span></li>
                  </ul>
                </div>
              </div>
            </div>
    
    );

}

const UpdateProcess = () => {
    return (
 
      <div className='col-4'>
      <div className='card'>
      
      <div className='card__header'>
         <h3>Update Product</h3>
         <p>Enter the product details</p>
      </div> 

      <div className="form-items">
      
      
    
      <form style={{"padding":"25px"}}>
      <TextField required id="outlined-required" label="Required"
       defaultValue="Product Id"
        />       
      </form>
    
      
    
      <form style={{"display":"flex","padding":"25px"}} >
        <input className="form-control" type="text" name="productname" placeholder="Product Name" required />
        <div className="form-button">
          <button id="submit" type="submit" className="ibtn">Update</button>    
      </div>
      </form>
       
      <form style={{"display":"flex","padding":"25px"}}>
        <input className="form-control" type="text" name="productname" placeholder="Product Description" required />
        <div className="form-button">
          <button id="submit" type="submit" className="ibtn">Update</button>    
      </div>
        
      </form>  
    
      <form style={{"display":"flex","padding":"25px"}}>
      
        <input className="form-control" type="text" name="productquantity" placeholder="Quantity" required />
        <div className="form-button">
          <button id="submit" type="submit" className="ibtn">Update</button>    
      </div>
        
      </form> 
    
      <form style={{"display":"flex","padding":"25px"}}>
        <input className="form-control" type="text" name="productquantity" placeholder="Rent Per Day" required />
        <div className="form-button">
          <button id="submit" type="submit" className="ibtn">Update</button>    
      </div>
        
      </form> 
    
      <form style={{"padding":"25px"}}>
      <DisplayImage/>      
      </form> 
     
    
      </div>
    
  
      </div>
      </div>
      
      );   
}

const UpdateProduct = () => {



  return (
 

      
 
    <div className="row">

     <UpdateProcess/>     
     <ProductCard/>

    </div>
 
  );



}







export default UpdateProduct;