import './globals.css'
import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import Header from './component/Header/Header'

import Panel from './component/panel/Panel'


//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        
        <Panel/>
        </body>
    </html>
  )
}