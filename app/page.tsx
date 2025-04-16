"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Calendar,
  Users,
  Phone,
  Mail,
  ChevronRight,
  Star,
  Menu,
  Heart,
  MapPinned,
  Clock,
  Award,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedCard } from "@/components/animated-card";
import { FloatingElement } from "@/components/floating-element";
import { TextReveal } from "@/components/text-reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { CursorHighlight } from "@/components/cursor-highlight";
import { ParticleBackground } from "@/components/particle-background";
import { AnimatedIcon } from "@/components/animated-icon";
import { ScrollProgress } from "@/components/scroll-progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { all } from "@/components/Content/destination-card-all.js";
import { DestinationCard } from "@/components/Destination-cards-all";
import { hillstations } from "@/components/Content/destination-card-hills.js";
import { religious } from "@/components/Content/destination-card-religious.js";
import { packages } from "@/components/Content/packages.js";
import { PackagesCard } from "@/components/Packages-card";
import { TestimonialCard } from "@/components/testimonials-card";
import { testimonials } from "@/components/Content/testimonials";
import Logo from "../public/logo.svg";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [readMore, setReadMore] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // References for parallax effects
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Simulate loading delay for entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Animated stats
  const stats = [
    { icon: Heart, label: "Happy Travelers", value: 5000, suffix: "+" },
    { icon: MapPinned, label: "Destinations", value: 120, suffix: "+" },
    { icon: Clock, label: "Years Experience", value: 15, suffix: "" },
    { icon: Award, label: "Travel Awards", value: 25, suffix: "" },
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-hidden ">
      <ScrollProgress />
      <CursorHighlight />
      <ParticleBackground />

      {/* Initial Page Load Animation */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 bg-amber-700 z-50 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="text-white text-4xl font-bold flex items-center"
            >
              <motion.span
                className="mr-3 text-amber-300 "
                animate={{
                  rotateY: [0, 360],
                  textShadow: [
                    "0px 0px 0px rgba(0,0,0,0)",
                    "0px 0px 20px rgba(251,191,36,0.7)",
                    "0px 0px 0px rgba(0,0,0,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              >
                Kashi Ki
              </motion.span>
              <motion.span
                className="text-white"
                animate={{
                  rotateY: [0, 360],
                  textShadow: [
                    "0px 0px 0px rgba(0,0,0,0)",
                    "0px 0px 20px rgba(255,255,255,0.7)",
                    "0px 0px 0px rgba(0,0,0,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: 1,
                }}
              >
                Yatra
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
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
            className="md:hidden"
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
            className="hidden md:block"
          >
            <Button className="bg-amber-600 hover:bg-amber-700 relative overflow-hidden group">
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
        <section className="relative h-[100vh]" ref={heroRef}>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/40 z-10 backdrop-blur-xs "
            style={{ opacity: heroOpacity }}
          />
          <div className="absolute inset-0">
            <Image
              src="/bg.jpeg"
              alt="Ancient Indian Temple"
              width={1600}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="container px-4 md:px-6 text-center">
              <motion.div
                className="inline-block rounded-full bg-amber-100/20 px-3 py-1 text-base text-white backdrop-blur-sm mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(254, 243, 199, 0.3)",
                }}
              >
                Discover the Soul of India
              </motion.div>
              <motion.div
                className="flex justify-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image
                  src={"/logoyellow.svg"}
                  alt="kashi Ki yatra "
                  width={600}
                  height={200}
                  className="rounded-full mb-6"
                />
              </motion.div>
              <TextReveal
                text="Explore  your  Dream  Yatra  with Us"
                className="text-3xl font-bold sm:text-4xl md:text-5xl/tight text-white mb-6"
                delay={0.5}
              />

              {/* <motion.span
                className="text-5xl font-bold  sm:text-4xl md:text-[5rem]/tight text-amber-300 block mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{
                  textShadow: "0px 0px 20px rgba(251,191,36,0.7)",
                  letterSpacing: "1px",
                }}
              >
                काशी की यात्रा
              </motion.span> */}
              <motion.p
                className="mx-auto max-w-[700px] text-white/90 md:text-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Embark on a spiritual journey through ancient temples and serene
                hill stations. Connect with India's rich cultural heritage and
                natural wonders.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden rounded-md"
                >
                  <motion.span
                    className="absolute inset-0 bg-amber-500 z-0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <Button className="bg-amber-400 hover:bg-amber-600 text-black relative z-10">
                    Explore our packages
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Button
                    variant="outline"
                    className="border-white text-black hover:bg-white/80 relative"
                  >
                    <motion.span
                      className="absolute inset-0 bg-white/10 rounded-md z-0"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Famous Destinations</span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          {/* <div className="absolute bottom-0 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="text-background fill-current">
                <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
              </svg>
            </div> */}

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex items-center flex-col gap-4 text-white text-xs
             cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.div
              className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(255,255,255,0.3)",
                  "0px 0px 20px rgba(255,255,255,0.6)",
                  "0px 0px 0px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-12 bg-white relative z-10">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center text-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AnimatedIcon
                    icon={stat.icon}
                    className="w-12 h-12 mb-3 text-amber-600 bg-amber-100/50 p-2 rounded-full flex items-center justify-center"
                    delay={index * 0.1}
                  />
                  <div className="flex items-center">
                    <AnimatedCounter
                      from={0}
                      to={stat.value}
                      className="text-3xl font-bold text-amber-800"
                      delay={0.2 + index * 0.1}
                    />
                    <span className="text-3xl font-bold text-amber-800">{stat.suffix}</span>
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Featured Destinations */}
        <section id="destinations" className="py-12 md:py-24 relative">
          {/* <div
           
            className="absolute inset-0"
          >
             <Image
              src="/featureBg.jpg"
              alt="Ancient Indian Temple"
              width={1600}
              height={600}
              className="w-full h-full object-cover opacity-20"
              priority
            /> 
           
          </div> */}
          <motion.div>
            <div className="container px-4 md:px-6">
              <AnimatedSection>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <motion.div
                    className="inline-block rounded-lg  bg-amber-500/10 px-3 py-1 text-sm text-amber-800"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#fcd34d",
                      boxShadow: "0px 0px 15px rgba(251,191,36,1)",
                    }}
                  >
                    Featured Destinations
                  </motion.div>
                  <TextReveal
                    text="Sacred  Journeys  Await"
                    className="text-3xl font-bold  sm:text-4xl md:text-5xl text-amber-900"
                    delay={0.2}
                  />
                  <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                    Discover the most revered pilgrimage sites across India.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Tabs
                  defaultValue="all"
                  className="mt-12"
                  value={activeTab}
                  onValueChange={setActiveTab}
                >
                  <div className="flex justify-center">
                    <TabsList className="bg-amber-100">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        <TabsTrigger
                          value="all"
                          className="data-[state=active]:bg-amber-600 data-[state=active]:text-white relative z-10"
                          onClick={() => setActiveTab("all")}
                        >
                          <motion.span
                            className="absolute inset-0 bg-amber-600 rounded-md z-0"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: activeTab === "all" ? 1 : 0,
                              opacity: activeTab === "all" ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="relative z-10">All</span>
                        </TabsTrigger>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        <TabsTrigger
                          value="religious"
                          className="data-[state=active]:bg-amber-600 data-[state=active]:text-white relative z-10"
                          onClick={() => setActiveTab("religious")}
                        >
                          <motion.span
                            className="absolute inset-0 bg-amber-600 rounded-md z-0"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: activeTab === "religious" ? 1 : 0,
                              opacity: activeTab === "religious" ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="relative z-10">Religious</span>
                        </TabsTrigger>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        <TabsTrigger
                          value="hillstations"
                          className="data-[state=active]:bg-amber-600 data-[state=active]:text-white relative z-10"
                          onClick={() => setActiveTab("hillstations")}
                        >
                          <motion.span
                            className="absolute inset-0 bg-amber-600 rounded-md z-0"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: activeTab === "hillstations" ? 1 : 0,
                              opacity: activeTab === "hillstations" ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="relative z-10">Hill Stations</span>
                        </TabsTrigger>
                      </motion.div>
                    </TabsList>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TabsContent value="all" className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {all
                            .slice(0, readMore ? all.length : 3)
                            .map((place) => (
                              <DestinationCard key={place.id} {...place} />
                            ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="religious" className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {religious.map((place) => (
                            <DestinationCard key={place.id} {...place} />
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="hillstations" className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {hillstations.map((place) => (
                            <DestinationCard key={place.id} {...place} />
                          ))}
                        </div>
                      </TabsContent>
                    </motion.div>
                  </AnimatePresence>
                </Tabs>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex justify-center mt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden rounded-md"
                  >
                    <motion.span
                      className="absolute inset-0 bg-amber-500 z-0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <Button
                      className={`bg-amber-600 hover:bg-amber-700 relative z-10 ${
                        readMore ? "hidden" : "visible"
                      }`}
                      onClick={() => setReadMore(!readMore)}
                    >
                      View All Destinations
                    </Button>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </motion.div>
        </section>

        {/* Popular Packages */}
        {/* <section id="packages" className="py-12 md:py-24  relative">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <motion.div
                  className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#fcd34d",
                    boxShadow: "0px 0px 15px rgba(251,191,36,0.3)",
                  }}
                >
                  Popular Packages
                </motion.div>
                <TextReveal
                  text="Curated Spiritual Journeys"
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900"
                  delay={0.2}
                />
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                  Embark on carefully crafted journeys that combine spiritual
                  enlightenment with natural beauty.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {packages.map((pkg) => (
                <PackagesCard key={pkg.id} {...pkg} />
              ))}
            </div>

            <AnimatedSection delay={0.4}>
              <div className="flex justify-center mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Button
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-50 relative"
                  >
                    <motion.span
                      className="absolute inset-0 bg-amber-50 rounded-md z-0"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">View All Packages</span>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section> */}

        {/* Testimonials */}
        <section className="py-12 md:py-14 bg-amber-500/10 relative">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <motion.div
                  className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#fcd34d",
                    boxShadow: "0px 0px 15px rgba(251,191,36,0.3)",
                  }}
                >
                  Testimonials
                </motion.div>
                <TextReveal
                  text="Spiritual Journeys That Transform"
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900"
                  delay={0.2}
                />
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                  Hear from pilgrims who found peace, connection, and
                  transformation through our sacred journeys.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Testimonial 1 */}
              {testimonials.map((t, index) => (
                <TestimonialCard key={index} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-24 bg-amber-800 text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-repeat opacity-5"
            animate={{
              backgroundPosition: ["0px 0px", "100px 100px"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <AnimatedSection>
                <TextReveal
                  text="Begin Your Sacred Journey Today"
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                  delay={0.1}
                />
                <p className="mt-4 text-amber-100 md:text-xl/relaxed max-w-[600px]">
                  Let us guide you through the spiritual heart of India. Our
                  expert team will create a personalized itinerary that combines
                  sacred sites, cultural experiences, and natural beauty.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden rounded-md"
                  >
                    <motion.span
                      className="absolute inset-0 bg-amber-100 z-0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <Button className="bg-white text-amber-800 hover:bg-amber-100 relative z-10">
                      Plan Your Journey
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <Button className=" text-black bg-amber-500  hover:bg-amber-600 relative">
                      <motion.span
                        className="absolute inset-0 bg-amber-700 rounded-md z-0"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">Contact Our Experts</span>
                    </Button>
                  </motion.div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/Temple_at_Sunset.jpg"
                    alt="Temple at Sunset"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="bg-amber-600 text-white p-2 rounded"
                        animate={{
                          rotate: [0, 10, 0, -10, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                        }}
                      >
                        <Calendar className="h-6 w-6" />
                      </motion.div>
                      <div>
                        <p className="text-amber-900 font-bold">Book Early</p>
                        <p className="text-gray-600 text-sm">Save up to 15%</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-10">
              <AnimatedSection>
                <motion.div
                  className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800 mb-4"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#fcd34d",
                    boxShadow: "0px 0px 15px rgba(251,191,36,0.3)",
                  }}
                >
                  Get in Touch
                </motion.div>
                <TextReveal
                  text="Have Questions About Your Spiritual Journey?"
                  className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900 mb-4"
                  delay={0.1}
                />
                <p className="text-gray-600 mb-8 max-w-[500px]">
                  Our travel experts are ready to assist you in planning your
                  perfect pilgrimage or hill station retreat. Reach out to us
                  for personalized assistance.
                </p>

                <div className="space-y-4 mb-8">
                  <motion.div
                    className="flex items-center gap-3 p-2 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(254, 243, 199, 0.2)",
                    }}
                  >
                    <motion.div
                      className="bg-amber-100 p-3 rounded-full"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#fcd34d",
                      }}
                    >
                      <Phone className="h-5 w-5 text-amber-800" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-500">Call Us</p>
                      <p className="font-medium">+91 9870299230</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(254, 243, 199, 0.2)",
                    }}
                    className="p-2 rounded-lg flex items-center gap-3"
                  >
                    <motion.div
                      className="bg-amber-100 p-3 rounded-full"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#fcd34d",
                      }}
                    >
                      <Mail className="h-5 w-5 text-amber-800" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-500">Email Us</p>
                      <p className="font-medium">info@kashikiyatra.com</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{
                      x: 5,
                      backgroundColor: "rgba(254, 243, 199, 0.2)",
                    }}
                    className="p-2 rounded-lg flex items-center gap-3"
                  >
                    <motion.div
                      className="bg-amber-100 p-3 rounded-full"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#fcd34d",
                      }}
                    >
                      <MapPin className="h-5 w-5 text-amber-800" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-500">Visit Us</p>
                      <p className="font-medium">
                        B-47/1 Kabir Nagar, Durgakund, Varanasi (Near By Panacea
                        Hospital )
                      </p>
                      <p className="font-medium">
                        Antriksh Golf City, Sector 105, Noida, Uttar Pradesh,
                        201013
                      </p>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <AnimatedCard>
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Label htmlFor="name">Full Name</Label>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Input
                              id="name"
                              placeholder="Your name"
                              className="border-amber-200 transition-all focus:border-amber-500 focus:ring-amber-500"
                            />
                          </motion.div>
                        </motion.div>
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Label htmlFor="email">Email</Label>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Input
                              id="email"
                              type="email"
                              placeholder="Your email"
                              className="border-amber-200 transition-all focus:border-amber-500 focus:ring-amber-500"
                            />
                          </motion.div>
                        </motion.div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <Label htmlFor="phone">Phone</Label>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Input
                              id="phone"
                              placeholder="Your phone number"
                              className="border-amber-200 transition-all focus:border-amber-500 focus:ring-amber-500"
                            />
                          </motion.div>
                        </motion.div>
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <Label htmlFor="destination">
                            Preferred Destination
                          </Label>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Input
                              id="destination"
                              placeholder="Where do you want to go?"
                              className="border-amber-200 transition-all focus:border-amber-500 focus:ring-amber-500"
                            />
                          </motion.div>
                        </motion.div>
                      </div>
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        <Label htmlFor="message">Your Message</Label>
                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <textarea
                            id="message"
                            rows={4}
                            className="w-full min-h-[120px] rounded-md border border-amber-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:border-amber-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                            placeholder="Tell us about your travel plans and requirements..."
                          ></textarea>
                        </motion.div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        className="relative overflow-hidden rounded-md"
                      >
                        <motion.span
                          className="absolute inset-0 bg-amber-500 z-0"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 relative z-10">
                          Send Message
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </AnimatedCard>
              </AnimatedSection>
            </div>
          </div>
        </section>
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
