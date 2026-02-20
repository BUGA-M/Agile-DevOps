import Link from "next/link";
import { ArrowRight, Code2, Layers, Server, Terminal, Workflow, Rocket, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InfinityLoop } from "@/components/visuals/infinity-loop";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="container py-24 space-y-8 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium border-primary/20 bg-primary/5 text-primary rounded-full">
            Cours Complet DevOps / CI / CD
          </Badge>

          <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            Maîtrisez le Cycle DevOps
          </h1>

          <p className="text-xl text-muted-foreground max-w-[42rem] leading-relaxed">
            Du Code à la Production. Apprenez le CI/CD, Docker, Kubernetes et l'Infrastructure as Code avec des visualisations interactives.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button size="lg" asChild className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20">
              <Link href="/overview">
                Commencer le Cours <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg rounded-full">
              <Link href="/simulation">
                <PlayCircle className="mr-2 h-5 w-5" /> Simulation
              </Link>
            </Button>
          </div>
        </div>

        {/* Visual Hook */}
        <div className="mx-auto max-w-5xl pt-16 md:pt-24 opacity-90">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 h-full w-full pointer-events-none" />
            <InfinityLoop />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container py-24">
        <div className="grid gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<Code2 className="h-10 w-10" />}
            title="Continuous Integration"
            description="Automatiser les tests et le build. Vérifier chaque commit avant le merge."
            href="/ci"
            gradient="from-blue-500/20 to-cyan-500/20 hover:border-blue-500/50"
            iconColor="text-blue-500"
            footerText="Voir Continuous Integration"
          />
          <FeatureCard
            icon={<Workflow className="h-10 w-10" />}
            title="Continuous Delivery"
            description="Automatiser les pipelines de déploiement. Livrer de manière fiable."
            href="/cd"
            gradient="from-purple-500/20 to-pink-500/20 hover:border-purple-500/50"
            iconColor="text-purple-500"
            footerText="Voir Continuous Delivery"
          />
          <FeatureCard
            icon={<Server className="h-10 w-10" />}
            title="Infrastructure & Outils"
            description="Maîtriser Docker, Kubernetes et Terraform. L'Infrastructure as Code."
            href="/tools"
            gradient="from-orange-500/20 to-yellow-500/20 hover:border-orange-500/50"
            iconColor="text-orange-500"
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  href,
  gradient,
  iconColor,
  footerText
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  gradient: string;
  iconColor: string;
  footerText?: string;
}) {
  return (
    <Link href={href} className="block h-full">
      <Card className={`group relative h-full overflow-hidden bg-background/50 backdrop-blur-sm border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${gradient}`}>
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardHeader>
          <div className={`mb-4 inline-flex items-center justify-center p-3 rounded-2xl bg-background/80 shadow-sm ring-1 ring-inset ring-muted ${iconColor} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            {icon}
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>

          <div className="pt-4 flex flex-col gap-2">
            <div className="flex items-center text-sm font-medium text-primary">
              En savoir plus
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
            {footerText && (
              <div className={`text-sm font-semibold opacity-70 group-hover:opacity-100 transition-opacity ${iconColor}`}>
                {footerText}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
