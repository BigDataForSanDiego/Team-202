import React from 'react';

const TranslateComponent = ({ imageUrl, onTranslate }) => {
    return (
        <div className='flex flex-col mt-8'>
            <div
                className='flex h-96 bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'>
                <div className='text-2xl font-medium text-gray-300 w-full border-r border-dashed border-gray-500'>
                    <div className='flex flex-col items-center justify-center p-4'>
                        <p className='mb-8'>Original</p>
                        <div>
                            {imageUrl && <img src={imageUrl} alt="Uploaded" className='ml-4 min-h-40 max-h-64 object-cover' />}
                        </div>
                    </div>
                </div>
                <div className='text-2xl font-medium text-gray-300 w-full'>
                    <div className='flex items-center justify-center p-4'>
                        <p>Translated</p>
                    </div>
                    <div className='flex items-center justify-center p-4 font-normal pt-32'>
                        <p>{onTranslate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TranslateComponent;
