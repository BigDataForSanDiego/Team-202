import React from 'react';

const WhyCard = () => {
    const text = "Great question! ParseCRIPTION was created to help solve a common problem in the healthcare industry: " +
        "doctors' messy handwriting. Doctors often write prescriptions by hand, which can be hard to read and lead to mistakes. " +
        "These mistakes can be dangerous and even life-threatening. ParseCRIPTION was created during the San Diego State University's Fifth " +
        "Annual Big Data Hackathon to build a digital solution to help increase access, manage health, and improve patient satisfaction along the healthcare journey."

    return (
        <div
            className='fixed max-w-screen-lg bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 flex items-center justify-center  p-4 sm:p-8 md:p-10 lg:p-12'>
            <div className='text-2xl font-medium text-gray-300'>
                {text}
            </div>
        </div>
    );
};

export default WhyCard;