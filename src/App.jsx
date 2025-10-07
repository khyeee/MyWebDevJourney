import MovieCard from './components/MovieCard'
import NavBar from './components/NavBar'
// import Home from './pages/Home'
import Favorites from './pages/Favorites'
import {Routes, Route} from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Sandbox_Carousel_2 from './components/Sandbox_Carousel_2'
import GT_HMI_Header from './components/GT_HMI_Header'
import ToDo_App from './components/ToDo_App'

import { Menu, X, User, Calendar, Home, Check, Plus, NavigationOff, Settings2} from 'lucide-react'
import { useState } from 'react'
import UI_Comp_NavDrawer from './components/UI_Comp_NavDrawer'
import MyComp_NavDrawer from './components/MyComp_NavDrawer'

import MyComp_SimpleLogin from './components/MyComp_SimpleLogin'

function App() {
    const navItems = [
    { id: 1, icon: User, label: 'Profile Settings', isActive: true },
    { id: 2, icon: Calendar, label: 'Upcoming Tasks' },
    { id: 3, icon: Home, label: 'Dashboard Overview' },
    { id: 4, icon: Settings2, label: 'Analytics' },
    { id: 5, icon: Check, label: 'Completed Items'},
    { id: 6, icon: Calendar, label: 'Client Meetings' },
    { id: 7, icon: Plus, label: 'Add New Project' },
  ]; 

  const [isOpen, setIsOpen] = useState(false);
  const [activeItemId, setActiveItemId] = useState(navItems.find(item => item.isActive)?.id || 1);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (id) => {
    setActiveItemId(id);
  }

  const updatedNavItems = navItems.map(item => ({
    ...item,
    isActive : item.id === activeItemId,
  }))

  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white font-sans relative">
        {/* --- Hamburger Menu Button (Top Left) --- */}
        <header className="absolute top-0 left-0 p-4 z-50">
          <button 
            onClick={toggleSideBar} 
            className="text-white p-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition duration-150 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {/* Change icon based on state */}
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>
        {/* <MyComp_NavDrawer/> */}
        <main 
          className={`p-10 transition-all duration-300 ${isOpen ? 'blur-sm pointer-events-none opacity-50' : ''}`}
          // If sidebar is open, click anywhere in the main area closes it
          onClick={isOpen ? toggleSideBar : undefined}
        >
          <div className="mt-16 max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold mb-4">HMI Dashboard Interface</h1>
            <p className="text-gray-400">
              Click the hamburger menu (top left) to toggle the sliding navigation panel. 
              The sidebar uses CSS transforms for smooth animation and Flexbox for the two-column layout.
            </p>
            
            {/* Simple scrollable content placeholder */}
            <div className="flex flex-col h-[120vh] mt-8 p-6 bg-gray-800 rounded-xl shadow-inner">
              <h2 className="text-2xl font-semibold text-blue-400">Main Content Area</h2>
              <p className="text-gray-500 mt-2">Scroll down to see the full page content.</p>
              <MyComp_SimpleLogin/>
            </div>
          </div>
        </main>

        {/* --- Overlay (Optional: Helps focus attention on the sidebar) --- */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black opacity-50 z-40" 
            onClick={toggleSideBar}
          />
        )}
        
      </div>
      {/* <main className="h-screen flex flex-col bg-stone-400 items-center justify-center">
      </main> */}
    </div>
  )
}

export default App
