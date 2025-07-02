import { Play, Pause, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Track {
  id: string;
  name: string;
  artist: string;
  album: string;
  duration: string;
  artwork: string;
  preview?: string;
}

interface TrackListProps {
  tracks: Track[];
  currentTrack: Track | null;
  isPlaying: boolean;
  onTrackSelect: (track: Track) => void;
  onPlayPause: () => void;
}

const TrackList = ({ tracks, currentTrack, isPlaying, onTrackSelect, onPlayPause }: TrackListProps) => {
  const formatDuration = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-1">
      {tracks.map((track, index) => {
        const isCurrentTrack = currentTrack?.id === track.id;
        const showPlayingIcon = isCurrentTrack && isPlaying;
        
        return (
          <div
            key={track.id}
            className="group flex items-center space-x-4 p-3 rounded-md hover:bg-muted cursor-pointer"
            onClick={() => onTrackSelect(track)}
          >
            {/* Track Number / Play Button */}
            <div className="w-6 flex items-center justify-center">
              {showPlayingIcon ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlayPause();
                  }}
                  className="p-0 h-6 w-6 text-primary"
                >
                  <Pause className="h-4 w-4" />
                </Button>
              ) : (
                <>
                  <span className={`text-sm ${isCurrentTrack ? "text-primary" : "text-muted-foreground"} group-hover:hidden`}>
                    {index + 1}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isCurrentTrack) {
                        onPlayPause();
                      } else {
                        onTrackSelect(track);
                      }
                    }}
                    className="p-0 h-6 w-6 hidden group-hover:flex items-center justify-center"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>

            {/* Track Info */}
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <img 
                src={track.artwork} 
                alt={track.name}
                className="w-10 h-10 rounded"
              />
              <div className="min-w-0 flex-1">
                <p className={`font-medium truncate ${isCurrentTrack ? "text-primary" : "text-foreground"}`}>
                  {track.name}
                </p>
                <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
              </div>
            </div>

            {/* Album */}
            <div className="hidden md:block min-w-0 flex-1">
              <p className="text-sm text-muted-foreground truncate">{track.album}</p>
            </div>

            {/* Duration */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                {track.duration}
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="opacity-0 group-hover:opacity-100 p-1 h-8 w-8"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrackList;