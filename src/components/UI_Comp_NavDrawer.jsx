import React from "react";
import { Icon } from "lucide-react"

const PlaceholderLine = ({width = 'w-full', index}) => (
    <div
        className={`h-3 bg-gray-600 rounded-full my-3 ${width}`}
        style={{opacity: 1 - index * 0.15}}
    />
);

function UI_Comp_NavDrawer({isOpen, navItems, setActive}) {
    const transition = 'transition-transform duration-300 ease-in-out';
    const slideClass = isOpen ? 'translate-x-0' : '-translate-x-full';

    return (
        <div
            className={`fixed top-0 left-0 h-screen w-1/3 min-w-80 z-50 shadow-2xl ${transition} ${slideClass} flex`}>
                {/* LEFT COLUMN */}
                <div className={`w-16 h-full bg-gray-800 border-r border-gray-700 p-2 flex flex-col items-center space-y-4`}>
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = item.isActive;

                        return (
                            <div 
                                key={item.id}
                                title={item.label}
                                className={`relative p-2 rounded-xl cursor-pointer hover:bg-gray-700/50 ${isActive ? 'bg-blue-600/20' : ''}`}
                                onClick={() => setActive(item.id)}>
                                
                                <Icon
                                    className={`w-5 h-5 transition-colors duration-150 ${isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
                                />
                                <span>{item.label}</span>
                                {
                                    isActive && (
                                        <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border border-gray-800"></div>
                                    )
                                }
                            </div>
                        )
                    })}
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex-1 h-full bg-gray-700 p-4 overflow-y-auto">
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    {
                        navItems.map((item, index) => (
                            <React.Fragment key={item.id}>
                                {/* Main Title Line */}
                                <PlaceholderLine width="w-4/5" index={0}/>

                                {/* Sub-Lines for detail/list appearance */}
                                {
                                    index < 4 && (
                                        <>
                                            <PlaceholderLine width="w-2/3" index={1}/>
                                            <PlaceholderLine width="w-1/3" index={2}/>
                                        </>
                                    )
                                }

                                {/* Separator */}
                                <div className="h-0.5 my-4 bg-gray-600/50 rounded-full"></div>
                            </React.Fragment> 
                        ))
                    }

                    {/* Bottom Pagination Dots from the screenshot */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 p-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <div className="w-2 h-2 rounded-full bg-gray-500" />
                        <div className="w-2 h-2 rounded-full bg-gray-500" />
                        <div className="w-2 h-2 rounded-full bg-gray-500" />
                    </div>

                </div>
        </div>
    )
}

export default UI_Comp_NavDrawer