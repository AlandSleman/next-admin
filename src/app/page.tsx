import OverviewCard from '@/components/Card'
import { ModeToggle } from '@/components/ModeToggle'
import { ThemesSheet } from '@/components/ThemesSheet'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-background">
      <Button >My Button</Button>
      <ModeToggle/>
      <OverviewCard/>
      <ThemesSheet/>
    </main>
  )
}
