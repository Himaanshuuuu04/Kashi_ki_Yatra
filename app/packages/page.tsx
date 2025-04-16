"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ParticleBackground } from "@/components/particle-background";
import { packages } from "@/components/Content/packages/packages"; // Import packages data

export default function PackagesPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <ParticleBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Bharat Yatra logo"
                width={40}
                height={40}
                className="rounded-full border-2 border-amber-500"
              />
            </motion.div>
            <span className="text-xl font-bold text-amber-700">
              भारत यात्रा
            </span>
          </Link>

          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4 rotate-180" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-800/50 z-10" />
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Sacred Journeys"
            width={1600}
            height={600}
            className="w-full h-[40vh] object-cover"
            priority
          />
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="container px-4 md:px-6 text-center">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/tight text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Spiritual Journeys Across India
              </motion.h1>
              <motion.p
                className="mx-auto max-w-[700px] text-white/90 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Discover our carefully curated packages to experience the divine
                essence of India
              </motion.p>
            </div>
          </motion.div>
          <div className="absolute bottom-0 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 100"
              className="text-background fill-current"
            >
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
            </svg>
          </div>
        </section>

        {/* Packages List */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <motion.div
                  className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800"
                  whileHover={{ scale: 1.05, backgroundColor: "#fcd34d" }}
                >
                  Our Offerings
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">
                  Choose Your Spiritual Journey
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                  Embark on a transformative experience through the sacred lands
                  of India with our carefully crafted packages.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col">
                    <div className="relative">
                      <Image
                        src={
                          pkg.images?.[0] ||
                          "/placeholder.svg?height=300&width=500"
                        }
                        alt={pkg.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-amber-600 text-white px-2 py-1 rounded text-xs">
                        {pkg.duration}
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-amber-900 mb-2">
                        {pkg.title}
                      </h3>
                      <h4 className="text-lg text-amber-700 mb-3">
                        {pkg.subtitle}
                      </h4>
                      <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                        {pkg.description}
                      </p>
                      <div className="mt-auto">
                        <Link href={`/packages/${pkg.id}`}>
                          <Button className="w-full bg-amber-600 hover:bg-amber-700">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-amber-900 mb-4">
                  Can't find what you're looking for?
                </h2>
                <p className="text-gray-600 mb-6">
                  We offer customized spiritual journeys tailored to your
                  preferences and requirements.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Contact Us for Custom Packages
                  </Button>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Bharat Yatra logo"
                width={40}
                height={40}
                className="rounded-full border-2 border-amber-500"
              />
              <span className="text-xl font-bold text-white">भारत यात्रा</span>
            </div>
            <div className="flex gap-4">
              <Link href="/" className="text-amber-200 hover:text-white">
                Home
              </Link>
              <Link href="#" className="text-amber-200 hover:text-white">
                Packages
              </Link>
              <Link href="#" className="text-amber-200 hover:text-white">
                About
              </Link>
              <Link href="#" className="text-amber-200 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-6 pt-6 text-center">
            <p className="text-amber-300 text-sm">
              &copy; {new Date().getFullYear()} भारत यात्रा. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
