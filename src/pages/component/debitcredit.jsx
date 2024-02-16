import { useState } from "react";
import "./debitcredit.css";
import { useNavigate } from "react-router-dom";
function DebitCreditCardForm(props) {
  const {totalPrice, paymentproduct}=props;
  const navigate = useNavigate();
  const [checkbox, setCheckbox] = useState(false);
  
  const orderpostapi = async (details) => {

    const promise = await fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/order/convertCartToOrder",
      {
        method:"POST",
        headers: {
          projectID: "b0egrjqjnto2", Authorization: `Bearer ${localStorage.getItem('token')}`, "Content-Type": "application/json",
        },
        body:JSON.stringify(details)
      }
    );
    const response = await promise.json();
    navigate("/order-placed");
    
   
   


  }


  function debitcreditplaceorder() {
    const addressinls = JSON.parse(localStorage.getItem('addresses'));
    const addressType = addressinls.addresstype.toUpperCase();

    delete addressinls.fullname;
    delete addressinls.flatno;
    delete addressinls.mobileno;
    delete addressinls.landmark;
    delete addressinls.area;
    delete addressinls.addresstype;






    const orderdetails = {
      productId: paymentproduct[0]?.product._id,
      quantity: paymentproduct[0]?.quantity,
      addressType,
      address: {
        ...addressinls, country: "India", zipCode: addressinls.pincode,

      }
    }
    delete orderdetails.address.pincode;
    if (totalPrice) {
      orderpostapi(orderdetails);
    }

  }
  function checkBoxHandler() {
    setCheckbox(!checkbox);
  }
  return (
    <div className="debitCardContainer">

      <label htmlFor="name">Enter Debit / Credit Card Details</label>
      <label htmlFor="cardnumber" style={{ marginTop: "2rem" }}>
        Card number
      </label>

      <div className="cardNumber">
        <input type="text" placeholder="Enter card number here" />
        <img
          src="https://assets.juspay.in/hyper/images/common/jp_default_card.png"
          alt=""
          style={{ width: "40px" }}
        />
      </div>

      <div className="expiryDateAndCvv">
        <div>
          <label htmlFor="name">Expiry</label>
          <input type="text" placeholder="MM/YYYY" style={{ width: "40%" }} />
        </div>
        <div>
          <label htmlFor="name">CVV</label>
          <input
            type="text"
            placeholder="CVV"
            style={{ width: "20%", marginLeft: "5px" }}
          />
        </div>
      </div>
      <div className="checkbox">
        <input type="checkbox" onClick={checkBoxHandler}></input>
        <span style={{ marginLeft: "0.8rem" }}>
          Save card details for later
        </span>
      </div>

      <div className={`debitButton`}>
        <button className={`${checkbox ? "check" : "uncheck"}`} onClick={debitcreditplaceorder}>
          Pay ₹{totalPrice}
        </button>
      </div>
    </div>
  );
}
export default DebitCreditCardForm;
