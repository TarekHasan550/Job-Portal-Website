import Lottie from 'lottie-react'
import React from 'react'
import loginGif from '../../../public/login.json'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router'

export default function LoginPage() {
  const navigate = useNavigate()
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  }
  return (
    <div className='flex flex-col md:flex-row justify-center gap-[5vw] my-20 '>
      <form onSubmit={handleLogin} className="fieldset bg-white border-none rounded-box w-xs border p-8">
        <legend className="fieldset-legend text-2xl pt-0">Login</legend>

        <label className="label">Email</label>
        <input type="email" name='email' className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" name='password' className="input" placeholder="Password" />

        <label className="label link text-black">Forget Password?</label>

        <button className="btn bg-[#ADD8E6] mt-4">Login</button>

        <div className="divider m-0 text-base text-gray-500">or</div>

        <button className="btn bg-[#ADD8E6]"><FaGoogle /> Sign In With Google</button>

        <label className="label text-black mx-auto mt-2">Don't Have Account? <span onClick={() => navigate("/register")} className='link'>Register</span></label>
      </form>
      <div>
        <Lottie className='w-[24vw]' animationData={loginGif} loop={true} ></Lottie>
      </div>
    </div>
  )
}
