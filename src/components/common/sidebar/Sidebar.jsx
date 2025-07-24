"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Users, PenTool, Settings, BookOpen, Plus } from 'lucide-react'

const sidebarItems = [
  { title: "Home", href: "/", icon: Home },
  { title: "MyPage", href: "/myPage", icon: User },
  { title: "Groups", href: "/myGroup", icon: Users },
  { title: "Create Post", href: "/posts/write", icon: PenTool },
  { title: "My Posts", href: "/posts", icon: BookOpen },
]

const quickActions = [
  { title: "Create Group", href: "/groups/create", icon: Plus },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 h-screen bg-white/50 backdrop-blur-sm border-r border-gray-200 dark:bg-slate-900/50">
      <div className="p-6">
        {/* Main Navigation */}
        <nav className="space-y-2">
          {sidebarItems.map(({ title, href, icon: Icon }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center w-full px-4 py-2 text-sm rounded-md transition-colors
                  ${isActive ? "bg-[#0067AC] text-white" : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"}`}
              >
                <Icon className="w-4 h-4 mr-3" />
                {title}
              </Link>
            )
          })}
        </nav>

        {/* Quick Actions */}
        <div className="mt-8">
          <div className="mb-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Quick Actions
          </div>
          <nav className="space-y-1">
            {quickActions.map(({ title, href, icon: Icon }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors
                    ${isActive ? "bg-[#0067AC] text-white" : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"}`}
                >
                  <Icon className="w-3 h-3 mr-2" />
                  {title}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </aside>
  )
}
