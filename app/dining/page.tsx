"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Filter, Star, Clock, ChefHat } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const menuCategories = [
  "All",
  "Appetizers",
  "Main Courses",
  "Desserts",
  "Beverages",
  "Chef&apos;s Specials",
];

const menuItems = [
  {
    id: 1,
    name: "Jollof Rice with Grilled Chicken",
    category: "Main Courses",
    description: "Aromatic basmati rice cooked in rich tomato sauce with spices, served with succulent grilled chicken",
    price: 4500,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    prepTime: 30,
    rating: 4.9,
    featured: true,
  },
  {
    id: 2,
    name: "Pepper Soup with Goat Meat",
    category: "Main Courses",
    description: "Spicy and aromatic soup with tender goat meat, traditional Nigerian spices, and fresh herbs",
    price: 5500,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    prepTime: 35,
    rating: 5.0,
    featured: true,
  },
  {
    id: 3,
    name: "Suya (Spiced Grilled Beef)",
    category: "Appetizers",
    description: "Tender beef skewers marinated in groundnut spice mix, grilled to perfection",
    price: 3200,
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800",
    prepTime: 20,
    rating: 4.8,
    featured: false,
  },
  {
    id: 4,
    name: "Pounded Yam with Egusi Soup",
    category: "Main Courses",
    description: "Smooth pounded yam served with rich egusi soup, assorted meat, and fish",
    price: 4800,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    prepTime: 40,
    rating: 4.9,
    featured: false,
  },
  {
    id: 5,
    name: "Bitterleaf Soup with Fufu",
    category: "Main Courses",
    description: "Traditional bitterleaf soup with palm oil, assorted meat, and smooth fufu",
    price: 4200,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    prepTime: 35,
    rating: 4.7,
    featured: false,
  },
  {
    id: 6,
    name: "Nigerian Fried Rice",
    category: "Main Courses",
    description: "Fragrant basmati rice stir-fried with vegetables, curry, and choice of protein",
    price: 4000,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    prepTime: 25,
    rating: 4.8,
    featured: false,
  },
  {
    id: 7,
    name: "Grilled Fish (Bole)",
    category: "Main Courses",
    description: "Fresh fish marinated in spices, grilled and served with plantain and spicy sauce",
    price: 5000,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
    prepTime: 30,
    rating: 4.9,
    featured: false,
  },
  {
    id: 8,
    name: "Moi Moi",
    category: "Appetizers",
    description: "Steamed bean pudding with boiled eggs, fish, and vegetables",
    price: 2500,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    prepTime: 45,
    rating: 4.6,
    featured: false,
  },
  {
    id: 9,
    name: "Chin Chin",
    category: "Desserts",
    description: "Crispy sweet pastry bites, perfect with tea or as a snack",
    price: 1800,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800",
    prepTime: 15,
    rating: 4.7,
    featured: false,
  },
  {
    id: 10,
    name: "Puff Puff",
    category: "Desserts",
    description: "Sweet deep-fried dough balls, light and fluffy",
    price: 1500,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    prepTime: 20,
    rating: 4.8,
    featured: false,
  },
  {
    id: 11,
    name: "Zobo Drink",
    category: "Beverages",
    description: "Refreshing hibiscus drink with ginger, mint, and a hint of sweetness",
    price: 1200,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    prepTime: 5,
    rating: 4.9,
    featured: false,
  },
  {
    id: 12,
    name: "Tiger Nut Drink",
    category: "Beverages",
    description: "Creamy and nutritious tiger nut milk, naturally sweet",
    price: 1500,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    prepTime: 5,
    rating: 4.7,
    featured: false,
  },
];

export default function DiningPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
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
          Our Menu
        </h1>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          Discover authentic Nigerian cuisine, featuring traditional dishes crafted
          with the finest local ingredients and time-honored recipes.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground/40" />
          <Input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {menuCategories.map((category) => (
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

      {/* Menu Items Grid */}
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
                {item.featured && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-gold-primary text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                      <ChefHat className="h-3 w-3" />
                      Chef&apos;s Pick
                    </span>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <span className="text-gold-primary font-bold text-lg">
                    ₦{item.price.toLocaleString()}
                  </span>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-foreground/60 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-gold-primary text-gold-primary" />
                    <span>{item.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{item.prepTime} min</span>
                  </div>
                </div>
                <Button className="w-full" variant="primary">
                  Add to Order
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground/60">No items found matching your search.</p>
        </div>
      )}
    </div>
  );
}
