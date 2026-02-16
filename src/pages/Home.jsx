import React from 'react';
import HeroSection from '../components/HeroSection'
import { Pill } from 'lucide-react';

const Home = () => {
    return (
        <div>
            {/* hero section */}
            <HeroSection/>

            {/* rest of home page */}
            <section>
                <h3>Shop By Category</h3>
                {/* category card */}
                <div>
                    <div>
                        <Pill size={16} color="#ffffff" strokeWidth={2.5} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home