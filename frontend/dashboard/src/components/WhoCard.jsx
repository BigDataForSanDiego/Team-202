import React from 'react';
import ProfileCard from "./ProfileCard.jsx";
import AaronImg from "../assets/linkedinpfp_aaron.jpg"
import DylanImg from "../assets/linkedinpfp_dylan.jpg"
import PabloImg from "../assets/sdccdpfp_pablo.png"
import ReactImg from "../assets/react.svg"


const WhoCard = () => {
    return (
        <div
            className='fixed max-w-screen-lg bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 flex p-4 sm:p-8 md:p-10 lg:p-12'>
            <div className='flex space-x-7'>
                <ProfileCard
                    imageUrl={AaronImg}
                    title="Aaron J. Cayanan"
                    subtitle="Lead Frontend Developer"
                />
                <ProfileCard
                    imageUrl={ReactImg}
                    title="Nathan Howard"
                    subtitle="Frontend Contributor"
                />
                <ProfileCard
                    imageUrl={PabloImg}
                    title="Pablo Wells"
                    subtitle="Lead Backend Developer"
                />
                <ProfileCard
                    imageUrl={DylanImg}
                    title="Dylan K. Le"
                    subtitle="Machine Learning Developer"
                />
            </div>
        </div>
    );
};

export default WhoCard;