"use client"

import React, { useState, useEffect } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function WireframeToggle() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const body = document.body
    if (enabled) {
      body.classList.add('wireframe-mode')
    } else {
      body.classList.remove('wireframe-mode')
    }
  }, [enabled])

  return (
    <div className="fixed top-4 right-4 flex items-center gap-2 bg-white border-2 border-black p-2 rounded-md shadow-md z-50">
      <Switch id="wireframe-mode" checked={enabled} onCheckedChange={setEnabled} />
      <Label htmlFor="wireframe-mode" className="font-semibold">Wireframe Mode</Label>
    </div>
  )
}