import React from 'react';

const WhatCard = () => {
    const text = "ParseCRIPTION is a full-stack application that helps make doctors' handwritten prescriptions " +
        "easier to read. It uses special handwriting recognition with machine learning technology to turn messy or hard-to-read notes from " +
        "doctors into clear, understandable text. This means that anyone, like pharmacists or patients, can easily " +
        "understand what the doctor wrote, which helps avoid mistakes and ensures people get the right medication."

    return (
        <div
            className='fixed max-w-screen-lg bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 flex items-center justify-center  p-4 sm:p-8 md:p-10 lg:p-12'>
            <div className='text-2xl font-medium text-gray-300'>
                {text}
            </div>
        </div>
    );
};

export default WhatCard;