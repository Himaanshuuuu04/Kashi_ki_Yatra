// components/TestimonialCard.tsx
import Image from "next/image";
import { Star } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { AnimatedCard } from "@/components/animated-card";

type TestimonialProps = {
  name: string;
  location: string;
  image: string;
  testimonial: string;
  delay?: number;
  rating?: number;
};

export const TestimonialCard = ({
  name,
  location,
  image,
  testimonial,
  delay = 0.1,
  rating = 5,
}: TestimonialProps) => {
  return (
    <AnimatedCard>
      <CardContent className="p-6 h-full">
        <div className="flex flex-col gap-4">
          {/* Profile Info */}
          <div className="flex gap-4 items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 shadow-md overflow-hidden border-2 border-amber-300">
              <Image
                src={image}
                alt={name}
                width={60}
                height={60}
                className="rounded-full object-cover h-full w-full"
              />
            </div>
            <div>
              <h4 className="font-bold">{name}</h4>
              <p className="text-sm text-gray-500">{location}</p>
            </div>
          </div>

          {/* Star Ratings */}
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <Star
                  className={`h-4 w-4 ${
                    i < rating
                      ? "fill-amber-500 text-amber-500"
                      : "text-gray-300"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-600 italic">"{testimonial}"</p>
        </div>
      </CardContent>
    </AnimatedCard>
  );
};
