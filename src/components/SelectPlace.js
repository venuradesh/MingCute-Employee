import React from 'react'
import MapWrapper from "./MapWrapper"

function SelectPlace() {
  return (
    <div className="h-100 main_board  container-fluid">
      <div className="main_body">
        <h3>City Map</h3>
        <div className="card_body container mt-5">
          <div className="place_location p-4">
            <div className="row mt-5">
              <MapWrapper />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectPlace