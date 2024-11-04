import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { IconGitHub, IconNextChat, IconSeparator } from '@/components/ui/icons'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Toaster } from '@/components/ui/toaster'
import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'OpenAI Assistant File Search',
    template: `%s - OpenAI Assistant File Search`,
  },
  description: 'An OpenAI Assistant File Search chatbot built with Next.js.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('antialiased', inter.className)}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between bg-slate-100 px-4">
              <div className="flex items-center">
                <Link href="/" rel="nofollow">
                  <IconNextChat className="mr-2 size-6 dark:hidden" inverted />
                  <IconNextChat className="mr-2 hidden size-6 dark:block" />
                </Link>
                <div className="flex items-center">
                  <IconSeparator className="size-6 text-muted-foreground/50" />
                  ERM Digital: AI-Enabled Accelerators
                </div>
              </div>
              <div className="flex items-center justify-end space-x-2">
              <Avatar >
  <AvatarImage src="" />
  <AvatarFallback className="bg-green-400">CN</AvatarFallback>
</Avatar>
              </div>
            </header>
            <div className="flex flex-row">
              <div className="flex w-16 border-r-2 border-gray-400 bg-white ">test 123</div>
              <main className="flex w-full bg-white">{children}</main>
            </div>
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
