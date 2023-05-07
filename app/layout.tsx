import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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
      <div className='navbar'>
        <Link className='navbar-item' href="/">Home</Link>
        <Link className='navbar-item' href="/list">List</Link>
        <div className={inter.className}>{children}</div>
      </div>
    </html>
  )
}
