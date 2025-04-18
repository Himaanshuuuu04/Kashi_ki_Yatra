"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu } from "lucide-react"; // Added Menu
// Removed unused import for ChevronRight
import { ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ParticleBackground } from "@/components/particle-background";
import { packages } from "@/components/Content/packages/packages"; // Import packages data
import { Input } from "@/components/ui/input"; // Import Input component
import { all } from "@/components/Content/home/destination-card-all";
import { DestinationCard } from "@/components/Destination-cards-all"; // Import DestinationCard component
import Link from "next/link";
export default function PackagesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <ParticleBackground />

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className=" fixed top-0 z-50 w-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center bg-black/90 justify-between px-4">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <motion.div
              animate={{
                rotate: [0, 10, 0, -10, 0],
                borderColor: [
                  "#f59e0b",
                  "#d97706",
                  "#b45309",
                  "#d97706",
                  "#f59e0b",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              <Image
                src="/logo.png"
                alt="Bharat Yatra logo"
                width={40}
                height={40}
                className="rounded-full "
              />
            </motion.div>
            <motion.span
              className="text-xl font-bold text-amber-700"
              animate={{
                textShadow: [
                  "0px 0px 0px rgba(0,0,0,0)",
                  "0px 0px 5px rgba(217,119,6,0.2)",
                  "0px 0px 0px rgba(0,0,0,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              <Image
                src="/logoimage1.png"
                alt="Kashi ki yatra logo"
                width={140}
                height={50}
                className="rounded-full text-amber-700"
              />
            </motion.span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8 text-white">
            {[
              "Religious Tours",
              "Destinations",
              "Packages",
              "Cabs",
              "Hotel & Food",
              "About Us",
              "Contact",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.0 + index * 0.1 }}
                whileHover={{
                  scale: 1.2,
                  color: "#d97706",
                  textShadow: "0px 0px 8px rgba(217,119,6,0.3)",
                }}
              >
                <Link
                  href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="text-md font-medium transition-all "
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden bg-amber-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(217,119,6,0.5)",
            }}
            className="hidden md:block mr-4 "
          >
            <Button className="bg-amber-600 hover:bg-amber-700 relative overflow-hidden group ">
              <motion.span
                className="absolute inset-0 bg-amber-500 z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Book Now</span>
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 border-b"
          >
            <div className="container py-4 flex flex-col space-y-3 px-4 text-white mt-5">
              {[
                "Religious Tours",
                "Destinations",
                "Packages",
                "Cabs",
                "Hotel & Food",
                "About Us",
                "Contact",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-sm font-medium hover:text-amber-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Button className="w-full bg-amber-600 hover:bg-amber-700 mt-2 relative overflow-hidden group">
                  <motion.span
                    className="absolute inset-0 bg-amber-500 z-0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Book Now</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        {/* <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-800/50 z-10" />
          <Image
            src="/bg.jpeg"
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
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/tight text-white mb-6 mt-12"
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
          <div className="absolute bottom-0 w-full"></div>
        </section> */}

        {/* Packages List */}
        <section className="py-12 md:py-24 bg-amber-500/10">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {all.map((place) => (
              <Link href={`/packages/${place.id}`} key={place.id} >
                <DestinationCard  {...place} delay={0.1} />
                </Link>
                
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        {/* <section className="py-12 bg-amber-50">
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
        </section> */}
      </main>

      {/* Footer */}
      <motion.footer
        className="bg-amber-900 text-amber-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedSection>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                      borderColor: [
                        "#f59e0b",
                        "#d97706",
                        "#b45309",
                        "#d97706",
                        "#f59e0b",
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  >
                    <Image
                      src="/logo.png"
                      alt="Bharat Yatra logo"
                      width={40}
                      height={40}
                      className="rounded-full "
                    />
                  </motion.div>
                  <motion.span
                    className="text-xl font-bold text-white"
                    animate={{
                      textShadow: [
                        "0px 0px 0px rgba(0,0,0,0)",
                        "0px 0px 5px rgba(254,243,199,0.5)",
                        "0px 0px 0px rgba(0,0,0,0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  >
                    Kashi Ki Yatra
                  </motion.span>
                </motion.div>
                <p className="text-amber-200">
                  Connecting souls to India's sacred heritage through
                  transformative journeys.
                </p>
                <div className="flex gap-4">
                  {["Facebook", "Instagram", "Twitter"].map((social, index) => (
                    <motion.div
                      key={social}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href="#"
                        className="text-amber-200 hover:text-white"
                      >
                        <span className="sr-only">{social}</span>
                        {social === "Facebook" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        )}
                        {social === "Instagram" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                          </svg>
                        )}
                        {social === "Twitter" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  "Home",
                  "About Us",
                  "Destinations",
                  "Packages",
                  "Contact",
                ].map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href="#"
                      className="text-amber-200 hover:text-white group flex items-center"
                    >
                      <motion.span className="w-0 h-0.5 bg-white mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300" />
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h3 className="text-lg font-bold mb-4 text-white">
                Popular Destinations
              </h3>
              <ul className="space-y-2">
                {[
                  "Varanasi – Ayodhya – Prayagraj - Chitrkoot",
                  "4 Dham yatra",
                  "Kullu - Manali",
                  "Vaishno Devi",
                  "Chopta - Tungnath",
                ].map((destination, index) => (
                  <motion.li
                    key={destination}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href="#"
                      className="text-amber-200 hover:text-white group flex items-center"
                    >
                      <motion.span className="w-0 h-0.5 bg-white mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300" />
                      {destination}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
              <p className="text-amber-200 mb-4">
                Subscribe to receive updates on new packages and spiritual
                journeys.
              </p>
              <form className="space-y-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-amber-800 border-amber-700 text-white placeholder:text-amber-300 transition-all focus:border-amber-500"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden rounded-md"
                >
                  <motion.span
                    className="absolute inset-0 bg-amber-400 z-0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 relative z-10">
                    Subscribe
                  </Button>
                </motion.div>
              </form>
            </AnimatedSection>
          </div>

          <motion.div
            className="border-t border-amber-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-amber-300 text-sm">
              &copy; {new Date().getFullYear()} Kashi Ki Yatra. All rights
              reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
                (policy, index) => (
                  <motion.div key={policy} whileHover={{ y: -2 }}>
                    <Link
                      href="#"
                      className="text-amber-300 hover:text-white text-sm"
                    >
                      {policy}
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
