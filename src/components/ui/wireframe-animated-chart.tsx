"use client"

import React, { useState, useEffect } from "react"
import * as RechartsPrimitive from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface WireframeAnimatedChartProps {
  chartType?: "bar" | "line" | "area"
  height?: number
  animated?: boolean
  loading?: boolean
}

export function WireframeAnimatedChart({
  chartType = "bar",
  height = 300,
  animated = true,
  loading = false
}: WireframeAnimatedChartProps) {
  // Placeholder data that will be animated
  const [data, setData] = useState([
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
  ])

  // Target values for final animation state
  const targetData = [
    { month: "Jan", value: 400 },
    { month: "Feb", value: 300 },
    { month: "Mar", value: 600 },
    { month: "Apr", value: 200 },
    { month: "May", value: 500 },
    { month: "Jun", value: 350 },
  ]

  // Animation effect
  useEffect(() => {
    if (!animated) {
      setData(targetData)
      return
    }

    // If loading is true, use a pulsing animation
    if (loading) {
      let direction = 1
      const interval = setInterval(() => {
        setData(prev => 
          prev.map(item => {
            const randomValue = Math.floor(Math.random() * 300) + 100
            return { ...item, value: randomValue }
          })
        )
        direction *= -1
      }, 1500)
      
      return () => clearInterval(interval)
    }

    // Animate from 0 to target values
    let animationFrame: number
    let startTime: number | null = null
    const duration = 1500 // milliseconds

    const animateValues = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Ease-out function for smoother animation
      const easeOutProgress = 1 - Math.pow(1 - progress, 3)
      
      const newData = data.map((item, i) => ({
        ...item,
        value: Math.floor(targetData[i].value * easeOutProgress)
      }))
      
      setData(newData)
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateValues)
      }
    }
    
    animationFrame = requestAnimationFrame(animateValues)
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [animated, loading])

  const chartConfig = {
    value: { label: "Value", color: "#a9e3ff" }
  }

  // Render the appropriate chart type
  const renderChart = (props: any) => {
    switch (chartType) {
      case "bar":
        return (
          <RechartsPrimitive.BarChart data={data} {...props}>
            <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" stroke="#000" />
            <RechartsPrimitive.XAxis dataKey="month" stroke="#000" />
            <RechartsPrimitive.YAxis stroke="#000" />
            <ChartTooltip
              content={({ active, payload }) => (
                <ChartTooltipContent active={active} payload={payload} />
              )}
            />
            <RechartsPrimitive.Bar 
              dataKey="value" 
              fill="#a9e3ff" 
              stroke="#000"
              strokeWidth={2}
            />
          </RechartsPrimitive.BarChart>
        )
      
      case "line":
        return (
          <RechartsPrimitive.LineChart data={data} {...props}>
            <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" stroke="#000" />
            <RechartsPrimitive.XAxis dataKey="month" stroke="#000" />
            <RechartsPrimitive.YAxis stroke="#000" />
            <ChartTooltip
              content={({ active, payload }) => (
                <ChartTooltipContent active={active} payload={payload} />
              )}
            />
            <RechartsPrimitive.Line 
              type="monotone" 
              dataKey="value" 
              stroke="#000"
              strokeWidth={2}
              dot={{ fill: "#a9e3ff", stroke: "#000", strokeWidth: 2, r: 5 }}
              activeDot={{ fill: "#fff", stroke: "#000", strokeWidth: 2, r: 7 }}
            />
          </RechartsPrimitive.LineChart>
        )
      
      case "area":
        return (
          <RechartsPrimitive.AreaChart data={data} {...props}>
            <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" stroke="#000" />
            <RechartsPrimitive.XAxis dataKey="month" stroke="#000" />
            <RechartsPrimitive.YAxis stroke="#000" />
            <ChartTooltip
              content={({ active, payload }) => (
                <ChartTooltipContent active={active} payload={payload} />
              )}
            />
            <RechartsPrimitive.Area 
              type="monotone" 
              dataKey="value" 
              stroke="#000"
              strokeWidth={2}
              fill="#a9e3ff"
              fillOpacity={0.6}
            />
          </RechartsPrimitive.AreaChart>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="wireframe-chart mb-4">
      <ChartContainer config={chartConfig}>
        {(props) => (
          <div 
            className="wireframe-chart" 
            style={{ 
              height: `${height}px`,
              border: '2px dashed #000',
              borderRadius: '8px',
              padding: '10px',
              position: 'relative'
            }}
          >
            {renderChart(props)}
            {loading && (
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '6px'
                }}
              >
                <div className="text-lg font-bold" style={{ fontFamily: '"Comic Neue", sans-serif' }}>
                  Loading...
                </div>
              </div>
            )}
          </div>
        )}
      </ChartContainer>
    </div>
  )
}