import React, {useState} from 'react';
import {Activity, House, Menu} from "lucide-react";
import {motion} from 'framer-motion';

const SIDEBAR_ITEMS = [
    {name: "Homepage", icon: House, color: "#6366f1", path: "/"},
    {name: "Dashboard", icon: Activity, color: "#ec4899", path: "/dashboard"}
];

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <motion.div
            className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
            animate={{width: isSidebarOpen ? 256 : 80}}
        >
            <div
                className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
                <motion.button
                    whileHover={{scale: 1.1}}
                    whileTop={{scale: 0.9}}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
                >
                    <Menu size={24}/>
                </motion.button>

                <nav className='mt-8 flex-grow'>
                    {SIDEBAR_ITEMS.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.path}
                            className='flex items-center justify-start p-2 rounded-md hover:bg-gray-700 transition-colors'
                        >
                            <item.icon size={24} color={item.color}/>
                            <span className='ml-4'>{item.name}</span>
                        </motion.a>
                    ))}
                </nav>
            </div>

        </motion.div>
    );
};

export default Sidebar;