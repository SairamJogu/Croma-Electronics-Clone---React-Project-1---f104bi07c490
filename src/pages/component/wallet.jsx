import { useState } from "react";

import "./wallet.css";
import Paybutton from "./paybutton";

// import PayButton from "./Paybutton";

function WalletForm(props) {
  const {totalPrice, paymentproduct}=props;
  const [paymentNumber, setPaymentNumber] = useState(0);
  function handlePaymentOption(val) {
    setPaymentNumber(val);
  }
  return (
    <div className="walletContainer">
      <div>
        <div
          className="walletPriceContainer"
          onClick={() => {
            handlePaymentOption(1);
          }}
        >
          <div className="walletImageAndType">
            <div>
              <img src="https://images.bewakoof.com/web/paytm-round-v1.png" />
            </div>

            <div className="walletText">Paytm wallet</div>
          </div>
          <div className="radioButton">
            <input type="radio" />
          </div>
        </div>
        {paymentNumber == 1 && <Paybutton totalPrice={totalPrice} paymentproduct={paymentproduct}/>}
      </div>

      <div>
        <div
          className="walletPriceContainer"
          onClick={() => {
            handlePaymentOption(2);
          }}
        >
          <div className="walletImageAndType">
            <div>
              <img src="	https://images.bewakoof.com/web/ic-phonepe-3x-payment-v1.png" />
            </div>

            <div className="walletText">PhonePe</div>
          </div>
          <div className="radioButton">
            <input type="radio" />
          </div>
        </div>
        {paymentNumber == 2 && <Paybutton totalPrice={totalPrice} paymentproduct={paymentproduct}/>}
      </div>

      <div>
        <div
          className="walletPriceContainer"
          onClick={() => {
            handlePaymentOption(3);
          }}
        >
          <div className="walletImageAndType">
            <div>
              <img src="	https://images.bewakoof.com/web/ic-mobikwik-3x-payment-v1.png" />
            </div>

            <div className="walletText">Mobikwik</div>
          </div>
          <div className="radioButton">
            <input type="radio" />
          </div>
        </div>
        {paymentNumber == 3 && <Paybutton totalPrice={totalPrice} paymentproduct={paymentproduct}/>}
      </div>

      <div>
        <div
          className="walletPriceContainer"
          onClick={() => {
            handlePaymentOption(4);
          }}
        >
          <div className="walletImageAndType">
            <div>
              <img src="	https://images.bewakoof.com/web/ic-freecharge-3x-payment-v1.png" />
            </div>

            <div className="walletText">Freecharge</div>
          </div>
          <div className="radioButton">
            <input type="radio" />
          </div>
        </div>
        {paymentNumber == 4 && <Paybutton totalPrice={totalPrice} paymentproduct={paymentproduct} />}
      </div>
    </div>
  );
}
export default WalletForm;
