'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [previw, setPreviw] = useState<string | null>(null)

  function onFileSelect(event: ChangeEvent<HTMLInputElemnt>) {
    const { files } = event.target
  }

  if (!files) {
    return
  }

return (
  <>
  <input
    onChange={onFileSelected}
    type="file"
    id="media"  
    accept="image/*"
    className="invisible h-0 w-0"
  />

  {preview && (
    <img 
      src={preview} 
      alt="" 
      className="aspect-video w-full rounded-lg object-cover"
    />
  )}
  </>
)
}