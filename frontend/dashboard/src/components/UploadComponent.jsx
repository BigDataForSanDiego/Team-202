import React, { useRef, useState } from 'react';
import { Upload } from "lucide-react";

const UploadComponent = () => {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
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
                </div>
                <input
                    ref={fileInputRef}
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />
                <button
                    onClick={() => alert('File submitted!')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
                {file && (
                    <div className="mt-4 text-sm text-gray-400">
                        <strong>Selected file:</strong> {file.name}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadComponent;
