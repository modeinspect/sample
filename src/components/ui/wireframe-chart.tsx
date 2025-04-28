"use client"

import React from "react"
import * as RechartsPrimitive from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface WireframeChartProps {
  data: any[]
  dataKeys: string[]
  xAxisKey: string
  chartType: "bar" | "line" | "area" | "pie"
  height?: number
  colors?: Record<string, string>
}

export function WireframeChart({
  data,
  dataKeys,
  xAxisKey,
  chartType,
  height = 300,
  colors = {}
}: WireframeChartProps) {
  // Default wireframe colors
  const defaultColors = {
    item1: "#a9e3ff",
    item2: "#ffb5b5",
    item3: "#d4d4ff",
    item4: "#c1f0c1",
    item5: "#ffecb5"
  }

  // Merge with provided colors
  const chartColors = { ...defaultColors, ...colors }

  // Generate config based on dataKeys
  const config = dataKeys.reduce((acc, key, index) => {
    const colorKey = `item${index + 1}` as keyof typeof defaultColors
    acc[key] = { 
      label: key.charAt(0).toUpperCase() + key.slice(1),
      color: chartColors[colorKey] || "#888888"
    }
    return acc
  }, {} as Record<string, { label: string, color: string }>)

  const renderChart = (props: any) => {
    switch (chartType) {
      case "bar":
        return (
          <RechartsPrimitive.BarChart data={data} {...props}>
            <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" stroke="#000" />
            <RechartsPrimitive.XAxis dataKey={xAxisKey} stroke="#000" />
            <RechartsPrimitive.YAxis stroke="#000" />
            <ChartTooltip
              content={({ active, payload }) => (
                <ChartTooltipContent active={active} payload={payload} />
              )}
            />
            {dataKeys.map((key, index) => (
              <RechartsPrimitive.Bar 
                key={key}
                dataKey={key} 
                fill={chartColors[`item${index + 1}` as keyof typeof defaultColors]} 
                stroke="#000"
                strokeWidth={2}
              />
            ))}
          </RechartsPrimitive.BarChart>
        )
      
      case "line":
        return (
          <RechartsPrimitive.LineChart data={data} {...props}>
            <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" stroke="#000" />
            <RechartsPrimitive.XAxis dataKey={xAxisKey} stroke="#000" />
            <RechartsPrimitive.YAxis stroke="#000" />
            <ChartTooltip
              content={({ active, payload }) => (
                <ChartTooltipContent active={active} payload={payload} />
              )}
            />
            {dataKeys.map((key, index) => (
              <RechartsPrimitive.Line 
                key={key}
                type="monotone" 
                dataKey={key} 
                stroke="#000"
                strokeWidth={2}
                dot={{ fill: chartColors[`item${index + 1}` as keyof typeof defaultColors], stroke: "#000", strokeWidth: 2, r: 5 }}
                activeDot={{ fill: "#fff", stroke: "#000", strokeWidth: 2, r: 7 }}
              />
            ))}
          </RechartsPrimitive.LineChart>
        )
      
      case "area":
        return (
          <RechartsPrimitive.AreaChart data={data} {...props}>
            <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" stroke="#000" />
            <RechartsPrimitive.XAxis dataKey={xAxisKey} stroke="#000" />
            <RechartsPrimitive.YAxis stroke="#000" />
            <ChartTooltip
              content={({ active, payload }) => (
                <ChartTooltipContent active={active} payload={payload} />
              )}
            />
            {dataKeys.map((key, index) => (
              <RechartsPrimitive.Area 
                key={key}
                type="monotone" 
                dataKey={key} 
                stroke="#000"
                strokeWidth={2}
                fill={chartColors[`item${index + 1}` as keyof typeof defaultColors]}
                fillOpacity={0.6}
              />
            ))}
          </RechartsPrimitive.AreaChart>
        )
      
      case "pie":
        return (
          <RechartsPrimitive.PieChart {...props}>
            <RechartsPrimitive.Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey={dataKeys[0]}
              nameKey={xAxisKey}
              stroke="#000"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <RechartsPrimitive.Cell 
                  key={`cell-${index}`} 
                  fill={chartColors[`item${index + 1}` as keyof typeof defaultColors] || chartColors.item1}
                />
              ))}
            </RechartsPrimitive.Pie>
            <ChartTooltip
              content={({ active, payload }) => (
                <ChartTooltipContent active={active} payload={payload} hideIndicator={false} />
              )}
            />
          </RechartsPrimitive.PieChart>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="mb-4">
      <ChartContainer config={config}>
        {(props) => (
          <div className="wireframe-chart" style={{ height: `${height}px` }}>
            {renderChart(props)}
          </div>
        )}
      </ChartContainer>
    </div>
  )
}