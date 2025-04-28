"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function WireframeDemo() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Wireframe Components</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Button Styles</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <input 
              type="text" 
              placeholder="Text input"
              className="p-2 w-full border-2 border-black rounded-md"
            />
            <select className="p-2 w-full border-2 border-black rounded-md">
              <option>Select option</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="checkbox" 
                className="mr-2 border-2 border-black"
              />
              <label htmlFor="checkbox">Checkbox</label>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Hand-drawn Elements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-6">
            <div className="border-2 border-black rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
              Circle
            </div>
            <div className="border-2 border-black p-6 w-20 h-20 flex items-center justify-center shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
              Square
            </div>
            <div className="border-2 border-black p-6 w-24 h-20 flex items-center justify-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] transform rotate-3">
              Rotated
            </div>
            <div className="note w-40 h-20 flex items-center justify-center">
              Sticky Note
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}