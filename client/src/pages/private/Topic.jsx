import React, { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

import { GiProgression } from "react-icons/gi";
import { useLocation } from 'react-router-dom';

import { TextToAvatarText } from '../../helpers/text';
import { useLoader } from '../../contexts/LoaderContext';
import { getChaptersByTopicId } from '../../api/chapter';
import ChapterSummaryCard from '../../components/chapter/ChapterSummaryCard';
import ChapterResourceCard from '../../components/chapter/ChapterResourceCard';
import NoDataFound from '../../components/NoDataFound';
import ChapterProblemCard from '../../components/chapter/ChapterProblemCard';
import Breadcrumbs from '../../components/Breadcrumb';
import { getProgressByTopicId, updateProgress } from '../../api/progress';
import ProgressCard from '../../components/chapter/ProgressCard';
import { toast } from 'react-toastify';

const TAB_LIST = [
    'Resources',
    'Problems'
]

export default function Topic() {
    const [chapters, setChapters] = useState([]);
    const [progress, setProgress] = useState({
        problem: [],
        chapter: []
    });
    const [selectedChapter, setSelectedChapter] = useState(null);

    const { state = {} } = useLocation();
    const { loader, setLoader } = useLoader();
    const { topic = {} } = state || {}; // Read values passed on state

    if (!topic || !topic?._id) {
        throw new Error('INVALID_TOPIC_REQUEST')
    }
    const breadcrumbs = {
        pages: [
            {
                name: 'Topic',
                href: `/topics`,
                current: false,
            },
            {
                name: topic?.title,
                href: `/`,
                current: true,
            },
        ],
    };
    const fetchChapters = async () => {
        try {
            setLoader({ ...loader, isLoading: true });
            const { data: { data } } = await getChaptersByTopicId(topic?._id);
            setChapters(data);
            setSelectedChapter(data[0] || null)
        } catch (error) {
            console.log(error)
        } finally {
            setLoader({ ...loader, isLoading: false });
        }
    }
    const fetchProgress = async () => {
        try {
            setLoader({ ...loader, isLoading: true });
            const { data: { data } } = await getProgressByTopicId(topic?._id);
            setProgress(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoader({ ...loader, isLoading: false });
        }
    }
    const updateUserProgress = async (id, type) => {
        try {
            setLoader({ ...loader, isLoading: true });
            let progressTypeArray = progress[type]
            const isCompleted = !progressTypeArray.includes(id)
            const { data: { data } } = await updateProgress({
                [type]: id,
                type,
                isCompleted
            });
            if (isCompleted) {
                progressTypeArray.push(id);
            } else {
                progressTypeArray = progressTypeArray.filter(item => item != id)
            }
            setProgress((state) => ({
                ...state,
                [type]: progressTypeArray
            }));
            toast.success("Progress updated!", {
                position: "bottom-right",
            });
        } catch (error) {
            const errorMsg = error?.response?.data?.message || 'Unable to updated!'
            toast.error(errorMsg, {
                position: "bottom-right",
            });
        } finally {

            setLoader({ ...loader, isLoading: false });
        }
    }
    useEffect(() => {
        fetchChapters();
        fetchProgress()
    }, [])

    return (
        <div className='max-w-7xl mx-auto mt-4'>
            <Breadcrumbs className="mt-4" breadcrumbs={breadcrumbs} />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 md:space-x-2'>
                <div className=''>
                    <div className='grid grid-cols-1 bg-stone-100 p-2 rounded-md shadow-md'>
                        <div className='flex justify-start items-center gap-2 w-full pb-1'>
                            <p className='h-16 w-16 flex justify-center items-center bg-gray-200 text-2xl font-bold font-sans rounded-lg'>{TextToAvatarText(topic?.title)}</p>
                            <p className='text-2xl font-bold font-sans'>{topic?.title}</p>
                        </div>
                        <div className='text-sm font-normal text-gray-600 py-1'>{topic?.description}</div>
                        <div className='grid md:grid-cols-2 gap-2 mt-2'>
                            <div className='col-span-2 text-xl font-medium text-gray-800 flex items-center gap-2 border-b-2 pb-2' ><GiProgression /> Progress </div>
                            <ProgressCard title="Chapters" value={progress.chapter.length}
                                valueMax={topic?.chapters?.length} />
                            <ProgressCard title="Problems" value={progress.problem.length}
                                valueMax={topic?.problems?.length} />


                        </div>
                        {!!chapters?.length && (
                            <ChapterSummaryCard chapters={chapters} onClick={(chapter) => setSelectedChapter(chapter)} />

                        )}
                    </div>
                </div>
                <div className='md:col-span-2 mt-2 md:mt-0'>
                    <TabGroup>
                        <TabList>
                            {TAB_LIST.map((name, index) => (
                                <Tab
                                    key={name}
                                    className="rounded-full py-1 px-3 mr-2 mb-2 text-sm/6 font-semibold text-gray-700 bg-white shadow-md data-[selected]:text-gray-100 focus:outline-none data-[selected]:bg-pink-400 data-[hover]:bg-pink-300 data-[selected]:data-[hover]:bg-pink-500 data-[focus]:outline-1 data-[focus]:outline-white"
                                >
                                    {name}
                                </Tab>
                            ))}
                        </TabList>
                        <TabPanels className="">
                            <TabPanel key={"Resources"} className="rounded-xl bg-white/5 pt-2">
                                {selectedChapter && (
                                    <ChapterResourceCard selectedChapter={selectedChapter} isChapterComplete={progress.chapter.includes(selectedChapter._id)} chapterCompleteClick={(chapterId) => { updateUserProgress(chapterId, 'chapter') }} />
                                )}
                                {!selectedChapter && (<NoDataFound title="No Resource Found" subTitle="Try again after sometime, our mentors will upload content soon." />)}
                            </TabPanel>
                            <TabPanel key={"Problems"} className="rounded-xl bg-white/5 pt-2">
                                {!!selectedChapter?.problems?.length && (
                                    <ChapterProblemCard selectedChapter={selectedChapter} problemProgress={progress.problem} problemCompleteClick={(problemId) => { updateUserProgress(problemId, 'problem') }} />
                                )}
                                {!!!selectedChapter?.problems?.length && (<NoDataFound title="No Problems Found" subTitle="Try again after sometime, our mentors will upload content soon." />)}
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
            </div></div>
    )
}
