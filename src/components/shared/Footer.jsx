import React from 'react'
import { FaFacebook, FaInstagram, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <div className='mt-10'>
      <footer className="footer sm:footer-horizontal bg-[#87CEEB] text-base-content p-10 md:gap-8 lg:pl-[9vw]">
        <form className='lg:px-2'>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-fit">
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email Here..."
                className="input input-bordered join-item" />
              <button className="btn bg-[#ADD8E6] border-none join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to="/my-applications" className="link link-hover">My Application</Link>
          <Link to="/add-job" className="link link-hover">Add Job</Link>
          <Link to="/my-posted-jobs" className="link link-hover">My Posted Jobs</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Connect With Us</h6>
          <div className='flex text-3xl gap-4 items-center'>
            <a target='_blank' href='https://facebook.com'><FaFacebook /></a>
            <a target='_blank' href='https://linkedin.com'><FaLinkedin /></a>
            <a target='_blank' href='https://instagram'><FaInstagramSquare /></a>
          </div>
        </nav>
      </footer>
    </div>
  )
}
