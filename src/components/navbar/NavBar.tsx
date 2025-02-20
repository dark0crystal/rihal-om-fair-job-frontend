"use client"
import React from 'react'
import Brand from './Brand'
import Button from './Button'
import { useState } from 'react'

const NavBar = () => {

  const [isActive, setActive] = useState(false)
  return (
    <div className='relative w-screen h-[15vh]'>
       {/* <Brand /> */}
          <Button isActive={isActive} toggleMenu={()=>{setActive(!isActive)}} />
    </div>
  )
}

export default NavBar