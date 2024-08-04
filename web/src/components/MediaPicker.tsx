'use client'

import { ChangeEvent } from 'react'

export function MediaPicker() {
  function onFileSelect(event: ChangeEvent<HTMLInputElemnt>) {}

return (
  <input
    onChange={onFileSelected}
    type="file"
    id="media"
    className="invisible h-0 w-0"
  />
)}