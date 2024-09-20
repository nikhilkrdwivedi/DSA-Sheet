import React from 'react'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

export default function ProgressCard({ title, value, valueMax }) {
    return (
        <div className='flex justify-start items-center gap-4 bg-gray-200 md:my-1 rounded-lg shadow-lg shadow-gray-300'>
            <div className='flex justify-center items-center flex-col w-full min-h-24 pt-2'>
                <p className='text-sm font-normal text-gray-600 text-center'>{title}</p>
                <Gauge
                    value={value}
                    valueMax={valueMax}
                    startAngle={-110}
                    endAngle={110}
                    sx={{
                        [`& .${gaugeClasses.valueText}`]: {
                            fontSize: '1rem',
                            transform: 'translate(0px, 0px)',
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                            fill: '#52b202',
                        },
                    }}
                    text={`${value}/${valueMax}`}
                />
            </div>
        </div>
    )
}
