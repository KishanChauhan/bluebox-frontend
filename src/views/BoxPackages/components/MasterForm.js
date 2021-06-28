import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Cart from "./Cart";
export default function MasterForm() {
  const [box, setBox] = React.useState({});
  return (
    <>
      <section className="showTabs pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 bg-white p-0">
              <Step1 setBox={setBox} />
              <Step2 />
              <Step3 />
              <Step4 />
            </div>
            <Cart box={box} />
          </div>
        </div>
      </section>
    </>
  );
}
