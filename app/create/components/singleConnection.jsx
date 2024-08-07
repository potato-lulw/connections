"use client"
import { Input } from '@/components/ui/input'
import React from 'react'

const SingleConnection = ({ containerStyles, onChange, index }) => {
  const handleInputChange = (e, inputIndex) => {
    const value = e.target.value;
    onChange(index * 4 + inputIndex, value);
  };

  return (
    <section className={`${containerStyles} rounded-md p-5 shadow-[5px_5px_0px_0px_rgba(200,0,255)]`}>
      <label htmlFor={`desc${index}`} className='font-bold'>Description</label>
      <Input id={`desc${index}`} className="mt-2" onChange={(e) => handleInputChange(e, 0)} />
      <label className='mt-2 font-bold'>Answers</label>
      <div className='flex gap-2 mt-2'>
        <div className="rounded-md"><Input onChange={(e) => handleInputChange(e, 1)} /></div>
        <div className="rounded-md"><Input onChange={(e) => handleInputChange(e, 2)} /></div>
        <div className="rounded-md"><Input onChange={(e) => handleInputChange(e, 3)} /></div>
        <div className="rounded-md"><Input onChange={(e) => handleInputChange(e, 4)} /></div>
      </div>
    </section>
  )
}

export default SingleConnection
