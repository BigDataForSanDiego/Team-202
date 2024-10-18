import React from 'react';
import {Icon, Pill} from "lucide-react";

const NameCard = () => {
    const item = {name: "ParseCRIPTION", icon: Pill, color: "#F5F5F5"};
    return (
        <div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'>
            <div className='px-4 py-5 sm:px-6'>
                <span className='flex items-center justify-center text-lg font-medium text-gray-300'>
                    <item.icon size={20} className='mr-4' color={item.color} />
                    {item.name}
                </span>
            </div>
        </div>
    );
};

export default NameCard;