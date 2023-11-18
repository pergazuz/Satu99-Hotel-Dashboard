import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-customGray">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <iframe title="Dashboard_BI" width="1200" height="650" src="https://app.powerbi.com/view?r=eyJrIjoiMDdjMTRiZTEtNDRlOS00OWYwLWFlZTItNGI0ZjZmZTgwMGM0IiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D"></iframe>
      </div>
    </main>
  )
}
