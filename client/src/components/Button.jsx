import React from 'react'

export default function Button({ label, className, labelClassName, onClick, leftIcon = null, rightIcon = null }) {
  return (
    <button className={`flex justify-center items-center gap-2 ${className}`} onClick={onClick}>
      {leftIcon && leftIcon}
      {label && <span className={labelClassName}>{label}</span>}
      {rightIcon && rightIcon}
    </button>
  )
}
