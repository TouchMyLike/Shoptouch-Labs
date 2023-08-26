import React from 'react'
import { childrenProps } from '../Interfaces/children'

export default function NavbarIcon({ children }: childrenProps) {
  return (
    <div className='relative bg-gray-300 p-3 rounded-full cursor-pointer'>
      {children}
    </div>
  )
}
