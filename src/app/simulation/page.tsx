import { PipelineSimulation } from "@/components/visuals/pipeline-simulation";

export default function SimulationPage() {
    return (
        <div className="container py-12 space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Simulation DevOps Interactive</h1>
                <p className="text-xl text-muted-foreground">
                    Vivez le flux complet depuis le commit d'un développeur jusqu'au déploiement en production.
                </p>
            </div>

            <div className="pt-8">
                <PipelineSimulation />
            </div>
        </div>
    )
}
