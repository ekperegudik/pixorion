import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })
const _montserrat = Montserrat({ subsets: ['latin', 'cyrillic'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Pixorion.ai - Создавайте контент для маркетплейсов в одном окне',
  description:
    'Pixorion.ai объединяет генерацию изображений, анализ карточек товаров и инструменты оптимизации контента в едином рабочем пространстве для продавцов маркетплейсов.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#222228',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${_inter.variable} ${_montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
