import React, { useState } from 'react';
import Header from "../components/common/Header.jsx";
import { motion } from 'framer-motion';
import NameCard from "../components/common/NameCard.jsx";
import ButtonCard from "../components/common/ButtonCard.jsx";
import WhatCard from "../components/WhatCard.jsx";
import HowCard from "../components/HowCard.jsx";
import WhyCard from "../components/WhyCard.jsx";
import WhoCard from "../components/WhoCard.jsx";

const BUTTON_ITEMS = [
    { name: "The What?" },
    { name: "The How?" },
    { name: "The Why?" },
    { name: "The Who?" }
];

const HomePage = () => {
    const [selectedCard, setSelectedCard] = useState("The What?");

    const handleCardClick = (name) => {
        setSelectedCard(name);
    };

    const renderSelectedComponent = () => {
        switch (selectedCard) {
            case "The What?":
                return <WhatCard />;
            case "The How?":
                return <HowCard />;
            case "The Why?":
                return <WhyCard />;
            case "The Who?":
                return <WhoCard />;
            default:
                return null;
        }
    };

    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title="Homepage" />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* STATS */}
                <motion.div
                    className='flex flex-wrap gap-5 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <NameCard />
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