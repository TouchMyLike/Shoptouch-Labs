'use client'
import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function page() {
  const { data: session } = useSession()
  if (session) {
    redirect('/')
  }
  return (
    <div>
      <button onClick={() => signIn('google')} className='rounded-lg bg-black p-2 text-white'>
        login google
      </button>
    </div>
  )
}
