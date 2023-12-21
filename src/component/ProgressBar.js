import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const ProgressBar = () => {

    const [progress, setProgress] = useState(0)

    const handlePrgress= () => {
        if(progress < 100){
            setProgress(progress + 20)
        }
    }

    const handleReset = () => {
        setProgress(0)
    }

    const getColor = () => {
        if(progress < 40){
            return "#ff0000"
        }else if(progress < 60){
            return "#ffa500"
        }else if(progress < 80){
            return "#cd8c95"
        }else{
            return "#0000ff"
        }
    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
        <div className='w-64 bg-slate-300 rounded-lg'>
        <div 
        style={{width: `${progress}%`, backgroundColor: getColor() }}
        className='h-8 rounded-l-lg'>
        
      </div>
        </div>
     
      <div className='font-bold text-2xl'>{progress}%</div>
      <div className='flex items-center justify-between gap-3'>
        <Button onClick={handleReset} variant="warning">Reset</Button>
        <Button onClick={handlePrgress} variant="primary">Progress</Button>
      </div>
    
    </div>
  )
}

export default ProgressBar
