import React from "react";
import SimpleReactValidator from "simple-react-validator";
import {
  rentalsPeriods,
  getDeliverWindows,
  getExtraWork,
} from "../../../data/API";

function step3Btn() {
  document.getElementById("step3").style.display = "none";
  document.getElementById("step4").style.display = "block";
  document.getElementById("st3").classList.remove("active");
  document.getElementById("st4").classList.add("active");
}

function step3BackBtn() {
  document.getElementById("step3").style.display = "none";
  document.getElementById("step2").style.display = "block";
  document.getElementById("st3").classList.remove("active");
  document.getElementById("st2").classList.add("active");
}
export default function Step3() {
  const [, forceUpdate] = React.useState();
  const validator = React.useRef(new SimpleReactValidator());
  const [rentals, setRentalList] = React.useState([]);
  const [windows, setWindows] = React.useState([]);
  const [extra_work, setExtraWork] = React.useState([]);

  const [delivery, setDelivery] = React.useState({
    delivery_address: "",
    delivery_date: null,
    latitude: "",
    longitude: "",
    apt_number: "",
    description: "",
    delivery_window: "",
    extra_work: "",
    rental: "",
  });
  const [pickup, setPickup] = React.useState({
    pickup_address: "",
    pickup_date: null,
    latitude: "",
    longitude: "",
    apt_number: "",
    description: "",
    delivery_window: "",
    extra_work: "",
    rental: "",
  });
  const handleChange = (event) => {
    setDelivery({ ...delivery, [event.target.name]: event.target.value });
  };

  const handleDeliverySubmit = (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      alert("Valid");
    } else {
      validator.current.showMessages();
      forceUpdate(1);
    }
  };

  const callApi = () => {
    rentalsPeriods()
      .then((res) => {
        setRentalList(res?.data);
      })
      .catch((e) => console.log(e));

    getDeliverWindows()
      .then((res) => {
        setWindows(res?.data);
      })
      .catch((e) => console.log(e));

    getExtraWork()
      .then((res) => {
        setExtraWork(res?.data);
      })
      .catch((e) => console.log(e));
  };

  React.useEffect(() => {
    callApi();
  }, []);
  return (
    <>
      <div className="step3" id="step3">
        <h2 className="bg-primary text-white text-center py-2">
          Step 3: Delivery And Pickup Details
        </h2>
        <div className="row">
          <div className="container px-5 my-4">
            {/* <div className="row py-4"> */}

            <form>
              <h5>Delivery Details</h5>
              <hr />
              <div className="row">
                <div className="col-md-6 mt-3">
                  <label>Delivery Date *</label>

                  <input
                    type="date"
                    className="form-control"
                    placeholder="Delivery Date"
                    name="delivery_date"
                    value={delivery.delivery_date}
                    onChange={(e) => handleChange(e)}
                  />
                  {validator.current.message(
                    "Delivery Date",
                    delivery.delivery_date,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <label>Rental Period *</label>
                  <select
                    className="form-control"
                    name="rental"
                    value={delivery.rental}
                    onChange={(e) => handleChange(e)}
                  >
                    {rentals.results?.map((obj) => {
                      return <option value={obj.period}>{obj.period}</option>;
                    })}
                  </select>

                  {validator.current.message(
                    "address",
                    delivery.rental,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <label>Delivery Window 1 *</label>
                  <select
                    className="form-control"
                    name="delivery_window1"
                    value={delivery.delivery_window1}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="" selected>
                      Select a time slot
                    </option>
                    {windows.results?.map((obj) => {
                      return (
                        <option
                          value={obj.id}
                        >{`${obj.start_time} - ${obj.end_time}`}</option>
                      );
                    })}
                  </select>
                  {validator.current.message(
                    "Delivery Window1",
                    delivery.delivery_window1,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <label>Delivery Window 2 *</label>
                  <select
                    className="form-control"
                    name="delivery_window2"
                    value={delivery.delivery_window2}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="" selected>
                      Select a time slot
                    </option>
                    {windows.results?.map((obj) => {
                      return (
                        <option
                          value={obj.id}
                        >{`${obj.start_time} - ${obj.end_time}`}</option>
                      );
                    })}
                  </select>

                  {validator.current.message(
                    "Delivery Window2",
                    delivery.delivery_window1,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <label>Delivery Address *</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Delivery Address"
                    name="delivery_address"
                    value={delivery.delivery_address}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-md-6 mt-3">
                  <label>Apt#</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apt"
                    name="apt"
                    value={delivery.apt}
                    onChange={(e) => handleChange(e)}
                  />

                  {validator.current.message(
                    "address",
                    delivery.apt,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-12 mt-3">
                  <label>Do you have stairs or an elevator? *</label>
                  <select
                    className="form-control"
                    name="extra_work"
                    value={delivery.extra_work}
                    onChange={(e) => handleChange(e)}
                  >
                    {extra_work.results?.map((obj) => {
                      <option value="" selected>
                        Select an option
                      </option>;
                      return (
                        <option
                          value={obj.id}
                        >{`${obj.title} (${obj.price})`}</option>
                      );
                    })}
                  </select>

                  {validator.current.message(
                    "address",
                    delivery.address,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-12 mt-3">
                  <label>Is there anything else we should know?</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={delivery.description}
                    onChange={(e) => handleChange(e)}
                  ></textarea>

                  {validator.current.message(
                    "address",
                    delivery.address,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
              </div>

              <br></br> 
              <h5>Pickup Details</h5>
              <hr />
              <div className="row">
                {/* <div className="col-md-6 mt-3">
                  <label>Delivery Date *</label>

                  <input
                    type="date"
                    className="form-control"
                    placeholder="Delivery Date"
                    name="delivery_date"
                    value={delivery.delivery_date}
                    onChange={(e) => handleChange(e)}
                  />
                  {validator.current.message(
                    "Delivery Date",
                    delivery.delivery_date,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <label>Rental Period *</label>
                  <select
                    className="form-control"
                    name="rental"
                    value={delivery.rental}
                    onChange={(e) => handleChange(e)}
                  >
                    {rentals.results?.map((obj) => {
                      return <option value={obj.period}>{obj.period}</option>;
                    })}
                  </select>

                  {validator.current.message(
                    "address",
                    delivery.rental,
                    "required",
                    { className: "text-danger" }
                  )}
                </div> */}
                <div className="col-md-6 mt-3">
                  <label>Pick Up Window 1 *</label>
                  <select
                    className="form-control"
                    name="delivery_window1"
                    value={pickup.pickup_window1}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="" selected>
                      Select a time slot
                    </option>
                    {windows.results?.map((obj) => {
                      return (
                        <option
                          value={obj.id}
                        >{`${obj.start_time} - ${obj.end_time}`}</option>
                      );
                    })}
                  </select>
                  {validator.current.message(
                    "Delivery Window1",
                    pickup.delivery_window1,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <label>Delivery Window 2 *</label>
                  <select
                    className="form-control"
                    name="delivery_window2"
                    value={pickup.delivery_window2}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="" selected>
                      Select a time slot
                    </option>
                    {windows.results?.map((obj) => {
                      return (
                        <option
                          value={obj.id}
                        >{`${obj.start_time} - ${obj.end_time}`}</option>
                      );
                    })}
                  </select>

                  {validator.current.message(
                    "Delivery Window2",
                    pickup.delivery_window1,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <label>Delivery Address *</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Delivery Address"
                    name="delivery_address"
                    value={pickup.delivery_address}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-md-6 mt-3">
                  <label>Apt#</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apt"
                    name="apt_number"
                    value={pickup.apt}
                    onChange={(e) => handleChange(e)}
                  />

                  {validator.current.message(
                    "apt",
                    pickup.apt_number,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-12 mt-3">
                  <label>Do you have stairs or an elevator? *</label>
                  <select
                    className="form-control"
                    name="extra_work"
                    value={pickup.extra_work}
                    onChange={(e) => handleChange(e)}
                  >
                    {extra_work.results?.map((obj) => {
                      <option value="" selected>
                        Select an option
                      </option>;
                      return (
                        <option
                          value={obj.id}
                        >{`${obj.title} (${obj.price})`}</option>
                      );
                    })}
                  </select>

                  {validator.current.message(
                    "address",
                    pickup.address,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
                <div className="col-md-12 mt-3">
                  <label>Is there anything else we should know?</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={pickup.description}
                    onChange={(e) => handleChange(e)}
                  ></textarea>

                  {validator.current.message(
                    "address",
                    pickup.address,
                    "required",
                    { className: "text-danger" }
                  )}
                </div>
              </div>
            </form>
            {/* </div> */}

            <div className="row">
              <div className="col-6">
                <div className="text-left mt-4">
                  <button
                    className="btn btn-dark text-uppercase step3BackBtn"
                    onClick={step3BackBtn}
                  >
                    Previous Step
                  </button>
                </div>
              </div>
              <div className="col-6">
                <div className="text-right mt-4">
                  <button
                    className="btn btn-dark text-uppercase step3Btn"
                    onClick={step3Btn}
                    // onClick={handleDeliverySubmit}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
