export const packages = [
  {
    id: "hindu-spirituality",
    title: "Awaken Your Soul",
    subtitle: "Experience the Heart of Hindu Spirituality",
    description:
      "Discover the soul of India with us! Your trusted companion for spiritual journeys across the divine cities of Varanasi, Ayodhya, Prayagraj (Mahakumbh), Vrindavan, and Sarnath. Immerse in the sacred essence of Hinduism, ancient rituals, and timeless traditions. Let's travel beyond destinations, into the heart of divinity. ✨",
    contact: {
      phone: "+91 9870299230",
      email: "info@kashikiyatra.com",
      website: "www.kashikiyatra.com",
    },
    duration: "4 Days & 3 Nights",
    itinerary: [
      {
        day: 1,
        activities: [
          "Pick up from in the Morning at drop at Hotel Varanasi.",
          "After Breakfast We move on to Assi Ghat, Dugakund Temple, Sankat Mochan Hanuman Mandir & Famous Streets of Varanasi",
          "We Move on to BHU (Kashi Vishwanath Temple) view and Darshan",
          "Then We move on to darshan at Baba Kalbhairav Temple",
          "Darshan at Kashi Vishwanath Temple (Jyotirlinga)",
          "Then Enjoy Ganga Aarti at the Dasaswamedh Ghat with boat ride in River Ganga.",
          "Drop at Hotel for Night Stay.",
        ],
        note: "Tourist Guide and Extra personal charges excluded",
      },
      {
        day: 2,
        activities: [
          "Exploration of the holy gupt godavari caves",
          "Ramghat visit",
          "Visit to the sacred Kamadgiri temple Hanuman dhara temple",
          "Visit Ram and bharat meeting spot",
          "Visit at Bharat milap temple",
        ],
        note: "This is not a guided tour; the driver will not be the guide for the tour. A well-experienced professional driver knows all the places to take the tour. This is a local city tour; hence, the vehicle cannot be used for any outstation tour.",
      },
      {
        day: 3,
        activities: [
          "After Breakfast We move on for Prayagraj by road (2-3 hours).",
          "Drop at Dormitry We Move on to Triveni Sangam by Foot.",
          "Shahi Snan(Bath) at Triveni Sangam for purifying your inner piece.",
          "Then Enjoy the Boat Riding at Sangam with Famous Sangam Aarti.",
          "Explore the all 12 Jyotirlingas made up of Rudraksh.",
          "Explore the other famous places of Mahakumbh at differ sectors.",
          "Take Prasad of Mahakumbh (The Grand Bhandara).",
          "Drop at By road",
        ],
        note: "Extra and personal charges excluded",
      },
      {
        day: 4,
        activities: [
          "After Breakfast We move on for Ayodhya.",
          "Drop at Hotel Ayodhya, for Rest",
          "In the Evening We Move on to Saryu Ghat for the Night View.",
          "In the early morning after bath(Saryu river), then move to Hanumangarhi Temple.",
          "Then Move to Shri RamMandir to take Darshan of Shri Ram Lala.",
          "Explore the other famous places of Ayodhya.",
          "Then move for Airport/station to Drop you. (extra cab charges apply based on distance.)",
        ],
        note: "Extra and personal charges excluded",
      },
    ],
    pricing: [
      {
        type: "Basic",
        price: 15000,
        features: [
          "For 3 person 12000 per person",
          "Basic 1 to 2 Star Hotel stay",
          "Basic Meal Facilities",
          "Tata winger excluded",
          "Travelling with sedan cab",
          "Sharing Boat Ride",
        ],
      },
      {
        type: "Premium",
        price: 25000,
        features: [
          "Premium 3 Star Hotel/cottage",
          "Good Meal Facilities",
          "Travelling with Premium cab",
          "Shahi Snan(Bath) in prayagraj",
          "Sharing Boat Ride",
        ],
      },
      {
        type: "Deluxe",
        price: 30000,
        features: [
          "Luxury 4/5 Star Hotel/cottage stay",
          "Best Luxury Meal Facilities",
          "Travelling with personalised luxury cab",
          "Personalised Boat Ride",
          "VVIP Darshan of two places.",
          "Free Prasad & a famous gift of each place.",
          "Personal Tourist Guide with you.",
        ],
      },
    ],
    notes: [
      "All above mentioned facilities are included in recommended packages*",
      "Extra and personal charges excluded",
      "More than one people get discount of Travelling cost as per recommendations*.",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "golden-triangle",
    title: "Golden Triangle Tour",
    subtitle: "Delhi, Agra & Jaipur",
    description:
      "Experience the cultural richness of India's most iconic cities with our Golden Triangle Tour. Visit the historic monuments of Delhi, the majestic Taj Mahal in Agra, and the colorful palaces of Jaipur.",
    duration: "6 Days & 5 Nights",
    // Add more details similar to the first package
  },
  {
    id: "himalayan-retreat",
    title: "Himalayan Spiritual Retreat",
    subtitle: "Rishikesh & Haridwar",
    description:
      "Rejuvenate your soul in the serene foothills of the Himalayas. Practice yoga, meditation, and participate in sacred rituals along the holy Ganges river.",
    duration: "5 Days & 4 Nights",
    // Add more details similar to the first package
  },
];

export function getPackageById(id) {
  return packages.find((pack) => pack.id === id) || null;
}

export function getAllPackageIds() {
  return packages.map((pack) => pack.id);
}
