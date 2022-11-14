import React from 'react'
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
    console.log(location.pathname);
  return (
    <div className="container navbar px-3 py-2 d-md-flex align-items-center justify-content-between position-relative">
        <div className="brand mb-2 mb-md-0 d-flex align-items-center justify-content-start justify-content-md-center">
       <svg className='me-2' width='24px' height='24px' viewBox='0 0 24 24' 
       version='1.1'>
        <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Building' transform='translate(-144.000000, -48.000000)' fill-rule='nonzero'>
        <g id='home_4_fill' transform='translate(144.000000, 48.000000)'>
        <rect id='矩形' x='0' y='0' width='24' height='24'></rect>
        <path d='M13.2,2.65 C12.4889,2.11667 11.5111,2.11667 10.8,2.65 L3.8,7.9 C3.29639,8.27771 3,8.87049 3,9.5 L3,19 C3,20.1046 3.89543,21 5,21 L8.9,21 C9.50751,21 10,20.5075 10,19.9 L10,15 C10,13.8954 10.8954,13 12,13 C13.1046,13 14,13.8954 14,15 L14,19.9 C14,20.5075 14.4925,21 15.1,21 L19,21 C20.1046,21 21,20.1046 21,19 L21,9.5 C21,8.87049 20.7036,8.27771 20.2,7.9 L13.2,2.65 Z' id='路径' fill='#09244BFF'>
        </path></g></g></g>
        </svg>
        <h5 className='primary_text mb-0'>Dashboard</h5>
        </div>
        {
          location.pathname!=="/frame15"  &&
        <div className='border-0 rounded-2 d-flex align-items-center justify-content-start py-1 px-lg-2'>
        </div>
        }
    </div>
  )
}

export default Navbar