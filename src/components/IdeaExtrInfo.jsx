import { ChevronDown } from "@gravity-ui/icons";
import { Accordion, cn } from "@heroui/react";

const items = [
    {
        title: "What is this platform about?",
        subtitle: "A place for ideas to grow",
        content:
            "This platform helps you turn thoughts into real projects. You can share ideas, explore what others are building, and organize everything in one clean space designed for creators and developers.",
    },
    {
        title: "How does it actually work?",
        subtitle: "Simple flow, powerful system",
        content:
            "Create an account, add your idea, and categorize it. Others can view, react, and engage with it. Everything is managed through a smooth full-stack system built for speed and clarity.",
    },
    {
        title: "What makes this project special?",
        subtitle: "Built for real builders",
        content:
            "It’s not just a list of ideas — it’s a structured system where ideas can evolve. You can track, improve, and collaborate, making it easier to turn concepts into real applications.",
    },
    {
        title: "Is my data safe here?",
        subtitle: "Security-first approach",
        content:
            "Yes. All data is handled securely with proper backend validation and protected APIs. Authentication and best practices are used to keep your information safe and private.",
    },
];

export function CustomStyles() {
    return (
        <div className="max-w-7xl mx-auto mb-7 ">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                    Why Is This a Good Choice for You?
                </h2>

                <p className="mt-3 text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
                    Discover a modern platform designed to help creators organize ideas,
                    collaborate smoothly, and build projects with confidence.
                </p>
            </div>


            <div className="w-full px-4">

                <Accordion
                    className="
                        rounded-2xl overflow-hidden
                        border border-zinc-200 dark:border-zinc-800
                        bg-white/70 dark:bg-zinc-900/60
                        backdrop-blur-md
                        shadow-sm
                    "
                    variant="surface"
                >
                    {items.map((item, index) => (
                        <Accordion.Item
                            key={index}
                            className={cn(
                                "group/item transition",
                                "border-b border-zinc-100 dark:border-zinc-800 last:border-b-0",
                                "data-[expanded=true]:bg-zinc-50 dark:data-[expanded=true]:bg-zinc-800/40"
                            )}
                        >
                            <Accordion.Heading>
                                <Accordion.Trigger
                                    className="
                                        w-full flex items-center justify-between
                                        gap-6 px-6 py-5
                                        text-left
                                        hover:bg-zinc-100/60 dark:hover:bg-zinc-800/50
                                        transition
                                    "
                                >
                                    {/* TEXT */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                                            {item.subtitle}
                                        </p>
                                    </div>

                                    {/* ICON */}
                                    <Accordion.Indicator
                                        className="
                                            text-zinc-400 dark:text-zinc-500
                                            transition-transform duration-300
                                            group-data-[expanded=true]/item:rotate-180
                                        "
                                    >
                                        <ChevronDown />
                                    </Accordion.Indicator>
                                </Accordion.Trigger>
                            </Accordion.Heading>

                            <Accordion.Panel>
                                <Accordion.Body
                                    className="
                                        px-6 pb-5 text-sm leading-relaxed
                                        text-zinc-600 dark:text-zinc-300
                                    "
                                >
                                    {item.content}
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}