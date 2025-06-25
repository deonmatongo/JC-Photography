import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Camera, Mail, Phone, User } from "lucide-react";

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-inter font-light leading-tight mb-6">
            BOOK YOUR
            <br />
            <em className="font-playfair italic">SESSION</em>
          </h1>
          <p className="text-gray-600 font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            Let's create something beautiful together. Share your vision and we'll bring it to life through photography.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-inter font-light mb-4">
                  Ready to capture your story?
                </h2>
                <p className="text-gray-600 font-inter leading-relaxed mb-6">
                  Fill out the form and I'll get back to you within 24 hours to discuss your vision, 
                  timeline, and how we can create something extraordinary together.
                </p>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-xl font-inter font-medium">Services Available</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-gray-600" />
                    <span className="font-inter text-gray-700">Wedding Photography</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-gray-600" />
                    <span className="font-inter text-gray-700">Portrait Sessions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-gray-600" />
                    <span className="font-inter text-gray-700">Event Photography</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-gray-600" />
                    <span className="font-inter text-gray-700">Commercial Shoots</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-inter font-medium">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <span className="font-inter text-gray-700">hello@jcphotography.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <span className="font-inter text-gray-700">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white p-8 shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-inter text-sm font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="font-inter"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-inter text-sm font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="font-inter"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-inter text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="font-inter"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-inter text-sm font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="font-inter"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sessionType" className="font-inter text-sm font-medium">
                    Session Type
                  </Label>
                  <select
                    id="sessionType"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background font-inter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select a session type</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="event">Event Photography</option>
                    <option value="commercial">Commercial Shoot</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="font-inter text-sm font-medium">
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      className="font-inter"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="font-inter text-sm font-medium">
                      Preferred Time
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      className="font-inter"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="font-inter text-sm font-medium">
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="Where would you like the session?"
                    className="font-inter"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="font-inter text-sm font-medium">
                    Budget Range
                  </Label>
                  <select
                    id="budget"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background font-inter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select budget range</option>
                    <option value="2000-4000">2 000 - 4 000 zł</option>
                    <option value="4000-10000">4 000 - 10 000 zł</option>
                    <option value="10000-20000">10 000 - 20 000 zł</option>
                    <option value="20000+">20 000+ zł</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-inter text-sm font-medium">
                    Tell me about your vision
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Share your ideas, inspiration, and what you're hoping to capture..."
                    className="min-h-[120px] font-inter"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-black hover:bg-gray-800 text-white font-inter font-medium py-3 px-6 uppercase tracking-wider transition-colors"
                >
                  Send Booking Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BookingPage;
