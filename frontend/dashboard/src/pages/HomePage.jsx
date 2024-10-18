import React, {useState} from 'react';
import Header from "../components/common/Header.jsx";
import {motion} from 'framer-motion';
import NameCard from "../components/common/NameCard.jsx";
import ButtonCard from "../components/common/ButtonCard.jsx";
import WhatCard from "../components/WhatCard.jsx";
import HowCard from "../components/HowCard.jsx";
import WhyCard from "../components/WhyCard.jsx";
import WhoCard from "../components/WhoCard.jsx";
import CardTitle from "../components/common/CardTitle.jsx";

const BUTTON_ITEMS = [
    {name: "The What?"},
    {name: "The How?"},
    {name: "The Why?"},
    {name: "The Who?"}
];

const HomePage = () => {
    const [selectedCard, setSelectedCard] = useState("The What?");

    const handleCardClick = (name) => {
        setSelectedCard(name);
    };

    const renderSelectedComponent = () => {
        switch (selectedCard) {
            case "The What?":
                return (
                    <div className='flex flex-col items-center lg:space-y-14 sm:space-y-56'>
                        <CardTitle header="What is ParseCRIPTION?"/>
                        <WhatCard/>
                    </div>
                    );
            case "The How?":
                return (
                    <div className='flex flex-col items-center lg:space-y-14 sm:space-y-56'>
                        <CardTitle header="How was ParseCRIPTION Made?"/>
                        <HowCard/>
                    </div>
                );
            case "The Why?":
                return (
                    <div className='flex flex-col items-center lg:space-y-14 sm:space-y-56'>
                        <CardTitle header="Why did we create ParseCRIPTION?"/>
                        <WhyCard/>
                    </div>
                );
            case "The Who?":
                return (
                    <div className='flex flex-col items-center lg:space-y-14 sm:space-y-56'>
                        <CardTitle header="Meet Team-202: Beta Busters"/>
                        <WhoCard/>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title="Homepage"/>
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* STATS */}
                <motion.div
                    className='flex flex-wrap gap-5 mb-8'
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    <NameCard/>
                    {BUTTON_ITEMS.map((item, index) => (
                        <ButtonCard
                            key={index}
                            name={item.name}
                            isSelected={selectedCard === item.name}
                            onClick={() => handleCardClick(item.name)}
                        />
                    ))}
                </motion.div>

                {/* INFO */}
                <div className='flex justify-center my-20 max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                    {renderSelectedComponent()}
                </div>

            </main>
        </div>
    );
};

export default HomePage;