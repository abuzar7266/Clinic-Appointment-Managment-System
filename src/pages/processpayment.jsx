import React, { useState } from "react";
import ImgProcessPayment from "../assets/images/img_processpayment.png";

export default function ProcessPayment() {
  const [verifychallan, setVerifychallan] = useState(false);
  const [paymentstatus, setPaymentstatus] = useState(false);

  function initiatePayment(data) {
    // initiate when child component VerfiyChallan returns true
    console.log("data = " + data);
    setVerifychallan(data);
    console.log("VerifiedChallan => " + verifychallan);
    //alert("Challan verified + initiatepayment done");
  }

  function GeneratePaymentReceipt(data) {
      // 
      setPaymentstatus(data);
  } 

  return (
    <div>
      {verifychallan ? (
        <div>
          <Payment VerifyPaymentStatus={GeneratePaymentReceipt} />
        </div>
      ) : (
        <VerifyChallan VerfiyChallanStatus={initiatePayment} />
      )}
    </div>
  );
}

const VerifyChallan = (props) => {
  const [searchedchallanid, setSearchedchallanid] = useState(null);

  function prevent(e) {
    e.preventDefault();
  }

  function SearchedChallanId() {
    console.log("searhed challan id => " + searchedchallanid);
    if (searchedchallanid <= 0) {
      alert("Challan Id not Found");
    } else {
      props.VerfiyChallanStatus(true);
    }
  }

  return (
    <div>
      <div>
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h4>Verify Challan</h4>
            </div>

            <form
              onSubmit={prevent}
              style={{ display: "flex", padding: "25px" }}
            >
              <input
                className="form-control"
                type="text"
                name="productname"
                onChange={(e) => setSearchedchallanid(e.target.value)}
                placeholder="Challan Id...."
                required
              />
              <button
                id="submit"
                onClick={SearchedChallanId}
                type="submit"
                className="ibtn"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Payment = (props) => {
  const [amountpaid, setAmountpaid] = useState(0);

  function prevent(e) {
    e.preventDefault();
  }

  function GeneratePaymentReceipt() {
    // Create Payment Reciept
    if(amountpaid>0){
        alert("Reciept has been generated");
        props.VerifyPaymentStatus(true);
    } else{
        alert("Enter Amount Paid");
    }
    


  }

  return (
    <div>
      <div className="row">
        <div className="card" style={{ "margin-left": "25px" }}>
          <center>
            <div className="box">
              <img src={ImgProcessPayment} style={{ padding: "20px" }} />
            </div>
            <div className="card__header">
              <h3>Payment Process </h3>
              <p>Collect Payment from the Customer</p>
            </div>
          </center>

          <form onSubmit={prevent} style={{ padding: "25px" }}>
            <div id="bot">
              <div id="table">
                <table>
                  <tbody>
                    <tr className="">
                      <td className="item">
                        <h4>Id</h4>
                      </td>
                      <td className="Hours">
                        <h4>Type</h4>
                      </td>
                      <td className="Rate">
                        <h4>Due Date</h4>
                      </td>
                    </tr>

                    <tr className="service">
                      <td className="tableitem">
                        <p className="itemtext">5</p>
                      </td>
                      <td className="tableitem">
                        <p className="itemtext">Booking</p>
                      </td>
                      <td className="tableitem">
                        <p className="itemtext">25/12/2000</p>
                      </td>
                    </tr>

                    <tr className="">
                      <td />
                      <td className="Rate">
                        <h2>Total</h2>
                      </td>
                      <td className="payment">
                        <h2>$3,644.25</h2>
                      </td>
                    </tr>

                    <tr className="">
                      <td />
                      <td className="Rate">
                        <h4>Total Paid</h4>
                      </td>
                      <td className="payment">
                        <input
                          className="form-control"
                          
                          type="text"
                          name="productid"
                          style={{ "background": "white" }}
                          onChange={(e)=>setAmountpaid(e.target.value)} 
                          placeholder="$$$$$$"
                          required
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*End Table*/}
            </div>

            <br></br>

            <div className="form-button">
              <button
                id="submit"
                onClick={GeneratePaymentReceipt}
                type="submit"
                className="ibtn"
              >
                Generate Receipt
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
