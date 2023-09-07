'use client'
import React, { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function Page() {
  const { data: session } = useSession()
  if (session) redirect('/')

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues: { email: '', password: '' } })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false)

      if (callback?.ok && callback?.error === null) {
        toast.success('Logged in')
      }
      if (callback?.error) {
        toast.error(callback.error)
      }
    })
  }

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='rounded bg-white p-8 shadow-md'>
        <h1 className='mb-6 text-3xl font-semibold'>Login</h1>
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
            {errors.password && <span className='text-sm text-red-500	'>Password is required</span>}
          </div>
          <div className='mb-4'>
            <button type='submit' className='w-full rounded bg-blue-500 p-2 font-semibold text-white hover:bg-blue-600'>
              Login
            </button>
          </div>
        </form>
        <div className='flex gap-2'>
          <button
            type='submit'
            className='flex items-center rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600'
            onClick={() => signIn('google')}
          >
            <FaGoogle className='mr-2' /> Login with Google
          </button>
          <button
            type='submit'
            className='flex items-center rounded bg-gray-900 px-4 py-2 font-semibold text-white hover:bg-gray-800'
            onClick={() => signIn('github')}
          >
            <FaGithub className='mr-2' /> Login with GitHub
          </button>
        </div>
        <div className='mt-4 text-center'>
          Don't have an account yet?{' '}
          <Link href='/register' className='text-blue-500 hover:underline'>
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}
