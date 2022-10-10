import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useLocation } from 'react-router-dom';
import Sidebar2 from '../components/Sidebar2';
import Sidebar3 from '../components/Sidebar3';

function Dashboard() {
  const location = useLocation();
  const currentPath=location.pathname
  const parentPath = currentPath.substring(0, currentPath.lastIndexOf("/"));
  return (
    <div className='d-flex  h-100 w-100'>
        <div className='sidebar_div primary_bg '>
          {
            location.pathname==="/frame12" ?
            <Sidebar2/>: ( parentPath==="/profile" ?
            <Sidebar3/> : <Sidebar/>)
          }
          {
            
          }
        </div>
        <div className=' w-100  main_board  pt-3'>
            <Navbar />
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard