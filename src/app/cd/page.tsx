import { CdDifference } from "@/components/visuals/cd-difference";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle, PlayCircle, Server, Rocket, ShieldCheck } from "lucide-react";

export default function CDPage() {

    return (
        <div className="container py-12 space-y-12 max-w-5xl mx-auto">
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                        <Rocket className="h-6 w-6 text-purple-500" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">Continuous Delivery vs Deployment</h1>
                </div>
                <p className="text-xl text-muted-foreground max-w-4xl">
                    Continuous Delivery / Continuous Deployment (CD) est une pratique DevOps qui automatise le processus de packaging, de validation et de déploiement d’une application vers des environnements cibles (staging, production) après validation par la CI, garantissant des livraisons fréquentes, fiables et reproductibles.
                </p>
                <div className="p-4 bg-secondary/50 rounded-lg border flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                    <div>
                        <strong>Si la CI passe :</strong> L’application est déployée automatiquement (ou prête à l'être).
                    </div>
                </div>
            </div>

            <Tabs defaultValue="delivery" className="w-full">
                <div className="flex items-end justify-between mb-6">
                    <TabsList className="grid w-full max-w-md grid-cols-2">
                        <TabsTrigger value="delivery">Continuous Delivery</TabsTrigger>
                        <TabsTrigger value="deployment">Continuous Deployment</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="delivery" className="space-y-4">
                    <Card className="border-green-500/20 bg-green-500/5 shadow-none">
                        <CardHeader>
                            <CardTitle className="text-green-600 flex items-center gap-2">
                                <Server className="h-5 w-5" /> Continuous Delivery
                            </CardTitle>
                            <CardDescription className="text-base">
                                Le système prépare la version, mais un <Badge variant="outline" className="text-foreground border-foreground/20">humain clique sur "Deploy"</Badge>.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="w-full overflow-x-auto flex justify-center py-6">
                                <CdDifference type="delivery" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="deployment" className="space-y-4">
                    <Card className="border-purple-500/20 bg-purple-500/5 shadow-none">
                        <CardHeader>
                            <CardTitle className="text-purple-600 flex items-center gap-2">
                                <Rocket className="h-5 w-5" /> Continuous Deployment
                            </CardTitle>
                            <CardDescription className="text-base">
                                Le déploiement est <Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50">automatique</Badge>, sans intervention humaine.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="w-full overflow-x-auto flex justify-center py-6">
                                <CdDifference type="deployment" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <section className="space-y-6 pt-6">
                <h2 className="text-2xl font-semibold">Rôle exact du CD</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                    <RoleCard label="Construire la version finale" />
                    <RoleCard label="Déployer sur serveur / cloud" />
                    <RoleCard label="Mettre à jour la production" />
                </div>
            </section>
        </div>
    )
}

function RoleCard({ label }: { label: string }) {
    return (
        <div className="flex flex-col items-center p-6 bg-background border rounded-xl shadow-sm hover:shadow-md transition-all text-center group">
            <div className="p-4 bg-secondary rounded-full mb-4 group-hover:scale-110 transition-transform">
                <PlayCircle className="h-6 w-6 text-primary" />
            </div>
            <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
        </div>
    )
}
