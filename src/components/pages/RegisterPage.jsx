import Lottie from 'lottie-react'
import React from 'react'
import registerGif from '../../../public/register.json'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router'

export default function RegisterPage() {
  const navigate = useNavigate();
  const handleReg = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
  }
  return (
    <div className='flex flex-col md:flex-row justify-center gap-[5vw] my-20 '>
      <form onSubmit={handleReg} className="fieldset bg-white border-none rounded-box w-xs border p-8">
        <legend className="fieldset-legend text-2xl pt-0">Register</legend>

        <label className="label">Name</label>
        <input type="name" name='name' className="input" placeholder="Name" />

        <label className="label">Email</label>
        <input type="email" name='email' className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" name='password' className="input" placeholder="Password" />

        <button className="btn bg-[#ADD8E6] mt-4">Register</button>

        <div className="divider m-0 text-base text-gray-500">or</div>

        <button className="btn bg-[#ADD8E6]"><FaGoogle /> Sign In With Google</button>

        <label className="label text-black mx-auto mt-2">Already Have Account? <span onClick={() => navigate("/login")} className='link'>Login</span></label>
      </form>
      <div className='self-center'>
        <Lottie className='w-[25vw]' animationData={registerGif} loop={true} ></Lottie>
      </div>
    </div>
  )
}
