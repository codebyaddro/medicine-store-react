import { Facebook, Instagram, Mail, MapPinned, Phone, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import navlogo from '@/assets/navlogo.png'

const Footer = () => {
    return (
        <footer className='bg-[#E8E6DE] w-full px-5 py-10'>
            <div className='max-w-7xl mx-auto'>
                
                {/* Main Section */}
                <div className='flex flex-col lg:flex-row justify-between gap-12'>

                    {/* Left Links */}
                    <div className='flex gap-20'>
                        
                        <div>
                            <h5 className='text-xl mb-4 font-normal'>Pages</h5>
                            <ul className='flex flex-col gap-2 text-[#503217]'>
                                <li>Home</li>
                                <li>Shop</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Blog</li>
                                <li>Privacy Policy</li>
                                <li>FAQs</li>
                            </ul>
                        </div>

                        <div>
                            <h5 className='text-xl mb-4 font-normal'>Utility</h5>
                            <ul className='flex flex-col gap-2 text-[#503217]'>
                                <li>Style Guide</li>
                                <li>Instruction</li>
                                <li>Changelog</li>
                                <li>Licenses</li>
                                <li>Link in Bio</li>
                                <li>Error 404</li>
                                <li>Password Protected</li>
                            </ul>
                        </div>

                    </div>

                    {/* Center Section */}
                    <div className='flex flex-col justify-center items-center text-center max-w-md mx-auto lg:mx-0'>
                        <img className='w-40 h-auto mb-5' src={navlogo} alt="footer logo" />
                        <p className='leading-6 mb-5 text-[#503217]'>
                            We provide the ultimate solution for your online store and all your healthcare needs.
                        </p>

                        <ul className='flex gap-4'>
                            <li className='rounded p-2 cursor-pointer text-white bg-[#503217]'>
                                <Facebook size={18}/>
                            </li>
                            <li className='rounded p-2 cursor-pointer text-white bg-[#503217]'>
                                <Instagram size={18}/>
                            </li>
                            <li className='rounded p-2 cursor-pointer text-white bg-[#503217]'>
                                <Twitter size={18}/>
                            </li>
                            <li className='rounded p-2 cursor-pointer text-white bg-[#503217]'>
                                <Youtube size={18}/>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className='flex flex-col gap-8 text-[#503217]'>

                        <div>
                            <h5 className='text-xl mb-4 font-normal'>Address</h5>
                            <div className='flex gap-3 items-start'>
                                <MapPinned size={16} className='mt-1'/>
                                <p>
                                    1640 Parker Rd. Allentown,<br /> 
                                    New Mexico 31134
                                </p>
                            </div>
                        </div>

                        <div>
                            <h5 className='text-xl mb-4 font-normal'>Contact</h5>
                            <div className='flex flex-col gap-3'>
                                <div className='flex gap-3 items-center'>
                                    <Mail size={16}/>
                                    <span>hello@gmail.com</span>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <Phone size={16}/>
                                    <span>(209) 555-0104</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Bottom Section */}
                <div className='text-center border-t border-[#E2DFCF] mt-12 pt-6'>
                    <p className='text-[#503217] font-semibold text-sm'>
                        &copy; {new Date().getFullYear()}{" "}
                        <Link 
                            to='https://codebyaddro.com' 
                            className='hover:underline'
                        >
                            Code by Addro
                        </Link>{" "}
                        | Design from Figma Community
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
