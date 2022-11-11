import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

// https://57b8-112-134-221-151.ap.ngrok.io/request/leave



function Leave() {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  function viewStatus() {
    navigate("/frame11");
  }

  function handleChange(e, name) {
    setValues({ ...values, [name]: e.target.value })
  }
  console.log(values);


  function onSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
  }


  useEffect(() => {
    if (!isLoading) {
      return;
    }
    axios.post('https://57b8-112-134-221-151.ap.ngrok.io/request/leave', values)
      .then(res => {
        console.log(values)
      })
      .catch(error => {
        console.log(error);
      }
      )
      .finally(() => {
        setIsLoading(false);
      });
  }, [isLoading]);

  // console.log(values);
  console.log("isLoading");
  return (
    <div className="h-100  container-fluid">
      <div className="main_body">
        <div className="card_body container mt-5">
          <div className="top w-100 ">
            <button onClick={viewStatus} className=" btn status primary_btn ms-auto d-flex align-items-center justify-content-end py-1 mb-3 ">
              View Status
            </button>
          </div>
          <div className="card req_card mx-auto shadow my-2 px-4">
            <h5 className="req_title py-3 text-center add_title">
              Employee Leave Management
            </h5>
            <div className="req_form">
              <h5 className="fancy_title">Details of Applicant :</h5>
              <div className="input_grp mb-3">
                <label for="Name" className="fw-bold form-label">
                  Employee Name :
                </label>
                <br />
                <input
                  id="Name"
                  value={values.name || ""}
                  onChange={(e) => handleChange(e, "name")}
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Employee Name"
                />
              </div>
              {/* <div className="input_grp mb-3">
                <label for="Division" className="fw-bold form-label">
                  Department/Division  :
                </label>
                <br />
                <input
                  id="Division"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Division"
                  value={values.division}
                />
              </div> */}
              <div className="input_grp mb-3">
                <label for="Division" className="fw-bold form-label">
                  Employee Number  :
                </label>
                <br />
                <input
                  value={values.empId || ""}
                  onChange={(e) => handleChange(e, "empId")}
                  id="Division"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Employee Number"
                />
              </div>

              {/* <div className="input_grp mb-3">
                <label for="address" className="fw-bold form-label">
                  Position  :
                </label>
                <br />
                <input
                  id="address"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Position"
                />
              </div> */}

              <label className="fw-bold form-label">
                Reason for Leave  :
              </label>
              <br />
              <div className="px-3 mb-3 d-flex align-items-center justify-content-start">
                <div className="input_grp me-4">
                  <input
                    id="plas"
                    class="form-check-input mt-0"
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                  <lable fro="plas" className="lh-base ms-2">
                    Annual
                  </lable>
                </div>
                <div className="input_grp me-4">
                  <input
                    id="glass"
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <lable for="glass" className="lh-base ms-2">
                    Medical
                  </lable>
                </div>
                <div className="input_grp me-4">
                  <input
                    id="organic"
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <lable for="organic" className="lh-base ms-2">
                    Casual
                  </lable>
                </div>
                <div className="input_grp me-4">
                  <input
                    id="organic"
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <lable for="organic" className="lh-base ms-2">
                    Sick
                  </lable>
                </div>
                <div className="input_grp me-4">
                  <input
                    id="organic"
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <lable for="organic" className="lh-base ms-2">
                    Maternity
                  </lable>
                </div>
                <div className="input_grp me-4">
                  <input
                    id="organic"
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <lable for="organic" className="lh-base ms-2">
                    compensatory
                  </lable>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-start'>
                Other:
                <input type="text" className='form-control' placeholder="Enter the reason" />
              </div>

              {/* <div className="input_grp mb-3">
                <label for="quantity" className="fw-bold form-label">
                  Approximate weight :
                </label>
                <br />
                <input
                  id="quantity"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Quantity"
                />
              </div> */}
              <div className="input_grp mb-3">
                <label for="quantity" className="fw-bold form-label">
                  Additional Information (Optional) :
                </label>
                <br />
                <input
                  value={values.reason || ""}
                  onChange={(e) => handleChange(e, "reason")}
                  id="quantity"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Additional Information"
                />
              </div>
            </div>

            <div className=" row mb-3">
              <div className="col-3  input_grp ">
                <label for="date" className="fw-bold form-label">
                  Start Date :
                </label>
                <input
                  value={values.date || ""}
                  onChange={(e) => handleChange(e, "date")}
                  type="date"
                  id="date"
                  className="px-2 py-1 form-control"
                />
              </div>
              <div className="col-3 ps-3 input_grp">
                <label for="phone" className="fw-bold form-label">
                  End Date :
                </label>
                <input
                  id="phone"
                  type="date"
                  className="px-2 py-1 form-control"
                />
              </div>
              <div className="col-3 ps-3 input_grp">
                <label for="phone" className="fw-bold form-label">
                  Total :
                </label>
                <input
                  id="phone"
                  type="number"
                  className="px-2 py-1 form-control"
                />
              </div>
            </div>

            <div className="bottom w-100 text-center mt-4">
              <button
                 onClick={onSubmit} 
                className=" btn primary_btn proceed_btn mx-auto py-1 mb-3 ">
                Apply for Leave
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leave