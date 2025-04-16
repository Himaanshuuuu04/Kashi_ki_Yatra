"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ChevronRight, ChevronLeft, Check } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { FloatingElement } from "@/components/floating-element"
import { TextReveal } from "@/components/text-reveal"
import { ParticleBackground } from "@/components/particle-background"
import { getPackageById } from "@/components/Content/packages/packages"
import { packages } from "@/components/Content/packages/packages" // Import packages data
import { AnimatedCard } from "@/components/animated-card" // Import AnimatedCard component

export default function PackageDetail() {
  const params = useParams()
  interface PackageData {
    id: string
    title: string
    subtitle: string
    description: string
    contact: {
      phone: string
      email: string
      website: string
    }
    duration: string
    itinerary: {
      day: number
      activities: string[]
      note: string
    }[]
    pricing: {
      type: string
      price: number
      features: string[]
    }[]
    notes: string[]
    images: string[]
  }
  
  const [packageData, setPackageData] = useState<PackageData | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("itinerary")
  const [selectedDay, setSelectedDay] = useState(1)

  useEffect(() => {
    // Simulate loading from external source
    const fetchData = async () => {
      setLoading(true)
      try {
        // In a real app, you might fetch this from an API
        const data = getPackageById(params.id)
        if (data) {
          setPackageData(data as PackageData)
        } else {
          console.error("Package data is null")
        }

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800))
      } catch (error) {
        console.error("Error fetching package data:", error)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchData()
    }
  }, [params.id])

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
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <p className="text-amber-800 text-lg">Loading your spiritual journey...</p>
        </motion.div>
      </div>
    )
  }

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50/30">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Package Not Found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find the spiritual journey you're looking for. Please try another package or return to our
            homepage.
          </p>
          <Link href="/">
            <Button className="bg-amber-600 hover:bg-amber-700">Return to Homepage</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ParticleBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Bharat Yatra logo"
                width={40}
                height={40}
                className="rounded-full border-2 border-amber-500"
              />
            </motion.div>
            <span className="text-xl font-bold text-amber-700">भारत यात्रा</span>
          </Link>

          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
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
            src={packageData.images?.[0] || "/placeholder.svg?height=600&width=1600"}
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
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">Book This Package</Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          <div className="absolute bottom-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="text-background fill-current">
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
                    <span className="text-amber-800">{packageData.contact.phone}</span>
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
                    <span className="text-amber-800">{packageData.contact.email}</span>
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
                    <span className="text-amber-800">{packageData.contact.website}</span>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Package Details */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <motion.div
                  className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800"
                  whileHover={{ scale: 1.05, backgroundColor: "#fcd34d" }}
                >
                  Package Details
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">
                  Your Spiritual Journey
                </h2>
              </div>
            </AnimatedSection>

            <Tabs defaultValue="itinerary" className="w-full" value={activeTab} onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8">
                <TabsList className="bg-amber-100">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <TabsTrigger
                      value="itinerary"
                      className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                      onClick={() => setActiveTab("itinerary")}
                    >
                      Itinerary
                    </TabsTrigger>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <TabsTrigger
                      value="pricing"
                      className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                      onClick={() => setActiveTab("pricing")}
                    >
                      Pricing
                    </TabsTrigger>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <TabsTrigger
                      value="gallery"
                      className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                      onClick={() => setActiveTab("gallery")}
                    >
                      Gallery
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
                  <TabsContent value="itinerary" className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      {/* Day selector */}
                      <div className="md:col-span-1">
                        <div className="bg-amber-50 rounded-lg p-4 sticky top-24">
                          <h3 className="text-lg font-semibold text-amber-900 mb-4">Daily Schedule</h3>
                          <div className="space-y-2">
                            {packageData.itinerary.map((day) => (
                              <motion.button
                                key={day.day}
                                className={`w-full text-left p-3 rounded-md transition-colors ${
                                  selectedDay === day.day
                                    ? "bg-amber-600 text-white"
                                    : "bg-white text-amber-900 hover:bg-amber-100"
                                }`}
                                onClick={() => setSelectedDay(day.day)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-2" />
                                  <span>Day {day.day}</span>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Day details */}
                      <div className="md:col-span-3">
                        <AnimatePresence mode="wait">
                          {packageData.itinerary.map(
                            (day) =>
                              day.day === selectedDay && (
                                <motion.div
                                  key={day.day}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  transition={{ duration: 0.3 }}
                                  className="bg-white rounded-lg shadow-md overflow-hidden"
                                >
                                  <div className="bg-amber-600 text-white p-4">
                                    <h3 className="text-xl font-bold">Day {day.day}</h3>
                                  </div>
                                  <div className="p-6">
                                    <ul className="space-y-4">
                                      {day.activities.map((activity, index) => (
                                        <motion.li
                                          key={index}
                                          className="flex items-start"
                                          initial={{ opacity: 0, y: 10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                          <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                                            <ChevronRight className="h-4 w-4 text-amber-600" />
                                          </div>
                                          <span className="text-gray-700">{activity}</span>
                                        </motion.li>
                                      ))}
                                    </ul>

                                    {day.note && (
                                      <motion.div
                                        className="mt-6 bg-amber-50 p-4 rounded-md"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                      >
                                        <p className="text-amber-800 text-sm italic">
                                          <span className="font-semibold">Note:</span> {day.note}
                                        </p>
                                      </motion.div>
                                    )}
                                  </div>
                                </motion.div>
                              ),
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="pricing" className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {packageData.pricing.map((tier, index) => (
                        <motion.div
                          key={tier.type}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="relative"
                        >
                          <Card
                            className={`overflow-hidden ${tier.type === "Deluxe" ? "border-amber-500 shadow-lg" : ""}`}
                          >
                            {tier.type === "Deluxe" && (
                              <div className="absolute top-0 right-0">
                                <div className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                  RECOMMENDED
                                </div>
                              </div>
                            )}
                            <div className={`p-6 ${tier.type === "Deluxe" ? "bg-amber-50" : ""}`}>
                              <h3 className="text-xl font-bold text-amber-900 mb-2">{tier.type}</h3>
                              <div className="flex items-end mb-4">
                                <span className="text-3xl font-bold text-amber-800">
                                  ₹{tier.price.toLocaleString()}
                                </span>
                                <span className="text-gray-600 ml-1">per person</span>
                              </div>
                              <ul className="space-y-3 mb-6">
                                {tier.features.map((feature, i) => (
                                  <motion.li
                                    key={i}
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                                  >
                                    <Check className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{feature}</span>
                                  </motion.li>
                                ))}
                              </ul>
                              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                <Button
                                  className={`w-full ${
                                    tier.type === "Deluxe"
                                      ? "bg-amber-600 hover:bg-amber-700"
                                      : "bg-amber-500 hover:bg-amber-600"
                                  }`}
                                >
                                  Book {tier.type} Package
                                </Button>
                              </motion.div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    {packageData.notes && (
                      <motion.div
                        className="mt-8 bg-amber-50 p-6 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <h4 className="text-lg font-semibold text-amber-900 mb-3">Important Notes</h4>
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
                  </TabsContent>

                  <TabsContent value="gallery" className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {packageData.images.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.03 }}
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
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-amber-800 text-white relative overflow-hidden">
          <FloatingElement className="absolute top-10 right-10 opacity-10 hidden lg:block" duration={5}>
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Decorative element"
              width={120}
              height={120}
              className="rotate-12"
            />
          </FloatingElement>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <TextReveal
                  text="Ready to Begin Your Spiritual Journey?"
                  className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4"
                  delay={0.1}
                />
                <p className="text-amber-100 md:text-lg mb-8">
                  Book your package today and embark on a transformative experience through the sacred lands of India.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-white text-amber-800 hover:bg-amber-100">Book Now</Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="border-white text-white hover:bg-amber-700">
                      Contact Us
                    </Button>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Related Packages */}
        <section className="py-12 md:py-16 bg-amber-50/50">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <motion.div
                  className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800"
                  whileHover={{ scale: 1.05, backgroundColor: "#fcd34d" }}
                >
                  Explore More
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">
                  Related Spiritual Journeys
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Show other packages */}
              {packages
                .filter((p) => p.id !== params.id)
                .slice(0, 3)
                .map((relatedPackage, index) => (
                  <AnimatedCard key={relatedPackage.id} delay={index * 0.1}>
                    <div className="relative overflow-hidden">
                      <Image
                        src={relatedPackage.images?.[0] || "/placeholder.svg?height=300&width=500"}
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
                      <h3 className="text-xl font-bold text-amber-900 mb-2">{relatedPackage.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedPackage.description}</p>
                      <div className="flex justify-between items-center">
                        <Link href={`/packages/${relatedPackage.id}`}>
                          <Button variant="link" className="text-amber-600 p-0 group">
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
            <p className="text-amber-300 text-sm">&copy; {new Date().getFullYear()} भारत यात्रा. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
