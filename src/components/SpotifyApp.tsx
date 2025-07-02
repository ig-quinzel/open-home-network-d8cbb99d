import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Player from "@/components/Player";
import SearchBar from "@/components/SearchBar";
import TrackList from "@/components/TrackList";

interface Track {
  id: string;
  name: string;
  artist: string;
  album: string;
  duration: string;
  artwork: string;
  preview?: string;
}

const SpotifyApp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Search tracks using iTunes API
  const searchTracks = async (query: string) => {
    if (!query.trim()) {
      setTracks([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&entity=song&limit=50`
      );
      const data = await response.json();
      
      const formattedTracks: Track[] = data.results.map((track: any) => ({
        id: track.trackId.toString(),
        name: track.trackName,
        artist: track.artistName,
        album: track.collectionName,
        duration: formatDuration(track.trackTimeMillis),
        artwork: track.artworkUrl100.replace("100x100", "300x300"),
        preview: track.previewUrl
      }));
      
      setTracks(formattedTracks);
    } catch (error) {
      console.error("Error searching tracks:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Format duration from milliseconds to MM:SS
  const formatDuration = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Handle search with debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchTracks(searchQuery);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Load popular tracks on initial load
  useEffect(() => {
    searchTracks("top hits 2024");
  }, []);

  const handleTrackSelect = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (!currentTrack) return;
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    if (!currentTrack) return;
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
    const previousIndex = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;
    setCurrentTrack(tracks[previousIndex]);
    setIsPlaying(true);
  };

  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="p-6 bg-background border-b border-border">
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          </header>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">
                {searchQuery ? `Search results for "${searchQuery}"` : "Popular Tracks"}
              </h2>
              
              {isLoading ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Searching for tracks...</p>
                </div>
              ) : (
                <TrackList
                  tracks={tracks}
                  currentTrack={currentTrack}
                  isPlaying={isPlaying}
                  onTrackSelect={handleTrackSelect}
                  onPlayPause={handlePlayPause}
                />
              )}
            </div>
          </div>
        </main>
      </div>

      <Player
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default SpotifyApp;