import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import TranslateComponent from './TranslateComponent';
import axios from 'axios';

const UploadComponent = () => {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const fileInputRef = useRef(null);
    const [translatedText, setTranslatedText] = useState('No file submitted.');
    const [selectedFile, setSelectedFile] = useState(null);

    // FILE HANDLING START

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setSelectedFile(selectedFile);
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const fetchAPI = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/text');
            return response.data;
        } catch (error) {
            throw new Error('Error fetching translated text');
        }
    };

    // HANDLE SUBMIT BUTTON
    // const handleSubmit = async () => {
    //         try {
    //             const translatedString = await fetchAPI();
    //             console.log(translatedString);
    //             setTranslatedText(translatedString);
    //         } catch (error) {
    //             console.error('Error fetching translated text:', error);
    //         }
    // };

    const handleSubmit = async () => {
    if (!selectedFile) {
        console.error('No file selected');
        return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
        const response = await axios.post('http://localhost:8080/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log('File uploaded successfully:', response.data);

        // Now, fetch translated text after the file upload
        const translatedString = await fetchAPI();
        console.log(translatedString);
        setTranslatedText(translatedString);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
    //     // Ensure the POST request is successful before making the GET request
    //     if (uploadResponse.status === 200) {
    //         try {
    //             const translatedString = await fetchAPI();
    //             console.log(translatedString);
    //             setTranslatedText(translatedString);
    //         } catch (error) {
    //             console.error('Error fetching translated text:', error);
    //         }
    //     } else {
    //         console.error('File upload failed with status:', uploadResponse.status);
    //     }
    // } catch (error) {
    //     console.error('Error uploading file:', error);
    // }
};


    // TRIGGER FILE INPUT
    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 p-6">
            <div className="flex gap-8 items-center justify-center">
                <div
                    className="flex-grow flex justify-center p-2 border border-dashed border-spacing-2 border-gray-500 rounded-lg cursor-pointer"
                    onClick={triggerFileInput}
                >
                    <Upload size={24} color="#F5F5F5" />
                    <p className="px-2">{file ? file.name : 'Upload a file'}</p>
                </div>
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
            <TranslateComponent imageUrl={imageUrl} onTranslate={translatedText} />
        </div>
    );
};

export default UploadComponent;
