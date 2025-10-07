import { Menu, X, User, Calendar, Home, Check, Plus, NavigationOff } from 'lucide-react'
// import { Icon } from 'lucide-react';
import MyComp_SimpleLogin from './MyComp_SimpleLogin';

const navItems = [
    { id: 1, icon: User, label: <MyComp_SimpleLogin/>, isActive: true },
    { id: 2, icon: Calendar, label: 'Upcoming Tasks' },
    { id: 3, icon: Home, label: 'Dashboard Overview' },
    { id: 4, icon: NavigationOff, label: 'Analytics' },
    { id: 5, icon: Check, label: 'Completed Items'},
    { id: 6, icon: Calendar, label: 'Client Meetings' },
    { id: 7, icon: Plus, label: 'Add New Project' },
  ]; 

const activeItem = navItems.find(item => item.id === 1);

const clsx = (...classNames) => {
    return classNames.filter(Boolean).join(' ');
}

function MyComp_NavDrawer() {
    return (
        <div className={clsx(
            "flex fixed top-0 right-0 h-screen",
            "w-1/3 min-w-80 z-50 shadow-2xl"
        )}>
            <div className={clsx(
                "flex-1 h-full bg-gray-700 p-4"
            )}>
                <h1
                    className={clsx(
                        "text-4xl font-bold"
                )}>Login Page</h1>
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

            <div className={clsx(
                "flex flex-col items-center",
                "w-16 h-full bg-gray-800 border-r border-gray-700"
            )}>
                {
                    navItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
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
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyComp_NavDrawer