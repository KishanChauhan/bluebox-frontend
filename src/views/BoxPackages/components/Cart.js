import React from "react";
function inc1() {
  document.getElementById("inpNum1").stepUp();
}
export function dec1() {
  document.getElementById("inpNum1").stepDown();
}

function inc2() {
  document.getElementById("inpNum2").stepUp();
}
function dec2() {
  document.getElementById("inpNum2").stepDown();
}

function inc3() {
  document.getElementById("inpNum3").stepUp();
}
function dec3() {
  document.getElementById("inpNum3").stepDown();
}

function inc4() {
  document.getElementById("inpNum4").stepUp();
}
function dec4() {
  document.getElementById("inpNum4").stepDown();
}
export default function Cart(props) {
  const { box, packing } = props;
  console.log("----packing------", packing);
  return (
    <>
      <div
        className="col-lg-3"
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div className="card noCard">
          <div className="card-header bg-primary">
            <h5 className="text-white text-center">order summary</h5>
          </div>
          <div className="card-body p-0 py-1">
            <ul className="list-group list-group-flush p-0">
              <li className="list-group-item p-0">
                <table className="table m-0">
                  <tbody>
                    <tr>
                      <td>
                        <p className="fs-12 font-weight-bold m-0">Package</p>
                      </td>
                      <td>
                        <p className="fs-12 font-weight-bold m-0 text-right text-primary">
                          Change
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="fs-12 m-0">
                          {box?.title} ({box?.rental?.period})
                        </p>
                      </td>
                      <td>
                        <p className="fs-12 m-0 text-right">${box.price}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li className="list-group-item p-0">
                <table className="table m-0">
                  <tbody>
                    <tr>
                      <td colSpan="3">
                        <p className="fs-12 font-weight-bold m-0">
                          Packing supplies
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="fs-12">
                        <button className="btn p-0" onClick={dec1}>
                          <span className="v-middle text-primary text-12">
                            -
                          </span>
                        </button>
                        <input
                          type="number"
                          className="numberInput text-center text-12"
                          value="1"
                          name=""
                          id="inpNum1"
                          readOnly
                        />
                        <button className="btn p-0" onClick={inc1}>
                          <span className="v-middle text-primary text-12">
                            +
                          </span>
                        </button>
                      </td>
                      <td className="v-middle m-auto">
                        <p className="fs-12 m-0">Bubble Wrap</p>
                      </td>
                      <td>
                        <p className="fs-12 m-0 text-right">$52</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="fs-12">
                        <button className="btn p-0" onClick={dec2}>
                          <span className="v-middle text-primary text-12">
                            -
                          </span>
                        </button>
                        <input
                          type="number"
                          className="numberInput text-center text-12"
                          value="1"
                          name=""
                          id="inpNum2"
                          readOnly
                        />
                        <button className="btn p-0" onClick={inc2}>
                          <span className="v-middle text-primary text-12">
                            +
                          </span>
                        </button>
                      </td>
                      <td className="v-middle m-auto">
                        <p className="fs-12 m-0">pouches</p>
                      </td>
                      <td>
                        <p className="fs-12 m-0 text-right">$52</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li className="list-group-item p-0">
                <table className="table m-0">
                  <tbody>
                    <tr>
                      <td colSpan="3">
                        <p className="fs-12 font-weight-bold m-0">
                          moving supplies (rentd)
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="fs-12">
                        <button className="btn p-0" onClick={dec3}>
                          <span className="v-middle text-primary text-12">
                            -
                          </span>
                        </button>
                        <input
                          type="number"
                          className="numberInput text-center text-12"
                          value="1"
                          name=""
                          id="inpNum3"
                          readOnly
                        />
                        <button className="btn p-0" onClick={inc3}>
                          <span className="v-middle text-primary text-12">
                            +
                          </span>
                        </button>
                      </td>
                      <td className="v-middle m-auto">
                        <p className="fs-12 m-0">glass divider</p>
                      </td>
                      <td>
                        <p className="fs-12 m-0 text-right">$52</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="fs-12">
                        <button className="btn p-0" onClick={dec4}>
                          <span className="v-middle text-primary text-12">
                            -
                          </span>
                        </button>
                        <input
                          type="number"
                          className="numberInput text-center text-12"
                          value="1"
                          name=""
                          id="inpNum4"
                          readOnly
                        />
                        <button className="btn p-0" onClick={inc4}>
                          <span className="v-middle text-primary text-12">
                            +
                          </span>
                        </button>
                      </td>
                      <td className="v-middle m-auto">
                        <p className="fs-12 m-0">wardrobe box</p>
                      </td>
                      <td>
                        <p className="fs-12 m-0 text-right">$52</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
          <div className="card-footer bg-primary">
            <table className="table m-0">
              <tbody>
                <tr>
                  <td className="p-0 border-0">
                    <p className="fs-12 font-weight-bold m-0 text-white">
                      total cost
                    </p>
                  </td>
                  <td className="p-0 border-0">
                    <p className="fs-12 font-weight-bold m-0 text-right text-white">
                      $52
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
