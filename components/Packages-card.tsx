import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { AnimatedCard } from "@/components/animated-card";

interface PackagesCardProps {
  title: string;
  location: string;
  tag?: string;
  rating?: string;
  price: string;
  image?: string;
  description: string;
  highlight?: string;
  delay: number;
  gradient?: string;
  alt?: string;
  days: string;
  groupSize: string;
  originalPrice?: string;
}

export const PackagesCard = ({
  title,
  location,
  tag,
  rating,
  price,
  image = "/placeholder.svg?height=300&width=500",
  description,
  highlight,
  delay,
  gradient = "from-red-900/70",
  alt = "Tour image",
  days,
  groupSize,
  originalPrice,
}: PackagesCardProps) => {
  return (
    <AnimatedCard>
      {/* Image & Overlay */}
      <div className="relative overflow-hidden group">
        <Image
          src={image}
          alt={alt}
          width={500}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t ${gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />

        {tag && (
          <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded text-xs">
            {tag}
          </div>
        )}

        {highlight && (
          <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm font-medium">{highlight}</p>
          </div>
        )}
      </div>

      {/* Card Content */}
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-amber-900 mb-2">{title}</h3>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{days}</span>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            <span>Group Size: {groupSize}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-amber-800 font-bold text-xl">{price}</span>
            {originalPrice && (
              <span className="text-gray-500 text-sm ml-2 line-through">
                {originalPrice}
              </span>
            )}
          </div>

          <div className="relative overflow-hidden rounded-md">
            <span className="absolute inset-0 bg-amber-500 z-0" />
            <Button className="bg-amber-600 hover:bg-amber-700 relative z-10">
              Book Now
            </Button>
          </div>
        </div>
      </CardContent>
    </AnimatedCard>
  );
};
