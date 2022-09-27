import React from "react";

function CommonDash() {
  return (
    <div className="h-100 main_board  container-fluid">
      <div className="main_body">
        <div className="card_body container mt-0">
          <div className="">
            <div className="row">
              <div className="col-8">
              <div className="w-100 upcoming py-4 mb-4">
                <h3 className="mb-4 text-center">Employee Summary </h3>
              <div className="row">
                <div className="col-6 px-3 d-flex align-items-center justify-content-center">
                  <div className="text-center w-75 py-3 upcoming card  border-3 emp_card">
                    <h6>Employee Count</h6>
                    <div className="display-3 fw-bold">6</div>
                  </div>
                </div>
                <div className="col-6 px-3 d-flex align-items-center justify-content-center">
                <div className="text-center card py-3 upcoming w-75  border-3 emp_card">
                    <h6>Leave Count</h6>
                    <div className="display-3 fw-bold">6</div>
                  </div>
                </div>
              </div>
            </div>
                <div className="upcoming py-2 text-center px-3">
                  <h3>Upcoming Events</h3>
                  <div className="event  my-2  shadow-sm rounded-3 w-100"></div>
                  <div className="event  my-2 shadow-sm rounded-3 w-100"></div>
                  <div className="event  my-2 shadow-sm rounded-3 w-100"></div>
                </div>

                <div className="shortage">
                  <div className="row">
                    <div className="col-6 p-3 d-flex align-items-center justify-content-center ">
                      <button className="short_btn border-0 p-2">
                        Emergency Numbers
                      </button>
                    </div>
                    <div className="col-6 p-3 d-flex align-items-center justify-content-center">
                      <button className="short_btn border-0 p-2">
                        Emergency Numbers
                      </button>
                    </div>
                    <div className="col-6 p-3 d-flex align-items-center justify-content-center">
                      <button className="short_btn border-0 p-2">
                        Emergency Numbers
                      </button>
                    </div>
                    <div className="col-6 p-3 d-flex align-items-center justify-content-center">
                      <button className="short_btn border-0 p-2">
                        Emergency Numbers
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="frame">
                  <div className="frame_head text-center py-2">
                    <h4 className="">Bin Status</h4>
                  </div>
                  <h4 className="ps-3 pt-3 subtitle">Bin Level</h4>
                  <img width="100%" height="auto" src="/mainIcons/meter-img.png" alt="mtr"/>
                  <h4 className="ps-3 subtitle">Bin Full</h4>
                  <img width="50%" height="auto" src="/mainIcons/photo_2022-07-24_07-48-54 1.png" alt="chart"/>
                  <h4 className="ps-3 subtitle">Bin Location</h4>
                  <div className="p-3">
                    <iframe
                      id="ggmap"
                      width="100%"
                      height="200"
                      title="myFrame"
                      src="https://maps.google.com/maps?q=colombo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonDash;
