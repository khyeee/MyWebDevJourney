import { Menu, X, User, Calendar, Home, Check, Plus, NavigationOff } from 'lucide-react'
// import { Icon } from 'lucide-react';
import MyComp_SimpleLogin from './MyComp_SimpleLogin';
import { useState, useCallback, useSyncExternalStore } from 'react';

// Fixed Icon placements
// 1. Home
// 2. Profile - Temporarily use for log in
// 3. PlaceholderIcon_1
// 4. PlaceholderIcon_2
const placeholderNavItems = [
    { id: 1, icon: Home, label: 'Home View'},
    { id: 2, icon: User, label: 'User View' },
    { id: 3, icon: Calendar, label: 'Placeholder View 1' },
    { id: 4, icon: NavigationOff, label: 'Placeholder View 2' }
  ]; 

const activeItem = placeholderNavItems.find(item => item.id === 1);

const clsx = (...classNames) => {
    return classNames.filter(Boolean).join(' ');
}

const useNavDrawer = (defaultActiveId, navItems) => {
    const [activeTabId, setActiveTabId] = useState(defaultActiveId);

    const handleIconClicked = useCallback((id) => {
        setActiveTabId(id)
    }, []);

    return {
        activeTabId,
        handleIconClicked
    }
}

const DrawerContent = ({activeItem}) => {
    switch(activeItem.id) {
        case 1: // Home Drawer
            return (
                <div className="">

                </div>
            )
        case 2: // User Drawer
            return (
                <MyComp_SimpleLogin />
            )
        case 3: // Calendar drawer
        case 4: // Placeholder Drawer
    }
}

function MyComp_NavDrawer({navItems=placeholderNavItems, isOpen}) {
    const {
        activeTabId,
        handleIconClicked
    } = useNavDrawer(1, navItems);

    const updatedNavItems = navItems.map(item => ({
        ...item,
        isActive : item.id === activeTabId
    }))

    const activeItem = updatedNavItems.find(item => item.isActive)

    const bgColor  = 'bg-gray-800';
    const transition = 'transition-transform duration-300 ease-in-out';
    const slideClass = isOpen ? 'translate-x-0' : '-translate-x-full';

    const drawerClasses = clsx(
        'flex fixed top-0 left-0 h-screen',
        'w-1/3 min-w-[425px] z-50 shadow-2xl',
        transition,
        slideClass
    );

    return (
        <div className={drawerClasses}>

            {/* LEFT COLUMN */}
            <div className={clsx(
                "flex flex-col items-center",
                "w-16 h-full bg-gray-800 border-r border-gray-700"
            )}>
                {
                    updatedNavItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                onClick={() => handleIconClicked(item.id)}
                                key={item.id}
                                className={clsx(
                                    "relative p-2 rounded-xl hover:bg-gray-700/50",
                                    item.isActive && 'bg-blue-600/20'
                                )}>
                                <Icon
                                    className={clsx(
                                        "w-5 h-5 text-blue-400",
                                        item.isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                                    )}
                                />

                                {
                                    item.isActive && (
                                        <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border border-blue-800"></div>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
            
            {/* RIGHT COLUMN */}
            <div className={clsx(
                "flex-1 h-full bg-gray-700 p-4" 
            )}>
                <h1
                    className={clsx(
                        "text-4xl font-bold"
                )}>Side Bar Title</h1>
                <div>
                {
                    activeItem.id == 1? <MyComp_SimpleLogin/> : (
                        <> {/* Use a fragment if you have multiple top-level elements */}
                            <h1 className="text-4xl font-extrabold mb-4">...</h1>
                            <p className="text-gray-400">...</p>
                            {/* ... other default content ... */}
                        </>
                    )
                }
                </div>
                
            </div>

        </div>
    )
}

export default MyComp_NavDrawer