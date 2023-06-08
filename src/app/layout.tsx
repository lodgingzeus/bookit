import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider/Provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BookIT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className='grow'>{children}</main>
        </Provider>
      </body>
    </html>
  )
}
