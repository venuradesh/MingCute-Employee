import React from "react";
import logo from "../logo.svg";
import { useLocation, Link } from "react-router-dom";

function Sidebar2() {
  const location = useLocation();
  console.log('pathname', location.pathnam);
  return (
    <div className="sidenav_body primary_bg  h-100">
      <div className="p-2 px-3">
      {false && (
        <div className="back text-center py-2 pb-3">
          <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g
              id="页面-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Arrow"
                transform="translate(-96.000000, 0.000000)"
                fillRule="nonzero"
              >
                <g
                  id="arrow_left_line"
                  transform="translate(96.000000, 0.000000)"
                >
                  <rect id="矩形" x="0" y="0" width="24" height="24"></rect>
                  <path
                    d="M3.63603,11.293 C3.24551,11.6835 3.24551,12.3167 3.63603,12.7072 L9.29289,18.3641 C9.68341,18.7546 10.3166,18.7546 10.7071,18.3641 C11.0976,17.9736 11.0976,17.3404 10.7071,16.9499 L6.75735,13.0001 L20,13.0001 C20.5523,13.0001 21,12.5524 21,12.0001 C21,11.4478 20.5523,11.0001 20,11.0001 L6.75735,11.0001 L10.7071,7.05037 C11.0976,6.65984 11.0976,6.02668 10.7071,5.63616 C10.3166,5.24563 9.68341,5.24563 9.29289,5.63616 L3.63603,11.293 Z"
                    id="路径"
                    fill="#FFFFFFFF"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
        {true && (
        <div className="back text-start py-2 pb-3">
          <svg width="52" height="12" viewBox="0 0 52 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="6" fill="#FF6252"/>
          <circle cx="6" cy="6" r="5.5" stroke="black" strokeOpacity="0.1"/>
          <circle cx="26" cy="6" r="6" fill="#FDAD15"/>
          <circle cx="26" cy="6" r="5.5" stroke="black" strokeOpacity="0.1"/>
          <circle cx="46" cy="6" r="6" fill="#2AC670"/>
          <circle cx="46" cy="6" r="5.5" stroke="black" strokeOpacity="0.1"/>
          </svg>

        </div>
      )}

      <div className="brand_title mb-3 d-flex align-items-center justify-content-center">
        <svg className="mx-2" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
            <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="logo-(1)" fillRule="nonzero">
                    <rect id="矩形" fillOpacity="0.01" fill="#FFFFFF" x="0" y="0" width="24" height="24"></rect>
                    <path d="M1.94935,3.91175 C1.97329,3.48082 2.43073,3.21536 2.81675,3.40838 L7.65268,5.82634 C7.86403,5.93201 7.99367,6.15189 7.98383,6.38798 L7.51526,17.6338 C7.50589,17.8586 7.37152,18.0593 7.16721,18.1536 L1.90585,20.5819 C1.49508,20.7715 1.03025,20.4556 1.05534,20.0039 L1.94935,3.91175 Z" id="路径" fill="#007AFF"></path>
                    <path d="M22.0507,3.91175 C22.0267,3.48082 21.5693,3.21536 21.1832,3.40838 L16.3473,5.82634 C16.136,5.93201 16.0063,6.15189 16.0162,6.38798 L16.4847,17.6338 C16.4941,17.8586 16.6285,18.0593 16.8328,18.1536 L22.0941,20.5819 C22.5049,20.7715 22.9698,20.4556 22.9447,20.0039 L22.0507,3.91175 Z" id="路径" fill="#FDAD15"></path>
                    <path d="M8.96907,6.77336 C8.98357,6.41065 9.36759,6.1838 9.69227,6.34614 L11.5528,7.27639 C11.8343,7.41716 12.1657,7.41716 12.4472,7.27639 L14.3077,6.34614 C14.6324,6.1838 15.0164,6.41065 15.0309,6.77337 L15.4784,17.9603 C15.4919,18.2971 15.3348,18.618 15.0604,18.814 L12.3487,20.7509 C12.1401,20.8999 11.8599,20.8999 11.6513,20.7509 L8.93955,18.814 C8.66525,18.618 8.50812,18.2971 8.52159,17.9603 L8.96907,6.77336 Z" id="路径" fill="#2AC670"></path>
                </g>
            </g>
        </svg>

        <h5 className="light_text mb-0 d-none d-lg-block">MingCute</h5>
      </div>

      <div className="side_search_grp d-none d-lg-flex rounded-2  align-items-center justify-content-start  ps-2 py-1">
      </div>

      <div className="side_body pb-4">
        {
         false  && 
        <div className="dash  my-3 d-flex align-items-end justify-content-center justify-content-lg-start">
          <div className="me-lg-2 ">
            <svg
              className=""
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g
                id="页面-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Building"
                  transform="translate(-144.000000, -48.000000)"
                  fillRule="nonzero"
                >
                  <g
                    id="home_4_fill"
                    transform="translate(144.000000, 48.000000)"
                  >
                    <rect id="矩形" x="0" y="0" width="24" height="24"></rect>
                    <path
                      d="M13.2,2.65 C12.4889,2.11667 11.5111,2.11667 10.8,2.65 L3.8,7.9 C3.29639,8.27771 3,8.87049 3,9.5 L3,19 C3,20.1046 3.89543,21 5,21 L8.9,21 C9.50751,21 10,20.5075 10,19.9 L10,15 C10,13.8954 10.8954,13 12,13 C13.1046,13 14,13.8954 14,15 L14,19.9 C14,20.5075 14.4925,21 15.1,21 L19,21 C20.1046,21 21,20.1046 21,19 L21,9.5 C21,8.87049 20.7036,8.27771 20.2,7.9 L13.2,2.65 Z"
                      id="路径"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h6 className="mb-0 secondary_text d-none d-lg-block">Dashboard</h6>
        </div>
}

        <ul className="ps-0 ps-lg-4 ">
        <li
            className={`my-4`}
          >
          <Link to="/frame1" className="d-flex link clickable align-items-center justify-content-center justify-content-lg-start"  aria-current="page">
            <div className="me-lg-2 ">
            <svg
              className=""
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g
                id="页面-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Building"
                  transform="translate(-144.000000, -48.000000)"
                  fillRule="nonzero"
                >
                  <g
                    id="home_4_fill"
                    transform="translate(144.000000, 48.000000)"
                  >
                    <rect id="矩形" x="0" y="0" width="24" height="24"></rect>
                    <path
                      d="M13.2,2.65 C12.4889,2.11667 11.5111,2.11667 10.8,2.65 L3.8,7.9 C3.29639,8.27771 3,8.87049 3,9.5 L3,19 C3,20.1046 3.89543,21 5,21 L8.9,21 C9.50751,21 10,20.5075 10,19.9 L10,15 C10,13.8954 10.8954,13 12,13 C13.1046,13 14,13.8954 14,15 L14,19.9 C14,20.5075 14.4925,21 15.1,21 L19,21 C20.1046,21 21,20.1046 21,19 L21,9.5 C21,8.87049 20.7036,8.27771 20.2,7.9 L13.2,2.65 Z"
                      id="路径"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            </div>
            
            <h6 className="mb-0 secondary_text d-none d-lg-block">
            Dashboard
            </h6>
            </Link>
          </li>
          <li
            className={`my-4  `}
          >
            <Link to="/frame13" className="d-flex link clickable align-items-center justify-content-center justify-content-lg-start"  aria-current="page">
            <div className="me-lg-2 ">
              <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1'><g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                <g id='Map' transform='translate(0.000000, -48.000000)' fill-rule='nonzero'><g id='location_fill' transform='translate(0.000000, 48.000000)'>
                  <rect id='矩形' x='0' y='0' width='24' height='24'></rect><path d='M12,2 C16.9706,2 21,6.02944 21,11 C21,14.0738 19.3241,16.5892 17.5584,18.3945 C16.5896727,19.3848818 15.5596562,20.1973165 14.6817052,20.8113077 L14.2563896,21.1016714 C14.1879449,21.1472775 14.1208032,21.1914819 14.0550879,21.2342726 L13.6789009,21.4739579 L13.6789009,21.4739579 L13.3428744,21.6791459 L13.3428744,21.6791459 L12.9271,21.921 L12.9271,21.921 C12.3479,22.2481 11.6521,22.2481 11.0729,21.921 L10.6571257,21.6791459 L10.6571257,21.6791459 L10.1376557,21.3583918 C10.0749168,21.3184403 10.010628,21.2770633 9.94491277,21.2342726 L9.53449244,20.9606593 C8.61244219,20.3314866 7.49106273,19.4674136 6.44162,18.3945 C4.6759,16.5892 3,14.0738 3,11 C3,6.02944 7.02944,2 12,2 Z M12,8 C10.3431,8 9,9.34315 9,11 C9,12.6569 10.3431,14 12,14 C13.6569,14 15,12.6569 15,11 C15,9.34315 13.6569,8 12,8 Z' id='形状'
               fill='#FFFFF'></path></g></g></g></svg>
            </div>
            <h6 className="mb-0 text-wrap secondary_text d-none d-lg-block">
              City Map
            </h6>
            </Link>
          </li>

          <li className="my-4 d-flex link clickable align-items-center justify-content-center justify-content-lg-start">
            <div className="me-lg-2 ">
             
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83331 2.50008V3.33341C5.83331 4.25389 6.5795 5.00008 7.49998 5.00008H12.5C13.4205 5.00008 14.1666 4.25389 14.1666 3.33341V2.50008H15C15.9205 2.50008 16.6666 3.24627 16.6666 4.16675V13.3334C16.6666 16.0948 14.4281 18.3334 11.6666 18.3334H4.99998C4.0795 18.3334 3.33331 17.5872 3.33331 16.6667V4.16675C3.33331 3.24627 4.0795 2.50008 4.99998 2.50008H5.83331ZM9.99998 11.6667H7.49998C7.03975 11.6667 6.66665 12.0398 6.66665 12.5001C6.66665 12.9603 7.03975 13.3334 7.49998 13.3334H9.99998C10.4602 13.3334 10.8333 12.9603 10.8333 12.5001C10.8333 12.0398 10.4602 11.6667 9.99998 11.6667ZM12.5 8.33341H7.49998C7.03975 8.33341 6.66665 8.7065 6.66665 9.16675C6.66665 9.59412 6.98835 9.94634 7.4028 9.99448L7.49998 10.0001H12.5C12.9602 10.0001 13.3333 9.627 13.3333 9.16675C13.3333 8.7065 12.9602 8.33341 12.5 8.33341ZM11.6666 1.66675C12.1269 1.66675 12.5 2.03985 12.5 2.50008C12.5 2.92744 12.1783 3.27967 11.7638 3.32781L11.6666 3.33341H8.33331C7.87308 3.33341 7.49998 2.96031 7.49998 2.50008C7.49998 2.07272 7.82168 1.72049 8.23613 1.67235L8.33331 1.66675H11.6666Z" fill="white" fill-opacity="0.5"/>
              </svg>
            </div>
            <Link to="/profile/frame14" className="d-flex link clickable align-items-center justify-content-center justify-content-lg-start"  aria-current="page">
            <h6 className="mb-0 text-wrap secondary_text d-none d-lg-block">
              User Profile
            </h6>
            </Link>
          </li>

          <li className="my-4 ">
          <Link to="/frame1" className="d-flex link clickable align-items-center justify-content-center justify-content-lg-start"  aria-current="page">
            <div className="me-lg-2 ">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g
                  id="页面-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Business"
                    transform="translate(-144.000000, -48.000000)"
                    fillRule="nonzero"
                  >
                    <g
                      id="calendar_fill"
                      transform="translate(144.000000, 48.000000)"
                    >
                      <rect id="矩形" x="0" y="0" width="24" height="24"></rect>
                      <path
                        d="M21,12 L21,19 C21,20.1046 20.1046,21 19,21 L5,21 C3.89543,21 3,20.1046 3,19 L3,12 L21,12 Z M16,3 C16.5523,3 17,3.44772 17,4 L17,5 L19,5 C20.1046,5 21,5.89543 21,7 L21,10 L3,10 L3,7 C3,5.89543 3.89543,5 5,5 L7,5 L7,4 C7,3.44772 7.44772,3 8,3 C8.55228,3 9,3.44772 9,4 L9,5 L15,5 L15,4 C15,3.44772 15.4477,3 16,3 Z"
                        id="形状"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <h6 className="mb-0 text-wrap secondary_text d-none d-lg-block">
            View Schedule
            </h6>
            </Link>
          </li>

          <li className="my-4 d-flex clickable align-items-center justify-content-center justify-content-lg-start">
            <div className="me-lg-2 ">
              <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g
                  id="页面-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Contact"
                    transform="translate(0.000000, -48.000000)"
                    fillRule="nonzero"
                  >
                    <g
                      id="chat_1_fill"
                      transform="translate(0.000000, 48.000000)"
                    >
                      <rect id="矩形" x="0" y="0" width="24" height="24"></rect>
                      <path
                        d="M12,2 C17.5228,2 22,6.47715 22,12 C22,17.5228 17.5228,22 12,22 L4,22 C2.89543,22 2,21.1046 2,20 L2,12 C2,6.47715 6.47715,2 12,2 Z M12,14 L9,14 C8.44772,14 8,14.4477 8,15 C8,15.5523 8.44772,16 9,16 L12,16 C12.5523,16 13,15.5523 13,15 C13,14.4477 12.5523,14 12,14 Z M15,10 L9,10 C8.44772,10 8,10.4477 8,11 C8,11.51285 8.38604429,11.9355092 8.88337975,11.9932725 L9,12 L15,12 C15.5523,12 16,11.5523 16,11 C16,10.48715 15.613973,10.0644908 15.1166239,10.0067275 L15,10 Z"
                        id="形状"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <h6 className="mb-0 text-wrap secondary_text d-none d-lg-block">
            Request Leave
            </h6>
          </li>

          <li className="my-4 d-flex clickable align-items-center justify-content-center justify-content-lg-start">
            <div className="me-lg-2 ">
               <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g
                  id="页面-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="File"
                    transform="translate(0.000000, -336.000000)"
                    fillRule="nonzero"
                  >
                    <g
                      id="profile_fill"
                      transform="translate(0.000000, 336.000000)"
                    >
                      <rect id="矩形" x="0" y="0" width="24" height="24"></rect>
                      <path
                        d="M20,3 C21.1046,3 22,3.89543 22,5 L22,19 C22,20.1046 21.1046,21 20,21 L4,21 C2.89543,21 2,20.1046 2,19 L2,5 C2,3.89543 2.89543,3 4,3 L20,3 Z M17,15 L7,15 C6.44772,15 6,15.4477 6,16 C6,16.5523 6.44772,17 7,17 L17,17 C17.5523,17 18,16.5523 18,16 C18,15.4477 17.5523,15 17,15 Z M10,7 L8,7 C6.94563773,7 6.08183483,7.81587733 6.00548573,8.85073759 L6,9 L6,11 C6,12.0543909 6.81587733,12.9181678 7.85073759,12.9945144 L8,13 L10,13 C11.0543909,13 11.9181678,12.18415 11.9945144,11.1492661 L12,11 L12,9 C12,7.94563773 11.18415,7.08183483 10.1492661,7.00548573 L10,7 Z M17,11 L14,11 C13.4477,11 13,11.4477 13,12 C13,12.51285 13.386027,12.9355092 13.8833761,12.9932725 L14,13 L17,13 C17.5523,13 18,12.5523 18,12 C18,11.48715 17.613973,11.0644908 17.1166239,11.0067275 L17,11 Z M10,9 L10,11 L8,11 L8,9 L10,9 Z M17,7 L14,7 C13.4477,7 13,7.44772 13,8 C13,8.55228 13.4477,9 14,9 L17,9 C17.5523,9 18,8.55228 18,8 C18,7.44772 17.5523,7 17,7 Z"
                        id="形状"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <h6 className="mb-0 text-wrap secondary_text d-none d-lg-block">
            Vehicle Condition Monitoring
            </h6>
          </li>
        </ul>


      </div>
      </div>

      <div className="logout w-100 py-4 d-flex align-items-center justify-content-around p-2 px-3 bottom light_text ">
      <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' >
          <g id='页面-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            <g id='User' transform='translate(-240.000000, 0.000000)' fillRule='nonzero'>
              <g id='user_4_line' transform='translate(240.000000, 0.000000)'>
                <rect id='矩形' x='0' y='0' width='24' height='24'></rect>
                <path d='M12,2 C17.5228,2 22,6.47715 22,12 C22,17.5228 17.5228,22 12,22 C6.47715,22 2,17.5228 2,12 C2,6.47715 6.47715,2 12,2 Z M12,16 C9.8009,16 7.85121,16.828 6.56532,17.8707 C7.9922,19.1922 9.90177,20 12,20 C14.0982,20 16.0078,19.1922 17.4347,17.8707 C16.1488,16.828 14.1991,16 12,16 Z M12,4 C7.58172,4 4,7.58172 4,12 C4,13.5996 4.46949,15.0896 5.27819,16.3396 C6.92692,14.9918 9.33471,14 12,14 C14.6653,14 17.0731,14.9918 18.7218,16.3396 C19.5305,15.0896 20,13.5996 20,12 C20,7.58172 16.4183,4 12,4 Z M12,5 C14.2091,5 16,6.79086 16,9 C16,11.2091 14.2091,13 12,13 C9.79086,13 8,11.2091 8,9 C8,6.79086 9.79086,5 12,5 Z M12,7 C10.8954,7 10,7.89543 10,9 C10,10.1046 10.8954,11 12,11 C13.1046,11 14,10.1046 14,9 C14,7.89543 13.1046,7 12,7 Z' id='形状'
        fill='#FFF'></path></g></g></g></svg>
        SignIn
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" d="M7.00004 0.5C7.46029 0.5 7.83337 0.8731 7.83337 1.33333C7.83337 1.76069 7.51168 2.11292 7.09723 2.16106L7.00004 2.16667H2.83337C2.40601 2.16667 2.05379 2.48837 2.00565 2.90282L2.00004 3V13C2.00004 13.4274 2.32174 13.7796 2.73619 13.8277L2.83337 13.8333H6.58337C7.04362 13.8333 7.41671 14.2064 7.41671 14.6667C7.41671 15.094 7.09502 15.4463 6.68056 15.4944L6.58337 15.5H2.83337C1.50198 15.5 0.413657 14.4593 0.337618 13.1469L0.333374 13V3C0.333374 1.6686 1.37414 0.580283 2.68648 0.504244L2.83337 0.5H7.00004ZM11.7559 5.05372L14.113 7.41075C14.4384 7.73617 14.4384 8.26383 14.113 8.58925L11.7559 10.9462C11.4305 11.2717 10.9029 11.2717 10.5774 10.9462C10.252 10.6208 10.252 10.0932 10.5774 9.76775L11.5119 8.83333H7.00004C6.53979 8.83333 6.16671 8.46025 6.16671 8C6.16671 7.53975 6.53979 7.16667 7.00004 7.16667H11.5119L10.5774 6.23223C10.252 5.9068 10.252 5.37916 10.5774 5.05372C10.9029 4.72828 11.4305 4.72828 11.7559 5.05372Z" fill="white"/>
        </svg>
        
      </div>

    </div>
  );
}

export default Sidebar2;
