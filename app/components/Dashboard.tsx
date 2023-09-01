import { BsBag } from 'react-icons/bs'
import { BiStore } from 'react-icons/bi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { PiUser } from 'react-icons/pi'

export default function Dashboard() {
  const information = [
    {
      icon: <BsBag />,
      color: 'text-orange-600',
      title: 'Total Sales',
      value: '0',
    },
    {
      icon: <BiStore />,
      color: 'text-violet-600',
      title: 'Total Sales',
      value: '0',
    },
    {
      icon: <PiUser />,
      color: 'text-emerald-600',
      title: 'Total Sales',
      value: '0',
    },
    {
      icon: <HiMenuAlt3 />,
      color: 'text-purple-600',
      title: 'Total Sales',
      value: '0',
    },
  ]
  return (
    <div className='flex gap-5'>
      {information.map((info, i) => (
        <div className={`mt-3 flex flex-1 gap-5 rounded-lg bg-white p-5`} key={i}>
          <div className={`text-3xl ${info.color}`}>
            <div>{info.icon}</div>
          </div>
          <div className='data'>
            <div className='text-gray-500'>{info.title}</div>
            <div className='font-bold'>${info.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
