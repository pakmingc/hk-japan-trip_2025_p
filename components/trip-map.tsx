import { Map } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TripMap() {
  return (
    <section id="map" className="scroll-mt-16">
      <Card className="border-primary/20">
        <CardHeader className="border-b border-border">
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5 text-primary" />
            行程地圖 | Trip Map
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1Qy9T5Yz5qXVzOlrLmJLPgK9Q3xA&ehbc=2E312F"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>

            {/* 添加地圖標記 */}
            <div className="map-marker" style={{ top: "40%", left: "30%" }} title="香港 | Hong Kong"></div>
            <div className="map-marker" style={{ top: "35%", left: "70%" }} title="熊本 | Kumamoto"></div>
            <div className="map-marker" style={{ top: "30%", left: "75%" }} title="阿蘇 | Aso"></div>
            <div className="map-marker" style={{ top: "25%", left: "65%" }} title="由布院 | Yufuin"></div>
            <div className="map-marker" style={{ top: "20%", left: "80%" }} title="福岡 | Fukuoka"></div>
          </div>
          <div className="mt-4 text-muted-foreground">
            <p className="mb-2">
              此地圖顯示了香港和日本九州地區的主要景點，包括香港市區、熊本、阿蘇火山、由布院、柳川、大宰府和福岡。您可以點擊地圖上的標記查看詳細信息。
            </p>
            <p>
              This map shows the main attractions in Hong Kong and Japan's Kyushu region, including Hong Kong urban
              areas, Kumamoto, Aso Volcano, Yufuin, Yanagawa, Dazaifu, and Fukuoka. You can click on the markers to view
              detailed information.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

