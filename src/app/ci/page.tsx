import { ProgressiveDisclosure } from "@/components/ui/progressive-disclosure";
import { CiFlow } from "@/components/visuals/ci-flow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Info, GitBranch, AlertOctagon, Terminal, FileCode, Play } from "lucide-react";

export default function CIPage() {

    return (
        <div className="container py-12 space-y-12 max-w-5xl mx-auto">
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Play className="h-6 w-6 text-blue-500" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">Continuous Integration (CI)</h1>
                </div>
                <p className="text-xl text-muted-foreground max-w-4xl">
                    Continuous Integration (CI) est une pratique DevOps qui consiste à intégrer fréquemment les modifications de code dans un dépôt partagé, avec exécution automatique des tests, du build et des contrôles qualité afin de garantir la stabilité du projet.
                </p>
            </div>

            <section className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Terminal className="h-5 w-5 text-muted-foreground" /> Définition
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                            Quand tu fais : <Badge variant="secondary" className="font-mono text-sm">git push</Badge>
                        </p>
                        <p className="font-medium">La CI exécute :</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" />Clone le projet</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" />Installe les dépendances</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" />Lance les tests</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" />Vérifie que le build fonctionne</li>
                        </ul>
                    </CardContent>
                </Card>

                <div className="space-y-4">
                    <div className="bg-yellow-500/5 border border-yellow-500/30 p-6 rounded-xl">
                        <h3 className="font-bold flex items-center gap-2 text-yellow-600 mb-3">
                            <AlertOctagon className="h-5 w-5" /> Important
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-3">
                                <div className="p-1 bg-background rounded border"><FileCode className="h-3 w-3" /></div>
                                Le développeur écrit les tests
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-1 bg-background rounded border"><Play className="h-3 w-3" /></div>
                                La CI exécute les tests automatiquement
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Visual Flow */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <GitBranch className="h-6 w-6 text-muted-foreground" /> Flux CI
                </h2>
                <CiFlow />
            </section>

            {/* Role Exact */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">Rôle exact de la CI</h2>
                <p className="text-muted-foreground">Elle vérifie rigoureusement que :</p>
                <div className="grid sm:grid-cols-2 gap-4">
                    <CheckItem label="Le projet compile" />
                    <CheckItem label="Les tests passent" />
                    <CheckItem label="Les dépendances sont correctes" />
                    <CheckItem label="Le code s’intègre bien" />
                </div>

                <div className="mt-6 p-4 rounded-lg bg-destructive/5 border border-destructive/20 text-center">
                    <span className="font-semibold text-destructive flex items-center justify-center gap-2">
                        <AlertOctagon className="h-4 w-4" />
                        Si erreur → le pipeline s’arrête immédiatement.
                    </span>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Outils CI Populaires</h2>
                <div className="flex flex-wrap gap-3">
                    {["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI", "Travis CI"].map(tool => (
                        <Badge key={tool} variant="secondary" className="px-4 py-2 text-sm hover:bg-secondary/80">
                            {tool}
                        </Badge>
                    ))}
                </div>
            </section>
        </div>
    )
}

function CheckItem({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-3 p-4 bg-background border rounded-lg shadow-sm">
            <div className="p-1 bg-green-500/10 rounded-full">
                <Check className="h-4 w-4 text-green-500" />
            </div>
            <span className="font-medium">{label}</span>
        </div>
    )
}
