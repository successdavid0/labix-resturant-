"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, UtensilsCrossed, Cake, Gamepad2, Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function HomePage() {
  const services = [
    {
      icon: UtensilsCrossed,
      title: "Fine Dining",
      description: "Exquisite cuisine crafted by award-winning chefs",
      href: "/dining",
      color: "text-gold-primary",
    },
    {
      icon: Cake,
      title: "Artisanal Pastries",
      description: "Custom cakes and handcrafted pastries for every occasion",
      href: "/pastries",
      color: "text-gold-primary",
    },
    {
      icon: Gamepad2,
      title: "Gaming Lounge",
      description: "State-of-the-art gaming stations and tournaments",
      href: "/gaming",
      color: "text-gold-primary",
    },
  ];

  const features = [
    {
      title: "Premium Experience",
      description: "Award-winning cuisine in an elegant atmosphere",
    },
    {
      title: "Custom Orders",
      description: "Personalized pastries and catering for your events",
    },
    {
      title: "Entertainment Hub",
      description: "Gaming lounge with the latest consoles and VR",
    },
    {
      title: "Loyalty Rewards",
      description: "Earn points with every visit and unlock exclusive benefits",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gold-primary/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/5 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-h1-m md:text-h1-d font-heading font-bold text-foreground mb-6">
              Welcome to{" "}
              <span className="text-gold-primary">Labix Restaurant</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Where fine dining meets exceptional pastries and immersive gaming
              experiences. Your premium destination for unforgettable moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reservations">
                <Button size="lg">
                  Reserve a Table
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/dining">
                <Button size="lg" variant="secondary">
                  View Menu
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white-off dark:bg-dark-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-h2-m md:text-h2-d font-heading font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Discover the three pillars of the Labix experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:scale-105 transition-transform cursor-pointer">
                    <CardHeader>
                      <Icon className={`h-12 w-12 ${service.color} mb-4`} />
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={service.href} className="w-full">
                        <Button variant="ghost" className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-primary/10 dark:bg-dark-gold-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-h2-m md:text-h2-d font-heading font-bold text-foreground mb-4">
              Ready to Experience Labix?
            </h2>
            <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable dining experience, order custom
              pastries, or book a gaming session today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reservations">
                <Button size="lg">Make a Reservation</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
