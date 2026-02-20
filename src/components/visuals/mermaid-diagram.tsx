"use client"

import React, { useEffect, useRef, useState } from "react"
import mermaid from "mermaid"
import { useTheme } from "next-themes"

mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    securityLevel: "loose",
})

interface MermaidDiagramProps {
    chart: string
    className?: string
}

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [svg, setSvg] = useState<string>("")
    const { theme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const currentTheme = theme === "system" ? systemTheme : theme
        const mermaidTheme = currentTheme === "dark" ? "dark" : "default"

        // Configure mermaid with theme variables if needed, or just use base themes
        mermaid.initialize({
            startOnLoad: false,
            theme: mermaidTheme as any,
            fontFamily: "var(--font-sans)",
            themeVariables: {
                primaryColor: "hsl(210 40% 98%)",
                primaryTextColor: "hsl(222.2 47.4% 11.2%)",
                primaryBorderColor: "hsl(216 34% 17%)",
                lineColor: "hsl(215.4 16.3% 56.9%)",
                secondaryColor: "hsl(222.2 47.4% 11.2%)",
                tertiaryColor: "hsl(217.2 32.6% 17.5%)",
            }
        })

        const renderChart = async () => {
            if (ref.current) {
                try {
                    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
                    const { svg } = await mermaid.render(id, chart)
                    setSvg(svg)
                } catch (error) {
                    console.error("Mermaid render error:", error)
                    // Fallback or error state
                }
            }
        }

        renderChart()
    }, [chart, theme, systemTheme, mounted])

    if (!mounted) return <div className="animate-pulse bg-muted h-64 rounded-lg"></div>

    return (
        <div
            ref={ref}
            className={className}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    )
}
