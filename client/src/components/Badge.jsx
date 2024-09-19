import React from 'react'
import { titleize } from 'underscore.string'

export default function Badge({ className, label }) {

    const baseClassName = 'text-xs font-medium py-1 px-2 rounded-full shadow-md w-max'
    return (
        <span className={`${baseClassName} ${className}`}>
            {titleize(label)}
        </span>
    )
}
