import React, { useState, useRef } from 'react';
import { Upload } from "lucide-react";
import TranslateComponent from './TranslateComponent';

const UploadComponent = () => {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const fileInputRef = useRef(null);
    const [translatedText, setTranslatedText] = useState('No file submitted.');


    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    // FIXME: Implement the backend API call to translate the text in the image
    const handleSubmit = () => {
        if (file) {
            setTranslatedText("clicked");
        }
    };

    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 p-6'>
            <div className='flex gap-8 items-center justify-center'>
                <div
                    className='flex-grow flex justify-center p-2 border border-dashed border-spacing-2 border-gray-500 rounded-lg cursor-pointer'
                    onClick={triggerFileInput}
                >
                    <Upload size={24} color='#F5F5F5'/>
                    <p className='px-2'>{file ? file.name : 'upload a file'}</p></div>
                <input
                    ref={fileInputRef}
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />
                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </div>
            <TranslateComponent imageUrl={imageUrl} onTranslate={translatedText} />        </div>
    );
};

export default UploadComponent;
