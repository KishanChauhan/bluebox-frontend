import React from "react";
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
  return (
    <>
      <div className="step3" id="step3">
        <h2 className="bg-primary text-white text-center py-2">
          Step 3: Delivery And Pickup Details
        </h2>
        <div className="row">
          <div className="container px-5 my-4">
            <div className="row py-4">Step3</div>

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
