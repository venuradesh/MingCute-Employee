import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const table_array = [1, 2, 3, 4, 5, 6, 7, 8];

function Vs01() {
  const navigate = useNavigate();
  const location = useLocation();
  const [table_array, setTableArray] = useState([]);
  const API_URL = `http://localhost:5000/table/random/${location.state.place.charAt(0).toUpperCase() + location.state.place.slice(1)}`;

  function viewSummary() {
    navigate("/frame3");
  }
  function viewSchedule() {
    navigate("/frame2");
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(location.state.place);
    axios
      .get(API_URL)
      .then((response) => {
        setTableArray(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="h-100   container-fluid">
      <div className="main_body">
        <div className="card_body shedule_table container mt-5">
          {/* <div className="top w-100 ">
            <p>
            <a href='http://localhost:3000/frame2'>Truck</a> 
            <span>, </span>
            <a href='http://localhost:3000/frameevent'>Event</a> 
            <span>, </span>
            <a href='http://localhost:3000/frameaditional'> Additional Collections</a>
            <span>, </span>
            </p>
          </div> */}
          <div>
            <div className="mt-3 schedules d-flex align-items-center justify-content-between ">
              <div onClick={viewSchedule} className="schedule clickable h6 mb-0 py-2 title_tab text-center">
                Schedule
              </div>
              <div onClick={viewSummary} className="summary clickable h6 mb-0 py-2 title_tab text-center">
                Summary
              </div>
            </div>
            <div className="card table_card py-3 px-4">
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunnday</th>
                  </tr>
                </thead>
                <tbody>
                  {table_array.map((cont, index) => (
                    <tr key={index}>
                      <td>{Object.keys(cont)[0]}</td>
                      {cont[Object.keys(cont)[0]].map((datas, key) => (
                        <td key={key}>
                          {datas.map((data) => (
                            <p>
                              {`${data["Tuck Number"]}, ${data["Driver's Name"]}`}
                              <br /> {`Road - ${data["Road"]}`}
                              <br />
                              {`Emp - ${data["Employee Name"]}`}
                            </p>
                          ))}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vs01;
