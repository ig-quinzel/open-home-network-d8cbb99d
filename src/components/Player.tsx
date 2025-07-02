import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState, useRef, useEffect } from "react";

interface Track {
  id: string;
  name: string;
  artist: string;
  artwork: string;
  preview?: string;
}

interface PlayerProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Player = ({ currentTrack, isPlaying, onPlayPause, onNext, onPrevious }: PlayerProps) => {
  const [volume, setVolume] = useState([80]);
  const [progress, setProgress] = useState([0]);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && currentTrack?.preview) {
      audioRef.current.src = currentTrack.preview;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentTrack, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <footer className="bg-muted border-t border-border px-4 py-3">
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => {
          const audio = e.currentTarget;
          setProgress([(audio.currentTime / audio.duration) * 100]);
        }}
        onLoadedMetadata={(e) => {
          setDuration(e.currentTarget.duration);
        }}
        onEnded={onNext}
      />
      
      <div className="flex items-center justify-between">
        {/* Track Info */}
        <div className="flex items-center space-x-3 min-w-0 w-1/4">
          {currentTrack && (
            <>
              <img 
                src={currentTrack.artwork} 
                alt={currentTrack.name}
                className="w-12 h-12 rounded"
              />
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{currentTrack.name}</p>
                <p className="text-xs text-muted-foreground truncate">{currentTrack.artist}</p>
              </div>
            </>
          )}
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center space-y-2 w-1/2 max-w-md">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onPrevious} className="text-muted-foreground hover:text-foreground">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button 
              onClick={onPlayPause}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-10 w-10 p-0"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={onNext} className="text-muted-foreground hover:text-foreground">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center space-x-2 w-full">
            <span className="text-xs text-muted-foreground">
              {audioRef.current ? formatTime(audioRef.current.currentTime || 0) : "0:00"}
            </span>
            <Slider
              value={progress}
              onValueChange={(value) => {
                if (audioRef.current) {
                  const newTime = (value[0] / 100) * audioRef.current.duration;
                  audioRef.current.currentTime = newTime;
                  setProgress(value);
                }
              }}
              className="flex-1"
              max={100}
              step={1}
            />
            <span className="text-xs text-muted-foreground">
              {duration ? formatTime(duration) : "0:00"}
            </span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-2 w-1/4 justify-end">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            className="w-24"
            max={100}
            step={1}
          />
        </div>
      </div>
    </footer>
  );
};

export default Player;