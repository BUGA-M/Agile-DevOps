"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
    language: string
    code: string
    title?: string
    className?: string
}

export function CodeBlock({ language, code, title, className }: CodeBlockProps) {
    const [copied, setCopied] = React.useState(false)

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className={cn("rounded-lg border bg-muted/50 overflow-hidden", className)}>
            {title && (
                <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/30">
                    <span className="text-xs font-medium text-muted-foreground">{title}</span>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={copyToClipboard}
                    >
                        {copied ? (
                            <Check className="h-3 w-3 text-green-500" />
                        ) : (
                            <Copy className="h-3 w-3" />
                        )}
                        <span className="sr-only">Copy code</span>
                    </Button>
                </div>
            )}
            <div className="p-4 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed">
                    <code className={`language-${language}`}>{code}</code>
                </pre>
            </div>
        </div>
    )
}
