import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const table_array = [1, 2, 3, 4, 5, 6, 7, 8]

function VsEvent() {
  const navigate = useNavigate();

  function viewSummary() {
    navigate("/frame3");
  }
  function viewSchedule() {
    navigate("/frame2");
  }
  // const [data, setData] = useState([])

  const data = [
    {
        Event_Date : "Monday, 31 October 2022 ",
        Event_Name: "International Congress on Economy, Finance, and Business (ICEFB)",
        Location: "National Library Auditorium.Colombo",
        Tuck_Number: "SM-37MS"
    },
    {
        Event_Date : "Thursday, 3 November 2022 ",
        Event_Name: "World Conference on Accountants (WCA)",
        Location: " Sri Lanka Exhibition & Convention Centre.Colombo",
        Tuck_Number: "FI-67YU"
    },
    {
        Event_Date : "Saturday , 5 November 2022 ",
        Event_Name: "International Conference on Recycling and Waste Management (ICRWM)",
        Location: " Ruby Hall.Colombo",
        Tuck_Number: "FO-77UI"
    }
]

  // useEffect(() => {
  //   axios.get('https://f5bc-112-134-222-178.ap.ngrok.io/time-table/event/truck')
  //     .then(function (response) {
  //       setData(response.data)
  //       console.log(response);
  //       console.log("response");
  //     })
  // } , [])

  console.log("data");
  console.log(data);

  return (
    <div className="h-100   container-fluid">
      <div className="main_body">
        <div className="card_body shedule_table container mt-5">
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
                    <th>Truck ID</th>
                    <th>Date</th>
                    <th>Event</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>

                  {data.length > 0 && data.map((cont, index) => (
                    <tr key={index} >
                      <td>{cont.Tuck_Number} </td>
                      <td>{cont.Event_Date} </td>
                      <td>{cont.Event_Name} </td>
                      <td>{cont.Location} </td>
                    </tr>
                  ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VsEvent