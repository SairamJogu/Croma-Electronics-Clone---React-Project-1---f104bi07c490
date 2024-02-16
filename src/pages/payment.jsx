import React from "react";
import { useState, useEffect } from "react"
import "./payment.css";
import WalletForm from "./component/wallet";
import UPIForm from "./component/upi";
import NetBankingForm from "./component/netbanking";
import DebitCreditCardForm from "./component/debitcredit";
import Checkoutheader from "./checkoutheader";
import Cashondelivery from "./component/cashondelivery";

const Payment = () => {
  
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [totalprice, settotalprice] = useState("");
  const [paymentproduct, setpaymentproduct] = useState([]);
  const [address, setAddress] = useState(null);

  const Getcart = async () => {
    const promise = await fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/cart",
      {
        headers: {
          projectID: "f104bi07c490", Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      }
    );
    const response = await promise.json();
    setpaymentproduct(response.data.items);
    settotalprice(response.data.totalPrice);
  }

  function handlePaymentOption(val) {
    setPaymentMethod(val);
  }

  useEffect(() => {
    Getcart();
    const storedAddress = localStorage.getItem('addresses');
    if (storedAddress) {
      const parsedAddress = JSON.parse(storedAddress);
      setAddress(parsedAddress);
    }
  }, [])

  return (
    <>
      <Checkoutheader />
      <div className="checkouttotalcontainer">
        <div className="checkoutMainContainer">
          <div className="paymentContainer">
            <div className="paymentOptionContainer">
              <div className="paymentOptions">
                <div className={`paymentType ${paymentMethod == 1 ? "paymentTypeOnClick" : ""}`} onClick={() => {handlePaymentOption(1)}}>
                  <span style={{ marginRight: "10px" }}>
                    <img src="https://assets.juspay.in/hyper/images/croma/ic_card.png" />
                  </span>
                 Credit / Debit Cards
                </div>
                <div className={`paymentType ${paymentMethod == 2 ? "paymentTypeOnClick" : ""}`} onClick={() => {handlePaymentOption(2)}}>
                  <span style={{ marginRight: "10px" }}>
                    <img src="https://assets.juspay.in/hyper/images/croma/wallet_icon.png" />
                  </span>
                  Wallet
                </div>
                <div className={`paymentType ${paymentMethod == 3 ? "paymentTypeOnClick" : ""}`} onClick={() => {handlePaymentOption(3)}}>
                  <span style={{ marginRight: "10px" }}>
                    <img src="https://assets.juspay.in/hyper/images/croma/ic_upi_icon.png" />
                  </span>
                  UPI
                </div>
                <div className={`paymentType ${paymentMethod == 4 ? "paymentTypeOnClick" : ""}`} onClick={() => {handlePaymentOption(4)}}>
                  <span style={{ marginRight: "10px" }}>
                    <img src="https://assets.juspay.in/hyper/images/croma/net_banking_icon.png" />
                  </span>
                  Net banking
                </div>
                <div className={`paymentType ${paymentMethod == 5 ? "paymentTypeOnClick" : ""}`}onClick={() => {handlePaymentOption(5)}}>
                  <span style={{ marginRight: "10px" }}>
                    <img src="	https://images.bewakoof.com/web/cod-icon-1645705427.png" />
                  </span>
                  Cash On Delivery
                </div>
              </div>
              <div className="paymentForm">
                {paymentMethod == 1 && (
                  <DebitCreditCardForm totalPrice={totalprice} paymentproduct={paymentproduct} />
                )}
                {paymentMethod == 2 && <WalletForm totalPrice={totalprice} paymentproduct={paymentproduct} />}
                {paymentMethod == 3 && <UPIForm totalPrice={totalprice} paymentproduct={paymentproduct}/>}
                {paymentMethod == 4 && <NetBankingForm totalPrice={totalprice} />}
                {paymentMethod == 5 && (
                  <Cashondelivery totalPrice={totalprice}  paymentproduct={paymentproduct}/>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mainshippingform" >
          <div className="payout-form">
            <h2>Shipping To</h2>
            <div className="shippingaddressto">
              <span>Name : {address?.fullname}</span>
              <span>Mobile : {address?.mobileno}</span>
              <span>Pincode :{address?.pincode}</span>
              <span>Address : {address?.street}, {address?.landmark}, {address?.area}, {address?.state}, {address?.city}</span>
              <span>Deliver to: {address?.addresstype}</span>
            </div>
          </div>
          <div className="lastcheckoutform">
            <div className="lastcheckoutotalsummary">
              <div className="lastcheckoutformproducts">
                <h2>Ordering Products</h2>
                <h3>Quantity:{paymentproduct.length} </h3>
              </div>
              <div className="lastcheckoutformproductssection">
                {
                  paymentproduct.map((payproduct) => {
                    return (
                      <div>
                        <img src={payproduct.product.displayImage} alt="products"  />
                        <h3>{payproduct.product.name}</h3>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
