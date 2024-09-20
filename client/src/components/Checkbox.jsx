import React from 'react'
import { Checkbox as CheckBox, Field, Label } from '@headlessui/react'

export default function Checkbox({ checked, onClick, label, labelClassName }) {
  return (
    <Field className="flex items-center">
      <CheckBox
        checked={checked}
        onClick={onClick}
        className="group block size-6 rounded border bg-white data-[checked]:bg-green-500"
      >
        <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
          <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </CheckBox>
      <Label className={labelClassName}>{label}</Label>
    </Field>
  )
}
