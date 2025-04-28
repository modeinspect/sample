"use client"

import React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { WireframeAnimatedChart } from "@/components/ui/wireframe-animated-chart"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function ChartPlaceholder() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-dashed border-black">Chart Placeholder Example</h1>
      
      <Card className="border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
        <CardHeader>
          <CardTitle>Wireframe Chart Placeholder</CardTitle>
          <CardDescription>Simple cartoonish chart placeholder for prototype designs</CardDescription>
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
                animated={true}
              />
            </TabsContent>
            
            <TabsContent value="line" className="w-full mt-4">
              <WireframeAnimatedChart 
                chartType="line" 
                height={300}
                animated={true}
              />
            </TabsContent>
            
            <TabsContent value="area" className="w-full mt-4">
              <WireframeAnimatedChart 
                chartType="area" 
                height={300}
                animated={true}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}