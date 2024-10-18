import React from 'react';

const ProfileCard = ({ imageUrl, title, subtitle }) => {
    return (
        <div className='flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-700 px-4 py-4 shadow-lg rounded-lg w-full'>
            <div className='w-24 h-24 bg-cover bg-center rounded-full' style={ {backgroundImage: `url(${imageUrl}`} } />
            <h3 className='text-xl font-bold mt-4 text-gray-950'>{title}</h3>
            <p className='text-gray-400 text-center'>{subtitle}</p>
        </div>
    );
};

export default ProfileCard;