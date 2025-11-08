"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Star, BookOpen, Mail, Menu, X, Heart, Zap, MessageSquare, Rocket } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function BookMarketingAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add page load animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div
      className={`min-h-screen bg-white transition-all duration-1000 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-lg py-2" : "bg-white/95 backdrop-blur-sm py-4"
        } ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-[#6C63FF]" />
              Books<span className="text-[#6C63FF]">WithVansh</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Testimonials
              </button>
              <Button
                size="sm"
                onClick={() => scrollToSection("final-cta")}
                className="bg-[#6C63FF] hover:bg-[#5B52E8] text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-left text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left text-gray-600 hover:text-[#6C63FF] transition-colors duration-200 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Testimonials
                </button>
                <Button
                  size="sm"
                  onClick={() => scrollToSection("final-cta")}
                  className="bg-[#6C63FF] hover:bg-[#5B52E8] text-white w-fit px-6 py-2 rounded-lg flex items-center gap-2"
                >
                  <Rocket className="w-4 h-4" />
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="px-4 py-16 md:py-24 lg:py-32 pt-24 md:pt-32">
        <div className="container mx-auto max-w-4xl text-center">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Helping Authors Get the Right Readers
          </h1>
          <p
            className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            We connect your book with readers who will love it through strategic, personalized marketing campaigns
          </p>
          <Button
            size="lg"
            className={`bg-[#6C63FF] hover:bg-[#5B52E8] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-1000 transform hover:scale-105 flex items-center gap-3 mx-auto delay-700 ${
              isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <Rocket className="w-5 h-5" />
            <a href="https://calendly.com/bookswithvansh/30min" target="_blank" rel="noopener noreferrer">
              Book A Free Call Now
            </a>
          </Button>
        </div>
      </section>

      {/* Enhanced About Us Section */}
      <section id="about" className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About BooksWithVansh</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              We're a dedicated team of book marketing specialists who understand that every author's journey is unique.
              Our mission is to create personalized marketing strategies that connect your book with its ideal audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`text-center transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <img
                src="/icons/industry-expertise.jpg"
                alt="Industry Expertise"
                className="w-16 h-16 mx-auto mb-6 object-cover rounded-lg"
              />

              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in the publishing industry, we have deep knowledge of market trends, reader
                behavior, and what makes books successful. We stay updated on the latest marketing strategies and
                platform algorithms to ensure your book gets maximum visibility.
              </p>
            </div>

            <div
              className={`text-center transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <img
                src="/icons/personalized-approach.jpg"
                alt="Personalized Approach"
                className="w-16 h-16 mx-auto mb-6 object-cover rounded-lg"
              />

              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Every campaign is uniquely tailored to your book's genre, target audience, and your specific goals as an
                author. We take time to understand your vision and create customized strategies that resonate with your
                ideal readers and maximize your book's potential.
              </p>
            </div>

            <div
              className={`text-center transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <img
                src="/icons/proven-results.jpg"
                alt="Proven Results"
                className="w-16 h-16 mx-auto mb-6 object-cover rounded-lg"
              />

              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Our strategies have helped hundreds of authors increase their visibility, build engaged reader
                communities, and achieve their publishing goals. We track metrics and continuously optimize campaigns to
                deliver measurable results and real impact for your book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardContent className="p-8 text-center">
                <img
                  src="/icons/influencer-campaigns.jpg"
                  alt="Book Influencer Campaigns"
                  className="w-16 h-16 mx-auto mb-6 object-cover rounded-lg"
                />

                <h3 className="text-xl font-bold text-gray-900 mb-4">Book Influencer Campaigns</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with book bloggers, bookstagrammers, and BookTok creators who align with your genre and
                  audience
                </p>
              </CardContent>
            </Card>

            <Card
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardContent className="p-8 text-center">
                <img
                  src="/icons/social-media-promotions.jpg"
                  alt="Social Media Promotions"
                  className="w-16 h-16 mx-auto mb-6 object-cover rounded-lg"
                />

                <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media Promotions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic social media campaigns across platforms to build your author brand and engage readers
                </p>
              </CardContent>
            </Card>

            <Card
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardContent className="p-8 text-center">
                <img
                  src="/icons/launch-strategies.jpg"
                  alt="Website Development"
                  className="w-16 h-16 mx-auto mb-6 object-cover rounded-lg"
                />

                <h3 className="text-xl font-bold text-gray-900 mb-4">Website Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional author websites and landing pages designed to showcase your books and convert readers
                  into fans
                </p>
              </CardContent>
            </Card>

            <Card
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardContent className="p-8 text-center">
                <img
                  src="/icons/social-media-management.jpg"
                  alt="Social Media Management"
                  className="w-16 h-16 mx-auto mb-6 object-cover rounded-lg"
                />

                <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete social media management including content creation, scheduling, and community engagement
                  across all platforms
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Authors Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardContent className="p-8">
                <img
                  src="/icons/testimonial-1.jpg"
                  alt="Ketaki Pawar"
                  className="w-12 h-12 mx-auto mb-4 rounded-full object-cover"
                />

                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#6C63FF] text-[#6C63FF] animate-in fade-in-0 duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  "His review was incredibly thoughtful and insightful. He has a special talent for diving deep into the
                  material and capturing the core essence of a book. Thank you for handling my work with such
                  professionalism and care."
                </p>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Ketaki Pawar</div>
                  <div className="text-sm text-gray-500">Author - The Emotional Reset</div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardContent className="p-8">
                <img
                  src="/icons/testimonial-2.jpg"
                  alt="Emma Rodriguez"
                  className="w-12 h-12 mx-auto mb-4 rounded-full object-cover"
                />

                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#6C63FF] text-[#6C63FF] animate-in fade-in-0 duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  "From launch strategy to ongoing promotion, they've been incredible partners in building my author
                  platform."
                </p>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Anonymous</div>
                  <div className="text-sm text-gray-500">Fantasy Author</div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <CardContent className="p-8">
                <img
                  src="/icons/testimonial-3.jpg"
                  alt="Maria"
                  className="w-12 h-12 mx-auto mb-4 rounded-full object-cover"
                />

                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#6C63FF] text-[#6C63FF] animate-in fade-in-0 duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  "You did so good on the review I'm so happy with the outcome of your review, I'd love to work with you
                  in the future with other books I will write. Thank You"
                </p>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Maria</div>
                  <div className="text-sm text-gray-500">Author - Unbreakable Determination</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="px-4 py-16">
        <div
          className={`container mx-auto max-w-2xl text-center transition-all duration-1000 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay Ahead in Book Marketing</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join 500+ readers getting weekly book marketing tips and free resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-base border-gray-300 focus:border-[#6C63FF] focus:ring-[#6C63FF] transition-all duration-300"
            />
            <Button className="bg-[#6C63FF] hover:bg-[#5B52E8] text-white px-8 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center">
              <Mail className="w-4 h-4" />
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="px-4 py-16 bg-[#6C63FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#5B52E8]"></div>
        <div
          className={`container mx-auto max-w-4xl text-center relative z-10 transition-all duration-1000 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Connect with Your Ideal Readers?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a personalized marketing strategy for your book
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-[#6C63FF] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
          >
            <Rocket className="w-5 h-5" />
            <a href="https://calendly.com/bookswithvansh/30min" target="_blank" rel="noopener noreferrer">
              Book A Free Call Now
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-gray-200">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-600 mb-2">
            Contact us:{" "}
            <Link
              href="mailto:bookswithvansh@gmail.com"
              className="text-[#6C63FF] hover:underline transition-colors duration-200"
            >
              bookswithvansh@gmail.com
            </Link>
          </p>
          <p className="text-gray-600">© {new Date().getFullYear()} BooksWithVansh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
