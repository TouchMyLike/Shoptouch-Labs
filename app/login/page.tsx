'use client'
import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { FaGoogle, FaGithub } from 'react-icons/fa'

export default function Page() {
  const { data: session } = useSession()
  if (session) {
    redirect('/')
  }
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='rounded bg-white p-8 shadow-md'>
        <h1 className='mb-6 text-3xl font-semibold'>Login</h1>
        <button
          className='mb-2 flex items-center rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600'
          onClick={() => signIn('google')}
        >
          <FaGoogle className='mr-2' /> Login with Google
        </button>
        <button
          className='flex items-center rounded bg-gray-900 px-4 py-2 font-semibold text-white hover:bg-gray-800'
          onClick={() => signIn('github')}
        >
          <FaGithub className='mr-2' /> Login with GitHub
        </button>
      </div>
    </div>
  )
}
