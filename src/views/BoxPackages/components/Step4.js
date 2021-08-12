import React from "react";
import SimpleReactValidator from "simple-react-validator";
import PaymentApp from "../../payment";

export default function Step4(props) {
  const [, forceUpdate] = React.useState();
  const validator = React.useRef(new SimpleReactValidator());

  const { delivery_detail, pickup_detail } = props;
  const [personal, setPersonalDetails] = React.useState({
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    secondary_phone_number: "",
    company_name: "",
    voucher_code: "",
    hdyfu: "",
  });

  const handleChange = (event) => {
    setPersonalDetails({
      ...personal,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="step4" id="step4">
        <h2 className="bg-primary text-white text-center py-2">
          Step 4: Personal Detail And Payment
        </h2>
        <div className="row">
          <div className="container px-5 my-4">
            <div className="row py-4">
              <h5>Add Personal Details</h5>
              <hr />
              <div className="row">
                <div className="col-md-6 mt-3">
                  <label>First Name *</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="John"
                    name="first_name"
                    value={personal.first_name}
                    onChange={(e) => handleChange(e)}
                  />
                  {validator.current.message(
                    "First Name",
                    personal.first_name,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Deo"
                    name="last_name"
                    value={personal.last_name}
                    onChange={(e) => handleChange(e)}
                  />
                  {validator.current.message(
                    "Last Name",
                    personal.last_name,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="john@gmail.com"
                    name="email_address"
                    value={personal.email_address}
                    onChange={(e) => handleChange(e)}
                  />
                  {validator.current.message(
                    "Email",
                    personal.email_address,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <label>Phone Number *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="+91(7989878909)"
                    name="phone_number"
                    value={personal.phone_number}
                    onChange={(e) => handleChange(e)}
                  />
                  {validator.current.message(
                    "Email",
                    personal.phone_number,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <label>Secondary Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="+91(987887766)"
                    name="secondary_phone_number"
                    value={personal.secondary_phone_number}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-md-6 mt-3">
                  <label>Company Name (Office Orders Only)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Neo.pvt.lmt"
                    name="company_name"
                    value={personal.company_name}
                    onChange={(e) => handleChange(e)}
                  />

                  {validator.current.message(
                    "company_name",
                    personal.company_name,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <label>Got a voucher code?</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Neo.pvt.lmt"
                    name="company_name"
                    value={personal.company_name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-md-6 mt-3">
                  <label>How did you find us? *</label>
                  <input
                    className="form-control"
                    name="voucher_code"
                    value={personal.voucher_code}
                    onChange={(e) => handleChange(e)}
                  ></input>

                  {validator.current.message(
                    "voucher_code",
                    personal.voucher_code,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
              </div>
              <br></br>

              <h5>Enter Payment Details</h5>
              <hr />
              <PaymentApp
                delivery_detail={delivery_detail}
                pickup_detail={pickup_detail}
                personal={personal}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
