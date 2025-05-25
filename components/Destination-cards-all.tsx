// DestinationCard.tsx
import Image from "next/image";
import { CardContent } from "@/components/ui/card";
import { Star, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/animated-card";

export const DestinationCard = ({
  title,
  location,
  tag,
  rating,
  price,
  image,
  description,
  highlight,
  gradient,
}: any) => (
  <AnimatedCard className="w-full">
    <div className="relative overflow-hidden group">
      <Image
        src={image}
        alt={`${title} Image`}
        width={500}
        height={300}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <div
        className={`absolute top-3 right-3 ${
          tag === "Religious" ? "bg-amber-600" : "bg-green-500"
        } text-white px-2 py-1 rounded text-xs`}
      >
        {tag}
      </div>
      {highlight && (
        <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm font-medium">{highlight}</p>
        </div>
      )}
    </div>
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-amber-900">{title}</h3>
        <div className="flex items-center">
          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          <span className="text-sm ml-1">{rating}</span>
        </div>
      </div>
      <div className="flex items-center text-gray-500 text-sm mb-4">
        <MapPin className="h-4 w-4 mr-1" />
        <span>{location}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-amber-800 font-bold cursor-pointer hover:underline">
          Check Price
        </span>
        <div>
          <Button variant="link" className="text-amber-600 p-0 group">
            View Details
            <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </CardContent>
  </AnimatedCard>
);
