import React from 'react'
import { GrBook } from "react-icons/gr";
import Badge from '../Badge'
import { getLevelClassName } from '../../helpers/helper';


export default function ChapterSummaryCard({ chapters = [], onClick }) {
    return (
        <div className="grid grid-cols-1 mt-4">
            <div className='col-span-1 text-xl font-medium text-gray-800 my-2  flex items-center gap-2 border-b-2 pb-2'><GrBook />Chapters</div>
            <div className='max-h-96 overflow-auto'>
                <ul className=''>
                    {chapters?.map((chapter, index) => (
                        <li key={index} className='w-full text-gray-800 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 mb-2 p-1 shadow-md hover:shadow-md shadow-gray-200 rounded-md cursor-pointer' onClick={() => onClick(chapter)}>
                            <div className='flex justify-between items-center gap-2 p-2 h-12'>
                                <p className='truncate'>{chapter?.title}</p>
                                <Badge className={getLevelClassName(chapter?.level)} label={chapter?.level} />
                            </div>
                        </li>

                    ))}
                </ul>
            </div>

        </div>
    )
}
