"use client"

import React from "react"
import * as RechartsPrimitive from "recharts"
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card"
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

// Dummy data for demonstration purposes
const revenueData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 2000, expenses: 9800 },
  { month: "Apr", revenue: 2780, expenses: 3908 },
  { month: "May", revenue: 1890, expenses: 4800 },
  { month: "Jun", revenue: 2390, expenses: 3800 },
  { month: "Jul", revenue: 3490, expenses: 4300 },
]

const expenseCategories = [
  { name: "Marketing", value: 400 },
  { name: "Operations", value: 300 },
  { name: "Sales", value: 300 },
  { name: "Development", value: 200 },
  { name: "Admin", value: 100 },
]

const balanceHistory = [
  { date: "Jan 1", balance: 10000 },
  { date: "Feb 1", balance: 12000 },
  { date: "Mar 1", balance: 9800 },
  { date: "Apr 1", balance: 11200 },
  { date: "May 1", balance: 14500 },
  { date: "Jun 1", balance: 18000 },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-dashed border-black">Financial Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>Current Month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$24,350</div>
            <div className="text-sm text-green-500 flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +5.2% from last month
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
          <CardHeader>
            <CardTitle>Total Expenses</CardTitle>
            <CardDescription>Current Month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$12,760</div>
            <div className="text-sm text-red-500 flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +2.4% from last month
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
          <CardHeader>
            <CardTitle>Net Profit</CardTitle>
            <CardDescription>Current Month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$11,590</div>
            <div className="text-sm text-green-500 flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +8.1% from last month
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Revenue vs Expenses Chart */}
      <Card className="mt-6 border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
        <CardHeader>
          <CardTitle>Revenue vs Expenses</CardTitle>
          <CardDescription>Monthly comparison for the current year</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="bar">
            <TabsList>
              <TabsTrigger value="bar">Bar Chart</TabsTrigger>
              <TabsTrigger value="line">Line Chart</TabsTrigger>
            </TabsList>
            <TabsContent value="bar" className="h-[300px] w-full mt-4">
              <ChartContainer
                config={{
                  revenue: { label: "Revenue", color: "#4ade80" },
                  expenses: { label: "Expenses", color: "#f87171" }
                }}
              >
                {(props) => (
                  <RechartsPrimitive.BarChart data={revenueData} {...props}>
                    <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
                    <RechartsPrimitive.XAxis dataKey="month" />
                    <RechartsPrimitive.YAxis />
                    <ChartTooltip
                      content={({ active, payload }) => (
                        <ChartTooltipContent
                          active={active}
                          payload={payload}
                        />
                      )}
                    />
                    <RechartsPrimitive.Bar dataKey="revenue" fill="var(--color-revenue)" />
                    <RechartsPrimitive.Bar dataKey="expenses" fill="var(--color-expenses)" />
                  </RechartsPrimitive.BarChart>
                )}
              </ChartContainer>
            </TabsContent>
            <TabsContent value="line" className="h-[300px] w-full mt-4">
              <ChartContainer
                config={{
                  revenue: { label: "Revenue", color: "#4ade80" },
                  expenses: { label: "Expenses", color: "#f87171" }
                }}
              >
                {(props) => (
                  <RechartsPrimitive.LineChart data={revenueData} {...props}>
                    <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
                    <RechartsPrimitive.XAxis dataKey="month" />
                    <RechartsPrimitive.YAxis />
                    <ChartTooltip
                      content={({ active, payload }) => (
                        <ChartTooltipContent
                          active={active}
                          payload={payload}
                        />
                      )}
                    />
                    <RechartsPrimitive.Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="var(--color-revenue)"
                      strokeWidth={2}
                    />
                    <RechartsPrimitive.Line 
                      type="monotone" 
                      dataKey="expenses" 
                      stroke="var(--color-expenses)"
                      strokeWidth={2}
                    />
                  </RechartsPrimitive.LineChart>
                )}
              </ChartContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      {/* Expense Breakdown and Balance History */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Expense Breakdown */}
        <Card className="border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
            <CardDescription>Current Month</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer
              config={{
                Marketing: { color: "#60a5fa" },
                Operations: { color: "#c084fc" },
                Sales: { color: "#4ade80" },
                Development: { color: "#f87171" },
                Admin: { color: "#fbbf24" }
              }}
            >
              {(props) => (
                <RechartsPrimitive.PieChart {...props}>
                  <RechartsPrimitive.Pie
                    data={expenseCategories}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                  >
                    {expenseCategories.map((entry, index) => (
                      <RechartsPrimitive.Cell 
                        key={`cell-${index}`} 
                        fill={`var(--color-${entry.name})`} 
                      />
                    ))}
                  </RechartsPrimitive.Pie>
                  <ChartTooltip
                    content={({ active, payload }) => (
                      <ChartTooltipContent
                        active={active}
                        payload={payload}
                        hideIndicator={false}
                      />
                    )}
                  />
                </RechartsPrimitive.PieChart>
              )}
            </ChartContainer>
          </CardContent>
        </Card>
        
        {/* Balance History */}
        <Card className="border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
          <CardHeader>
            <CardTitle>Account Balance</CardTitle>
            <CardDescription>Last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer
              config={{
                balance: { label: "Balance", color: "#60a5fa" }
              }}
            >
              {(props) => (
                <RechartsPrimitive.AreaChart data={balanceHistory} {...props}>
                  <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
                  <RechartsPrimitive.XAxis dataKey="date" />
                  <RechartsPrimitive.YAxis />
                  <ChartTooltip
                    content={({ active, payload }) => (
                      <ChartTooltipContent
                        active={active}
                        payload={payload}
                      />
                    )}
                  />
                  <RechartsPrimitive.Area 
                    type="monotone" 
                    dataKey="balance" 
                    stroke="var(--color-balance)" 
                    fill="var(--color-balance)" 
                    fillOpacity={0.3} 
                  />
                </RechartsPrimitive.AreaChart>
              )}
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
