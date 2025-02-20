"use client"
import React from 'react'
import Brand from './Brand'
import Button from './Button'
import { useState } from 'react'

const NavBar = () => {

  const [isActive, setActive] = useState(false)
  return (
    <div className='w-screen h-[12vh] flex justify-center items-center'>
       {/* <Brand /> */}
       <div>
          <Button isActive={isActive} toggleMenu={()=>{setActive(!isActive)}} />
       </div>
    </div>
  )
}

export default NavBar