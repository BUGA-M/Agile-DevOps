"use client"

import dynamic from "next/dynamic"

const MermaidDiagram = dynamic(
    () => import("@/components/visuals/mermaid-diagram").then((mod) => mod.MermaidDiagram),
    {
        ssr: false,
        loading: () => (
            <div className="flex items-center justify-center p-8 bg-muted/20 rounded-lg animate-pulse">
                <span className="text-muted-foreground text-sm">Loading Diagram...</span>
            </div>
        ),
    }
)

export { MermaidDiagram as ClientMermaid }
