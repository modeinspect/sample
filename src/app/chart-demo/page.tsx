"use client"

import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { WireframeAnimatedChart } from "@/components/ui/wireframe-animated-chart"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function ChartDemo() {
  const [loading, setLoading] = useState(false)
  const [animated, setAnimated] = useState(true)

  const handleToggleLoading = () => {
    setLoading(prev => !prev)
  }

  const handleReplayAnimation = () => {
    setAnimated(false)
    setTimeout(() => setAnimated(true), 50)
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-dashed border-black">Wireframe Chart Demo</h1>
      
      <div className="controls mb-6 flex flex-wrap gap-4">
        <Button 
          variant="outline" 
          onClick={handleToggleLoading}
          className="border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
        >
          {loading ? "Stop Loading Animation" : "Start Loading Animation"}
        </Button>
        
        <Button 
          variant="outline" 
          onClick={handleReplayAnimation}
          className="border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
        >
          Replay Animation
        </Button>
      </div>
      
      <Card className="border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
        <CardHeader>
          <CardTitle>Animated Placeholder Chart</CardTitle>
          <CardDescription>Cartoonish wireframe chart with animation</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="bar">
            <TabsList>
              <TabsTrigger value="bar">Bar Chart</TabsTrigger>
              <TabsTrigger value="line">Line Chart</TabsTrigger>
              <TabsTrigger value="area">Area Chart</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bar" className="w-full mt-4">
              <WireframeAnimatedChart 
                chartType="bar" 
                height={300}
                animated={animated}
                loading={loading}
              />
            </TabsContent>
            
            <TabsContent value="line" className="w-full mt-4">
              <WireframeAnimatedChart 
                chartType="line" 
                height={300}
                animated={animated}
                loading={loading}
              />
            </TabsContent>
            
            <TabsContent value="area" className="w-full mt-4">
              <WireframeAnimatedChart 
                chartType="area" 
                height={300}
                animated={animated}
                loading={loading}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card className="border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] mt-6">
        <CardHeader>
          <CardTitle>Usage Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>This demo showcases the <code>WireframeAnimatedChart</code> component with the following features:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Animated data visualization that grows from 0 to target values</li>
              <li>Support for bar, line, and area chart types</li>
              <li>Loading state with randomized data animation</li>
              <li>Cartoonish wireframe styling that matches the project design</li>
              <li>Interactive tooltips showing data values</li>
            </ul>
            <div className="p-4 border-2 border-dashed border-black rounded-md bg-gray-50 font-mono text-sm mt-4">
              {`<WireframeAnimatedChart
  chartType="bar" // 'bar', 'line', or 'area'
  height={300}
  animated={true}
  loading={false}
/>`}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}