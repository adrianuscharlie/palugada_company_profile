import '@/styles/global.css'
import Navbar from '@/components/Nav'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'Palugada Sejahtera Group',
  description: 'General Trading Company From Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <main>
          <Navbar/>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
