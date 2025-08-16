"use client"

import { useState, useEffect } from "react"
import { Heart, Calendar, Clock, MapPin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EngagementInvitation630() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [language, setLanguage] = useState('en')

  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-05%20at%201.01.32%20PM%20%281%29-f2WLxnET0qUcHKtMm0u6qwCApgZZ3x.jpeg", // Couple embracing with red roses
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-05%20at%201.01.32%20PM%20%282%29-rFO2FWaDkJfFdqrlEQsjZxXpQqzRAF.jpeg", // Woman smiling showing ring with roses
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-05%20at%201.01.32%20PM-TEpkdFzBho1yMHhqQsrL4yJSl1pOPA.jpeg", // Couple showing ring together with neon sign
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-05%20at%201.01.33%20PM-8Vu1wnZh3qXbg3YzjsuL2dWwYArLge.jpeg", // Close-up of hands with engagement ring
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-05%20at%201.01.33%20PM%20%281%29-QEgKmdrqz4lHptyFq7WGFXq9sFnWyz.jpeg", // Intimate close-up of hands with ring
  ]

  useEffect(() => {
    setIsVisible(true)
    // Check URL hash for default language
    const hash = window.location.hash.toLowerCase()
    if (hash === '#ar') {
      setLanguage('ar')
    } else if (hash === '#en') {
      setLanguage('en')
    }
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000) // Changed from 5000 to 4000
    return () => clearInterval(interval)
  }, [images.length])


  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/qTpKa825wwAR7FMJ8?g_st=awb", "_blank")
  }

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en'
    setLanguage(newLang)
    window.location.hash = newLang
  }


  const translations = {
    en: {
      youreInvited: "You're Invited",
      engagementCelebration: "Engagement Celebration",
      date: "August 17th, 2025",
      time430: "4:30 PM",
      time630: "6:30 PM",
      locationText: "Click below for location details",
      viewLocation: "View Location",
      footerText: "Join us for an evening of love & celebration"
    },
    ar: {
      youreInvited: "أنت مدعو",
      engagementCelebration: "حفل الخطوبة",
      date: "17 أغسطس 2025",
      time430: "4:30 مساءً",
      time630: "6:30 مساءً",
      locationText: "انقر أدناه لتفاصيل الموقع",
      viewLocation: "عرض الموقع",
      footerText: "انضم إلينا لأمسية من الحب والاحتفال"
    }
  }

  const t = translations[language]

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Images with Smooth Crossfade Transition */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              transitionDelay: index === currentImage ? "0ms" : "200ms",
            }}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-out ${
                index === currentImage ? "ken-burns" : ""
              }`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div
          className={`max-w-md w-full transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Glass Card */}
          <div className="backdrop-blur-none md:backdrop-blur-sm bg-gradient-to-b from-black/20 to-black/40 md:from-white/5 md:to-white/10 border border-white/10 md:border-white/20 rounded-3xl p-8 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 animate-pulse">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
              <h1
                className={`text-white text-2xl font-light tracking-wider mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{
                  textShadow: "0 3px 6px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
                }}
              >
                {t.youreInvited}
              </h1>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
            </div>

            {/* Names */}
            <div className="text-center mb-8">
              <h2
                className="text-white text-5xl mb-2"
                style={{
                  fontFamily: "Dancing Script, cursive",
                  textShadow: "0 4px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.4)",
                }}
              >
                Imad{" "}
                <span
                  className="text-white/80 text-4xl"
                  style={{
                    fontFamily: "serif",
                    textShadow: "0 3px 6px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)",
                  }}
                >
                  &
                </span>{" "}
                Nour
              </h2>
              <p
                className={`text-white/90 text-lg font-light ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{
                  textShadow: "0 2px 4px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)",
                }}
              >
                {t.engagementCelebration}
              </p>
            </div>

            {/* Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center text-white/95">
                <Calendar
                  className="w-5 h-5 mr-3 text-white/80"
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))" }}
                />
                <div>
                  <p
                    className={`font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
                    style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.6)" }}
                  >
                    {t.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center text-white/95">
                <Clock
                  className="w-5 h-5 mr-3 text-white/80"
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))" }}
                />
                <div>
                  <p
                    className={`font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
                    style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.6)" }}
                  >
                    {t.time630}
                  </p>
                </div>
              </div>

              <div className="flex items-start text-white/95">
                <MapPin
                  className="w-5 h-5 mr-3 mt-0.5 text-white/80 flex-shrink-0"
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))" }}
                />
                <div>
                  <p
                    className={`font-medium leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}
                    style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.6)" }}
                  >
                    {t.locationText}
                  </p>
                </div>
              </div>
            </div>

            {/* Location Button */}
            <div className="space-y-3">
              <Button
                onClick={handleLocationClick}
                className="w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white drop-shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <MapPin className="w-4 h-4 mr-2" />
                {t.viewLocation}
              </Button>
              
              <Button
                onClick={toggleLanguage}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white drop-shadow-lg backdrop-blur-sm transition-all duration-300"
                size="sm"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'en' ? 'العربية' : 'English'}
              </Button>
            </div>

            {/* Footer */}
            <div className="text-center mt-8 pt-6 border-t border-white/20">
              <p
                className={`text-white/80 text-sm font-light ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{
                  textShadow: "0 2px 4px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)",
                }}
              >
                {t.footerText}
              </p>
            </div>
          </div>

          {/* Floating Hearts Animation */}
          <div className="absolute -top-4 -right-4 animate-bounce delay-1000">
            <Heart className="w-6 h-6 text-white/30 fill-white/30" />
          </div>
          <div className="absolute -bottom-4 -left-4 animate-bounce delay-2000">
            <Heart className="w-4 h-4 text-white/20 fill-white/20" />
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
