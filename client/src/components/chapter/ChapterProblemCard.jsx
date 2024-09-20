import React from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { TbHandClick } from "react-icons/tb";
import TableRow from '../TableRow'
import Badge from '../Badge'
import Table from '../Table'
import Checkbox from '../Checkbox';
import { getLevelClassName } from '../../helpers/helper';

export default function ChapterProblemCard({ selectedChapter, problemCompleteClick, problemProgress }) {
    const getTableBody = () => {
        return (
            selectedChapter?.problems?.map((problem, index) => (
                <TableRow key={index} className="font-medium">
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {index + 1}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <a className="text-sky-700 whitespace-no-wrap underline" href={problem.url} target='_black'>{problem.title}</a>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            <Badge className={getLevelClassName(problem.level)} label={problem.level} />
                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {problem.note?.length ? <Popover>
                                <PopoverButton className="block text-sm/6 font-semibold text-gray-500 focus:outline-none data-[active]:text-black data-[hover]:text-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                                    <div className='flex justify-start items-center gap-2'><TbHandClick />View Note</div>
                                </PopoverButton>
                                <PopoverPanel
                                    transition
                                    anchor="bottom"
                                    className="flex justify-center items-center min-h-16 divide-y divide-white/5 rounded-xl bg-gray-50 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 shadow-md"
                                >
                                    <div className="p-2  max-w-96">
                                        <p className="text-gray-700 font-medium whitespace-no-wrap">
                                            {problem.note}
                                        </p>
                                    </div>
                                </PopoverPanel>
                            </Popover> : '-'}

                        </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <Checkbox label="Mark Complete" labelClassName="text-md ml-2 text-gray-700 font-medium" onClick={() => problemCompleteClick(problem._id)} checked={problemProgress.includes(problem._id)} />
                    </td>
                </TableRow>)
            )
        )
    }
    const getTableHead = () => {
        return (
            <TableRow>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    #
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Problem
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Level
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Note
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Mark
                </th>
            </TableRow>
        )
    }
    return (
        <div className='max-h-screen overflow-hidden bg-stone-100 p-2 rounded-md shadow-md'>
            <div className="overflow-y-auto max-h-[720px] relative">
                <Table tBody={getTableBody()} tHead={getTableHead()} />
            </div>
        </div>
    )
}
