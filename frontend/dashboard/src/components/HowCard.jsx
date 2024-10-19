import React from 'react';

const HowCard = () => {
    const text = "Javascript (Vite React) \n" +
        "Tailwind \n" +
        "Gets your uploaded image and uses Flask API to send it the image to our Python backend\n" +
        "Python\n" +
        "Libraries such as Tensorflow, Pandas, and MathLib\n" +
        "Used Python to train a NN model to predict what an image of written prescription might be.\n" +
        ".csv file with images of written medication names in one column and a the corresponding name in the second.\n" +
        "Image processing (grayscale and sized)\n" +
        "Using openCV\n" +
        "Trained and validated\n" +
        "Exported model\n" +
        "Loaded in our python backend"
    return (
        <div
            className='fixed max-w-screen-lg bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 flex items-center justify-center  p-4 sm:p-8 md:p-10 lg:p-12'>
            <div className='text-2xl font-medium text-gray-300'>
                {text}
            </div>
        </div>
    );
};

export default HowCard;