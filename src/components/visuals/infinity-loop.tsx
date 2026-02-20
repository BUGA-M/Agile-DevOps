"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
    ClipboardList,
    Code2,
    Package,
    FlaskConical,
    Rocket,
    Server,
    Settings,
    Activity,
    RefreshCw
} from "lucide-react"

export function InfinityLoop({ className }: { className?: string }) {
    // Canvas size: 800x400
    // Center: 400, 200

    // Path definition for a smooth infinity loop (lemniscate)
    const pathDefinition = `
        M 400,200
        C 480,200 550,100 650,100
        S 750,150 750,200
        S 680,300 650,300
        S 480,200 400,200
        S 250,300 150,300
        S 50,250 50,200
        S 120,100 150,100
        S 320,200 400,200
        Z
    `

    // Stages configured with position (x,y)
    // Colors must match the gradient:
    // Left (0-300): Blue
    // Center (300-500): Purple/Indigo/Pink transition
    // Right (500-800): Orange
    const stages = [
        // LEFT LOOP (DEV) - CCW Flow
        {
            id: "plan",
            index: 1,
            label: "Plan",
            icon: ClipboardList,
            x: 150, y: 70,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            delay: 0
        },
        {
            id: "code",
            index: 2,
            label: "Code",
            icon: Code2,
            x: 40, y: 200,
            color: "text-blue-600",
            bg: "bg-blue-600/10",
            border: "border-blue-600/20",
            delay: 0.1
        },
        {
            id: "build",
            index: 3,
            label: "Build",
            icon: Package,
            x: 150, y: 330,
            color: "text-blue-500", // Adjusted to match left side blue
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            delay: 0.2
        },
        {
            id: "test",
            index: 4,
            label: "Test",
            icon: FlaskConical,
            x: 280, y: 260,
            color: "text-indigo-500", // Approaching center (Blue -> Purple)
            bg: "bg-indigo-500/10",
            border: "border-indigo-500/20",
            delay: 0.3
        },

        // RIGHT LOOP (OPS) - CW Flow
        {
            id: "release",
            index: 5,
            label: "Release",
            icon: Rocket,
            x: 650, y: 70,
            color: "text-orange-500", // Right side (Orange)
            bg: "bg-orange-500/10",
            border: "border-orange-500/20",
            delay: 0.4
        },
        {
            id: "deploy",
            index: 6,
            label: "Deploy",
            icon: Server,
            x: 760, y: 200,
            color: "text-orange-600", // Far Right (Deep Orange)
            bg: "bg-orange-600/10",
            border: "border-orange-600/20",
            delay: 0.5
        },
        {
            id: "operate",
            index: 7,
            label: "Operate",
            icon: Settings,
            x: 650, y: 330,
            color: "text-orange-500", // Right side (Orange)
            bg: "bg-orange-500/10",
            border: "border-orange-500/20",
            delay: 0.6
        },
        {
            id: "monitor",
            index: 8,
            label: "Monitor",
            icon: Activity,
            x: 520, y: 260,
            color: "text-pink-500", // Approaching center from Right (Orange -> Purple)
            bg: "bg-pink-500/10",
            border: "border-pink-500/20",
            delay: 0.7
        },
    ]

    return (
        <div className={cn("w-full py-8", className)}>
            <div className="relative w-full max-w-4xl mx-auto aspect-[2/1] select-none">
                {/* SVG Layer for the path */}
                <svg viewBox="0 0 800 400" className="w-full h-full overflow-visible">
                    <defs>
                        <linearGradient id="infinity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" /> {/* Blue - Dev End */}
                            <stop offset="50%" stopColor="#8b5cf6" /> {/* Purple - Crossing */}
                            <stop offset="100%" stopColor="#f97316" /> {/* Orange - Ops End */}
                        </linearGradient>

                        {/* Arrow Marker */}
                        <marker
                            id="arrow-head-active"
                            viewBox="0 0 10 10"
                            refX="5"
                            refY="5"
                            markerWidth="6"
                            markerHeight="6"
                            orient="auto-start-reverse"
                        >
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="url(#infinity-gradient)" />
                        </marker>
                    </defs>

                    {/* Background Track */}
                    <path
                        d={pathDefinition}
                        fill="none"
                        stroke="hsl(var(--muted)/0.2)"
                        strokeWidth="16"
                        strokeLinecap="round"
                    />

                    {/* Animated Flow Line */}
                    <motion.path
                        d={pathDefinition}
                        fill="none"
                        stroke="url(#infinity-gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="20 20"
                        markerEnd="url(#arrow-head-active)"
                        initial={{ strokeDashoffset: 1000 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    />
                </svg>

                {/* Icons Layer */}
                {stages.map((stage) => (
                    <StageItem key={stage.id} stage={stage} width={800} height={400} />
                ))}

                {/* Central DevOps Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="flex flex-col items-center justify-center p-6 bg-background rounded-full shadow-2xl border-4 border-background ring-1 ring-border/50">
                        <div className="flex items-center gap-2">
                            <RefreshCw className="h-6 w-6 text-foreground animate-[spin_10s_linear_infinite]" />
                            <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                                DevOps
                            </span>
                        </div>
                    </div>
                </div>

                {/* Labels for Dev and Ops */}
                <div className="absolute top-[40%] left-[25%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="text-[8rem] font-bold text-blue-500/5 select-none">DEV</span>
                </div>
                <div className="absolute top-[40%] left-[75%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="text-[8rem] font-bold text-orange-500/5 select-none">OPS</span>
                </div>
            </div>
        </div>
    )
}

function StageItem({ stage, width, height }: { stage: any, width: number, height: number }) {
    // Positioning
    const left = (stage.x / width) * 100;
    const top = (stage.y / height) * 100;

    const Icon = stage.icon;

    return (
        <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: `${left}%`, top: `${top}%` }}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: stage.delay, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.1 }}
        >
            <div className="flex flex-col items-center gap-3 group cursor-default">
                <div className={cn(
                    "relative p-4 rounded-full border-2 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 bg-background",
                    stage.color,
                    stage.border
                )}>
                    {/* Step Number Badge */}
                    <div className={cn(
                        "absolute -top-1 -right-1 text-[10px] font-bold h-6 w-6 flex items-center justify-center rounded-full border shadow-sm text-foreground bg-background",
                        stage.border
                    )}>
                        {stage.index}
                    </div>
                    <Icon className="w-6 h-6" />
                </div>

                {/* Colored Label */}
                <span className={cn(
                    "text-sm font-bold bg-background/80 px-2 rounded-md backdrop-blur-sm",
                    stage.color
                )}>
                    {stage.label}
                </span>
            </div>
        </motion.div>
    )
}
