import React from 'react'
import { motion } from 'framer-motion'
import AnimatedUnderline from '../shared/animations/AnimatedUnderline'
import ColoringText from '../shared/animations/ColoringText'
export default function Home() {
  return (
    <div>
      <div className="relative grid items-center min-h-[45vw] -mx-10
            before:content-['']
            before:absolute
            before:inset-0
            before:bg-[url('/src/assets/hero_women.png')]
            before:bg-cover
            before:bg-[position:0%_30%]
            before:bg-no-repeat
            before:opacity-80
            after:content-['']
            after:absolute
            after:z-0
            after:inset-0
            after:bg-gradient-to-r after:from-[#D6EAF8aa] after:to-transparent after:to-85%
            "
      >
        <div className="ml-[10vw] z-10">
          <h1 className="text-2xl md:text-6xl">Start Your Career With Us</h1>

          <div className="hidden md:join my-4">
            <div>
              <input className="input join-item w-[20vw] bg-blue-100" placeholder="Search" />
            </div>
            <select className="select join-item bg-blue-100">
              <option disabled selected>Filter</option>
              <option>IT / Technology</option>
              <option>Business & Consulting</option>
              <option>Healthcare & Medical</option>
              <option>Finance & Accounting</option>
              <option>Education & Training</option>
            </select>
            <button className="btn btn-info join-item">Search</button>
          </div>

          <p className="flex flex-wrap gap-2 items-center font-bold text-sm md:text-xl">
            <ColoringText text="Trending Jobs Keywords:" />
            <span className="btn btn-outline btn-info rounded-lg btn-xs">
              Web Designer
            </span>
            <span className="btn btn-outline btn-info rounded-lg btn-xs">
              Web Developer
            </span>
            <span className="btn btn-outline btn-info rounded-lg btn-xs">
              IOS Developer
            </span>
            <span className="btn btn-outline btn-info rounded-lg btn-xs">
              Android Developer
            </span>
          </p>
        </div>
      </div>

      <div className='my-6 mt-8'>
        <AnimatedUnderline classes={"text-4xl"}>{<ColoringText text="Latest" />} Jobs</AnimatedUnderline>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 lg:px-[5vw]'>
          {
            [1, 2, 3, 4, 5, 6].map(() => {
              return (
                <div className="card bg-base-100 md:w-[40vw] lg:w-[25vw] shadow-sm">
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Jobs" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Card Title
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Fashion</div>
                      <div className="badge badge-outline">Products</div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>

      <div className='my-6 mt-8'>
        <AnimatedUnderline classes={"text-4xl"}>{<ColoringText text="Trending" />} Jobs</AnimatedUnderline>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 lg:px-[5vw]'>
          {
            [1, 2, 3, 4, 5, 6].map(() => {
              return (
                <div className="card bg-base-100 md:w-[40vw] lg:w-[25vw] shadow-sm">
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Jobs" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Card Title
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Fashion</div>
                      <div className="badge badge-outline">Products</div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>

      <div>
        <h2 className='text-4xl font-bold'><AnimatedUnderline>Top Companies</AnimatedUnderline></h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 lg:px-[5vw]'>
          {
            [1, 2, 3, 4, 5, 6].map(() => {
              return (
                <div className="card bg-base-100 md:w-[40vw] lg:w-[25vw] shadow-sm">
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Jobs" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Card Title
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Fashion</div>
                      <div className="badge badge-outline">Products</div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>

    </div>
  )
}
