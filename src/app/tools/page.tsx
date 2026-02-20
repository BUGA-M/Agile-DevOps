import { ProgressiveDisclosure } from "@/components/ui/progressive-disclosure";
import { CodeBlock } from "@/components/ui/code-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Boxes, Container, Globe, Server, Activity, Check, AlertTriangle, ArrowRight } from "lucide-react";

export default function ToolsPage() {
    return (
        <div className="container py-12 space-y-20 max-w-5xl mx-auto">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Outils & Écosystème</h1>
                <p className="text-xl text-muted-foreground">
                    Les piliers techniques du DevOps moderne.
                </p>
            </div>

            {/* 6. Docker */}
            <section className="space-y-8">
                <div className="flex items-center gap-4 border-b pb-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                        <Container className="h-8 w-8 text-blue-500" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Docker</h2>
                        <p className="text-muted-foreground">Standardiser l’environnement</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                        <div className="p-4 bg-muted/40 rounded-lg border-l-4 border-destructive">
                            <h3 className="text-sm font-semibold text-destructive uppercase tracking-wide mb-1">Problème</h3>
                            <p className="italic text-muted-foreground">“Ça marche sur ma machine.”</p>
                        </div>

                        <div className="p-4 bg-green-500/5 rounded-lg border-l-4 border-green-500">
                            <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-1">Solution</h3>
                            <p><strong>Docker</strong> met l’application dans un conteneur.</p>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Check className="h-4 w-4 text-primary" /> Avantages
                            </h4>
                            <div className="grid gap-2">
                                <BenefitItem label="Même environnement partout" />
                                <BenefitItem label="Portable" />
                                <BenefitItem label="Reproductible" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <CodeBlock
                            language="dockerfile"
                            title="Dockerfile"
                            code={`# Exemple Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`}
                        />
                    </div>
                </div>
            </section>

            {/* 7. Kubernetes */}
            <section className="space-y-8">
                <div className="flex items-center gap-4 border-b pb-4">
                    <div className="p-3 bg-blue-600/10 rounded-xl">
                        <Boxes className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Kubernetes</h2>
                        <p className="text-muted-foreground">Gérer la production</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <Activity className="h-5 w-5 text-muted-foreground" />
                            Quand l'app grandit
                        </h3>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-1 marker:text-primary">
                            <li>Plusieurs serveurs</li>
                            <li>Load balancing</li>
                            <li>Auto scaling</li>
                            <li>Rolling updates</li>
                        </ul>

                        <div className="mt-6 flex items-center gap-2 font-medium">
                            Solution recommandée : <Badge className="text-base px-3">Kubernetes</Badge>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Fonctionnalités Clés</h3>
                        <div className="grid gap-3">
                            <BenefitItem label="Lancement de plusieurs instances" />
                            <BenefitItem label="Redémarrage automatique" />
                            <BenefitItem label="Mise à jour sans downtime" />
                            <BenefitItem label="Scaling automatique" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Terraform (IaC) */}
            <section className="space-y-8">
                <div className="flex items-center gap-4 border-b pb-4">
                    <div className="p-3 bg-purple-500/10 rounded-xl">
                        <Globe className="h-8 w-8 text-purple-500" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Infrastructure as Code (IaC)</h2>
                        <p className="text-muted-foreground">Terraform</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-4 border rounded-lg bg-muted/20 flex justify-between items-center opacity-70">
                                <span className="font-medium">Création Manuelle</span>
                                <Badge variant="outline" className="border-destructive text-destructive">Obsolète</Badge>
                            </div>
                            <div className="flex justify-center">
                                <ArrowRight className="text-muted-foreground rotate-90 md:rotate-0" />
                            </div>
                            <div className="p-4 border border-primary/20 rounded-lg bg-primary/5 flex justify-between items-center">
                                <span className="font-medium text-primary">Terraform Code</span>
                                <Badge className="bg-primary">Moderne</Badge>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h4 className="font-semibold mb-3">Bénéfices</h4>
                            <div className="grid gap-2">
                                <BenefitItem label="Versionné (Git)" />
                                <BenefitItem label="Automatisé" />
                                <BenefitItem label="Reproductible" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <CodeBlock
                            language="hcl"
                            title="main.tf"
                            code={`resource "aws_instance" "app" {
  instance_type = "t2.micro"
  tags = {
    Name = "Production-Server"
  }
}`}
                        />
                    </div>
                </div>
            </section>

            {/* 9. Monitoring */}
            <section className="space-y-8">
                <div className="flex items-center gap-4 border-b pb-4">
                    <div className="p-3 bg-orange-500/10 rounded-xl">
                        <Activity className="h-8 w-8 text-orange-500" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Monitoring & Observability</h2>
                        <p className="text-muted-foreground">Surveiller la production</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex gap-4 flex-wrap">
                        {["CPU", "RAM", "Erreurs", "Temps de réponse"].map(metric => (
                            <span key={metric} className="px-4 py-2 bg-background rounded-md font-mono text-sm border shadow-sm flex items-center gap-2">
                                <Activity className="h-3 w-3 text-muted-foreground" /> {metric}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-xl font-semibold pt-4">Outils Standards</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-background border shadow-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-orange-500" /> Prometheus
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground text-sm">
                                Base de données pour la collecte des métriques temporelles.
                            </CardContent>
                        </Card>
                        <Card className="bg-background border shadow-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-orange-500" /> Grafana
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground text-sm">
                                Plateforme de visualisation pour créer des tableaux de bord (Dashboards).
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}

function BenefitItem({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-3 text-sm">
            <Check className="h-4 w-4 text-green-500 shrink-0" />
            <span>{label}</span>
        </div>
    )
}
