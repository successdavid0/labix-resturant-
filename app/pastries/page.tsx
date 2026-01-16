"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Sparkles, Calendar, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const pastryCategories = [
  "All",
  "Cakes",
  "Cookies & Brownies",
  "Bread & Rolls",
  "Pies & Tarts",
  "Specialty Items",
];

const pastryItems = [
  {
    id: 1,
    name: "Custom Birthday Cake",
    category: "Cakes",
    description: "Personalized birthday cake with your choice of flavors and decorations",
    basePrice: 45,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    customizable: true,
    leadTime: 3,
  },
  {
    id: 2,
    name: "Chocolate Chip Cookies",
    category: "Cookies & Brownies",
    description: "Freshly baked cookies with premium chocolate chips",
    basePrice: 12,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800",
    customizable: false,
    leadTime: 1,
  },
  {
    id: 3,
    name: "Artisan Sourdough",
    category: "Bread & Rolls",
    description: "Handcrafted sourdough bread with a perfect crust",
    basePrice: 8,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    customizable: false,
    leadTime: 1,
  },
  {
    id: 4,
    name: "Apple Pie",
    category: "Pies & Tarts",
    description: "Classic apple pie with cinnamon and nutmeg",
    basePrice: 18,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    customizable: false,
    leadTime: 2,
  },
  {
    id: 5,
    name: "Wedding Cake",
    category: "Cakes",
    description: "Elegant multi-tier wedding cake, fully customizable",
    basePrice: 250,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800",
    customizable: true,
    leadTime: 14,
  },
  {
    id: 6,
    name: "Macaron Assortment",
    category: "Specialty Items",
    description: "12 assorted French macarons in various flavors",
    basePrice: 24,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800",
    customizable: true,
    leadTime: 2,
  },
];

export default function PastriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = pastryItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-h1-m md:text-h1-d font-heading font-bold text-foreground mb-4">
          Artisanal Pastries
        </h1>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          Handcrafted pastries, custom cakes, and baked goods made fresh daily
          with premium ingredients.
        </p>
      </div>

      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <Card className="bg-gold-primary/10 dark:bg-dark-gold-primary/10 border-gold-primary/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-gold-primary" />
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    Custom Order Builder
                  </h3>
                  <p className="text-sm text-foreground/60">
                    Create your perfect cake or pastry with our interactive builder
                  </p>
                </div>
              </div>
              <Button size="lg" asChild>
                <a href="/pastries/custom">
                  Start Building
                  <Sparkles className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground/40" />
          <Input
            type="text"
            placeholder="Search pastries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {pastryCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "primary" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Pastry Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden hover:shadow-card-hover transition-all">
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                {item.customizable && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-gold-primary text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Customizable
                    </span>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <span className="text-gold-primary font-bold text-lg">
                    ${item.basePrice}+
                  </span>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{item.leadTime} day lead time</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    variant={item.customizable ? "primary" : "secondary"}
                    asChild
                  >
                    {item.customizable ? (
                      <a href={`/pastries/custom?id=${item.id}`}>
                        Customize
                      </a>
                    ) : (
                      <button>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </button>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground/60">No pastries found matching your search.</p>
        </div>
      )}
    </div>
  );
}
