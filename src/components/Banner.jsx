"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

const banners = [
    {
        image: "https://i.ibb.co.com/rK8Fm5TJ/Screenshot-2026-05-17-215110.png",
        title: "Turn Your Startup Ideas Into Reality ",
        desc: "Share innovative ideas, explore new startups, and build the future together with the community.",
    },
    {
        image: "https://i.ibb.co.com/GQmBtZjk/Screenshot-2026-05-17-215058.png",
        title: "Discover & Validate Startup Ideas 💡",
        desc: "Get feedback, improve your ideas, and connect with like-minded innovators.",
    },
    {
        image: "https://i.ibb.co.com/zhsqjN56/Screenshot-2026-05-17-215044.png",
        title: "Build The Future With Innovation ⚡",
        desc: "A community-driven platform where ideas meet execution and collaboration.",
    },
];

const Banner = () => {
    return (
        <div className="w-full rounded-2xl overflow-hidden">

            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                loop={true}
                className="h-[260px] sm:h-[340px] md:h-[450px]"
            >

                {banners.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[260px] sm:h-[340px] md:h-[450px]">

                            <Image
                                src={item.image}
                                alt={`banner-${index}`}
                                fill
                                className="object-cover"
                            />


                            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent flex items-center">

                                <div className="px-6 md:px-12 max-w-xl text-white">

                                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight">
                                        {item.title}
                                    </h2>

                                    <p className="mt-3 text-sm sm:text-base text-slate-200">
                                        {item.desc}
                                    </p>

                                    <Link
                                        href="/ideas"
                                        className="inline-block mt-5 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold text-white"
                                    >
                                        Explore Ideas
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Banner;