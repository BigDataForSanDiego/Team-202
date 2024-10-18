import React from 'react';

const ButtonCard = ({name, isSelected, onClick}) => {
    return (
        <div
            onClick={onClick}
            className={`bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 cursor-pointer ${isSelected ? 'bg-blue-900' : ''}`}
        >
            <div className='px-4 py-5 sm:px-6'>
                <span className='flex items-center justify-center text-lg font-medium text-gray-300'>
                    {name}
                </span>
            </div>
        </div>
    );
};

export default ButtonCard;