"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Terminal } from "lucide-react"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Aperçu", href: "/overview" },
    { name: "CI Deep Dive", href: "/ci" },
    { name: "CD Deep Dive", href: "/cd" },
    { name: "Outils & Tech", href: "/tools" },
    { name: "Simulation", href: "/simulation" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
                        <div className="bg-primary/10 p-1.5 rounded-md">
                            <Terminal className="h-6 w-6 text-primary" />
                        </div>
                        <span>DevOps<span className="text-primary">Mastery</span></span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="transition-colors hover:text-primary text-foreground/60"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center md:hidden gap-4">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-b bg-background">
                    <div className="container py-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium transition-colors hover:text-primary px-2 py-1.5 rounded-md hover:bg-muted"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}
