import React from 'react'
import Dashboard from './Components/Dashboard'
import { Outlet } from 'react-router-dom'

const AdminPage = () => {
  return (
        <>
        <Outlet/>
        </>
  )
}

export default AdminPage