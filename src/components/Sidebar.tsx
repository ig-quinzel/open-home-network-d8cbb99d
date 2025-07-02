import { Home, Search, Library, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const playlists = [
    "Liked Songs",
    "My Playlist #1",
    "Chill Vibes",
    "Rock Classics",
    "Study Music",
    "Workout Hits"
  ];

  return (
    <aside className="w-64 bg-background border-r border-border flex flex-col h-full">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">Spotify</h1>
      </div>

      {/* Main Navigation */}
      <nav className="px-3 mb-6">
        <ul className="space-y-2">
          <li>
            <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-muted">
              <Home className="mr-3 h-5 w-5" />
              Home
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:bg-muted hover:text-foreground">
              <Search className="mr-3 h-5 w-5" />
              Search
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:bg-muted hover:text-foreground">
              <Library className="mr-3 h-5 w-5" />
              Your Library
            </Button>
          </li>
        </ul>
      </nav>

      {/* Create Playlist Section */}
      <div className="px-3 mb-6">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:bg-muted hover:text-foreground">
          <Plus className="mr-3 h-5 w-5" />
          Create Playlist
        </Button>
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:bg-muted hover:text-foreground mt-2">
          <Heart className="mr-3 h-5 w-5" />
          Liked Songs
        </Button>
      </div>

      {/* Playlists */}
      <div className="flex-1 px-3 overflow-y-auto">
        <div className="border-t border-border pt-4">
          <h3 className="text-sm text-muted-foreground font-medium mb-3 px-3">PLAYLISTS</h3>
          <ul className="space-y-1">
            {playlists.map((playlist, index) => (
              <li key={index}>
                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:bg-muted hover:text-foreground text-sm">
                  {playlist}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;