"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  // Add theme-transition class to body after mounting
  React.useEffect(() => {
    setMounted(true)
    document.body.classList.add("theme-transition")

    return () => {
      document.body.classList.remove("theme-transition")
    }
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
