// components/TestimonialCard.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import {AnimatedCard} from "@/components/animated-card";

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
    <AnimatedCard delay={delay}>
      <CardContent className="p-6 h-full">
        <div className="flex flex-col gap-4">
          {/* Profile Info */}
          <motion.div
            className="flex gap-4 items-center"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 shadow-md overflow-hidden border-2 border-amber-300"
      
            >
              <Image
                src={image}
                alt={name}
                width={60}
                height={60}
                className="rounded-full object-cover h-full w-full"
              />
            </motion.div>
            <div>
              <h4 className="font-bold">{name}</h4>
              <p className="text-sm text-gray-500">{location}</p>
            </div>
          </motion.div>

          {/* Star Ratings */}
          <motion.div
            className="flex"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
              >
                <Star
                  className={`h-4 w-4 ${
                    i < rating
                      ? "fill-amber-500 text-amber-500"
                      : "text-gray-300"
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial Text */}
          <motion.p
            className="text-gray-600 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            "{testimonial}"
          </motion.p>
        </div>
      </CardContent>
    </AnimatedCard>
  );
};


