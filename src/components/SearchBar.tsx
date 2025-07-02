import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="bg-background rounded-full shadow-card border border-border p-2 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="flex flex-col px-4 py-3 rounded-full hover:bg-muted transition-smooth cursor-pointer">
          <label className="text-xs font-semibold text-foreground">Where</label>
          <input 
            className="text-sm text-muted-foreground bg-transparent border-none outline-none placeholder:text-muted-foreground"
            placeholder="Search destinations"
          />
        </div>
        
        <div className="flex flex-col px-4 py-3 rounded-full hover:bg-muted transition-smooth cursor-pointer">
          <label className="text-xs font-semibold text-foreground">Check in</label>
          <input 
            className="text-sm text-muted-foreground bg-transparent border-none outline-none placeholder:text-muted-foreground"
            placeholder="Add dates"
          />
        </div>
        
        <div className="flex flex-col px-4 py-3 rounded-full hover:bg-muted transition-smooth cursor-pointer">
          <label className="text-xs font-semibold text-foreground">Check out</label>
          <input 
            className="text-sm text-muted-foreground bg-transparent border-none outline-none placeholder:text-muted-foreground"
            placeholder="Add dates"
          />
        </div>
        
        <div className="flex items-center justify-between px-4 py-3 rounded-full hover:bg-muted transition-smooth cursor-pointer">
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-foreground">Who</label>
            <input 
              className="text-sm text-muted-foreground bg-transparent border-none outline-none placeholder:text-muted-foreground"
              placeholder="Add guests"
            />
          </div>
          <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 h-8 w-8 p-0">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;