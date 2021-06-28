import React from "react";
function step4BackBtn() {
  document.getElementById("step4").style.display = "none";
  document.getElementById("step3").style.display = "block";
  document.getElementById("st4").classList.remove("active");
  document.getElementById("st3").classList.add("active");
}

export default function Step4() {
  return (
    <>
      <div className="step4" id="step4">
        <h2 className="bg-primary text-white text-center py-2">
          Step 4: Personal Detail And Payment
        </h2>
        <div className="row">
          <div className="container px-5 my-4">
            <div className="row py-4">Step 4</div>

            <div className="row">
              <div className="col-6">
                <div className="text-left mt-4">
                  <button
                    className="btn btn-dark text-uppercase step4BackBtn"
                    onClick={step4BackBtn}
                  >
                    Previous Step
                  </button>
                </div>
              </div>
              <div className="col-6">
                <div className="text-right mt-4">
                  <button className="btn btn-dark text-uppercase step4Btn">
                    Submit
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
