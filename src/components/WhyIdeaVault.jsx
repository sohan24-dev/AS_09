import React from "react";
import { Lightbulb, MessageSquare, Users, Rocket } from "lucide-react";


const FeatureCard = ({ Icon, title, description }) => {
    return (
        <div className="group flex flex-col items-center text-center p-7 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">


            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-violet-50 dark:bg-violet-500/10 text-violet-600 group-hover:scale-110 transition">
                <Icon className="w-6 h-6" />
            </div>


            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-4">
                {title}
            </h3>


            <p className="text-sm text-slate-500 dark:text-slate-300 mt-2 leading-relaxed max-w-[240px]">
                {description}
            </p>
        </div>
    );
};



const WhyIdeaVault = () => {
    const features = [
        {
            Icon: Lightbulb,
            title: "Share Ideas",
            description: "Post your innovative concepts and get valuable initial feedback from the community.",
        },
        {
            Icon: MessageSquare,
            title: "Get Feedback",
            description: "Engage with the community to refine your thoughts and improve your original ideas.",
        },
        {
            Icon: Users,
            title: "Build Together",
            description: "Collaborate and turn abstract concepts into impactful real-world solutions.",
        },
        {
            Icon: Rocket,
            title: "Grow Faster",
            description: "Validate, iterate, and launch your startup idea with confidence.",
        },
    ];

    return (
        <section className="py-20 px-4 w-full bg-linear-to-b from-slate-50 to-white dark:from-[#081028] dark:to-[#081028] mt-4">

            <div className=" max-w-7xl mx-auto ">


                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Why IdeaVault?
                    </h2>

                    <p className="text-slate-500 dark:text-slate-300 mt-3 text-sm md:text-base max-w-2xl mx-auto">
                        A community built for innovators, founders, and creators to share, improve, and launch ideas together.
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features?.map((item, index) => (
                        <FeatureCard
                            key={index}
                            Icon={item.Icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyIdeaVault;




