import { Search, Menu, UserCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-subtle-border bg-background">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-primary">airbnb</h1>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
          Stays
        </a>
        <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
          Experiences
        </a>
        <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
          Airbnb your home
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
          <Globe className="h-4 w-4" />
          <span>EN</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex items-center space-x-2 border border-border rounded-full px-3 py-2">
          <Menu className="h-4 w-4" />
          <UserCircle className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;