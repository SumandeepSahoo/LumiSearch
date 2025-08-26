import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Icons } from '@/components/Icons'
import SearchBar from '@/components/SearchBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LumiSearch',
  description: 'A beautifully designed modern search experience',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='relative min-h-screen isolate overflow-hidden text-slate-900'>
          {/* Gradient background */}
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-indigo-50 via-white to-pink-50"></div>

          {/* Grid pattern with colors */}
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-indigo-200/40 [mask-image:radial-gradient(100%_100%_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="grid-pattern"
                width={150}
                height={150}
                patternUnits="userSpaceOnUse"
              >
                <path d="M 150 0 L 0 0 0 150" fill="none" stroke="currentColor" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>

          {/* Extra decorative blurred circles */}
          <div className="absolute top-20 left-40 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl -z-10"></div>

          {/* Content */}
          <div className='mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24'>
            <div className='h-full w-full flex flex-col items-center gap-4'>
              <Icons.Sparkles className='h-16 w-16 text-indigo-500' />

              <h1 className='tracking-tight text-4xl sm:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                LumiSearch
              </h1>

              <p className='max-w-xl text-center text-lg text-slate-600'>
                A sleek and modern search engine, designed to feel lightweight and visually inspiring.
              </p>

              {/* <div className='mx-auto mt-16 w-full max-w-2xl flex flex-col'>
                <SearchBar />
                {children}
              </div> */}
              <div className='mx-auto mt-16 w-full max-w-2xl flex flex-col'>
                <div className="border border-orange-500 rounded-xl p-2">
                  {/* Suspense fixes the useSearchParams issue */}
                  <Suspense fallback={<div>Loading search...</div>}>
                    <SearchBar />
                  </Suspense>
                </div>
                {children}
              </div>

            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
