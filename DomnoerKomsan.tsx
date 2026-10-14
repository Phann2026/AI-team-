"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Compass,
  DollarSign,
  Star,
  Globe,
  Menu,
  X,
  ArrowRight,
  Heart,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  Clock,
  ChevronRight,
} from "lucide-react";

// Types
type Language = "km" | "en";

interface DestinationItem {
  id: string;
  nameKh: string;
  nameEn: string;
  tagKh: string;
  tagEn: string;
  locationKh: string;
  locationEn: string;
  priceUsd: number;
  priceKhr: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  durationKh: string;
  durationEn: string;
}

// Destination Data with curated high-res Unsplash Cambodia travel photography
const DESTINATIONS: DestinationItem[] = [
  {
    id: "siem-reap",
    nameKh: "ប្រាសាទអង្គរវត្ត សៀមរាប",
    nameEn: "Angkor Wat & Siem Reap",
    tagKh: "វប្បធម៌ប្រវត្តិសាស្ត្រ",
    tagEn: "Historical & Culture",
    locationKh: "ខេត្តសៀមរាប",
    locationEn: "Siem Reap Province",
    priceUsd: 120,
    priceKhr: 492000,
    rating: 4.95,
    reviewCount: 380,
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    durationKh: "៣ ថ្ងៃ ២ យប់",
    durationEn: "3 Days 2 Nights",
  },
  {
    id: "kampot",
    nameKh: "ទឹកដីមន្តស្នេហ៍ កំពត",
    nameEn: "Charming Riverside Kampot",
    tagKh: "ធម្មជាតិ & សម្រាកលំហែ",
    tagEn: "Nature & Relaxation",
    locationKh: "ខេត្តកំពត",
    locationEn: "Kampot Province",
    priceUsd: 65,
    priceKhr: 266500,
    rating: 4.86,
    reviewCount: 210,
    imageUrl:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
    durationKh: "២ ថ្ងៃ ១ យប់",
    durationEn: "2 Days 1 Night",
  },
  {
    id: "koh-rong",
    nameKh: "កោះរ៉ុង ឋានសួគ៌សមុទ្រខៀវស្រងាត់",
    nameEn: "Koh Rong Tropical Island",
    tagKh: "កោះត្រូពិច & ឆ្នេរខ្សាច់",
    tagEn: "Tropical Beach & Island",
    locationKh: "ខេត្តព្រះសីហនុ",
    locationEn: "Preah Sihanouk",
    priceUsd: 89,
    priceKhr: 365000,
    rating: 4.92,
    reviewCount: 195,
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    durationKh: "៣ ថ្ងៃ ២ យប់",
    durationEn: "3 Days 2 Nights",
  },
  {
    id: "mondulkiri",
    nameKh: "តំបន់ព្រៃភ្នំ មណ្ឌលគិរី",
    nameEn: "Wild Nature Mondulkiri",
    tagKh: "ផ្សងព្រេង & អភិរក្សដំរី",
    tagEn: "Adventure & Wildlife",
    locationKh: "ខេត្តមណ្ឌលគិរី",
    locationEn: "Mondulkiri Province",
    priceUsd: 110,
    priceKhr: 451000,
    rating: 4.89,
    reviewCount: 142,
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80",
    durationKh: "៣ ថ្ងៃ ២ យប់",
    durationEn: "3 Days 2 Nights",
  },
];

export default function DomnoerKomsanPage() {
  const [lang, setLang] = useState<Language>("km");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Translations
  const t = {
    brandName: lang === "km" ? "ដំណើរកំសាន្ត" : "Domnoer Komsan",
    tagline:
      lang === "km"
        ? "រកឃើញភាពអស្ចារ្យនៃកម្ពុជា"
        : "Discover the Wonders of Cambodia",
    heroDesc:
      lang === "km"
        ? "ស្វែងយល់ពីប្រាង្គប្រាសាទបុរាណ ឆ្នេរខ្សាច់សក្បុស និងភ្នំធម្មជាតិបៃតងខ្ចីជាមួយបទពិសោធន៍ទេសចរណ៍ដ៏សម្បូរបែប"
        : "Explore ancient heritage temples, powdery white beaches, and emerald highlands with bespoke travel journeys.",
    searchHeading: lang === "km" ? "ស្វែងរកដំណើរកម្សាន្តរបស់អ្នក" : "Find Your Dream Trip",
    destinationLabel: lang === "km" ? "គោលដៅទេសចរណ៍" : "Destination",
    destinationPlaceholder:
      lang === "km" ? "ជ្រើសរើសខេត្ត/តំបន់" : "Select Destination",
    travelTypeLabel: lang === "km" ? "ប្រភេទដំណើរកម្សាន្ត" : "Travel Type",
    travelTypePlaceholder:
      lang === "km" ? "ជ្រើសរើសទម្រង់ដើរលេង" : "Select Travel Style",
    budgetLabel: lang === "km" ? "កម្រិតថវិកា" : "Budget Range",
    budgetPlaceholder:
      lang === "km" ? "កម្រិតថវិកា (USD / ៛)" : "Select Budget Range",
    searchBtn: lang === "km" ? "ស្វែងរកឥឡូវនេះ" : "Search Tours",
    sectionBadge: lang === "km" ? "គោលដៅពេញនិយមបំផុត" : "Top Rated Destinations",
    sectionTitle:
      lang === "km"
        ? "គោលដៅទេសចរណ៍ល្បីៗប្រចាំប្រទេសកម្ពុជា"
        : "Handpicked Cambodian Escapes",
    sectionSubtitle:
      lang === "km"
        ? "រៀបចំដំណើរកម្សាន្តរបស់អ្នកទៅកាន់តំបន់ទេសចរណ៍លំដាប់កំពូល ប្រកបដោយទំនុកចិត្ត និងសុវត្ថិភាព"
        : "Curated experiences from iconic world heritage wonders to serene coastal archipelagos.",
    fromPrice: lang === "km" ? "ចាប់ពី" : "Starting from",
    viewDetails: lang === "km" ? "កក់ដំណើរកម្សាន្ត" : "Book Package",
    navHome: lang === "km" ? "ទំព័រដើម" : "Home",
    navDestinations: lang === "km" ? "គោលដៅទេសចរណ៍" : "Destinations",
    navPackages: lang === "km" ? "កញ្ចប់ដំណើរកម្សាន្ត" : "Tour Packages",
    navAbout: lang === "km" ? "អំពីយើង" : "About Us",
    navContact: lang === "km" ? "ទំនាក់ទំនង" : "Contact",
    bookNow: lang === "km" ? "កក់ដំណើរកម្សាន្ត" : "Book Now",
    perPerson: lang === "km" ? "/ នាក់" : "/ person",
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-800 font-sans antialiased selection:bg-[#059669] selection:text-white">
      {/* 1. TOP ANNOUNCEMENT & LANGUAGE BAR */}
      <div className="bg-[#047857] text-white text-xs md:text-sm py-2 px-4 border-b border-emerald-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            <span className="hidden sm:inline">
              {lang === "km"
                ? "ការបញ្ចុះតម្លៃពិសេស ១៥% សម្រាប់ការកក់មុនរដូវកាលវិស្សមកាល!"
                : "Special 15% discount for early bird holiday reservations!"}
            </span>
            <span className="sm:hidden font-medium">
              {lang === "km" ? "បញ្ចុះតម្លៃ ១៥%" : "15% Off Early Bookings"}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-emerald-100">
              <PhoneCall className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="font-semibold">+855 (0) 23 888 999</span>
            </div>

            {/* Language Toggle Switcher */}
            <div className="flex items-center bg-emerald-900/40 rounded-full p-0.5 border border-emerald-600/60 shadow-inner">
              <button
                type="button"
                onClick={() => setLang("km")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  lang === "km"
                    ? "bg-[#F59E0B] text-slate-900 shadow-sm"
                    : "text-emerald-100 hover:text-white"
                }`}
              >
                <span>ខ្មែរ</span>
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  lang === "en"
                    ? "bg-[#F59E0B] text-slate-900 shadow-sm"
                    : "text-emerald-100 hover:text-white"
                }`}
              >
                <span>EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#059669] to-[#047857] flex items-center justify-center text-white shadow-md shadow-emerald-700/20 ring-2 ring-emerald-500/20">
              <Compass className="w-6 h-6 text-[#F59E0B] animate-spin-slow" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#059669] block leading-none">
                {t.brandName}
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-amber-600 tracking-wider uppercase block mt-1">
                Cambodia Travel & Tours
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#home" className="text-[#059669] transition hover:text-[#047857]">
              {t.navHome}
            </a>
            <a href="#destinations" className="hover:text-[#059669] transition">
              {t.navDestinations}
            </a>
            <a href="#packages" className="hover:text-[#059669] transition">
              {t.navPackages}
            </a>
            <a href="#about" className="hover:text-[#059669] transition">
              {t.navAbout}
            </a>
            <a href="#contact" className="hover:text-[#059669] transition">
              {t.navContact}
            </a>
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden lg:inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>{t.bookNow}</span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3 font-semibold text-slate-700">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#059669] py-1"
              >
                {t.navHome}
              </a>
              <a
                href="#destinations"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#059669] py-1"
              >
                {t.navDestinations}
              </a>
              <a
                href="#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#059669] py-1"
              >
                {t.navPackages}
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#059669] py-1"
              >
                {t.navAbout}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#059669] py-1"
              >
                {t.navContact}
              </a>
            </div>
            <div className="pt-3 border-t border-slate-100">
              <button
                type="button"
                className="w-full bg-[#059669] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow"
              >
                <span>{t.bookNow}</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO BANNER WITH KHMER SCRIPT & BACKGROUND OVERLAY */}
      <section
        id="home"
        className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center bg-slate-900 text-white overflow-hidden"
      >
        {/* Background Image with optimized parallax-like overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transform duration-1000 transition-transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />

        {/* Sophisticated Multi-layer Gradient Overlay: Deep Emerald & Dark Slate */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/75 to-emerald-950/60" />
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            <span>
              {lang === "km"
                ? "វេទិកាទេសចរណ៍ឌីជីថលឈានមុខនៅកម្ពុជា"
                : "Cambodia's Premier Travel Companion"}
            </span>
          </div>

          {/* Khmer Script Hero Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-snug drop-shadow-md">
            <span className="block text-white mb-2">« ដំណើរកំសាន្ត »</span>
            <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-300 bg-clip-text text-transparent">
              {lang === "km"
                ? "រកឃើញភាពអស្ចារ្យនៃកម្ពុជា"
                : "Discover the Wonders of Cambodia"}
            </span>
          </h1>

          <p className="mt-5 text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
            {t.heroDesc}
          </p>

          {/* Quick Metrics / Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#F59E0B]" />
              <span>{lang === "km" ? "១០០% ទំនុកចិត្ត & សុវត្ថិភាព" : "100% Safe & Verified"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
              <span>{lang === "km" ? "ពិន្ទុពេញចិត្ត ៤.៩/៥" : "4.9/5 Guest Satisfaction"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-emerald-400" />
              <span>{lang === "km" ? "មគ្គុទ្ទេសក៍ខ្មែរជំនាញ" : "Certified Local Guides"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEARCH FILTER COMPONENT (Overlapping Hero) */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-16 lg:-mt-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-900/10 border border-slate-100 p-4 sm:p-6 lg:p-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#059669] mb-4 flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#F59E0B]" />
            <span>{t.searchHeading}</span>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                lang === "km"
                  ? `ស្វែងរក: ${selectedDestination || "គ្រប់តំបន់"} | ប្រភេទ: ${
                      selectedType || "ទាំងអស់"
                    } | ថវិកា: ${selectedBudget || "ទាំងអស់"}`
                  : `Searching: ${selectedDestination || "Any"} | Type: ${
                      selectedType || "All"
                    } | Budget: ${selectedBudget || "All"}`
              );
            }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {/* Filter 1: Destination */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#059669]" />
                {t.destinationLabel}
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#059669] focus:bg-white transition"
              >
                <option value="">{t.destinationPlaceholder}</option>
                <option value="siem-reap">
                  {lang === "km" ? "សៀមរាប (Siem Reap)" : "Siem Reap"}
                </option>
                <option value="kampot">
                  {lang === "km" ? "កំពត & កែប (Kampot & Kep)" : "Kampot & Kep"}
                </option>
                <option value="koh-rong">
                  {lang === "km" ? "កោះរ៉ុង (Koh Rong)" : "Koh Rong Island"}
                </option>
                <option value="mondulkiri">
                  {lang === "km" ? "មណ្ឌលគិរី (Mondulkiri)" : "Mondulkiri Highlands"}
                </option>
                <option value="phnom-penh">
                  {lang === "km" ? "រាជធានីភ្នំពេញ (Phnom Penh)" : "Phnom Penh City"}
                </option>
              </select>
            </div>

            {/* Filter 2: Travel Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#059669]" />
                {t.travelTypeLabel}
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#059669] focus:bg-white transition"
              >
                <option value="">{t.travelTypePlaceholder}</option>
                <option value="culture">
                  {lang === "km" ? "វប្បធម៌ & បុរាណវិទ្យា" : "Culture & Heritage"}
                </option>
                <option value="eco">
                  {lang === "km" ? "ទេសចរណ៍ធម្មជាតិ & ផ្សងព្រេង" : "Eco-Tourism & Trek"}
                </option>
                <option value="beach">
                  {lang === "km" ? "កោះ & សម្រាកឆ្នេរ" : "Island & Beach Resort"}
                </option>
                <option value="luxury">
                  {lang === "km" ? "ដំណើរកម្សាន្តលំដាប់ប្រណីត" : "Luxury & Wellness"}
                </option>
              </select>
            </div>

            {/* Filter 3: Budget */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-[#059669]" />
                {t.budgetLabel}
              </label>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#059669] focus:bg-white transition"
              >
                <option value="">{t.budgetPlaceholder}</option>
                <option value="economy">
                  {lang === "km" ? "ក្រោម $១០០ (~៤០ ម៉ឺនរៀល)" : "Economy (< $100)"}
                </option>
                <option value="standard">
                  {lang === "km" ? "$១០០ - $២៥០ (~១ លានរៀល)" : "Standard ($100 - $250)"}
                </option>
                <option value="premium">
                  {lang === "km" ? "$២៥០ ឡើងទៅ (ប្រណីត)" : "Luxury ($250+)"}
                </option>
              </select>
            </div>

            {/* Search Submit Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold py-3 px-5 rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 active:scale-98"
              >
                <Search className="w-4 h-4 text-[#F59E0B]" />
                <span>{t.searchBtn}</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 5. TOP DESTINATIONS GRID */}
      <section id="destinations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#059669] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.sectionTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {DESTINATIONS.map((dest) => {
            const isFav = favorites.includes(dest.id);
            return (
              <div
                key={dest.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Image & Badges */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={dest.imageUrl}
                    alt={lang === "km" ? dest.nameKh : dest.nameEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* Category Tag Badge */}
                  <span className="absolute top-3 left-3 bg-[#059669]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm border border-emerald-400/30">
                    {lang === "km" ? dest.tagKh : dest.tagEn}
                  </span>

                  {/* Favorite Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggleFavorite(dest.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-red-500 transition shadow"
                    aria-label="Add to favorites"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFav ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                  </button>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] font-medium text-white/90 bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    <Clock className="w-3 h-3 text-[#F59E0B]" />
                    <span>{lang === "km" ? dest.durationKh : dest.durationEn}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location & Rating */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="flex items-center gap-1 font-medium text-emerald-700">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        {lang === "km" ? dest.locationKh : dest.locationEn}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                        <span className="font-bold text-slate-700">{dest.rating}</span>
                        <span className="text-slate-400 text-[10px]">
                          ({dest.reviewCount})
                        </span>
                      </div>
                    </div>

                    {/* Destination Title */}
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#059669] transition leading-snug line-clamp-1">
                      {lang === "km" ? dest.nameKh : dest.nameEn}
                    </h3>
                  </div>

                  {/* Pricing and Action */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">
                        {t.fromPrice}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-extrabold text-[#059669]">
                          ${dest.priceUsd}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {t.perPerson}
                        </span>
                      </div>
                      <span className="text-[10px] text-amber-700 font-semibold block">
                        ៛ {dest.priceKhr.toLocaleString()}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="bg-amber-50 hover:bg-[#F59E0B] text-[#D97706] hover:text-slate-900 border border-amber-200/80 p-2.5 rounded-xl transition duration-200 flex items-center justify-center group-hover:scale-105"
                      aria-label="View Tour"
                    >
                      <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 border-2 border-[#059669] text-[#059669] hover:bg-[#059669] hover:text-white font-bold px-7 py-3 rounded-2xl transition duration-200 text-sm shadow-sm"
          >
            <span>
              {lang === "km"
                ? "មើលគោលដៅទេសចរណ៍ទាំងអស់"
                : "Explore All Destinations"}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-lg font-black text-white">
                  « ដំណើរកំសាន្ត »
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === "km"
                  ? "វេទិកាទេសចរណ៍ឌីជីថលដែលផ្តល់នូវការកក់ដំណើរកម្សាន្តប្រកបដោយទំនុកចិត្ត និងបទពិសោធន៍ដ៏អស្ចារ្យនៅកម្ពុជា។"
                  : "Cambodia's trusted digital travel platform offering authentic local tours and cultural journeys."}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                {lang === "km" ? "គោលដៅពេញនិយម" : "Destinations"}
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-emerald-400 transition">Siem Reap (Angkor)</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Kampot & Kep</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Koh Rong & Sanloem</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Mondulkiri Highlands</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                {lang === "km" ? "ជំនួយ និងសុវត្ថិភាព" : "Help & Support"}
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-emerald-400 transition">{lang === "km" ? "មគ្គុទ្ទេសក៍ទេសចរណ៍" : "Travel Guides"}</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">{lang === "km" ? "វិធីសាស្រ្តទូទាត់ (KHQR/ABA)" : "KHQR & ABA Pay"}</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">{lang === "km" ? "គោលការណ៍លុបចោល" : "Cancellation Policy"}</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">{lang === "km" ? "ទំនាក់ទំនងយើងខ្ញុំ" : "Contact Us"}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                {lang === "km" ? "ទំនាក់ទំនង" : "Head Office"}
              </h4>
              <p className="text-xs leading-relaxed">
                Preah Monivong Blvd, Phnom Penh, Kingdom of Cambodia
                <br />
                Email: contact@domnoerkomsan.com
                <br />
                Phone: +855 (0) 23 888 999
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} « ដំណើរកំសាន្ត » Domnoer Komsan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
