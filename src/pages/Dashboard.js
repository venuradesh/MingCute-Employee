import React from 'react'
import { Route, Routes, Redirect, Navigate } from 'react-router-dom'
import Agr from '../components/Agr'
import Agr2 from '../components/Agr2'
import AgrForm from '../components/Agr_form'
import CommonDash from '../components/CommonDash'
import Leave from '../components/Leave'
import Navbar from '../components/Navbar'
import SelectPlace from '../components/SelectPlace'
import Sidebar from '../components/Sidebar'
import Vcm01 from '../components/Vcm01'
import Vcm02 from '../components/Vcm02'
import Vcm03 from '../components/Vcm03'
import ViewStatus from '../components/ViewStatus'
import Vs01 from '../components/Vs01'
import Vs02 from '../components/Vs02'
import WeatherForacst from '../components/weatherForacst'

function Dashboard() {
  return (
    <div className='d-flex  h-100 w-100'>
        <div className='sidebar_div primary_bg '>
            <Sidebar/>
        </div>
        <div className=' w-100  main_board  pt-3'>
            <Navbar />
            <Routes>
              <Route  path="/" element={<Navigate replace to="/frame1"/>}/>
              <Route path="/frame1" element={<Vcm01 />}/>
              <Route path="/frame2" element={<Vs01 />}/>
              <Route path="/frame3" element={<Vs02 />}/>
              <Route path="/frame4" element={<Agr />}/>
              <Route path="/frame5" element={<Agr2 />}/>
              <Route path="/frame6" element={<AgrForm/>}/>
              <Route path="/frame7" element={<Vcm02/>}/>
              <Route path="/frame8" element={<Vcm03/>}/>
              <Route path="/frame9" element={<WeatherForacst/>}/>
              <Route path="/frame10" element={<Leave/>}/>
              <Route path="/frame11" element={<ViewStatus/>}/>
              <Route path="/frame12" element={<CommonDash/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard