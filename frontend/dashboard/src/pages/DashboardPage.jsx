import React from 'react';
import Header from "../components/common/Header.jsx";
import NameCard from "../components/common/NameCard.jsx";
import UploadComponent from "../components/UploadComponent.jsx";
import TranslateComponent from "../components/TranslateComponent.jsx";

const DashboardPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title="Dashboard"/>

            <main className='max-w-7xl mx-auto py-20 px-6 lg:px-8 flex flex-col h-screen'>
                <div className='flex flex-col gap-8 h-24'>
                    <div className='col-span-4 p-4 rounded-lg'>
                        <NameCard />
                    </div>
                    <div className='col-span-8 p-4 rounded-lg'>
                        <UploadComponent />
                    </div>
                </div>
                {/*<div className='grid grid-cols-12 gap-8 h-24 mt-8 p-4'>*/}
                {/*    <div className="col-span-12 w-full flex-grow rounded-lg">*/}
                {/*        <TranslateComponent />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </main>
        </div>
    );
};

export default DashboardPage;