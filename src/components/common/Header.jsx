"use client"

import React, { useState } from 'react'
import Link from "next/link"
import { PenTool, Users, Search, ArrowDown, User, Settings, LogOut} from 'lucide-react'
import Image from 'next/image'

export default function Header() {

  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full p-3 border-b border-b-gray-200 bg-white/80 dark:bg-slate-900/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0067AC]">
            <PenTool className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-[#0067AC]">woori.Log</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8 relative">
          <div className="relative">
            <Search className='absolute top-2 left-2 text-gray-400'/>
            <input
              type="text"
              placeholder="Search posts, groups, or users..."
              className="w-full pl-10 pr-10 h-10 rounded-xl border border-gray-400 focus:border-[#0067AC] focus:ring-[#0067AC] dark:border-gray-700 dark:bg-slate-800"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/" className="p-2 rounded-xl bg-[#0067AC] text-white hover:bg-[#0067AC]/90 flex items-center">
            <PenTool className="mr-2 h-4 w-4" />
            Create Post
          </Link>
          
          <Link href="/" className="p-2 border rounded-xl border-[#0067AC] text-[#0067AC] hover:bg-[#0067AC] hover:text-white flex items-center">
            <Users className="mr-2 h-4 w-4" />
            Create Group
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 p-1 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              <img
                src="https://placehold.co/32"
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
              />
              <ArrowDown
                className={`h-4 w-4 text-gray-400 dark:text-gray-300 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-2 z-50">
                {/* User Info */}
                <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://placehold.co/32"
                      alt="Profile"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">김우리</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">woori@example.com</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-1">
                  <Link
                    href="/myPage"
                    className="flex items-center justify-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                    onClick={() => setIsProfileOpen(false)}
                  >
                     <User/>
                    <p className="ml-3 mr-3 h-5 w-full">
                      My Profile
                    </p>
                  </Link>

                  <Link
                    href="/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <Settings/>
                    <p className="ml-3 mr-3 h-5 w-full"> 
                    Settings
                    </p>
                  </Link>

                  <div className="border-t border-gray-100 dark:border-gray-700 my-1"></div>

                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    onClick={() => {
                      setIsProfileOpen(false)
                      // Add logout logic here
                    }}
                  >
                    <LogOut className='w-5 mr-3.5 text-red-600'/>
                      Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
