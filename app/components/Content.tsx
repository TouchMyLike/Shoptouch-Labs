'use client'
import Dashboard from './Dashboard'
import Protected from './Protected'
import { useSession, signOut } from 'next-auth/react'

function Content() {
  const { data: session } = useSession()

  return (
    <div className='m-3 w-full rounded-2xl bg-gray-300 p-3'>
      {!!session ? (
        <Dashboard />
      ) : (
        <div className='flex h-full items-center justify-center'>
          <Protected />
        </div>
      )}
    </div>
  )
}

export default Content
