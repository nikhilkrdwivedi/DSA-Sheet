import React from 'react'

export default function Table({ tHead, tBody }) {
    return (
        <table className="min-w-full leading-normal">
            <thead className="bg-white sticky top-0 ">
                {tHead}
            </thead>
            <tbody className=''>
                {tBody}
            </tbody>
        </table>
    )
}
