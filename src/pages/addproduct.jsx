import React, { useState } from "react";

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <div className="box">
              <img src={this.state.image} style={{ padding: "20px" }} />
            </div>

            <h1>Select Image</h1>
            <input type="file" name="myImage" onChange={this.onImageChange} />
          </div>
        </div>
      </div>
    );
  }
}

const AddProduct = () => {
  const [pid, setPid] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [productdescription, setproductdescription] = useState(null);
  const [category, setcategory] = useState(null);
  const [rentcharges, setrentcharges] = useState(0);
  const [maxdaylimit, setmaxdaylimit] = useState(0);

  return (
    <div className="col-6">
      <div className="card">
        <div className="form-items">
          <h3>Add Product</h3>
          <p>Enter the product details</p>

          <form style={{ padding: "25px" }}>
            <p>Product Name</p>
            <input
              className="form-control"
              type="text"
              name="productname"
              required
            />
            <p>Quantity</p>
            <input
              className="form-control"
              type="text"
              name="productquantity"
              required
            />
            <p>Description</p>
            <input
              className="form-control"
              type="text"
              name="productdescription"
              required
            />
            <p>Category</p>
            <input
              className="form-control"
              type="text"
              name="productcategory"
              required
            />




      
            <div className="" style={{"display":"flex","margin-top":"25px"}}>

            <p>Rent charges /Day</p>
            <input
              className="form-control"
              type="text"
              name="productcategory"
              required
            />

            <p>Max Day Limit </p>
            <input
              className="form-control"
              type="text"
              name="productcategory"
              required
            />            
            <p>Fine /Day</p>
            <input
              className="form-control"
              type="text"
              name="productcategory"
              required
            />
            </div>

            <div>
              <p>Thumbnail</p>
              <input className="form-control" type="file" required />
            </div>

            <br></br>
            <div className="form-button">
              <button id="submit" type="submit" className="ibtn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
