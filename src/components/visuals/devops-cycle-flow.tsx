import { ArrowRight, GitBranch, Terminal, Blocks, Package, Server, CheckCircle, Activity, LayoutTemplate } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
    { label: "Developer", icon: Terminal, color: "text-slate-500" },
    { label: "Git", icon: GitBranch, color: "text-orange-500" },
    { label: "CI", icon: Blocks, color: "text-blue-500" },
    { label: "Build", icon: LayoutTemplate, color: "text-indigo-500" },
    { label: "Package", icon: Package, color: "text-purple-500" },
    { label: "CD", icon: Server, color: "text-pink-500" },
    { label: "Production", icon: CheckCircle, color: "text-green-500" },
    { label: "Monitoring", icon: Activity, color: "text-cyan-500" },
];

export function DevOpsCycleFlow() {
    return (
        <div className="w-full overflow-x-auto py-8">
            <div className="flex items-center min-w-max px-4">
                {STEPS.map((step, index) => {
                    const Icon = step.icon;
                    const isLast = index === STEPS.length - 1;

                    return (
                        <div key={index} className="flex items-center group">
                            <div className="flex flex-col items-center gap-3 relative">
                                <div className={cn(
                                    "h-16 w-16 rounded-2xl flex items-center justify-center bg-background border-2 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md",
                                    "border-muted group-hover:border-primary/50"
                                )}>
                                    <Icon className={cn("h-7 w-7 transition-colors", step.color)} />
                                </div>
                                <span className="font-semibold text-sm text-foreground/80">{step.label}</span>
                            </div>

                            {!isLast && (
                                <div className="mx-4 text-muted-foreground/30 flex items-center">
                                    <div className="h-[2px] w-8 bg-current rounded-full" />
                                    <ArrowRight className="h-4 w-4 -ml-2" />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
