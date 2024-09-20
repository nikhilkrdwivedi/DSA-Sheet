import React from 'react'
import Badge from './Badge'

export default function TableRow({ key, children, className }) {
    return (
        <tr key={key} className={className}>
            {children}
        </tr>
    )
}
