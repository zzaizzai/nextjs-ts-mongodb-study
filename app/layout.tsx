'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";
import NavProfileStatus from '@/components/NavProfileStatus'
import { SessionProvider } from "next-auth/react"


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <SessionProvider>
        <body>
          <div>
            <div className='navbar'>
              <Link className='navbar-item' href="/">Home</Link>
              <Link className='navbar-item' href="/list/product">List</Link>
              <Link className='navbar-item' href="/write/product">Write</Link>
              <div className='login-button'><NavProfileStatus /></div>
            </div>
            <div>
              {children}
            </div>
          </div>
        </body>
      </SessionProvider>
    </html>
  )
}
