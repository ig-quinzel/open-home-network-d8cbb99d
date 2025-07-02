import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";
import property4 from "@/assets/property4.jpg";
import property5 from "@/assets/property5.jpg";
import property6 from "@/assets/property6.jpg";

const properties = [
  {
    id: "1",
    image: property1,
    title: "Luxury Beachfront Villa",
    location: "Malibu, California",
    host: "Hosted by Sarah",
    dates: "Dec 1-6",
    price: 450,
    rating: 4.95,
    reviews: 127
  },
  {
    id: "2",
    image: property2,
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    host: "Hosted by Mike",
    dates: "Dec 10-15",
    price: 280,
    rating: 4.89,
    reviews: 89
  },
  {
    id: "3",
    image: property3,
    title: "Urban Loft",
    location: "Brooklyn, New York",
    host: "Hosted by Jessica",
    dates: "Dec 5-10",
    price: 195,
    rating: 4.92,
    reviews: 203
  },
  {
    id: "4",
    image: property4,
    title: "Countryside Farmhouse",
    location: "Tuscany, Italy",
    host: "Hosted by Marco",
    dates: "Dec 12-19",
    price: 320,
    rating: 4.97,
    reviews: 156
  },
  {
    id: "5",
    image: property5,
    title: "Desert Modern House",
    location: "Scottsdale, Arizona",
    host: "Hosted by David",
    dates: "Dec 8-13",
    price: 380,
    rating: 4.88,
    reviews: 74
  },
  {
    id: "6",
    image: property6,
    title: "Jungle Treehouse",
    location: "Costa Rica",
    host: "Hosted by Elena",
    dates: "Dec 15-22",
    price: 220,
    rating: 4.94,
    reviews: 142
  }
];

const PropertyGrid = () => {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;