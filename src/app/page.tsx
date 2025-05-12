"use client";

import { Home as HomeIcon, Search, Library, PlusSquare, Heart, Music2, PlayCircle, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarFooter,
  SidebarSeparator,
  SidebarInset,
} from '@/components/ui/sidebar';

export default function Home() {
  // Mock data for playlists
  const playlists = [
    { id: 1, name: "Liked Songs" },
    { id: 2, name: "Discover Weekly" },
    { id: 3, name: "Release Radar" },
    { id: 4, name: "Daily Mix 1" },
    { id: 5, name: "Daily Mix 2" },
    { id: 6, name: "Hot Hits" }
  ];

  // Mock data for recently played
  const recentlyPlayed = [
    { id: 1, name: "High Hopes", artist: "Panic! At The Disco", cover: "https://placehold.co/50x50/29B67D/FFF" },
    { id: 2, name: "Bad Guy", artist: "Billie Eilish", cover: "https://placehold.co/50x50/1DB954/FFF" },
    { id: 3, name: "Industry Baby", artist: "Lil Nas X", cover: "https://placehold.co/50x50/3282F6/FFF" },
    { id: 4, name: "Levitating", artist: "Dua Lipa", cover: "https://placehold.co/50x50/FF5722/FFF" },
    { id: 5, name: "Stay", artist: "The Kid LAROI & Justin Bieber", cover: "https://placehold.co/50x50/FFAA00/FFF" },
    { id: 6, name: "good 4 u", artist: "Olivia Rodrigo", cover: "https://placehold.co/50x50/9747FF/FFF" }
  ];

  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col bg-zinc-950 text-white">
        {/* Main layout with sidebar */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar>
            <SidebarHeader>
              <div className="px-2 py-3">
                <h1 className="text-xl font-bold">Spotify</h1>
              </div>
            </SidebarHeader>
            <SidebarContent>
              {/* Navigation Menu */}
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={true}>
                    <HomeIcon />
                    <span>Home</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Search />
                    <span>Search</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Library />
                    <span>Your Library</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              
              <SidebarSeparator />
              
              {/* Playlists Section */}
              <SidebarGroup>
                <div className="flex items-center justify-between">
                  <SidebarGroupLabel>Playlists</SidebarGroupLabel>
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-zinc-400 hover:text-white">
                    <PlusSquare className="h-5 w-5" />
                  </Button>
                </div>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Heart className="text-pink-600" />
                      <span>Liked Songs</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  {playlists.slice(1).map(playlist => (
                    <SidebarMenuItem key={playlist.id}>
                      <SidebarMenuButton>
                        <Music2 />
                        <span>{playlist.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          {/* Main Content */}
          <SidebarInset className="bg-gradient-to-b from-zinc-800 to-zinc-950 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-black/40">
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-black/40">
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button className="bg-white text-black hover:bg-white/90">Sign Up</Button>
                <Button variant="outline" className="border-white/30 hover:border-white">Log In</Button>
              </div>
            </div>

            {/* Recently Played Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Recently played</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {recentlyPlayed.map(item => (
                  <div 
                    key={item.id} 
                    className="bg-zinc-800/50 p-4 rounded-md hover:bg-zinc-800 transition cursor-pointer group"
                  >
                    <div className="relative mb-4">
                      <img 
                        src={item.cover} 
                        alt={item.name} 
                        className="w-full aspect-square object-cover rounded shadow-lg" 
                      />
                      <div className="absolute bottom-2 right-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <Button size="icon" className="rounded-full bg-green-500 hover:bg-green-400 h-10 w-10 shadow-lg">
                          <PlayCircle className="h-6 w-6 fill-current" />
                        </Button>
                      </div>
                    </div>
                    <h3 className="font-semibold truncate">{item.name}</h3>
                    <p className="text-sm text-zinc-400 truncate">{item.artist}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Made for You Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Made for you</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(id => (
                  <div 
                    key={id} 
                    className="bg-zinc-800/50 p-4 rounded-md hover:bg-zinc-800 transition cursor-pointer group"
                  >
                    <div className="relative mb-4">
                      <img 
                        src={`https://placehold.co/200x200/${id % 2 === 0 ? '1DB954' : '3282F6'}/FFF`} 
                        alt="Playlist cover" 
                        className="w-full aspect-square object-cover rounded shadow-lg" 
                      />
                      <div className="absolute bottom-2 right-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <Button size="icon" className="rounded-full bg-green-500 hover:bg-green-400 h-10 w-10 shadow-lg">
                          <PlayCircle className="h-6 w-6 fill-current" />
                        </Button>
                      </div>
                    </div>
                    <h3 className="font-semibold truncate">Daily Mix {id}</h3>
                    <p className="text-sm text-zinc-400 truncate">Personalized songs for you</p>
                  </div>
                ))}
              </div>
            </section>
          </SidebarInset>
        </div>

        {/* Player controls - fixed at bottom */}
        <div className="bg-zinc-900 border-t border-zinc-800 p-3 flex items-center justify-between">
          <div className="flex items-center gap-3 w-1/3">
            <img src="https://placehold.co/50x50/1DB954/FFF" alt="Current song" className="h-12 w-12 rounded" />
            <div>
              <p className="font-medium">Current Song</p>
              <p className="text-xs text-zinc-400">Artist Name</p>
            </div>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-col items-center w-1/3">
            <div className="flex items-center gap-4 mb-1">
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                <SkipBack className="h-5 w-5" />
              </Button>
              <Button size="icon" className="rounded-full bg-white text-black hover:bg-white/90 h-8 w-8">
                <PlayCircle className="h-5 w-5 fill-current" />
              </Button>
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                <SkipForward className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-2 w-full max-w-md">
              <span className="text-xs text-zinc-400">1:23</span>
              <div className="h-1 flex-1 bg-zinc-700 rounded-full">
                <div className="h-1 w-1/3 bg-white rounded-full"></div>
              </div>
              <span className="text-xs text-zinc-400">3:45</span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 w-1/3">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <Volume2 className="h-5 w-5" />
            </Button>
            <div className="h-1 w-24 bg-zinc-700 rounded-full">
              <div className="h-1 w-2/3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
