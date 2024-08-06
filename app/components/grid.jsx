import { Button } from '@/components/ui/button'
import React from 'react'

const Grid = () => {
    return (
        <div className='grid grid-cols-4 grid-rows-4 gap-4 my-10'>
            {Array(16).fill().map((_, i) => (
                <Button variant={"outline"} size={"xl"} key={i} className=''>
                    mother fucker
                </Button>
            ))}
        </div>
    )
}

export default Grid