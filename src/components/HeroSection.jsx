import React from 'react'
import heroImg from '@/assets/hero.png'
import heroClip from '@/assets/hero-clip.png'
import { ShoppingBasket } from 'lucide-react'

const HeroSection = () => {
    return (
        <header className='bg-[#E8E6DE] relative overflow-hidden'>
            
            {/* Decorative Clip */}
            <img 
                className='absolute -left-10 -bottom-10 w-32 md:w-48 lg:w-60'
                src={heroClip}
                alt=""
            />

            <div className='max-w-7xl mx-auto px-4 pt-32 pb-16 flex flex-col-reverse lg:flex-row items-center gap-12'>
                
                {/* Text Content */}
                <div className='text-center lg:text-left max-w-xl'>
                    <h2 className='text-[#503217] font-semibold 
                                    text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                                    leading-tight'>
                        Your trusted care now and always
                    </h2>

                    <p className='text-[#503217] 
                                    text-base sm:text-lg md:text-xl 
                                    mt-6'>
                        For the best results, align your health needs with your medication plan.
                    </p>

                    <button className='bg-[#503217] rounded-xl 
                                        flex items-center justify-center lg:justify-start 
                                        px-6 py-3 gap-3 
                                        text-white mt-8 
                                        hover:bg-[#3e2813] transition'>
                        <ShoppingBasket size={18} strokeWidth={2.5} />
                        Shop Now
                    </button>
                </div>

                {/* Hero Image */}
                <div className='w-full flex justify-center'>
                    <img 
                        src={heroImg}
                        alt="Hero"
                        className='w-72 sm:w-96 md:w-112.5 lg:w-137.5 h-auto object-contain'
                    />
                </div>
            </div>
        </header>
    )
}

export default HeroSection
