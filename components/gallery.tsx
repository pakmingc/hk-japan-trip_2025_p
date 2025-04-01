import { ImageIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1518599807935-37015b9cefcb?q=80&w=2070&auto=format&fit=crop",
      alt: "香港天際線 Hong Kong Skyline",
      location: "Hong Kong",
      link: "#itinerary",
    },
    {
      src: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?q=80&w=1974&auto=format&fit=crop",
      alt: "熊本城 Kumamoto Castle",
      location: "Kumamoto",
      link: "#itinerary",
    },
    {
      src: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?q=80&w=2070&auto=format&fit=crop",
      alt: "阿蘇火山 Aso Volcano",
      location: "Aso",
      link: "#itinerary",
    },
    {
      src: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2070&auto=format&fit=crop",
      alt: "由布院 Yufuin",
      location: "Yufuin",
      link: "#itinerary",
    },
    {
      src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop",
      alt: "柳川遊船 Yanagawa Boat Tour",
      location: "Yanagawa",
      link: "#itinerary",
    },
    {
      src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop",
      alt: "大宰府天滿宮 Dazaifu Tenmangu Shrine",
      location: "Dazaifu",
      link: "#itinerary",
    },
    {
      src: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=2070&auto=format&fit=crop",
      alt: "博多運河城 Canal City Hakata",
      location: "Fukuoka",
      link: "#itinerary",
    },
    {
      src: "https://images.unsplash.com/photo-1624866635020-2c9bd7d52d3c?q=80&w=2070&auto=format&fit=crop",
      alt: "香港迪士尼 Hong Kong Disneyland",
      location: "Hong Kong",
      link: "#itinerary",
    },
    {
      src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2129&auto=format&fit=crop",
      alt: "奧海城 Olympian City",
      location: "Hong Kong",
      link: "#itinerary",
    },
    {
      src: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop",
      alt: "尖沙咀 Tsim Sha Tsui",
      location: "Hong Kong",
      link: "#itinerary",
    },
    {
      src: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?q=80&w=2070&auto=format&fit=crop",
      alt: "銅鑼灣 Causeway Bay",
      location: "Hong Kong",
      link: "#itinerary",
    },
    {
      src: "https://images.unsplash.com/photo-1513326738677-b964603b9061?q=80&w=2049&auto=format&fit=crop",
      alt: "西灣河 Sai Wan Ho",
      location: "Hong Kong",
      link: "#itinerary",
    },
    {
      src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop",
      alt: "熊本下通商店街 Shimotori Shopping Street",
      location: "Kumamoto",
      link: "#itinerary",
    },
    {
      src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop",
      alt: "飛機 Airplane",
      location: "Travel",
      link: "#flights",
    },
    {
      src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
      alt: "機場 Airport",
      location: "Travel",
      link: "#flights",
    },
    {
      src: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=2070&auto=format&fit=crop",
      alt: "日式旅館 Ryokan",
      location: "Japan",
      link: "#itinerary",
    },
  ]

  return (
    <section id="gallery" className="scroll-mt-16">
      <Card className="border-primary/20">
        <CardHeader className="border-b border-border">
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-primary" />
            照片庫 | Photo Gallery
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="image-gallery">
            {images.map((image, idx) => (
              <Link key={idx} href={image.link} className="image-card">
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
                <div className="image-overlay">
                  <p className="font-medium">{image.alt}</p>
                  <p className="text-sm opacity-80">{image.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

