import { FiBell } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { BiSolidDownArrow } from 'react-icons/bi'
import { MdDarkMode } from 'react-icons/md'
import NavbarIcon from './NavbarIcon'

export default function Navbar() {
    return (
        <div className='flex items-center p-3'>
            {/* Navbar Logo */}
            <div className='flex items-center pr-[80px]'>
                <div className='text-2xl flex items-center gap-2 cursor-pointer'>
                    <div className=''>
                        <BiWorld />
                    </div>
                    <div className='font-bold'>
                        BackOffice
                    </div>
                </div>
            </div>
            {/* END Navbar Logo */}

            {/* Navbar Menu */}
            <div className='flex w-full justify-between items-center gap-5'>
                <NavbarIcon>
                    <FiMenu />
                </NavbarIcon>
                <div className='text-gray-700 text-lg flex justify-center items-center gap-5'>
                    <NavbarIcon>
                        <MdDarkMode />
                    </NavbarIcon>
                    <NavbarIcon>
                        <FiBell />
                        <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2'>1</div>
                    </NavbarIcon>
                    <NavbarIcon>
                        <BiWorld />
                    </NavbarIcon>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <div className='outline p-3 rounded-full'><AiOutlineUser /></div>
                        <div className='flex flex-col text-sm'>
                            <div className='flex items-center gap-2'>
                                <div>Akkrapol</div>
                                <div><BiSolidDownArrow /></div>
                            </div>
                            <div>@Admin</div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    )
}
