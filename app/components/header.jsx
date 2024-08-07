"use client"
import React from 'react'
import ToggleTheme from './ToggleTheme'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter();
    return (
        <header className="bg-background w-full">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link className=" text-foreground items-center flex " href="">
                            <span className="sr-only">Home</span>
                            <span className='text-2xl font-bold'>🔗</span>
                        </Link>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">

                        <div className="flex items-center gap-4">
                            <Button size={"sm"} onClick={() => router.push("/create")}>Create</Button>

                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                            <ToggleTheme />
                        </div>
                    </div>
                </div>
            </div>
            
        </header>

    )
}

export default Header