import { Button } from '@/components/ui/button'
import React from 'react'

const Footer = () => {
    return (
        <div className='justify-center  max-w-screen-xl px-4 py-6 sm:px-6 lg:px-10 w-full flex items-center gap-4'>

            <span>Wrong attempts: 1</span>
            <Button variant="secondary" className="rounded-full">Shufle</Button>
            <Button variant="destructive" className="rounded-full">Reset</Button>
            <Button variant="destructive" className="rounded-full">Clear selected</Button>
            <Button className="w-1/3 rounded-full">Submit</Button>
        </div>
    )
}

export default Footer