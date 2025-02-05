import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, MessageCircle } from "lucide-react";

export default function KaraokeApp() {
  const [category, setCategory] = useState("adults");
  const categories = ["Recommended", "Popular", "Free Trending Now", "Sing with the Artist", "Pop", "R&B", "Afrikaans", "African music"];
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <h1 className="text-xl font-bold">Karaoke App</h1>
        <MessageCircle className="w-6 h-6 cursor-pointer" />
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-800 p-2 rounded-lg mb-4">
        <Search className="w-5 h-5 text-gray-400" />
        <Input placeholder="Search for songs..." className="bg-transparent border-none focus:outline-none text-white ml-2" />
      </div>

      {/* Category Selector */}
      <Tabs defaultValue="adults" onValueChange={setCategory}>
        <TabsList className="grid grid-cols-2 bg-gray-700 p-1 rounded-lg">
          <TabsTrigger value="adults">Adults</TabsTrigger>
          <TabsTrigger value="kids">Kids</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Song Categories */}
      <TabsContent value={category}>
        <div className="grid gap-4 mt-4">
          {categories.map((cat, index) => (
            <Card key={index} className="bg-gray-800 p-4 rounded-lg cursor-pointer">
              <CardContent>{cat}</CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-2 flex justify-around">
        <Button variant="ghost">Feed</Button>
        <Button variant="ghost">Live</Button>
        <Button variant="ghost">Explore</Button>
        <Button variant="ghost">Profile</Button>
      </div>
    </div>
  );
}
