"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Gamepad2, 
  Cake,
  DollarSign,
  Clock
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Today's Revenue",
    value: "$12,450",
    change: "+12.5%",
    icon: DollarSign,
    color: "text-gold-primary",
  },
  {
    title: "Active Reservations",
    value: "24",
    change: "+3",
    icon: Calendar,
    color: "text-blue-500",
  },
  {
    title: "Pending Orders",
    value: "8",
    change: "-2",
    icon: ShoppingCart,
    color: "text-orange-500",
  },
  {
    title: "Gaming Sessions",
    value: "15",
    change: "+5",
    icon: Gamepad2,
    color: "text-purple-500",
  },
];

const recentActivities = [
  { type: "reservation", message: "New reservation for 4 guests at 7:00 PM", time: "5 min ago" },
  { type: "order", message: "Order #1234 completed - $85.00", time: "12 min ago" },
  { type: "gaming", message: "Gaming session started - Station #5", time: "18 min ago" },
  { type: "pastry", message: "Custom cake order received - Delivery: Tomorrow", time: "25 min ago" },
];

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-h1-m md:text-h1-d font-heading font-bold text-foreground mb-2">
          Admin Dashboard
        </h1>
        <p className="text-foreground/60">
          Overview of restaurant operations and performance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-foreground/60">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-foreground/60 mt-1">
                    <span className={stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}>
                      {stat.change}
                    </span>{" "}
                    from yesterday
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest updates from the restaurant</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 pb-4 border-b border-white-off dark:border-dark-bg-elevated last:border-0"
                >
                  <div className="h-2 w-2 rounded-full bg-gold-primary mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-foreground/60 mt-1">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border border-white-off dark:border-dark-bg-elevated rounded-lg hover:bg-gold-primary/10 transition-colors text-left">
                <Calendar className="h-6 w-6 text-gold-primary mb-2" />
                <p className="font-medium text-sm">Manage Reservations</p>
              </button>
              <button className="p-4 border border-white-off dark:border-dark-bg-elevated rounded-lg hover:bg-gold-primary/10 transition-colors text-left">
                <ShoppingCart className="h-6 w-6 text-gold-primary mb-2" />
                <p className="font-medium text-sm">View Orders</p>
              </button>
              <button className="p-4 border border-white-off dark:border-dark-bg-elevated rounded-lg hover:bg-gold-primary/10 transition-colors text-left">
                <Cake className="h-6 w-6 text-gold-primary mb-2" />
                <p className="font-medium text-sm">Pastry Orders</p>
              </button>
              <button className="p-4 border border-white-off dark:border-dark-bg-elevated rounded-lg hover:bg-gold-primary/10 transition-colors text-left">
                <Gamepad2 className="h-6 w-6 text-gold-primary mb-2" />
                <p className="font-medium text-sm">Gaming Lounge</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
