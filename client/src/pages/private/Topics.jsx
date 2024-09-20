import React, { useEffect, useState } from 'react'
import { getTopics } from '../../api/topic';
import { useLoader } from '../../contexts/LoaderContext';
import TopicCard from '../../components/topic/TopicCard';
import Breadcrumbs from '../../components/Breadcrumb';

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const { loader, setLoader } = useLoader();
  const breadcrumbs = {
    pages: [
      {
        name: 'Topic',
        href: `/`,
        current: true,
      },
    ],
  };
  const fetchTopics = async () => {
    try {
      setLoader({ ...loader, isLoading: true });
      const { data: { data } } = await getTopics();
      setTopics(data)
    } catch (error) {

    } finally {
      setLoader({ ...loader, isLoading: false });
    }
  }
  useEffect(() => {
    fetchTopics()
  }, [])
  return (
    <div className='max-w-7xl mx-auto p-2'>
      <Breadcrumbs className="mt-4" breadcrumbs={breadcrumbs} />
      <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        {topics.map((topic, index) => (
          <TopicCard topic={topic} key={index} />
        ))}
      </div>
    </div>
  )
}
