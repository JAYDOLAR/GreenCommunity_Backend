"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Leaf, BookOpen, Users, ShoppingBag, BarChart3, Settings, HelpCircle } from "lucide-react"

interface SidebarItem {
  title: string
  href: string
  icon: React.ReactNode
}

export function DashboardSidebar() {
  const pathname = usePathname()

  const sidebarItems: SidebarItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: <Leaf className="h-5 w-5" />,
    },
    {
      title: "Education",
      href: "/education",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: "Community",
      href: "/community",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Marketplace",
      href: "/marketplace",
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    {
      title: "Carbon Tracker",
      href: "/carbon",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: "Help & Support",
      href: "/help",
      icon: <HelpCircle className="h-5 w-5" />,
    },
  ]

  return (
    <aside className="hidden w-64 border-r md:block">
      <div className="flex h-full flex-col gap-2 p-4">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
            )}
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </div>
    </aside>
  )
}

