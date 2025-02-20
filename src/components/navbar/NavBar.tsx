"use client"
import React from 'react'
import Brand from './Brand'
import Button from './Button'
import { useState } from 'react'
import {motion} from "framer-motion"

const variants = {
  open:{
    width:480,
    height:650,
    top:"-25px",
    right:"-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
  },
  closed:{
    width:100,
    height:40,
    top:"0px",
    right:"0px",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}

  }
}

const NavBar = () => {

  const [isActive, setActive] = useState(false)
  return (
    <div className='right-16 top-10 fixed'>
      {/* Nav Menu */}
      <motion.div
       className=' w-[400px] h-[600px] rounded-2xl bg-[#c9fd74] relative'
       variants={variants}
       animate={isActive ? "open":"closed"}
       initial ="closed"
       >

      </motion.div>
       {/* <Brand /> */}
        <Button isActive={isActive} toggleMenu={()=>{setActive(!isActive)}} />
    </div>
  )
}

export default NavBar