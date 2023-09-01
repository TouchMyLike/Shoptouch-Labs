import React from 'react'
import { childrenProps } from '../Interfaces/children'

export default function NavbarIcon({ children }: childrenProps) {
  return (
    <div className='relative cursor-pointer rounded-full bg-gray-300 p-3 hover:bg-gray-700 hover:text-white'>
      {children}
    </div>
  )
}
