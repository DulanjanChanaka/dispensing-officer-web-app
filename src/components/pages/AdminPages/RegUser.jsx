import React from 'react'
import UserInfoTable from './UserInfoTable'
import Sidebar from './Sidebar'

const RegUser = () => {
  return (
    <div>
      <Sidebar/>
      <h2>registered user infomation</h2>
        <UserInfoTable/>
    </div>
  )
}

export default RegUser