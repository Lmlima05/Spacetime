import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Hero } from '@/components/Hero'
import { Signin } from '@/components/Signin'
import { Profile } from '@/components/Profile'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'


const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({ 
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo constuída com React, Next.js, TailwindCSS e TypeScript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')
  
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}  >
        <main className="grid min-h-screen grid-cols-2">
         {/* Left */}
        <div className="relative bg-[url(../assets/bg-stars.svg)] bg-cover flex flex-col items-start justify-between overflow-hidden px-28 py-16 border-r border-white/10">
          {/* Blur */}  
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
          {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        
        {isAuthenticated ? <Profile /> : <Signin />}
        <Hero />
        <Copyright />  
      </div>
      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        {children}
      </div>
    </main>
      </body>
    </html>
  )
}
