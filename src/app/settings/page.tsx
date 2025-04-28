"use client"

import React from "react"
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function Settings() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-dashed border-black">Settings</h1>
      
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account">
          <Card className="border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" className="border-2 border-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="john.doe@example.com" className="border-2 border-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" defaultValue="********" className="border-2 border-black" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card className="border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive notifications via email</p>
                </div>
                <Switch id="email-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-gray-500">Receive notifications on your device</p>
                </div>
                <Switch id="push-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Emails</p>
                  <p className="text-sm text-gray-500">Receive marketing and promotional emails</p>
                </div>
                <Switch id="marketing-emails" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance">
          <Card className="border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize how the application looks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-gray-500">Switch between light and dark mode</p>
                </div>
                <Switch id="dark-mode" />
              </div>
              <div className="space-y-2">
                <Label>Font Size</Label>
                <div className="flex gap-2">
                  <Button variant="outline" className="border-2 border-black flex-1">Small</Button>
                  <Button variant="outline" className="border-2 border-black flex-1 bg-gray-100">Medium</Button>
                  <Button variant="outline" className="border-2 border-black flex-1">Large</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Color Theme</Label>
                <div className="flex gap-2">
                  <Button variant="outline" className="border-2 border-black flex-1 bg-gray-100">Default</Button>
                  <Button variant="outline" className="border-2 border-black flex-1">Blue</Button>
                  <Button variant="outline" className="border-2 border-black flex-1">Green</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}