'use client'
import { FiBell } from 'react-icons/fi'
import { BiWorld } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { BiSolidDownArrow } from 'react-icons/bi'
import { MdDarkMode } from 'react-icons/md'
import NavbarIcon from './NavbarIcon'

import { useSession, signOut } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <div className='flex items-center p-3'>
      {/* Navbar Logo */}
      <div className='flex items-center pr-[80px]'>
        <div className='flex cursor-pointer items-center gap-2 text-2xl'>
          <div className=''>
            <BiWorld />
          </div>
          <div className='font-bold'>BackOffice</div>
        </div>
      </div>
      {/* END Navbar Logo */}

      {/* Navbar Menu */}
      {session && (
        <div className='flex w-full items-center justify-between gap-5'>
          <NavbarIcon>
            <FiMenu />
          </NavbarIcon>
          <div className='flex items-center justify-center gap-5 text-lg text-gray-700'>
            <NavbarIcon>
              <MdDarkMode />
            </NavbarIcon>
            <NavbarIcon>
              <FiBell />
              <div className='absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white'>
                1
              </div>
            </NavbarIcon>
            <NavbarIcon>
              <BiWorld />
            </NavbarIcon>
            <div className='flex cursor-pointer items-center gap-2'>
              <div className='h-[42px] w-[42px]'>
                <img className='rounded-full' src={session.user?.image || ''} alt='User Profile' />
              </div>
              <div className='flex w-20 flex-col text-sm'>
                <div className='flex items-center gap-2'>
                  <div className='truncate'>{session.user?.name}</div>
                  <div>
                    <BiSolidDownArrow />
                  </div>
                </div>
                <div className='truncate'>{session.user?.email}</div>
                {/* Test */}
                <button onClick={() => signOut()} className='rounded-md bg-red-500 text-white'>
                  logout
                </button>
                {/* END Test */}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* END Navbar Menu */}
    </div>
  )
}
