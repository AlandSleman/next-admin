import { useStore } from "@nanostores/react"
import { atom } from "nanostores"

export type State = {
  theme: string
}

export const $appState = atom<State>({
  theme: "blue",
})

export function useAppState() {
  return useStore($appState)
}

export function updateAppState(changes: Partial<State>) {
  $appState.set({ ...$appState.get(), ...changes })
}
