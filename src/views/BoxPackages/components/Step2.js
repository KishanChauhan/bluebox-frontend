import React from "react";

function step2Btn() {
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "block";
  document.getElementById("st2").classList.remove("active");
  document.getElementById("st3").classList.add("active");
}
function step2BackBtn() {
  document.getElementById("step2").style.display = "none";
  document.getElementById("step1").style.display = "block";
  document.getElementById("st2").classList.remove("active");
  document.getElementById("st1").classList.add("active");
}

export default function Step2() {
  return (
    <>
      <div className="step2" id="step2">
        <h2 className="bg-primary text-white text-center py-2">
          Step 2:Select Moving And Packing Supplies
        </h2>
        <div className="row">
          <div className="container px-5 my-4">
            <div className="row py-4">Step 2</div>
            <div className="row">
              <div className="col-6">
                <div className="text-left mt-4">
                  <button
                    className="btn btn-dark text-uppercase step2BackBtn"
                    onClick={step2BackBtn}
                  >
                    Previous Step
                  </button>
                </div>
              </div>
              <div className="col-6">
                <div className="text-right mt-4">
                  <button
                    className="btn btn-dark text-uppercase step2Btn"
                    onClick={step2Btn}
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
