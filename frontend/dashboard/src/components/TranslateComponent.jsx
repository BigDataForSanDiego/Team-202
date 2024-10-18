import React, { useState, useRef } from 'react';

const TranslateComponent = ({ triggerFileInput }) => {
    const [imageUrl, setImageUrl] = useState('');
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='flex h-24 mt-8 bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'>
            <div className='text-2xl font-medium text-gray-300 w-full border-r border-dashed border-gray-500'>
                <div className='flex items-center justify-center p-4'>
                    Original
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        className='hidden'
                    />
                    {imageUrl && <img src={imageUrl} alt="Uploaded" className='ml-4 h-16' />}
                </div>
            </div>
            <div className='text-2xl font-medium text-gray-300 w-full'>
                <div className='flex items-center justify-center p-4'>
                    Translated
                </div>
            </div>
        </div>
    );
};

export default TranslateComponent;