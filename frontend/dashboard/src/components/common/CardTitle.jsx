import React from 'react';

const CardTitle = ({ header }) => {
    return (
        <div className='text-4xl font-bold text-gray-300 mb-6 text-center'>
            {header}
        </div>
    );
};

export default CardTitle;