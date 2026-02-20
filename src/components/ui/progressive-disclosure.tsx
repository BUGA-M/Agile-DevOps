"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProgressiveDisclosureProps {
    children: React.ReactNode
    title?: string
    defaultOpen?: boolean
    className?: string
}

export function ProgressiveDisclosure({
    children,
    title = "Deep Dive / Technical Details",
    defaultOpen = false,
    className,
}: ProgressiveDisclosureProps) {
    const [isOpen, setIsOpen] = React.useState(defaultOpen)

    return (
        <div className={cn("rounded-lg border border-primary/20 bg-primary/5 p-1", className)}>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full justify-between hover:bg-primary/10"
            >
                <span className="flex items-center gap-2 font-semibold text-primary">
                    <GraduationCap className="h-4 w-4" />
                    {title}
                </span>
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto", marginTop: 8 },
                            collapsed: { opacity: 0, height: 0, marginTop: 0 },
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-4 pb-4 text-sm text-muted-foreground pt-2 border-t border-primary/10">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
