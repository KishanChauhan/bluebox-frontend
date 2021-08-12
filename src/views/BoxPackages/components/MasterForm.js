import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Cart from "./Cart";
export default function MasterForm() {
  const [box, setBox] = React.useState({});
  const [packings, setPacking] = React.useState([]);
  const [movings, setMovings] = React.useState([]);

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
  return (
    <>
      <section className="showTabs pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 bg-white p-0">
              <Step1 setBox={setBox} />
              <Step2
                setPacking={setPacking}
                setMovings={setMovings}
                movings={movings}
                packings={packings}
              />
              <Step3
                delivery={delivery}
                pickup={pickup}
                setDelivery={setDelivery}
                setPickup={setPickup}
              />
              <Step4 delivery_detail={delivery} pickup_detail={pickup} />
            </div>
            <Cart
              box={box}
              packing_products={packings}
              moving_products={movings}
            />
          </div>
        </div>
      </section>
    </>
  );
}
