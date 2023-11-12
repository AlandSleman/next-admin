"use client"

import * as React from "react"
import { useSelectedLayoutSegment } from "next/navigation"

import { useAppState } from "@/state/appState"

export function ThemeSwitcher() {
  const appState = useAppState()
  const segment = useSelectedLayoutSegment()

  React.useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className)
      }
    })

    const theme = segment === "themes" ? appState.theme : null
    if (theme) {
      return document.body.classList.add(`theme-${theme}`)
    }
  }, [segment, appState])

  return null
}
