import React from 'react'
import Badge from './Badge'

export default function TableRow({ key, children, className }) {
    console.log("children =>=>=>", children)
    return (
        <tr key={key} className={className}>
            {children}
        </tr>
    )
}
