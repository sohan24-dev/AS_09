"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

import { Rocket, Lightbulb, Sparkles } from "lucide-react";

const banners = [
    {
        icon: Rocket,
        image: "https://cdn.pixabay.com/photo/2020/07/20/07/25/bulb-5422142_1280.jpg",
        title: "Turn Your Startup Ideas Into Reality",
        desc: "Share innovative ideas, explore new startups, and build the future together with the community.",
    },
    {
        icon: Lightbulb,
        image: "https://cdn.pixabay.com/photo/2019/11/15/21/36/sparkler-4629347_1280.jpg",
        title: "Discover & Validate Startup Ideas",
        desc: "Get feedback, improve your ideas, and connect with like-minded innovators.",
    },
    {
        icon: Sparkles,
        image: "https://i.ibb.co.com/zhsqjN56/Screenshot-2026-05-17-215044.png",
        title: "Build The Future With Innovation",
        desc: "A community-driven platform where ideas meet execution and collaboration.",
    },
];

const Banner = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full"
        >
            {banners.map((item, index) => {
                const Icon = item.icon;

                return (
                    <SwiperSlide key={index}>
                        {/* HEIGHT CONTROLLED HERE */}
                        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px]">

                            {/* Image */}
                            <div className="relative h-full w-full overflow-hidden rounded-3xl">
                                <Image
                                    src={item.image}
                                    alt={`banner-${index}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

                                <div className="px-6 md:px-12 max-w-2xl text-center text-white">

                                    {/* Icon */}
                                    <div className="flex justify-center mb-4">
                                        <div className="p-3 rounded-full bg-white/10 backdrop-blur-md">
                                            <Icon className="w-7 h-7 text-blue-400" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
                                        {item.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-200">
                                        {item.desc}
                                    </p>

                                    {/* Button */}
                                    <Link
                                        href="/ideas"
                                        className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold text-white"
                                    >
                                        Explore Ideas
                                    </Link>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Banner;