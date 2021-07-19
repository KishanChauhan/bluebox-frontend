import React from "react";
import { getSelectMovings } from "../../../data/API";
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

export default function Step2(props) {
  const [category, setCategory] = React.useState("Home");
  const [sub_category, setSubCate] = React.useState("Select Moving");
  const [moving_products, setMovingProducts] = React.useState([]);

  const [packing_supplies, setPackingSupplies] =
    React.useState("Packing Supplies");
  const [packing_products, setPackingProducts] = React.useState([]);

  const callAPI = () => {
    getSelectMovings(category, sub_category)
      .then((res) => {
        setMovingProducts(res?.data);
      })
      .catch((e) => console.log(e));

    getSelectMovings(category, packing_supplies)
      .then((res) => {
        setPackingProducts(res?.data);
      })
      .catch((e) => console.log(e));
  };
  React.useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <div className="step2" id="step2">
        <h2 className="bg-primary text-white text-center py-2">
          Step 2:Select Moving And Packing Supplies
        </h2>
        <div className="row">
          <div className="container px-5 my-4">
            <div className="row py-4">
              {moving_products.results?.map((moving) => {
                return (
                  <>
                    <div className="col-md-4 p-0">
                      <div className="card">
                        <div className="">
                          <div className="text-center">
                            <h3>{moving.title}</h3>
                            <img
                              src={moving.image}
                              alt=""
                              style={{ width: 75 }}
                            />

                            <p>{moving.unit}</p>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="text-center">
                            <ul className="mt-3">
                              <ul className="mt-3">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: moving.description,
                                  }}
                                ></div>
                              </ul>
                            </ul>
                            <button
                              className="btn btn-danger mt-3"
                              onClick={() => props.setPacking(moving)}
                            >
                              ADD PACKAGE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

              {packing_products.results?.map((packing) => {
                return (
                  <>
                    <div className="col-md-4 p-0">
                      <div className="card">
                        <div className="">
                          <div className="text-center">
                            <h3>{packing.title}</h3>
                            <img
                              src={packing.image}
                              alt=""
                              style={{ width: 75 }}
                            />

                            <p>{packing.unit}</p>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="text-center">
                            <ul className="mt-3">
                              <ul className="mt-3">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: packing.description,
                                  }}
                                ></div>
                              </ul>
                            </ul>
                            <button className="btn btn-danger mt-3">
                              ADD PACKAGE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
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
