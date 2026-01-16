import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Labix Restaurant",
    short_name: "Labix",
    description:
      "Premium dining, exceptional pastries, and immersive gaming experiences",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#D4AF37",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["food", "restaurant", "lifestyle"],
    shortcuts: [
      {
        name: "Reservations",
        short_name: "Reserve",
        description: "Make a table reservation",
        url: "/reservations",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Menu",
        short_name: "Menu",
        description: "View our menu",
        url: "/dining",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
    ],
  };
}
