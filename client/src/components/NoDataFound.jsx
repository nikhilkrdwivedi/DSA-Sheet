import React from 'react'
import noData from '../assets/no-data.jpg'

export default function NoDataFound({ imgClassName, title, titleClassName, subTitle, subTitleClassName }) {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={noData} alt='login' className={`max-h-96 ${imgClassName}`} />
      {title && <p className={`text-lg font-bold ${titleClassName}`}>{title}</p>}
      {subTitle && <p className={`text-md font-semibold ${subTitleClassName}`}>{subTitle}</p>}
    </div>
  )
}
