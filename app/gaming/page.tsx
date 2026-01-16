"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Gamepad2, Clock, Users, Trophy, Calendar, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stationTypes = [
  {
    id: 1,
    name: "Console Gaming",
    description: "PlayStation 5, Xbox Series X, Nintendo Switch",
    hourlyRate: 15,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800",
    available: 8,
    total: 12,
  },
  {
    id: 2,
    name: "PC Gaming",
    description: "High-end gaming PCs with RTX 4090 graphics",
    hourlyRate: 20,
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800",
    available: 4,
    total: 6,
  },
  {
    id: 3,
    name: "VR Experiences",
    description: "Meta Quest 3 and HTC Vive Pro 2 setups",
    hourlyRate: 25,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800",
    available: 2,
    total: 4,
  },
  {
    id: 4,
    name: "Retro Arcade",
    description: "Classic arcade games and pinball machines",
    hourlyRate: 10,
    image: "https://images.unsplash.com/photo-1538481199705-7106c5e861e0?w=800",
    available: 6,
    total: 8,
  },
];

const upcomingTournaments = [
  {
    id: 1,
    game: "Call of Duty: Modern Warfare III",
    date: "2024-03-15",
    time: "18:00",
    prize: "$2,500",
    participants: 32,
    maxParticipants: 64,
  },
  {
    id: 2,
    game: "FIFA 24",
    date: "2024-03-22",
    time: "19:00",
    prize: "$1,500",
    participants: 24,
    maxParticipants: 32,
  },
];

export default function GamingPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-h1-m md:text-h1-d font-heading font-bold text-foreground mb-4">
          Gaming Lounge
        </h1>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          State-of-the-art gaming stations, tournaments, and immersive
          experiences for all skill levels.
        </p>
      </div>

      {/* Live Availability Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-r from-gold-primary/10 to-gold-accent/10 dark:from-dark-gold-primary/10 dark:to-dark-gold-primary/20 border-gold-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-gold-primary" />
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    Live Availability
                  </h3>
                  <p className="text-sm text-foreground/60">
                    Real-time station status and booking
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gold-primary">20</div>
                <div className="text-sm text-foreground/60">Stations Available</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Station Types */}
      <div className="mb-12">
        <h2 className="text-h2-m md:text-h2-d font-heading font-bold text-foreground mb-6">
          Gaming Stations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stationTypes.map((station, index) => (
            <motion.div
              key={station.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-card-hover transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={station.image}
                    alt={station.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-gold-primary text-white px-2 py-1 rounded text-xs font-semibold">
                      {station.available}/{station.total} Available
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{station.name}</CardTitle>
                    <span className="text-gold-primary font-bold text-lg">
                      ${station.hourlyRate}/hr
                    </span>
                  </div>
                  <CardDescription>{station.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Gamepad2 className="h-4 w-4" />
                      <span>{station.available} stations free</span>
                    </div>
                  </div>
                  <Button
                    className="w-full"
                    variant="primary"
                    onClick={() => setSelectedType(station.name)}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tournaments Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-h2-m md:text-h2-d font-heading font-bold text-foreground">
            Upcoming Tournaments
          </h2>
          <Button variant="secondary" asChild>
            <a href="/gaming/tournaments">View All</a>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingTournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-card-hover transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{tournament.game}</CardTitle>
                    <Trophy className="h-6 w-6 text-gold-primary" />
                  </div>
                  <CardDescription>
                    Prize Pool: <span className="font-semibold text-gold-primary">{tournament.prize}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(tournament.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Clock className="h-4 w-4" />
                      <span>{tournament.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Users className="h-4 w-4" />
                      <span>
                        {tournament.participants}/{tournament.maxParticipants} participants
                      </span>
                    </div>
                  </div>
                  <Button className="w-full" variant="primary">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
