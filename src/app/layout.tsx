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
  description: 'Descubre lo último en moda y tecnología en nuestra tienda en línea. Explora una amplia selección de prendas de vestir de tendencia, desde elegantes conjuntos hasta prendas casuales para cualquier ocasión. Además, encuentra una variedad de productos electrónicos de vanguardia',
  keywords: 'ropa, moda, mujer, hombre, niños, celulares, tablets, Notebooks, electrónica, gadgets, tecnología, tienda en línea',
  authors: [{ name: 'Nando Agustin Bravo', url:'https://linkedin.com/in/nando-agustin-bravo-181347249'}],
  applicationName: 'NandoShop',
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
