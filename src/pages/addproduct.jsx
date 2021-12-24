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
  const [quantity, setquantity] = useState(0);
  const [productdescription, setproductdescription] = useState(null); // this is product name
  const [category, setcategory] = useState(null);
  const [rentcharges, setrentcharges] = useState(0);
  const [maxdaylimit, setmaxdaylimit] = useState(0);
  const [fineperday, setfineperday] = useState(0);
  const [thumbnail, setthumbnail] = useState(null);

  function checkstates() {
    if (
      quantity == 0 ||
      productdescription == null ||
      category == null ||
      rentcharges <= 0 ||
      maxdaylimit <= 0 ||
      fineperday <= 0 ||
      thumbnail == null
    ) {
      return false;
    } else {
      return true;
    }
  }

  function prevent(event) {
    event.preventDefault();
  }

  function HandleAddProduct() {
    if (checkstates()) {
      /// write your code here for sending the data
      console.log("states collected");
    } else {
      alert("Field Either Incomplete/Invalid");
    }
  }

  return (
    <div className="col-6">
      <div className="card">
        <div className="form-items">
          <h3>Add Product</h3>
          <p>Enter the product details</p>

          <form onSubmit={prevent} style={{ padding: "25px" }}>
            <p>Product Name</p>
            <input
              className="form-control"
              type="text"
              name="productname"
              onChange={(e) => setproductdescription(e.target.value)}
              required
            />

            <p>Description</p>
            <input
              className="form-control"
              type="text"
              name="productdescription"
              onChange={(e) => setproductdescription(e.target.value)}
              required
            />

            <p>Category</p>
            <input
              className="form-control"
              type="text"
              name="productcategory"
              onChange={(e) => setcategory(e.target.value)}
              required
            />

            <div className="col-4">
              <p>Quantity</p>
              <input
                className="form-control"
                type="text"
                name="productquantity"
                onChange={(e) => setquantity(e.target.value)}
                required
              />
            </div>

            <div
              style={{
                display: "flex",
                "margin-top": "25px",
                "margin-bottom": "25px",
              }}
            >
              <div className="col-3">
                <p>Rent charges /Day</p>
                <input
                  className="form-control"
                  type="text"
                  name="productcategory"
                  required
                  onChange={(e) => setrentcharges(e.target.value)}
                  style={{ margin: "5px" }}
                />
              </div>

              <div className="col-3">
                <p>Max Day Limit </p>
                <input
                  className="form-control"
                  type="text"
                  name="productcategory"
                  onChange={(e) => setmaxdaylimit(e.target.value)}
                  required
                  style={{ margin: "5px" }}
                />
              </div>

              <div className="col-3">
                <p>Fine /Day</p>
                <input
                  className="form-control"
                  type="text"
                  name="productcategory"
                  onChange={(e) => setfineperday(e.target.value)}
                  style={{ margin: "5px" }}
                  required
                />
              </div>
            </div>

            <div>
              <p>Thumbnail</p>
              <input
                className="form-control"
                type="file"
                required
                onChange={(e) => setthumbnail(e.target.value)}
              />
            </div>

            <br></br>
            <div className="form-button">
              <button
                id="submit"
                onClick={HandleAddProduct}
                type="submit"
                className="ibtn"
              >
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
