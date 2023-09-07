'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import axios from 'axios'

export default function Register() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues: { email: '', password: '' } })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    axios
      .post('/api/register', data)
      .then(() => {
        router.push('/login')
      })
      .catch((error) => {
        // toast.error('Something went wrong.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='rounded bg-white p-8 shadow-md'>
        <h1 className='mb-6 text-3xl font-semibold'>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='text'
              id='email'
              {...register('email', { required: true })}
              className='mt-1 w-full rounded border px-3 py-2'
            />
            {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              {...register('password', { required: true })}
              className='mt-1 w-full rounded border px-3 py-2'
            />
            {errors.password && <span className='text-sm text-red-500'>Password is required</span>}
          </div>
          <div className='mb-4'>
            <button type='submit' className='w-full rounded bg-blue-500 p-2 font-semibold text-white hover:bg-blue-600'>
              Register
            </button>
          </div>
        </form>
        <div className='mt-4 text-center'>
          Already have an account?{' '}
          <Link href='/login' className='text-blue-500 hover:underline'>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
