import React from 'react'
import { GiLevelEndFlag } from "react-icons/gi";
import { IoPricetagsOutline } from "react-icons/io5";
import { PiBooks } from "react-icons/pi";
import { BiLinkExternal } from "react-icons/bi";
import Checkbox from '../../components/Checkbox';
import Badge from '../../components/Badge';
import { getLevelClassName, getTagsClassName } from '../../helpers/helper';

export default function ChapterResourceCard({ selectedChapter, isChapterComplete, chapterCompleteClick }) {
    return (
        <div className='max-h-screen overflow-y-auto bg-stone-100 p-2 rounded-md shadow-md'>

            <div className='flex justify-between items-center my-2'>
                <div className='text-xl'>{selectedChapter?.title}</div>
                <div>
                    <Checkbox label="Mark Complete" labelClassName="text-md ml-2 text-gray-700 font-medium" onClick={() => chapterCompleteClick(selectedChapter._id)} checked={isChapterComplete} />
                </div>
            </div>
            <iframe className='w-full h-96' src={selectedChapter?.resources?.video[0].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className='flex justify-start items-center gap-2 text-sm py-4 border-b'>
                <div className='flex justify-start items-center gap-2'><GiLevelEndFlag />
                    <Badge
                        className={getLevelClassName(selectedChapter.level)}
                        label={selectedChapter?.level}
                    />
                </div>
                <div className='flex justify-start items-center gap-2'><IoPricetagsOutline />{selectedChapter?.tags.map((tag, index) => (
                    <Badge
                        label={tag}
                        className={getTagsClassName()}
                    />
                ))}</div>
            </div>
            <p className='flex justify-start items-center gap-1 text-xl my-1'><PiBooks />Resources</p>
            <ul className='px-4'>
                {selectedChapter?.resources?.blogs?.map((blog, index) => (
                    <li className=''>
                        <a className='flex justify-start items-center gap-1 text-md text-sky-700 hover:text-sky-500 w-max text-sm font-medium' href={blog?.url} target='_blank'> {index + 1}. {blog.title} <BiLinkExternal className='size-5' /></a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
