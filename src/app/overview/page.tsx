import { InfinityLoop } from "@/components/visuals/infinity-loop";
import { DevOpsCycleFlow } from "@/components/visuals/devops-cycle-flow";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
    Activity,
    AlertTriangle,
    ArrowRight,
    Blocks,
    Check,
    CheckCircle2,
    Clock,
    Code2,
    Cpu,
    History,
    Layers,
    LayoutDashboard,
    Package,
    RefreshCw,
    Server,
    Settings,
    ShieldCheck,
    Users,
    XCircle
} from "lucide-react";

export default function OverviewPage() {
    return (
        <div className="container py-12 space-y-20">
            {/* Header */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
                <Badge variant="outline" className="px-4 py-1 text-base">Introduction</Badge>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Pourquoi DevOps existe ?</h1>
            </div>

            {/* 1. Why DevOps Exists? */}
            <section className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="border-destructive/20 bg-destructive/5 shadow-none">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-destructive">
                                <History className="h-5 w-5" /> Avant DevOps
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="p-2 bg-background rounded-md border text-muted-foreground">
                                        <Code2 className="h-4 w-4" />
                                    </div>
                                    <span className="text-muted-foreground">Les développeurs écrivent le code</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="p-2 bg-background rounded-md border text-muted-foreground">
                                        <Server className="h-4 w-4" />
                                    </div>
                                    <span className="text-muted-foreground">Les Ops déploient sur les serveurs</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="p-2 bg-background rounded-md border text-muted-foreground">
                                        <Package className="h-4 w-4" />
                                    </div>
                                    <span className="text-muted-foreground">Déploiement manuel</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="p-2 bg-background rounded-md border text-muted-foreground">
                                        <XCircle className="h-4 w-4" />
                                    </div>
                                    <span className="text-muted-foreground">Bugs en production</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-orange-500/20 bg-orange-500/5 shadow-none">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-orange-600">
                                <AlertTriangle className="h-5 w-5" /> Problèmes
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <XCircle className="h-5 w-5 text-orange-500 shrink-0" />
                                    <span className="text-muted-foreground">Environnements différents</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <XCircle className="h-5 w-5 text-orange-500 shrink-0" />
                                    <span className="text-muted-foreground">Erreurs humaines</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Clock className="h-5 w-5 text-orange-500 shrink-0" />
                                    <span className="text-muted-foreground">Déploiements lents</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Users className="h-5 w-5 text-orange-500 shrink-0" />
                                    <span className="text-muted-foreground">Conflits entre équipes</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* 2. Definition */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold border-b pb-4 flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                        <Settings className="h-6 w-6 text-primary" />
                    </div>
                    Définition de DevOps
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl">
                    <strong className="text-primary font-medium">DevOps</strong> est une approche d’ingénierie qui vise à automatiser et fiabiliser le cycle de vie d’une application, depuis le développement jusqu’au déploiement en production, en intégrant des pratiques comme la Continuous Integration (CI) et le Continuous Deployment (CD).
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <DefinitionCard icon={Users} label="Collaboration (Dev + Ops)" />
                    <DefinitionCard icon={RefreshCw} label="Automatisation" />
                    <DefinitionCard icon={Layers} label="Standardisation" />
                    <DefinitionCard icon={Activity} label="Monitoring" />
                </div>
            </section>

            {/* 3. The Lifecycle */}
            <section className="space-y-12">
                <h2 className="text-3xl font-bold border-b pb-4 flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                        <RefreshCw className="h-6 w-6 text-primary" />
                    </div>
                    Le cycle complet DevOps
                </h2>

                {/* NEW Professional Flow */}
                <DevOpsCycleFlow />

                <p className="text-center text-muted-foreground border-l-4 border-primary pl-4 mx-auto max-w-sm">
                    Chaque étape est automatisée.
                </p>

                {/* Visual */}
                <div className="my-8 opacity-90 hover:opacity-100 transition-opacity">
                    <InfinityLoop />
                </div>
            </section>

            {/* 11. Relation */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold border-b pb-4 flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                        <Blocks className="h-6 w-6 text-primary" />
                    </div>
                    Relation entre DevOps, CI et CD
                </h2>

                <div className="border rounded-xl overflow-hidden bg-muted/40">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-muted border-b">
                                <th className="p-4 text-left font-semibold text-muted-foreground">Élément</th>
                                <th className="p-4 text-left font-semibold text-muted-foreground">Rôle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-4 font-semibold text-primary">DevOps</td>
                                <td className="p-4">Stratégie globale</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-semibold text-blue-500">CI</td>
                                <td className="p-4">Vérification automatique</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-semibold text-purple-500">CD</td>
                                <td className="p-4">Déploiement automatique</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Card className="bg-blue-500/5 border-blue-500/20 shadow-sm">
                    <CardContent className="p-6 flex items-start gap-4">
                        <div className="p-2 bg-blue-500/10 rounded-full">
                            <LayoutDashboard className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="space-y-2">
                            <p className="font-medium text-lg text-blue-700 dark:text-blue-400">
                                CI/CD sont les mécanismes techniques qui rendent DevOps réel.
                            </p>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li className="flex items-center gap-2">
                                    <XCircle className="h-4 w-4 text-destructive" />
                                    Sans CI/CD → DevOps reste théorique.
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    Avec CI/CD → DevOps devient opérationnel.
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* 12. Summary */}
            <section className="rounded-2xl bg-muted/30 border p-8 space-y-8">
                <h2 className="text-2xl font-bold text-center">Résumé final</h2>
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-background border shadow-sm font-mono text-sm md:text-base">
                        <span className="font-bold text-primary">DevOps</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        <span>Culture</span>
                        <span className="text-muted-foreground">+</span>
                        <span>Automatisation</span>
                        <span className="text-muted-foreground">+</span>
                        <span>Outils</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    <SummaryItem label="CI" desc="Vérifier automatiquement que le code est bon." color="text-blue-500" />
                    <SummaryItem label="CD" desc="Déployer automatiquement le code validé." color="text-purple-500" />
                    <SummaryItem label="Docker" desc="Standardiser l’environnement." color="text-sky-500" />
                    <SummaryItem label="Kubernetes" desc="Orchestrer la production." color="text-indigo-500" />
                    <SummaryItem label="Terraform" desc="Gérer l’infrastructure en code." color="text-violet-500" />
                    <SummaryItem label="Monitoring" desc="Observer la production." color="text-orange-500" />
                </div>

                <div className="text-center pt-8 border-t">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">En une phrase</h3>
                    <p className="text-xl font-medium text-foreground">
                        "DevOps automatise tout le chemin entre l’écriture du code et son exécution en production."
                    </p>
                </div>
            </section>
        </div>
    )
}

function DefinitionCard({ icon: Icon, label }: { icon: any, label: string }) {
    return (
        <div className="flex items-center gap-4 p-4 rounded-xl bg-background border shadow-sm hover:border-primary/50 transition-colors">
            <div className="p-2 bg-muted rounded-lg">
                <Icon className="h-5 w-5 text-foreground" />
            </div>
            <span className="font-medium text-sm">{label}</span>
        </div>
    )
}

function SummaryItem({ label, desc, color }: { label: string, desc: string, color: string }) {
    return (
        <div className="flex items-center gap-4 p-4 rounded-lg bg-background border hover:shadow-md transition-all">
            <span className={cn("font-bold min-w-[100px]", color)}>{label}</span>
            <span className="text-sm text-muted-foreground">{desc}</span>
        </div>
    )
}
