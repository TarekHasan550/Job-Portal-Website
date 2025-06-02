import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <>
      <div className='bg-[#F0F8FF]'>
        <Navbar></Navbar>
        <div className='px-10'>
          <Outlet />
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}
