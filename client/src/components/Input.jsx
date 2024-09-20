import React from 'react'
import './Input.css';

export default function Input({
    label,
    placeholder,
    value,
    onChange,
    errorMessage,
    type,
    leftIcon,
    rightIcon,
    rightIconClick
}) {
    return (
        <div className="w-full">
            {
                label && (
                    <label className="block mb-1 mt-2 md:mt-4 text-sm text-gray-500">
                        {label}
                    </label>
                )
            }
            <div className="input-container">
                {leftIcon && <div className="icon left-2">{leftIcon}</div>}
                <input
                    id="inputForm"
                    className={`input-field w-full bg-transparent placeholder:text-gray-500 text-gray-700 text-sm border border-gray-200 rounded-full px-2 pl-10 py-2 transition duration-300 ease focus:outline-none focus:border-gray-300 hover:border-gray-300 shadow-sm focus:shadow-md`}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}
                />
                {rightIcon && <div className="icon right-2" onClick={rightIconClick}>{rightIcon}</div>}
            </div>
            {
                errorMessage && (
                    <p className="flex items-center mt-1 text-xs text-red-500">
                        {errorMessage}
                    </p>
                )
            }
        </div>
    )
}
