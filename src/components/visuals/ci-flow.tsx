"use client"

import { motion } from "framer-motion"
import {
    User,
    GitBranch,
    Server,
    Hammer,
    FlaskConical,
    ShieldCheck,
    Package,
    Rocket,
    AlertOctagon,
    CheckCircle2,
    XCircle,
    ArrowDown
} from "lucide-react"
import { cn } from "@/lib/utils"

export function CiFlow() {
    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-4 bottom-4 w-1 bg-muted/50 -z-10" />

                <Step
                    icon={User}
                    title="Developer"
                    description="Écrit le code et lance un `git push`"
                    color="text-blue-500"
                    bgColor="bg-blue-500/10"
                    delay={0}
                />

                <Connector label="git push" delay={0.2} />

                <Step
                    icon={GitBranch}
                    title="Git Repository"
                    description="Reçoit le code et notifie le serveur CI via Webhook"
                    color="text-orange-500"
                    bgColor="bg-orange-500/10"
                    delay={0.4}
                />

                <Connector label="Trigger Webhook" delay={0.6} />

                <Step
                    icon={Server}
                    title="Serveur CI"
                    description="Détecte le changement et clone le repository"
                    color="text-purple-500"
                    bgColor="bg-purple-500/10"
                    delay={0.8}
                />

                <Connector label="Clone & Setup" delay={1.0} />

                <div className="pl-16 space-y-4 mb-8">
                    <SubStep
                        icon={Hammer}
                        label="Build"
                        desc="Compilation du projet & installation des dépendances"
                        delay={1.2}
                    />
                    <SubStep
                        icon={FlaskConical}
                        label="Test"
                        desc="Exécution des tests unitaires et d'intégration"
                        delay={1.4}
                    />
                </div>

                <Step
                    icon={ShieldCheck}
                    title="Quality Gate"
                    description="Analyse de la qualité du code et du résultat des tests"
                    color="text-green-500"
                    bgColor="bg-green-500/10"
                    delay={1.6}
                />

                {/* Branching Outcomes */}
                <div className="grid grid-cols-2 gap-4 mt-8 pl-16">
                    {/* Success Path */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.0 }}
                        className="border border-green-500/20 bg-green-500/10 p-5 rounded-xl space-y-3"
                    >
                        <div className="flex items-center gap-2 text-green-600 font-bold">
                            <CheckCircle2 className="h-5 w-5" /> Si Succès
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-green-500/10 backdrop-blur-sm">
                            <Package className="h-5 w-5 text-blue-500" />
                            <span className="text-sm font-medium">Création Artifact / Image Docker</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-green-500/10 backdrop-blur-sm">
                            <Rocket className="h-5 w-5 text-purple-500" />
                            <span className="text-sm font-medium">Prêt pour CD</span>
                        </div>
                    </motion.div>

                    {/* Failure Path */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2 }}
                        className="border border-red-500/20 bg-red-500/10 p-5 rounded-xl space-y-3 opacity-90"
                    >
                        <div className="flex items-center gap-2 text-red-600 font-bold">
                            <XCircle className="h-5 w-5" /> Si Erreur
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-red-500/10 backdrop-blur-sm">
                            <AlertOctagon className="h-5 w-5 text-red-500" />
                            <span className="text-sm font-medium">Stop Pipeline</span>
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            Notification au développeur pour correction
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

function Step({ icon: Icon, title, description, color, bgColor, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="flex gap-4 items-start relative z-10 bg-background py-2"
        >
            <div className={cn("p-3 rounded-xl shadow-sm border", bgColor, color)}>
                <Icon className="h-6 w-6" />
            </div>
            <div className="pt-1">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
            </div>
        </motion.div>
    )
}

function Connector({ label, delay }: { label: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ delay }}
            className="pl-8 py-2 flex items-center gap-2 text-xs text-muted-foreground font-mono"
        >
            <ArrowDown className="h-4 w-4" />
            <span className="bg-muted px-2 py-1 rounded-md">{label}</span>
        </motion.div>
    )
}

function SubStep({ icon: Icon, label, desc, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30"
        >
            <Icon className="h-5 w-5 text-muted-foreground" />
            <div>
                <div className="font-semibold text-sm">{label}</div>
                <div className="text-xs text-muted-foreground">{desc}</div>
            </div>
        </motion.div>
    )
}
