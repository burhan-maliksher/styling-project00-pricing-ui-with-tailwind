import './globals.css'
import {Imprima,Jacques_Francois,Inspiration} from '@next/font/google'

const imprima=Imprima({
  subsets:['latin'],
  variable:'--font-imprima',
  weight:'400',
  display:'swap',
});

const jacques_Francois=Jacques_Francois({
  subsets:['latin'],
  variable:'--font-jacques-Francois',
  weight:'400',
  display:'swap',
});

const inspiration=Inspiration({
  subsets:['latin'],
  variable:'--font-inspiration',
  weight:'400',
  display:'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jacques_Francois.variable} ${imprima.variable} ${inspiration.variable}`}>
      <head />
      <body className='min-h-screen bg-slate-50 dark:bg-black dark:text-white'>{children}</body>
    </html>
  )
}
