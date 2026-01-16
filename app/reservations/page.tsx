"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    partySize: "2",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission
    console.log("Reservation submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-h1-m md:text-h1-d font-heading font-bold text-foreground mb-4">
            Make a Reservation
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Reserve your table for an unforgettable dining experience at Labix.
            We recommend booking in advance, especially for weekends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Reservation Details</CardTitle>
                <CardDescription>
                  Fill in your information to secure your table
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium mb-2"
                      >
                        Date
                      </label>
                      <Input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="time"
                        className="block text-sm font-medium mb-2"
                      >
                        Time
                      </label>
                      <Input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="partySize"
                      className="block text-sm font-medium mb-2"
                    >
                      Party Size
                    </label>
                    <select
                      id="partySize"
                      name="partySize"
                      value={formData.partySize}
                      onChange={handleChange}
                      className="flex h-11 w-full rounded-lg border border-white-off dark:border-dark-bg-elevated bg-white-base dark:bg-dark-bg-elevated px-4 py-2 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary focus-visible:ring-offset-2"
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
                        <option key={size} value={size}>
                          {size} {size === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                      <option value="11+">11+ Guests (Large Party)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="specialRequests"
                      className="block text-sm font-medium mb-2"
                    >
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="flex w-full rounded-lg border border-white-off dark:border-dark-bg-elevated bg-white-base dark:bg-dark-bg-elevated px-4 py-2 text-base text-foreground placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary focus-visible:ring-offset-2"
                      placeholder="Dietary restrictions, seating preferences, celebrations..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Confirm Reservation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Restaurant Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-foreground/60">
                      123 Restaurant Street
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-sm text-foreground/60">
                      Mon-Thu: 5:00 PM - 10:00 PM
                      <br />
                      Fri-Sat: 5:00 PM - 11:00 PM
                      <br />
                      Sun: 4:00 PM - 9:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gold-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-sm text-gold-primary hover:underline"
                    >
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gold-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:reservations@labix.com"
                      className="text-sm text-gold-primary hover:underline"
                    >
                      reservations@labix.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gold-primary/10 dark:bg-dark-gold-primary/10 border-gold-primary/20">
              <CardHeader>
                <CardTitle>Reservation Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-foreground/60">
                <p>• Reservations are held for 15 minutes past the reserved time</p>
                <p>• Cancellations must be made 24 hours in advance</p>
                <p>• Large parties (8+) require a deposit</p>
                <p>• We accommodate dietary restrictions with advance notice</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
