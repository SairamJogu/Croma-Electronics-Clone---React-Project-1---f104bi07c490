import React from "react";
import "./cashondelivery.css";
import { json, useNavigate } from "react-router-dom";
const Cashondelivery = (props) => {
    const {paymentproduct}=props;
    const navigate = useNavigate();
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

    function handlePlaceOrder() {
        
    const addressinls=JSON.parse(localStorage.getItem('addresses'));
    const addressType = addressinls.addresstype.toUpperCase();
       
    delete addressinls.fullname;
    delete addressinls.flatno;
    delete addressinls.mobileno;
    delete addressinls.landmark;
    delete addressinls.area;
    delete addressinls.addresstype;


   
        

       
        const orderdetails={
            productId :paymentproduct[0]?.product._id,
            quantity : paymentproduct[0]?.quantity,
            addressType ,
            address: {
            ...addressinls,country:"India",zipCode:addressinls.pincode,

            }
        }
        delete orderdetails.address.pincode;
        if(props.totalPrice){
        orderpostapi(orderdetails);
        }

        console.log("address", orderdetails);


     



    }
    return (
        <>
            <div className="cashOnDeliveryContainer">
                <div className="paymentText">
                    Cash on delivery charges are free
                </div>

                <div className="CODPayButton">
                    <button onClick={handlePlaceOrder} >
                        Pay ₹{props.totalPrice}
                    </button>
                </div>
            </div>
        </>
    )

}
export default Cashondelivery;