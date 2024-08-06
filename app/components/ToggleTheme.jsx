"use client"
import { useTheme } from 'next-themes'
import React from 'react'

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();
    return (
        <Button variant="outline" size={"icon"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle Theme">
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only"></span>
        </Button>
    )
}

export default ToggleTheme