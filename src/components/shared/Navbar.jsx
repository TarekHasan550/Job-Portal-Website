import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router'
import './shared.css'
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { li } from 'framer-motion/client';
import { AuthContext } from '../../context/AuthContexProvider';

export default function Navbar() {
  const {user, setUser} = useContext(AuthContext)

  const RouteItems = ({ children }) => {
    let myRoute = children.replaceAll(" ", "-").toLowerCase();
    return (
      <NavLink to={`/${myRoute}`} className="btn btn-ghost hover:bg-[#ADD8E6] hover:text-black text-blue-900 outline-1">{children}</NavLink>
    )
  }

  return (
    <div className='p-2 px-6 bg-[#87CEEB] bg-[url("/curveLine.png")] bg-cover bg-no-repeat'>
      <div className='flex justify-between'>
        <div className='flex-1'>
          <NavLink to="/" className='flex justify-start items-center gap-2 w-fit'>
            <img className='w-10' src="/logo.png" alt="logo" />
            <h1 className='text-xl font-bold'>Job Portal</h1>
          </NavLink>
        </div>
        <div className='hidden lg:flex flex-1 justify-center space-x-4 items-center'>
          {
            user && (
              <>
                <RouteItems>Home</RouteItems>
                <RouteItems>My Applications</RouteItems>
                <RouteItems>Add Job</RouteItems>
                <RouteItems>My Posted Jobs</RouteItems>
              </>
            )
          }
        </div>
        <div className='hidden md:flex flex-1 justify-end items-center gap-4'>
          {
            user ?
              <>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-[2.5vw] rounded-full ring-2 ring-offset-2">
                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                  </div>
                </div>
                <button onClick={()=>setUser(false)} className="btn btn-ghost bg-[#ADD8E6]">Logout</button>
              </>
              :
              <>
                <NavLink to="/login" onClick={()=>setUser(true)} className='btn btn-ghost bg-[#ADD8E6]'>Login</NavLink>
                <NavLink to="/register" className='btn btn-ghost bg-[#ADD8E6]'>Register</NavLink>
              </>

          }
        </div>
        <div className={`w-fit flex ${user ? "lg:hidden" : "md:hidden"} ml-4 items-center`}>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button">
              <FiMenu className="size-8" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu mt-3 z-10 w-40 shadow-sm">
              <li><NavLink to="/home" className="w-full text-center bg-[#B0E0E6] block">Home</NavLink></li>
              <hr className='my-0.5 -mx-2 text-[#C4DFF6]' />
              {
                user ?
                  <>
                    <li><NavLink to="/my-applications" className="w-full text-center bg-[#B0E0E6] block">My Applications</NavLink></li>
                    <hr className='my-0.5 -mx-2 text-[#C4DFF6]' />
                    <li><NavLink to="/add-job" className="w-full text-center bg-[#B0E0E6] block">Add Job</NavLink></li>
                    <hr className='my-0.5 -mx-2 text-[#C4DFF6]' />
                    <li><NavLink to="/my-posted-jobs" className="w-full text-center bg-[#B0E0E6] block">My Posted Jobs</NavLink></li>
                    <hr className='my-0.5 -mx-2 text-[#C4DFF6] md:hidden' />
                    <li><button onClick={()=>setUser(false)} className="w-full text-center bg-[#B0E0E6] block md:hidden">Logout</button></li>
                  </>
                  :
                  <>
                    <li><NavLink to="/login" className="w-full text-center bg-[#B0E0E6] block md:hidden">Login</NavLink></li>
                    <hr className='my-0.5 -mx-2 text-[#C4DFF6] md:hidden' />
                    <li><NavLink to="/register" className="w-full text-center bg-[#B0E0E6] block md:hidden">Register</NavLink></li>
                  </>
              }
            </ul>
          </div>

        </div>
      </div>
    </div >
  )
}
