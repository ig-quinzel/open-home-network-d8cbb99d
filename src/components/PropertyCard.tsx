import { Heart, Star } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  host: string;
  dates: string;
  price: number;
  rating: number;
  reviews: number;
}

const PropertyCard = ({ 
  id, 
  image, 
  title, 
  location, 
  host, 
  dates, 
  price, 
  rating, 
  reviews 
}: PropertyCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl mb-3">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
        />
        <button 
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-3 right-3 p-2 hover:scale-110 transition-smooth"
        >
          <Heart 
            className={`h-5 w-5 ${isFavorited ? 'fill-primary text-primary' : 'fill-background/70 text-background stroke-2'}`}
          />
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground truncate">{location}</h3>
          <div className="flex items-center space-x-1 flex-shrink-0">
            <Star className="h-4 w-4 fill-foreground text-foreground" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviews})</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm">{host}</p>
        <p className="text-muted-foreground text-sm">{dates}</p>
        
        <div className="pt-1">
          <span className="font-semibold text-foreground">${price}</span>
          <span className="text-muted-foreground"> night</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;