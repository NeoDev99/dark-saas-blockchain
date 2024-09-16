import { twMerge } from "tailwind-merge";
import { Card } from "../components/Card";
import { useState, useEffect } from "react";

const cardData = [
    {
        image: '/assets/images/pill.png',
        title: 'Revolutionary Blockchain API',
        description: 'Effortlessly integrate and manage blockchain with out cutting-edge API, designed for seamless connectivity.',
        color: 'fuchsia',
    },
    {
        image: '/assets/images/cuboid.png',
        title: 'Decentralized Data Solutions',
        description: 'Empower your applications with decentralized data solutions, ensuring security and transparency at every step.',
        color: 'lime',
    },
    {
        image: '/assets/images/cone.png',
        title: 'Next-Gen Smart Contracts',
        description: 'Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.',
        color: 'cyan',
    },
    {
        image: '/assets/images/icosahedron.png',
        title: 'Seamless Blockchain Integration',
        description: 'Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency',
        color: 'violet',
    }
];

const FeaturesCardsSection = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const timeout = setTimeout(() => {
            setSelectedCardIndex(curr => 
                curr === cardData.length - 1 ? 0 : curr + 1
            );
        }, 3000);
        return () => {
            clearTimeout(timeout);
        };
    }, [selectedCardIndex, isHovered]);

    return (
        <section className="py-24 md:-mt-28 overflow-x-clip">
            <div className="container">
                <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
                    Discover the future of blockchain with Blockforge
                </h2>

                <div className="flex mt-36 lg:mt-48">
                    <div className="flex flex-none gap-8">
                        {cardData.map(({ image, title, description, color }) => (
                            <div
                                className="inline-flex transition-all duration-500" 
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={{
                                    transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`
                                }}
                            >
                                <Card
                                    key={title}
                                    className="max-w-xs md:max-w-md"
                                    color={color}
                                >
                                    <div className="flex justify-center -mt-28">
                                        <div className="inline-flex relative">
                                            <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                                            <img
                                                src={image}
                                                alt="Pill Image"
                                                className="size-40 group-hover:-translate-y-6 transition duration-300"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="font-heading font-black text-3xl mt-12">
                                        {title}
                                    </h3>
                                    <p className="text-lg text-zinc-400 mt-4">
                                        {description}
                                    </p>
                                </Card>
                            </div>
                        ))}
                    </div>                  
                </div>

                <div className="flex justify-center mt-10">
                    <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
                        {cardData.map(({ title }, cardIndex) => (
                            <div
                                key={title}
                                className={twMerge(
                                    "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                                    cardIndex === selectedCardIndex && "bg-zinc-300"
                                )}
                                onClick={() => setSelectedCardIndex(cardIndex)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesCardsSection;