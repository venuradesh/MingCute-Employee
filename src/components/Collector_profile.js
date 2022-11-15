import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 11],
      backgroundColor: ["red", "green", "yellow"],
      borderColor: ["transparent"],
      borderWidth: 5,
    },
  ],
};

function CollectorProfile() {
  const { id } = useParams();
  const [empData, setEmpData] = useState(null);

  useEffect(() => {
    axios.get("https://0895-123-231-61-157.in.ngrok.io/employee-list").then((response) => {
      setEmpData(
        response.data.find((emp) => {
          if (emp["id"] === id) {
            return true;
          }
          return false;
        })
      );
    });
  }, []);

  return (
    <>
      {empData ? (
        <div className="row profile h-100">
          <div className="col-md-8">
            <div className="head_user my-3 row">
              <div className="col-sm-4 d-flex align-items-center justify-content-center">
                <lable for="profImg" className="imgdiv">
                  {/* <div className="imgdiv"> */}
                  <img className="default_img" width="150" height="150" src="/profile/user.svg" alt="user" />
                  <img className="update_img" src="/profile/dashicons_update.png" alt="user" />
                  {/* </div> */}
                </lable>
                <input type="file" id="profImg" className="file_input" />
              </div>
              <div className="col-sm-8 d-flex align-items-center justify-content-center">
                <div>
                  <h2>{empData["name"]}</h2>
                  <p>{empData["id"]}</p>
                </div>
              </div>
            </div>

            <div className="card_user card border-0 mx-2 p-4">
              <div className="row">
                <div className="col-6 pb-3">Main Area : </div>
                <div className="col-6 pb-3">{empData["area"]}</div>
                <div className="col-6">Working Lanes :</div>
                <div className="col-6">{empData["lane"]}</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex p-3 badge_card mx-auto pb-5">
              <img src="/profile/carbon_badge.png" alt="brand" />
              <h5 className="light_text fw-bold pt-2">{empData["badge"]}</h5>
            </div>
            <div className="d-flex align-items-center justify-content-center badge_card mx-auto pb-2">
              <div className="">
                <h5 className="light_text fw-bold text-center pt-4">Service Feedback Precentage</h5>
                <Doughnut
                  data={{
                    labels: ["Red", "Blue", "yellow"],
                    datasets: [
                      {
                        label: "# of Votes",
                        data: [empData["positive"], empData["negative"], empData["neutral"]],
                        backgroundColor: ["red", "green", "yellow"],
                        borderColor: ["transparent"],
                        borderWidth: 5,
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className=" mx-auto pb-2">
              <div className="">
                <h5 className="light_text fw-bold text-center pt-4">Overall Service Ratings</h5>
                <div className="d-flex align-items-center justify-content-center my-4">
                  {[...Array(empData["Average Rating"])].map((rating, index) => (
                    <div className="star_circle rounded-circle mx-2 p-1" key={index}>
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.23854 0.744873L12.0044 5.73596L18.1743 6.55728L13.7064 10.4112L14.7702 15.9077L9.23854 13.3174L3.70685 15.9077L4.77064 10.4112L0.302734 6.55728L6.47269 5.73596L9.23854 0.744873Z" fill="#FFCA28" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>Loading</>
      )}
    </>
  );
}

export default CollectorProfile;
