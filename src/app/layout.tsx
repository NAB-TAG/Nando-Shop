import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Navbar from './layouts/Navbar/Navbar'
import Footer from './layouts/Footer/Footer'
import Login from './auth/login/page'


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

      <body className={inter.className}>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
        <Navbar />
        <main className="pt-28">
          {isLoggedIn ? children : <Login />}
          
        </main>
        <Footer />
      </body>
    </html>
  )
}
