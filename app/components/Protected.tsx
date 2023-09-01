import Link from 'next/link'
import { FiLock } from 'react-icons/fi'

export default function Protected() {
  return (
    <div className='flex flex-col items-center font-bold'>
      <div className='rounded-full bg-gray-500 p-8 text-5xl text-white'>
        <FiLock />
      </div>
      <div className='mt-5 text-5xl'>Protected</div>
      <div className='my-5 text-2xl text-gray-500'>please login</div>
      <div className='text-2xl'>
        <Link href={'login'} className='rounded-lg bg-blue-300 px-5 py-2 text-white hover:bg-blue-500'>
          Login
        </Link>
      </div>
    </div>
  )
}
