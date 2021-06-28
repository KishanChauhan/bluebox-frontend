import React from "react";
import MasterForm from "./components/MasterForm";
import Tabs from "./components/Tabs";

export default function MovingBox() {
  return (
    <>
      {/* <!-- banner --> */}
      <section className="hero move-hero position-relative">
        <div className="container">
          <div className="text-center">
            <h1
              className="text-white"
              data-aos="fade-down"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              Why Rent{" "}
              <span className="font-weight-bold">
                Moving <span className="text-primary">Boxes</span>
              </span>
            </h1>
            <button
              className="btn btn-primary px-4 mt-2"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Order Now
            </button>
          </div>
        </div>
      </section>
          <Tabs />
          <MasterForm />

    </>
  );
}
