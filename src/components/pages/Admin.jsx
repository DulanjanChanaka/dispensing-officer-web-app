import React from 'react'
import Sidebar from './AdminPages/Sidebar'
import "./Admin.css"


      
const Admin = () => {
  
  return (
    <div className='admin-panel'>
      <Sidebar/>
      <h1>Wellcome to Admin Panel</h1>
       
    </div>
  )
}


export default Admin