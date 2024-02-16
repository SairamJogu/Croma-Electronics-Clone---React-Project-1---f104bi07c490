import "./upi.css";
function UPIForm() {
  return (
    <div className="UPIContainer">
      <label htmlFor="name">UPI ID / VPA</label>
      <div className="UPIInput">
        <input type="text" placeholder="e.g rakesh@upi" />
      </div>
      <div className="UPIText">
        A collect request will be sent to this UPI ID
      </div>

      <div className="checkbox">
        <input type="checkbox"></input>
        <span style={{ marginLeft: "0.8rem" }}>
          Save this UPI ID for faster payments.
        </span>
      </div>

      <div className="UPIButton">
        <button>VERIFY</button>
      </div>
    </div>
  );
}
export default UPIForm;
