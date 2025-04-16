"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  ChevronRight,
  ChevronLeft,
  Check,
  Phone,
  CalendarIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ParticleBackground } from "@/components/particle-background";
import { getPackageById } from "@/components/Content/packages/packages";
import { packages } from "@/components/Content/packages/packages";
import { AnimatedCard } from "@/components/animated-card";
import { Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";




export default function PackageDetail() {
  const params = useParams();
  const [packageData, setPackageData] = useState<{
    id: string;
    title: string;
    subtitle: string;
    description: string;
    contact: { phone: string; email: string; website: string };
    duration: string;
    itinerary: { day: number; activities: string[]; note: string ;image:string;
    }[];
    pricing: { type: string; price: number; features: string[] }[];
    notes: string[];
    images: string[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "1",
    message: "",
  });
  const [whatsappVisible, setWhatsappVisible] = useState(true);
  const contentRef = useRef(null);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading from external source
    const fetchData = async () => {
      setLoading(true);
      try {
        // In a real app, you might fetch this from an API
        const data = getPackageById(params.id);
        setPackageData(data as any);

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800));
      } catch (error) {
        console.error("Error fetching package data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Booking request submitted! We'll contact you shortly.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "1",
      message: "",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50/30">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full mb-4"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <p className="text-amber-800 text-lg">
            Loading your spiritual journey...
          </p>
        </motion.div>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50/30">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Package Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            We couldn't find the spiritual journey you're looking for. Please
            try another package or return to our homepage.
          </p>
          <Link href="/">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
      <main className="flex-1 relative">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-800/50 z-10" />
          <Image
            src={
              packageData.images?.[0] ||
              "/placeholder.svg?height=600&width=1600"
            }
            alt={packageData.title}
            width={1600}
            height={600}
            className="w-full h-[60vh] object-cover"
            priority
          />
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="container px-4 md:px-6 text-center">
              <motion.div
                className="inline-block rounded-full bg-amber-100/20 px-3 py-1 text-sm text-white backdrop-blur-sm mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {packageData.duration}
              </motion.div>
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/tight text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {packageData.title}
              </motion.h1>
              <motion.span
                className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/tight text-amber-300 block mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {packageData.subtitle}
              </motion.span>
              <motion.p
                className="mx-auto max-w-[700px] text-white/90 md:text-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {packageData.description}
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

        {/* Contact Info */}
        <section className="py-6 bg-amber-50/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {packageData.contact && (
                <>
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="bg-amber-100 p-2 rounded-full">
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
                        className="h-4 w-4 text-amber-800"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span className="text-amber-800">
                      {packageData.contact.phone}
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="bg-amber-100 p-2 rounded-full">
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
                        className="h-4 w-4 text-amber-800"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <span className="text-amber-800">
                      {packageData.contact.email}
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="bg-amber-100 p-2 rounded-full">
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
                        className="h-4 w-4 text-amber-800"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </div>
                    <span className="text-amber-800">
                      {packageData.contact.website}
                    </span>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content - Scrollable */}
              <div className="lg:col-span-2" ref={contentRef}>
                <AnimatedSection>
                  <div className="prose prose-amber max-w-none">
                    <h2 className="text-3xl font-bold text-amber-900 mb-6">
                      Your Spiritual Journey
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
                      <div className="md:w-1/2">
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {packageData.description}
                          {
                            " Embark on a transformative journey through the sacred lands of India with our carefully crafted package. This spiritual adventure will take you through ancient temples, holy rivers, and places of profound religious significance."
                          }
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {
                            "Our experienced guides will help you understand the deep cultural and spiritual significance of each location, making this not just a tour, but a journey of self-discovery and connection with India's rich heritage."
                          }
                        </p>
                      </div>
                      <div className="md:w-1/2">
                        <Image
                          src={
                            packageData.images?.[0] ||
                            "/placeholder.svg?height=300&width=500"
                          }
                          alt={packageData.title}
                          width={500}
                          height={300}
                          className="rounded-lg shadow-md w-full h-auto object-cover"
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-amber-800 mt-12 mb-6">
                      Detailed Itinerary
                    </h3>

                    {packageData.itinerary.map((day, index) => (
                      <div key={day.day} className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-amber-600 text-white p-3 rounded-full">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <h4 className="text-xl font-bold text-amber-900">
                            Day {day.day}
                          </h4>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <div className="md:w-2/3">
                            <ul className="space-y-3 mb-4">
                              {day.activities.map((activity, actIndex) => (
                                <motion.li
                                  key={actIndex}
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: actIndex * 0.1,
                                  }}
                                  viewport={{ once: true }}
                                >
                                  <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                                    <ChevronRight className="h-4 w-4 text-amber-600" />
                                  </div>
                                  <span className="text-gray-700">
                                    {activity}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>

                            {day.note && (
                              <motion.div
                                className="bg-amber-50 p-4 rounded-md"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                              >
                                <p className="text-amber-800 text-sm italic">
                                  <span className="font-semibold">Note:</span>{" "}
                                  {day.note}
                                </p>
                              </motion.div>
                            )}
                          </div>
                          <div className="md:w-1/3">
                            <Image
                              src={day.image || "/placeholder.svg"}
                              alt={`Day ${day.day} activities`}
                              width={350}
                              height={250}
                              className="rounded-lg shadow-md w-full h-auto object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    <h3 className="text-2xl font-bold text-amber-800 mt-12 mb-6">
                      Package Options
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                      {packageData.pricing.map((tier, index) => (
                        <motion.div
                          key={tier.type}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="relative"
                        >
                          <Card
                            className={`overflow-hidden ${
                              tier.type === "Deluxe"
                                ? "border-amber-500 shadow-lg"
                                : ""
                            }`}
                          >
                            {tier.type === "Deluxe" && (
                              <div className="absolute top-0 right-0">
                                <div className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                  RECOMMENDED
                                </div>
                              </div>
                            )}
                            <div
                              className={`p-6 ${
                                tier.type === "Deluxe" ? "bg-amber-50" : ""
                              }`}
                            >
                              <h4 className="text-xl font-bold text-amber-900 mb-2">
                                {tier.type}
                              </h4>
                              <div className="flex items-end mb-4">
                                <span className="text-3xl font-bold text-amber-800">
                                  ₹{tier.price.toLocaleString()}
                                </span>
                                <span className="text-gray-600 ml-1">
                                  per person
                                </span>
                              </div>
                              <ul className="space-y-3 mb-6">
                                {tier.features.map((feature, i) => (
                                  <motion.li
                                    key={i}
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: 0.2 + i * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                  >
                                    <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">
                                      {feature}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    {packageData.notes && (
                      <motion.div
                        className="bg-amber-50 p-6 rounded-lg mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="text-lg font-semibold text-amber-900 mb-3">
                          Important Notes
                        </h4>
                        <ul className="space-y-2">
                          {packageData.notes.map((note, index) => (
                            <li key={index} className="flex items-start">
                              <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                                <ChevronRight className="h-4 w-4 text-amber-600" />
                              </div>
                              <span className="text-gray-700">{note}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    <h3 className="text-2xl font-bold text-amber-800 mt-12 mb-6">
                      Gallery
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                      {packageData.images.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.03 }}
                          viewport={{ once: true }}
                          className="overflow-hidden rounded-lg shadow-md"
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${packageData.title} - Image ${index + 1}`}
                            width={400}
                            height={300}
                            className="w-full h-64 object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold text-amber-800 mt-12 mb-6">
                      Related Packages
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                      {packages
                        .filter((p) => p.id !== params.id)
                        .slice(0, 2)
                        .map((relatedPackage, index) => (
                          <AnimatedCard
                            key={relatedPackage.id}
                            delay={index * 0.1}
                          >
                            <div className="relative overflow-hidden">
                              <Image
                                src={
                                  relatedPackage.images?.[0] ||
                                  "/placeholder.svg?height=300&width=500"
                                }
                                alt={relatedPackage.title}
                                width={500}
                                height={300}
                                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                              />
                              <div className="absolute top-3 right-3 bg-amber-600 text-white px-2 py-1 rounded text-xs">
                                {relatedPackage.duration}
                              </div>
                            </div>
                            <CardContent className="p-6">
                              <h4 className="text-xl font-bold text-amber-900 mb-2">
                                {relatedPackage.title}
                              </h4>
                              <p className="text-gray-600 mb-4 line-clamp-2">
                                {relatedPackage.description}
                              </p>
                              <div className="flex justify-between items-center">
                                <Link href={`/packages/${relatedPackage.id}`}>
                                  <Button
                                    variant="link"
                                    className="text-amber-600 p-0 group"
                                  >
                                    View Details{" "}
                                    <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                                  </Button>
                                </Link>
                              </div>
                            </CardContent>
                          </AnimatedCard>
                        ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Sidebar - Fixed Booking Form */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <AnimatedCard>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-amber-900 mb-4">
                        Book This Package
                      </h3>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            required
                            className="border-amber-200 transition-all focus:border-amber-500 focus:ring-amber-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your email"
                            required
                            className="border-amber-200 transition-all focus:border-amber-500 focus:ring-amber-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Your phone number"
                            required
                            className="border-amber-200 transition-all focus:border-amber-500 focus:ring-amber-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Date</Label>
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                            className="border-amber-200 transition-all focus:border-amber-500 focus:ring-amber-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guests">Number of Guests</Label>
                          <select
                            id="guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            className="w-full rounded-md border border-amber-200 bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? "Guest" : "Guests"}
                              </option>
                            ))}
                            <option value="10+">More than 10</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Special Requests</Label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full min-h-[80px] rounded-md border border-amber-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:border-amber-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                            placeholder="Any special requirements or questions..."
                          ></textarea>
                        </div>

                        <div className="pt-2">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative overflow-hidden rounded-md"
                          >
                            <motion.span
                              className="absolute inset-0 bg-amber-500 z-0"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.5 }}
                            />
                            <Button
                              type="submit"
                              className="w-full bg-amber-600 hover:bg-amber-700 relative z-10"
                            >
                              Book Now
                            </Button>
                          </motion.div>
                        </div>

                        <div className="mt-4 text-center text-sm text-gray-500">
                          <p>
                            No payment required now. We'll contact you to
                            confirm availability and process payment.
                          </p>
                        </div>
                      </form>

                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-amber-100 p-2 rounded-full">
                            <Phone className="h-4 w-4 text-amber-800" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Need help?</p>
                            <p className="font-medium text-amber-800">
                              {packageData.contact?.phone || "+91 98765 43210"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="bg-amber-100 p-2 rounded-full">
                            <CalendarIcon className="h-4 w-4 text-amber-800" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Best time to book
                            </p>
                            <p className="font-medium text-amber-800">
                              2-3 months in advance
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </AnimatedCard>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Floating Button */}
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="absolute inset-0 bg-green-500 rounded-full blur-md"
            />
            <a
              href={`https://wa.me/${
                packageData.contact?.phone?.replace(/\D/g, "") || "919876543210"
              }?text=Hi, I'm interested in the ${packageData.title} package.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </motion.div>
          <div className="absolute -top-10 right-0 bg-white px-4 py-2 rounded-full shadow-md whitespace-nowrap">
            <p className="text-sm font-medium text-gray-800">Chat with us!</p>
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white transform rotate-45"></div>
          </div>
        </motion.div>
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
