"use client"
import React, { useState } from 'react'
import ToggleTheme from '../components/ToggleTheme';
import { Input } from '@/components/ui/input';
import SingleConnection from './components/singleConnection';
import { Button } from '@/components/ui/button';

const CreatePage = () => {
  const [grid, setGrid] = useState(Array(16).fill(""));

  const handleInputsChange = (gridIndex, value) => {
    const newGrid = [...grid];
    newGrid[gridIndex] = value;
    setGrid(newGrid);
  };

  return (
    <div className='flex flex-col justify-center items-center w-[80%] p-3 mx-auto'>
      <div className='w-full justify-end flex border border-white'><ToggleTheme/></div>
      <div className='flex gap-10 items-center justify-center w-full my-10'>
        <div className='flex flex-col items-start justify-center gap-4 w-1/2'>
          <h1 className='font-bold text-3xl text-left'>Create a connection!</h1>
          <SingleConnection containerStyles={"dark:bg-red-800 bg-red-400 border-[5px] border-red-800 dark:border-red-400"} onChange={handleInputsChange} index={0} />
          <SingleConnection containerStyles={"dark:bg-blue-800 bg-blue-400 border-[5px] border-blue-800 dark:border-blue-400"} onChange={handleInputsChange} index={1} />
          <SingleConnection containerStyles={"dark:bg-green-800 bg-green-400 border-[5px] border-green-800 dark:border-green-400"} onChange={handleInputsChange} index={2} />
          <SingleConnection containerStyles={"dark:bg-orange-800 bg-orange-400 border-  [5px] border-orange-800 dark:border-orange-400"} onChange={handleInputsChange} index={3} />
          <section className='rounded-md p-5 shadow-[5px_5px_0px_0px_rgba(200,0,255)] dark:bg-sky-800 bg-sky-400 border-[5px] border-sky-800 dark:border-sky-400 w-full space-y-2'>
            <label htmlFor="author" className='font-bold'>Author</label>
            <Input id="author"/>
            <label htmlFor="conn_name" className='font-bold'>Name of the connection</label>
            <Input id="conn_name"/>
          </section>
        </div>
        <div className='w-1/2'>
          <div className='grid grid-cols-4 grid-rows-4 gap-2 items-center'>
            {
              grid.map((value, i) => (
                <div key={i} className='border border-border rounded-sm px-8 py-6 bg-secondary text-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>{value || i + 1}</div>
              ))
            }
          </div>
          <Button variant={"outline"} className="w-full mt-10 rounded-full border-[5px] py-5 border-green-300 shadow-[5px_5px_0px_0px_rgba(200,0,255)]">Generate</Button>
        </div>
      </div>
    </div>
  )
}

export default CreatePage;
