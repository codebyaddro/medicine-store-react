import React from "react";
import HeroSection from "../components/HeroSection";
import categoryImg from "@/assets/category-img.png";
import ltsImg1 from "@/assets/lts1.png";
import ltsImg2 from "@/assets/lts2.png";
import ltsImg3 from "@/assets/lts3.png";
import ltsImg4 from "@/assets/lts4.png";
import ltsImg5 from "@/assets/lts5.png";

import {
    Activity,
    BaggageClaim,
    CheckCheck,
    Heart,
    Leaf,
    Pill,
    ShieldPlus,
    TestTube,
} from "lucide-react";

const categories = [
    { name: "Medicine", items: 32, icon: Pill },
    { name: "Health care", items: 20, icon: Heart },
    { name: "Beauty care", items: 30, icon: Leaf },
    { name: "Fitness", items: 35, icon: Activity },
    { name: "Lab equipment", items: 25, icon: TestTube },
    { name: "Medkits", items: 25, icon: ShieldPlus },
];

const products = [
    {
        name: "Microscope",
        price: 45,
        image: ltsImg2,
        badge: "New",
    },
    {
        name: "Pulse oximeter",
        price: 19,
        oldPrice: 25,
        image: ltsImg3,
        badge: "Save 10%",
    },
    {
        name: "Vitamin serum",
        price: 20,
        oldPrice: 30,
        image: ltsImg4,
    },
    {
        name: "High protein",
        price: 50,
        image: ltsImg5,
        badge: "New",
    },
];

const Home = () => {
    return (
        <div className="overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* ================= CATEGORY SECTION ================= */}
        <section className="bg-[#EEEDE7] py-12 md:py-20 relative">
            <img
            className="hidden lg:block absolute right-5 top-80"
            src={categoryImg}
            alt=""
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-center text-[#503217] mb-10 md:mb-14">
                Shop by Category
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                    <div
                    key={index}
                    className="bg-[#f7f4ef] rounded-xl p-6 md:p-8 text-center border border-[#e8e2d8] hover:shadow-md transition"
                    >
                    <div className="relative mx-auto mb-5 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-dashed border-[#8F7D6A]/50"></div>
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#E2DFCF] rounded-full flex items-center justify-center text-[#503217]">
                        <Icon size={24} className="md:w-7.5 md:h-7.5" />
                        </div>
                    </div>

                    <h3 className="text-sm md:text-md font-medium text-[#503217]">
                        {category.name}
                    </h3>
                    <p className="text-xs md:text-sm text-[#8F7D6A] mt-1">
                        {category.items} Items
                    </p>
                    </div>
                );
                })}
            </div>
            </div>
        </section>

        {/* ================= PRODUCT SECTION ================= */}
        <section className="bg-[#EEEDE7] py-12 md:py-20 relative">
            <img
            className="hidden lg:block absolute top-50 left-10"
            src={ltsImg1}
            alt=""
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-center text-[#4b2e1e] mb-10 md:mb-14">
                Latest health product
            </h2>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {products.map((product, index) => (
                <div key={index}>
                    <div className="relative bg-[#f7f4ef] rounded-xl p-6 group hover:shadow-md transition">
                    {/* Badge */}
                    {product.badge && (
                        <span className="absolute top-4 left-4 bg-[#d68a5a] text-white text-xs px-3 py-1 rounded-md">
                        {product.badge}
                        </span>
                    )}

                    {/* Image */}
                    <div className="flex justify-center items-center h-40">
                        <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-36 object-contain"
                        />
                    </div>

                    {/* Hover Button */}
                    <button className="absolute inset-x-4 bottom-4 bg-[#e6ded1] text-[#4b2e1e] text-sm md:text-md font-semibold px-6 py-2 rounded-md opacity-0 group-hover:opacity-100 transition flex justify-center items-center gap-2">
                        <BaggageClaim size={18} />
                        Shop now
                    </button>
                    </div>

                    {/* Product Info */}
                    <div className="mt-4 text-center">
                    <h3 className="text-md md:text-lg font-medium text-[#4b2e1e]">
                        {product.name}
                    </h3>
                    <div className="text-sm mt-1">
                        <span className="text-[#4b2e1e] font-medium">
                        ${product.price.toFixed(2)} USD
                        </span>
                        {product.oldPrice && (
                        <span className="text-[#9c8f80] line-through ml-2">
                            ${product.oldPrice.toFixed(2)} USD
                        </span>
                        )}
                    </div>
                    </div>
                </div>
                ))}
            </div>

            {/* ================= FEATURE STRIP ================= */}
            <div className="mt-12 md:mt-16 bg-[#F2F2F2] rounded-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <Feature
                title="30 Days warranty"
                desc="Enjoy peace of mind with warranty"
                />
                <Feature
                title="Exchange policy"
                desc="You're satisfied with your purchase"
                />
                <Feature
                title="Secure payment"
                desc="Shop with confidence every time"
                />
            </div>
            </div>
        </section>
        </div>
    );
};

function Feature({ title, desc }) {
    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 text-center sm:text-left">
        <div className="w-12 h-12 rounded-full bg-[#EBE9E0] flex items-center justify-center text-[#4b2e1e]">
            <CheckCheck size={22} />
        </div>
        <div>
            <h4 className="font-medium text-[#4b2e1e]">{title}</h4>
            <p className="text-sm text-[#8b7b6b]">{desc}</p>
        </div>
        </div>
    );
}

export default Home;
