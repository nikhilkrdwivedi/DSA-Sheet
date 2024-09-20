import React from 'react'
import { useNavigate } from 'react-router-dom';
import { slugify } from 'underscore.string';
import { SlNotebook } from "react-icons/sl";
import { GrTask } from "react-icons/gr";
import { shortenText, TextToAvatarText } from '../../helpers/text'

export default function TopicCard({ topic, key }) {
    const navigate = useNavigate();
    const navigateToPage = (topic = {}) => {
        if (topic) {
            const topicName = slugify(topic?.title)
            navigate(`/topics/${topicName}`, { state: { topic } });
        }
    }
    return (
        <div className='grid grid-cols-1 bg-stone-100 p-2 rounded-md shadow-md hover:shadow-xl cursor-pointer' onClick={() => navigateToPage(topic)}>
            <div className='flex justify-start items-center gap-2 w-full pb-1'>
                <p className='h-16 w-16 flex justify-center items-center bg-gray-200 text-2xl font-bold font-sans rounded-lg'>{TextToAvatarText(topic?.title)}</p>
                <p className='text-2xl font-bold font-sans'>{topic?.title}</p>
            </div>
            <div className='text-sm font-normal text-gray-600 py-1'>{shortenText(topic?.description)}</div>
            <div className='grid md:grid-cols-2 gap-2 mt-2'>
                <div className='col-span-2 text-xl font-medium text-gray-800'>Content </div>
                <div className='flex justify-start items-center gap-4 bg-gray-300  md:my-1 rounded-lg shadow-lg shadow-gray-200' >
                    <div className='min-h-16 min-w-16 flex justify-center items-center bg-gray-100 text-2xl font-bold font-sans rounded-lg shadow-lg shadow-gray-400'><SlNotebook /></div>
                    <div className='flex justify-start items-start flex-col w-full'>
                        <div className='text-sm font-normal text-gray-600'>Chapters</div>
                        <div className='text-2xl font-medium text-gray-800'>{topic?.chapters?.length}</div>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-4 bg-gray-300  md:my-1 rounded-lg shadow-lg shadow-gray-200' >
                    <div className='min-h-16 min-w-16 flex justify-center items-center bg-gray-100 text-2xl font-bold font-sans rounded-lg shadow-lg shadow-gray-400'><GrTask /></div>
                    <div className='flex justify-start items-start flex-col w-full'>
                        <div className='text-sm font-normal text-gray-600'>Problems</div>
                        <div className='text-2xl font-medium text-gray-6=800'>{topic?.problems?.length}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
