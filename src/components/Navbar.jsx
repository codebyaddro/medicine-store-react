import React, { useState } from 'react'
import NavLogo from '@/assets/navlogo.png'
import { Link, NavLink } from 'react-router-dom'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='bg-[#EEEDE7] w-full py-5 fixed top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
                
                {/* Logo */}
                <Link to='/'>
                    <img className='w-32 md:w-36 h-8 object-contain' src={NavLogo} alt="Nav Logo" />
                </Link>

                {/* Desktop Menu */}
                <ul className='hidden md:flex gap-8'>
                    {['/', '/shop', '/about', '/contact'].map((path, index) => {
                        const labels = ['Home', 'Shop', 'About', 'Contact']
                        return (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-[#D3744A] font-semibold text-[18px]'
                                            : 'text-[#503217] font-semibold text-[18px]'
                                    }
                                >
                                    {labels[index]}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>

                {/* Desktop Icons */}
                <ul className='hidden md:flex gap-5'>
                    <li className='cursor-pointer'>
                        <Search size={20} strokeWidth={2.5} color='#503217' />
                    </li>
                    <li className='cursor-pointer'>
                        <ShoppingCart size={20} strokeWidth={2.5} color='#503217' />
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <X size={26} color='#503217' />
                        ) : (
                            <Menu size={26} color='#503217' />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className='md:hidden bg-[#EEEDE7] px-4 pb-6 mt-5 shadow-md'>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <NavLink onClick={() => setIsOpen(false)} to='/' className='text-[#503217] font-semibold'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setIsOpen(false)} to='/shop' className='text-[#503217] font-semibold'>
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setIsOpen(false)} to='/about' className='text-[#503217] font-semibold'>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setIsOpen(false)} to='/contact' className='text-[#503217] font-semibold'>
                                Contact
                            </NavLink>
                        </li>

                        {/* Mobile Icons */}
                        <div className='flex gap-6 pt-4'>
                            <Search size={20} strokeWidth={2.5} color='#503217' />
                            <ShoppingCart size={20} strokeWidth={2.5} color='#503217' />
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
