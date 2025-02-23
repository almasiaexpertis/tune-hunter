
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [duration, setDuration] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Discover YouTube Playlists
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Search, analyze, and manage YouTube playlists with powerful tools
        </p>
        
        <form onSubmit={handleSearch} className="glass p-6 rounded-xl space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search for playlists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border-white/10"
              />
            </div>
            <Button type="submit" className="btn-primary">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="short">Under 4 minutes</SelectItem>
                  <SelectItem value="medium">4-20 minutes</SelectItem>
                  <SelectItem value="long">Over 20 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="sortBy">Sort By</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="views">View Count</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Start Your Free Trial</h2>
          <p className="text-gray-400 mb-6">
            Try TuneHunter free for 3 days. No credit card required.
          </p>
          <Button className="btn-primary">Start Free Trial</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
