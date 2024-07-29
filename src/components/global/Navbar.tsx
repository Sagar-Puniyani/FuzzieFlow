import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

type Props = {}

const Navbar = async (props: Props) => {
    return (
        <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
            <aside className="flex items-center gap-[2px]">
                <p className="text-3xl font-bold">Fu</p>
                <Image
                    src="/fuzzieLogo.png"
                    width={15}
                    height={15}
                    alt="fuzzie logo"
                    className="shadow-sm"
                />
                <p className="text-3xl font-bold">zie</p>
            </aside>
            <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
                <ul className="flex items-center gap-4 list-none">
                    <li>
                        <Link href="#">Products</Link>
                    </li>
                    <li>
                        <Link href="#">Pricing</Link>
                    </li>
                    <li>
                        <Link href="#">Clients</Link>
                    </li>
                    <li>
                        <Link href="#">Resources</Link>
                    </li>
                    <li>
                        <Link href="#">Documentation</Link>
                    </li>
                    <li>
                        <Link href="#">Enterprise</Link>
                    </li>
                </ul>
            </nav>
            <aside className="flex items-center gap-4">
            
                <Link
                    href="/dashboard"
                    className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        {/* //todo: Add user instance  */}
                    {true ? 'Dashboard' : 'Get Started'}
                    </span>
                    </button>
                </Link>
                <MenuIcon className="md:hidden" />
            </aside>
        </header>
    )
}

export default Navbar




        // // Button code
      
  
        // // tailwind.config.js code
        // {
        //   "animation": {
        //     shimmer: "shimmer 2s linear infinite"
        //   },
        //   "keyframes": {
        //     shimmer: {
        //       from: {
        //         "backgroundPosition": "0 0"
        //       },
        //       to: {
        //         "backgroundPosition": "-200% 0"
        //       }
        //     }
        //   }
        // }
      