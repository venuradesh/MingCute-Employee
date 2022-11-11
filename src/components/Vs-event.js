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
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://f5bc-112-134-222-178.ap.ngrok.io/time-table/event/truck')
      .then(function (response) {
        setData(response.data)
        console.log(response);
        console.log("response");
      })
  } , [])

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
                      <td>{cont.truck_id} </td>
                      <td>{cont.date} </td>
                      <td>{cont.event} </td>
                      <td>{cont.location} </td>
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