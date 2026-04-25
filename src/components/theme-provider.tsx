"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// We define the props locally to avoid the import error from next-themes/dist/types
export function ThemeProvider({ children, ...props }: any) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
