import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Navbar from './layouts/Navbar/Navbar'
import Footer from './layouts/Footer/Footer'
import Login from './auth/login/page'
import Providers from '@/redux/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NandoShop - Inicio',
  description: 'Compra lo que quieras',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isLoggedIn = true;

  return (
    <html lang="en" data-theme="nando">
      
        <Head>
          <title>NandoShop</title>
        </Head>
      
      <Providers>
        <body className={inter.className}>
          <Navbar />
          <main className="pt-28">
            {isLoggedIn ? children : <Login />}
            
          </main>
          <Footer />
        </body>
      </Providers>
      
    </html>
  )
}
