import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import Navbar from "./components/navbar/Navbar"

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lands.Sport',
  description: 'Come on, buy your dream sports shoes in our shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Navbar></Navbar>
        {children}
        </body>
    </html>
  )
}