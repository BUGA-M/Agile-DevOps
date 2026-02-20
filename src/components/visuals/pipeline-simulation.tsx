"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Check,
    Loader2,
    Play,
    Server,
    Terminal,
    AlertCircle,
    ArrowRight,
    GitCommit,
    Package,
    Globe,
    Activity,
    Cpu,
    HardDrive,
    ShieldCheck,
    RotateCcw,
    Rocket
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// --- Types ---
type PipelineStage = "IDLE" | "DEV" | "CI" | "CD" | "PROD"

// --- Simulation Data ---
const STAGES = [
    { id: "DEV", label: "Development", icon: GitCommit, color: "text-blue-500" },
    { id: "CI", label: "Continuous Integration", icon: Package, color: "text-purple-500" },
    { id: "CD", label: "Continuous Deployment", icon: RocketIcon, color: "text-orange-500" },
    { id: "PROD", label: "Operations", icon: Activity, color: "text-green-500" },
]

function RocketIcon(props: any) { return <Rocket {...props} /> } // Use actual Rocket icon

const LOG_Sequences = {
    DEV: [
        { text: "git add .", delay: 500 },
        { text: "git commit -m 'feat: super charge pipeline'", delay: 800 },
        { text: "git push origin main", delay: 1200 },
        { text: "Enumerating objects: 15, done.", delay: 1500 },
        { text: "Writing objects: 100% (15/15), 4.2 KiB | 2.1 MiB/s", delay: 1800 },
        { text: "Total 15 (delta 4), reused 0 (delta 0)", delay: 2000 },
        { text: "Remote: Resolving deltas: 100% (4/4)", delay: 2200 },
        { text: "To github.com:user/repo.git -> main", delay: 2500 }
    ],
    CI: [
        { text: "[CI] Pipeline Triggered by 'push' event", delay: 500 },
        { text: "[CI] Job: Install Dependencies", delay: 800 },
        { text: "> npm ci --prefer-offline", delay: 1500 },
        { text: "added 842 packages in 2s", delay: 2000 },
        { text: "[CI] Job: Linting & Static Analysis", delay: 2500 },
        { text: "√ No lint errors found", delay: 3000 },
        { text: "[CI] Job: Running Unit Tests", delay: 3500 },
        { text: "PASS src/core/engine.test.ts", delay: 4000 },
        { text: "PASS src/api/routes.test.ts", delay: 4200 },
        { text: "Test Suites: 8 passed, 8 total", delay: 4500 },
        { text: "[CI] Job: Build Artifact", delay: 5000 },
        { text: "> next build", delay: 5500 },
        { text: "√ Build artifacts created: /out/dist", delay: 7000 }
    ],
    CD: [
        { text: "[CD] Artifact detected. Starting Deployment...", delay: 500 },
        { text: "[CD] Target: Staging Environment", delay: 1000 },
        { text: "Deploying docker image: app:v1.2.4...", delay: 2000 },
        { text: "√ Staging Health Check passed", delay: 3000 },
        { text: "[CD] Approval: Auto-approved (Continuous Deployment)", delay: 3500 },
        { text: "[CD] Promoting to Production...", delay: 4000 },
        { text: "Rolling update: 1/3 replicas updated...", delay: 5000 },
        { text: "Rolling update: 2/3 replicas updated...", delay: 5500 },
        { text: "Rolling update: 3/3 replicas updated...", delay: 6000 },
        { text: "[CD] Deployment Successful!", delay: 6500 }
    ]
}

export function PipelineSimulation() {
    const [currentStage, setCurrentStage] = React.useState<PipelineStage>("IDLE")
    const [logs, setLogs] = React.useState<string[]>([])
    const [progress, setProgress] = React.useState(0)

    // Live Metrics State
    const [metrics, setMetrics] = React.useState({ cpu: 12, memory: 24, requests: 150 })

    const addLogs = async (sequence: { text: string, delay: number }[]) => {
        for (const item of sequence) {
            await new Promise(r => setTimeout(r, item.delay - (sequence.indexOf(item) > 0 ? sequence[sequence.indexOf(item) - 1].delay : 0)))
            setLogs(prev => [...prev, item.text])
            // Scroll to bottom simulation
            const consoleEl = document.getElementById("sim-console")
            if (consoleEl) consoleEl.scrollTop = consoleEl.scrollHeight
        }
    }

    const runSimulation = async () => {
        if (currentStage !== "IDLE" && currentStage !== "PROD") return

        setLogs([])
        setCurrentStage("DEV")
        setProgress(10)

        // DEV PHASE
        await addLogs(LOG_Sequences.DEV)
        await new Promise(r => setTimeout(r, 500))

        // CI PHASE
        setCurrentStage("CI")
        setProgress(40)
        await addLogs(LOG_Sequences.CI)
        await new Promise(r => setTimeout(r, 500))

        // CD PHASE
        setCurrentStage("CD")
        setProgress(75)
        await addLogs(LOG_Sequences.CD)
        await new Promise(r => setTimeout(r, 500))

        // PROD PHASE
        setCurrentStage("PROD")
        setProgress(100)
    }

    const resetSimulation = () => {
        setCurrentStage("IDLE")
        setLogs([])
        setProgress(0)
    }

    // Simulate Live Metrics in PROD
    React.useEffect(() => {
        if (currentStage === "PROD") {
            const interval = setInterval(() => {
                setMetrics(prev => ({
                    cpu: Math.max(5, Math.min(90, prev.cpu + (Math.random() - 0.5) * 10)),
                    memory: Math.max(10, Math.min(80, prev.memory + (Math.random() - 0.5) * 5)),
                    requests: Math.max(50, Math.min(1000, prev.requests + (Math.random() - 0.5) * 50))
                }))
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [currentStage])

    return (
        <div className="space-y-8">
            {/* 1. Pipeline Visualizer */}
            <div className="relative">
                {/* Progress Bar Background */}
                <div className="absolute top-8 left-[10%] right-[10%] h-1 bg-muted -z-10" />

                {/* Active Progress */}
                <motion.div
                    className="absolute top-8 left-[10%] h-1 bg-primary -z-10"
                    initial={{ width: "0%" }}
                    animate={{ width: `${Math.max(0, (progress - 10))}%` }}
                    transition={{ duration: 0.5 }}
                />

                <div className="grid grid-cols-4 gap-4">
                    {STAGES.map((stage, index) => {
                        const isActive = currentStage === stage.id
                        const isPast = STAGES.findIndex(s => s.id === currentStage) > index || currentStage === "PROD"
                        const Icon = stage.icon

                        return (
                            <div key={stage.id} className="flex flex-col items-center gap-4">
                                <motion.div
                                    initial={false}
                                    animate={{
                                        scale: isActive ? 1.1 : 1,
                                        borderColor: isActive ? "hsl(var(--primary))" : isPast ? "hsl(var(--primary))" : "hsl(var(--muted))",
                                        backgroundColor: isActive || isPast ? "hsl(var(--background))" : "hsl(var(--muted))"
                                    }}
                                    className={cn(
                                        "h-16 w-16 rounded-full border-4 flex items-center justify-center relative z-10 transition-colors duration-300 shadow-sm",
                                        isPast ? "text-primary" : "text-muted-foreground"
                                    )}
                                >
                                    {isActive ? (
                                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                    ) : (
                                        <Icon className={cn("h-8 w-8", isPast && stage.color)} />
                                    )}
                                </motion.div>
                                <div className="text-center">
                                    <h3 className={cn("font-bold text-sm", isActive || isPast ? "text-foreground" : "text-muted-foreground")}>
                                        {stage.label}
                                    </h3>
                                    {isActive && (
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-xs text-primary font-medium animate-pulse"
                                        >
                                            In Progress...
                                        </motion.span>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* 2. Main Interactive Area */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Action / Context */}
                <div className="lg:col-span-1 space-y-4">
                    <Card className="h-full flex flex-col justify-between">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Terminal className="h-5 w-5" /> Contrôle
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    {currentStage === "IDLE" && "Le pipeline est prêt. Un commit déclenchera le processus automatique."}
                                    {currentStage === "DEV" && "Le développeur pousse son code vers le dépôt Git..."}
                                    {currentStage === "CI" && "Le serveur CI compile, teste et construit l'application..."}
                                    {currentStage === "CD" && "Déploiement automatique vers les serveurs de production..."}
                                    {currentStage === "PROD" && "L'application est en ligne ! Monitoring en temps réel actif."}
                                </p>

                                {currentStage === "IDLE" ? (
                                    <Button onClick={runSimulation} size="lg" className="w-full gap-2">
                                        <Play className="h-4 w-4" /> Start Pipeline
                                    </Button>
                                ) : currentStage === "PROD" ? (
                                    <Button onClick={resetSimulation} variant="outline" size="lg" className="w-full gap-2 hover:bg-destructive/10 hover:text-destructive">
                                        <RotateCcw className="h-4 w-4" /> Reset / Rollback
                                    </Button>
                                ) : (
                                    <Button disabled variant="secondary" size="lg" className="w-full gap-2">
                                        <Loader2 className="h-4 w-4 animate-spin" /> Processing...
                                    </Button>
                                )}
                            </div>

                            {/* Live Metrics (Visible only in PROD) */}
                            <AnimatePresence>
                                {currentStage === "PROD" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="space-y-3 pt-4 border-t"
                                    >
                                        <div className="text-sm font-semibold flex items-center gap-2 text-green-600">
                                            <Globe className="h-4 w-4" /> Live Production Metrics
                                        </div>
                                        <MetricRow label="CPU Usage" value={`${metrics.cpu.toFixed(1)}%`} icon={Cpu} />
                                        <MetricRow label="Memory" value={`${metrics.memory.toFixed(1)}%`} icon={HardDrive} />
                                        <MetricRow label="Requests/s" value={metrics.requests.toFixed(0)} icon={Activity} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </CardContent>
                    </Card>
                </div>

                {/* Right: Console Output */}
                <div className="lg:col-span-2">
                    <Card className="bg-[#0c0c0c] border-slate-800 text-slate-300 font-mono text-xs sm:text-sm h-[400px] flex flex-col shadow-2xl">
                        <CardHeader className="border-b border-slate-800 py-3 bg-slate-900/50 flex flex-row items-center justify-between">
                            <div className="flex gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="text-slate-500 text-xs">pipeline-logs.log</div>
                        </CardHeader>
                        <CardContent id="sim-console" className="flex-1 overflow-y-auto p-4 space-y-1 scroll-smooth">
                            {logs.length === 0 && (
                                <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-2 opacity-50">
                                    <Terminal className="h-8 w-8" />
                                    <p>Waiting for pipeline start...</p>
                                </div>
                            )}
                            {logs.map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="leading-tight break-all"
                                >
                                    <span className="text-blue-500 mr-2 opacity-50">{new Date().toLocaleTimeString().split(' ')[0]}</span>
                                    {log.startsWith(">") || log.startsWith("$") ? (
                                        <span className="text-yellow-400 font-bold">{log}</span>
                                    ) : log.includes("Error") ? (
                                        <span className="text-red-400">{log}</span>
                                    ) : log.includes("√") || log.includes("PASS") || log.includes("Success") ? (
                                        <span className="text-green-400">{log}</span>
                                    ) : (
                                        <span className="text-slate-300">{log}</span>
                                    )}
                                </motion.div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

function MetricRow({ label, value, icon: Icon }: any) {
    return (
        <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <Icon className="h-3 w-3" /> {label}
            </div>
            <div className="font-mono font-bold text-sm tracking-wider">{value}</div>
        </div>
    )
}
