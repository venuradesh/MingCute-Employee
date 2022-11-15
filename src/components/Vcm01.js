import React from "react";
import { useNavigate } from "react-router-dom";

function Vcm01() {
  const navigate = useNavigate();

  function viewSchedule(data) {
    navigate("/frame2", { state: { place: data } });
  }
  return (
    <div className="h-100  container-fluid">
      <div className="main_body">
        <div className="card_body container mt-5">
          <div className="container ">
            <div className="card big_card  shadow mx-auto text-center">
              <h5 className="my-5">{`Municipal Wards :`}</h5>
              <div className="container mt-3">
                <div className="row">
                  <div className="col-4 py-4 text-center d-flex align-items-center justify-content-center">
                    <button onClick={() => viewSchedule("dematagoda")} className="place_btn h6 py-1">
                      {" "}
                      {`Dematagoda`}
                    </button>
                  </div>
                  <div className="col-4 py-4 text-center d-flex align-items-center justify-content-center"></div>
                  <div className="col-4 py-4 text-center d-flex align-items-center justify-content-center">
                    <button onClick={() => viewSchedule("wanathamulla")} className="place_btn h6 py-1">
                      {" "}
                      {`Wanathamulla`}
                    </button>
                  </div>
                  <div className="col-4 py-4 text-center d-flex a;ign-items-center justify-content-center">
                    <button onClick={() => viewSchedule("Kuppiyawatte%20-%20EAST")} className="place_btn h6 py-1">
                      {" "}
                      {`Kuppiyawatte East`}
                    </button>
                  </div>
                  <div className="col-4 py-4 text-center d-flex a;ign-items-center justify-content-center">
                    <button onClick={() => viewSchedule("Kuppiyawaththe%20-%20West")} className="place_btn h6 py-1">
                      {" "}
                      {`Kuppiyawatte West`}
                    </button>
                  </div>
                  <div className="col-4 py-4 text-center d-flex a;ign-items-center justify-content-center">
                    <button onClick={() => viewSchedule("Greenpath")} className="place_btn h6 py-1">
                      {" "}
                      {`Cinnoman Garden`}
                    </button>
                  </div>
                  <div className="col-4 py-4 text-center d-flex a;ign-items-center justify-content-center">
                    <button onClick={() => viewSchedule("Borella%20South")} className="place_btn h6 py-1">
                      {" "}
                      {`Borella South`}
                    </button>
                  </div>
                  <div className="col-4 py-4 text-center d-flex a;ign-items-center justify-content-center"></div>
                  <div className="col-4 py-4 text-center d-flex a;ign-items-center justify-content-center">
                    <button onClick={() => viewSchedule("Borella%20North")} className="place_btn h6 py-1">
                      {" "}
                      {`Borella North`}
                    </button>
                  </div>
                </div>
              </div>
              <div className="top w-100 event-btn-place">
                <a href="http://localhost:3000/frameevent">
                  <button className="place_btn ml-16 h6 py-1">events</button>
                </a>
                <a href="http://localhost:3000/frameaditional">
                  {" "}
                  <button className="place_btn ml-16 h6 py-1">Additional Garbage Request</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vcm01;
