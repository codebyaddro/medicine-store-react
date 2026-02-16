import { Mail, MapPinned, Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import navlogo from '@/assets/navlogo.png'

const Footer = () => {
    return (
        <footer className='bg-[#E8E6DE] w-full p-5'>
            <div className='w-7xl mx-auto'>
                <div>
                    <div></div>
                    <div>
                        <img src={navlogo} alt="" />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <ul>
                                <h5 className='text-xl mb-2 font-normal'>Address</h5>
                                <li className='flex gap-3 items-baseline text-[#503217] font-normal'>
                                    <MapPinned size={12} />
                                    1640 Parker Rd. Allentown,<br /> New Mexico 31134
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h5 className='text-xl mb-2 font-normal'>Contact</h5>
                                <li className='flex gap-3 items-center text-[#503217] font-normal'>
                                    <Mail size={12} />
                                    hello@gmail.com
                                </li>
                                <li className='flex gap-3 items-center text-[#503217] font-normal'>
                                    <Phone size={12} />
                                    (209) 555-0104
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-center border-t-2 border-[#E2DFCF] pt-5'>
                    <p className='text-[#503217] font-semibold text-sm'> &copy; {new Date().getFullYear()}
                        <span>
                            <Link to={'https://codebyaddro.com'}> Code by Addro</Link>
                        </span> | Design from Figma Community
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer