"use client"

import { motion } from "framer-motion"
import {
    Code2,
    Hammer,
    FlaskConical,
    CheckCircle2,
    Rocket,
    UserCheck,
    ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"

export function CdDifference({ type }: { type: "delivery" | "deployment" }) {
    // Shared steps
    const steps = [
        { icon: Code2, label: "Code", color: "text-blue-500", bg: "bg-blue-500/10" },
        { icon: Hammer, label: "Build", color: "text-blue-500", bg: "bg-blue-500/10" },
        { icon: FlaskConical, label: "Tests Validés", color: "text-green-500", bg: "bg-green-500/10" },
    ]

    // Distinct step based on type
    if (type === "delivery") {
        steps.push({
            icon: UserCheck,
            label: "Approbation",
            color: "text-orange-500",
            bg: "bg-orange-500/10"
        })
    } else {
        steps.push({
            icon: Rocket,
            label: "Auto Deploy",
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        })
    }

    // Final step
    steps.push({ icon: CheckCircle2, label: "Production", color: "text-green-600", bg: "bg-green-500/20" })

    return (
        <div className="w-full overflow-x-auto p-4">
            <div className="flex items-center justify-center min-w-[600px] gap-2">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className={cn(
                                "flex flex-col items-center gap-2 p-4 rounded-xl border min-w-[120px] text-center",
                                step.bg,
                                "backdrop-blur-sm"
                            )}
                        >
                            <step.icon className={cn("h-6 w-6", step.color)} />
                            <span className="text-sm font-semibold">{step.label}</span>
                        </motion.div>

                        {index < steps.length - 1 && (
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                transition={{ delay: index * 0.2 + 0.1 }}
                            >
                                <ArrowRight className="h-5 w-5 text-muted-foreground/50" />
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="text-center mt-6 text-muted-foreground italic"
            >
                {type === "delivery" ? (
                    <span>"Le système prépare la version, mais un <strong className="text-orange-500">humain clique sur 'Deploy'</strong>."</span>
                ) : (
                    <span>"Le déploiement est <strong className="text-purple-500">automatique</strong>, sans intervention humaine."</span>
                )}
            </motion.div>
        </div>
    )
}
