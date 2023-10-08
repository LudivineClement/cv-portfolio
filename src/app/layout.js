import './globals.css'
import { Poppins } from 'next/font/google'

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'CV - Développeuse web | Ludivine CLEMENT',
  description: 'Ludivine CLEMENT, développeuse web front-end freelance spécialisée en HTML, CSS, JavaScript, React et responsive design.',
  themeColor: 'black',
  icons: {
    icon: 'favicon/favicon-32x32.png',
    shortcut: 'favicon/favicon-16x16.png',
    apple: [
      { url: 'favicon/apple-touch-icon.png' },
      { url: 'favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className='scroll-smooth'>
      <body className={`${poppins.className} text-color-global text-[0.94rem]`}>{children}</body>
    </html>
  )
}
