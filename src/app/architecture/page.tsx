import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ClientMermaid } from "@/components/visuals/client-mermaid-wrapper";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";

export default function ArchitecturePage() {
    const fullArchChart = `
    graph TD
      Dev[Developer] -->|Git push| Git[Git]
      Git -->|Trigger| CI[CI (tests + build)]
      CI -->|Build| Docker[Docker image]
      Docker -->|Push| Reg[Registry]
      Reg -->|Deploy| CD[CD deploy]
      CD -->|Orchestrate| K8s[Kubernetes cluster]
      K8s -.->|Observe| Monitor[Monitoring]
      
      style Dev fill:#f9f,stroke:#333
      style K8s fill:#f96,stroke:#333
  `;

    return (
        <div className="container py-12 space-y-12 max-w-5xl mx-auto">
            <div className="space-y-4">
                <Badge variant="outline" className="mb-2">Vue d'ensemble</Badge>
                <h1 className="text-4xl font-bold tracking-tight">Architecture Complète Moderne</h1>
                <p className="text-xl text-muted-foreground">
                    Le flux de travail complet du code à la production.
                </p>
            </div>

            <section className="space-y-6">
                <Card>
                    <CardContent>
                        <div className="w-full overflow-x-auto flex justify-center py-8">
                            <div className="min-w-[400px]">
                                <ClientMermaid chart={fullArchChart} />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <h2 className="text-2xl font-semibold mt-12 mb-6">Flux Séquentiel</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
                    <FlowStep label="Developer" />
                    <Arrow />
                    <FlowStep label="Git push" />

                    <FlowStep label="CI (tests + build)" />
                    <Arrow />
                    <FlowStep label="Docker image" />

                    <FlowStep label="Registry" />
                    <Arrow />
                    <FlowStep label="CD deploy" />

                    <FlowStep label="Kubernetes cluster" isHighlight />
                    <Arrow />
                    <FlowStep label="Monitoring" isObservability />
                </div>
            </section>
        </div>
    )
}

function FlowStep({ label, isHighlight, isObservability }: { label: string, isHighlight?: boolean, isObservability?: boolean }) {
    if (isHighlight) {
        return <div className="p-4 border-2 border-primary/20 bg-primary/5 rounded-xl font-bold text-center flex items-center justify-center shadow-sm text-primary">{label}</div>
    }
    if (isObservability) {
        return <div className="p-4 border-2 border-orange-500/20 bg-orange-500/5 rounded-xl font-bold text-center flex items-center justify-center shadow-sm text-orange-600">{label}</div>
    }
    return <div className="p-4 border rounded-xl bg-background text-center flex items-center justify-center shadow-sm">{label}</div>
}

function Arrow() {
    return <div className="flex justify-center items-center text-muted-foreground"><ArrowDown className="h-5 w-5" /></div>
}
