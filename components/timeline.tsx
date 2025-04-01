"use client"

import { useState } from "react"
import {
  Calendar,
  MapPin,
  Clock,
  Coffee,
  Utensils,
  Camera,
  Train,
  Landmark,
  ShoppingBag,
  Mountain,
  Waves,
  Droplets,
  Flame,
  Home,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface DayData {
  day: number
  date: string
  location: string
  locationChinese: string
  activities: {
    time: string
    title: string
    titleChinese: string
    details?: string[]
    detailsChinese?: string[]
    icon?: string
    description?: string
    descriptionChinese?: string
    image?: string
  }[]
  images: string[]
  mapUrl: string
  description?: string
  descriptionChinese?: string
}

export default function Timeline() {
  const [openMap, setOpenMap] = useState<string | null>(null)

  const days: DayData[] = [
    {
      day: 1,
      date: "April 2",
      location: "Hong Kong",
      locationChinese: "香港",
      description: "抵達香港後的第一天，我們將拜訪親友並享受當地美食。",
      descriptionChinese: "First day after arriving in Hong Kong, we'll visit relatives and enjoy local cuisine.",
      activities: [
        {
          time: "Morning",
          title: "Visit Mountain",
          titleChinese: "拜山",
          details: ["Yau Tsim Mong District", "Pay respects to ancestors"],
          detailsChinese: ["油尖旺區", "祭拜祖先"],
          icon: "Landmark",
          description: "早上我們將前往油尖旺區拜山，這是中國傳統文化中重要的一環，表達對祖先的敬意。",
          descriptionChinese:
            "In the morning, we'll visit the mountain in Yau Tsim Mong District, which is an important part of Chinese traditional culture to pay respects to ancestors.",
        },
        {
          time: "Afternoon",
          title: "Western Toast",
          titleChinese: "西多士",
          details: ["Yau Tsim Mong District", "Try local Hong Kong style French toast"],
          detailsChinese: ["油尖旺區", "品嚐地道港式西多士"],
          icon: "Coffee",
          description: "下午在油尖旺區品嚐著名的港式西多士，這是香港茶餐廳的經典美食，外脆內軟，搭配煉奶和花生醬。",
          descriptionChinese:
            "In the afternoon, we'll enjoy the famous Hong Kong style French toast in Yau Tsim Mong District, a classic dish in Hong Kong cafes, crispy outside and soft inside, served with condensed milk and peanut butter.",
        },
        {
          time: "Night",
          title: "Sai Wan Ho",
          titleChinese: "西灣河",
          details: ["Dinner with family", "Seafood restaurants"],
          detailsChinese: ["與家人共進晚餐", "海鮮餐廳"],
          icon: "Utensils",
          description: "晚上前往西灣河與家人共進晚餐，這裡有許多著名的海鮮餐廳，我們可以享用新鮮的海鮮和地道的粵菜。",
          descriptionChinese:
            "In the evening, we'll go to Sai Wan Ho for dinner with family. There are many famous seafood restaurants here where we can enjoy fresh seafood and authentic Cantonese cuisine.",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1518599807935-37015b9cefcb?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576632661825-4a760645a0ba?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.363091472723!2d114.16965673955077!3d22.31897470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f179a6bb57%3A0x8c3a7e5f1c2e4bd9!2z5rKZ5bC85bSH5Y-w!5e0!3m2!1szh-TW!2shk!4v1617235689721!5m2!1szh-TW!2shk",
    },
    {
      day: 2,
      date: "April 3",
      location: "Hong Kong",
      locationChinese: "香港",
      description: "今天我們將處理一些個人事務，並在銅鑼灣享受購物和美食。",
      descriptionChinese:
        "Today we'll take care of some personal matters and enjoy shopping and dining in Causeway Bay.",
      activities: [
        {
          time: "Morning",
          title: "Haircut",
          titleChinese: "剪頭髮",
          icon: "Scissors",
          description: "早上安排剪頭髮，為接下來的旅程做好準備。香港的髮型師技術精湛，可以體驗地道的香港理髮服務。",
          descriptionChinese:
            "In the morning, we'll get haircuts to prepare for the upcoming journey. Hong Kong's hairstylists are skilled, and we can experience authentic Hong Kong hairdressing services.",
        },
        {
          time: "Afternoon",
          title: "Documents",
          titleChinese: "証件",
          details: ["Sheung Wan", "Handle necessary paperwork"],
          detailsChinese: ["上環", "處理必要的文件"],
          icon: "FileText",
          description: "下午前往上環處理一些必要的文件和證件，這裡有許多政府辦公室和公證處。",
          descriptionChinese:
            "In the afternoon, we'll go to Sheung Wan to handle some necessary documents and certificates. There are many government offices and notary offices here.",
        },
        {
          time: "Night",
          title: "Free time",
          titleChinese: "自由時間",
          details: ["Causeway Bay", "Shari Shari", "Sogo"],
          detailsChinese: ["銅鑼灣", "Shari Shari", "Sogo"],
          icon: "ShoppingBag",
          description:
            "晚上在銅鑼灣自由活動，可以逛Sogo百貨公司購物，品嚐Shari Shari的著名刨冰甜品，體驗香港繁華的夜生活。",
          descriptionChinese:
            "In the evening, we'll have free time in Causeway Bay. We can shop at Sogo Department Store, taste the famous shaved ice desserts at Shari Shari, and experience Hong Kong's vibrant nightlife.",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1513326738677-b964603b9061?q=80&w=2049&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.262385046726!2d114.17971233955077!3d22.28009470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f1d7352b31%3A0x86c1c18ccf6c3f7d!2z6Zu75b2x54Gj!5e0!3m2!1szh-TW!2shk!4v1617235689721!5m2!1szh-TW!2shk",
    },
    {
      day: 3,
      date: "April 4",
      location: "Hong Kong",
      locationChinese: "香港",
      description: "今天我們將與爺爺嫲嫲共度時光，享用美食，並在不同地區遊覽。",
      descriptionChinese: "Today we'll spend time with grandparents, enjoy good food, and visit different areas.",
      activities: [
        {
          time: "Morning",
          title: "Rest at Olympian City with Grandparents",
          titleChinese: "休息奧海城爺爺嫲嫲",
          icon: "Heart",
          description:
            "早上在奧海城與爺爺嫲嫲共度時光，這是一個現代化的購物中心，有許多餐廳和休閒設施，適合與長輩一起放鬆休息。",
          descriptionChinese:
            "In the morning, we'll spend time with grandparents at Olympian City, a modern shopping mall with many restaurants and leisure facilities, suitable for relaxing with elders.",
        },
        {
          time: "Afternoon",
          title: "Genki SuShiro",
          titleChinese: "元氣SuShiro",
          icon: "Utensils",
          description: "下午前往元氣SuShiro享用午餐，這是一家受歡迎的日本迴轉壽司餐廳，提供新鮮的壽司和其他日本料理。",
          descriptionChinese:
            "In the afternoon, we'll have lunch at Genki SuShiro, a popular Japanese conveyor belt sushi restaurant offering fresh sushi and other Japanese dishes.",
        },
        {
          time: "Night",
          title: "Kwai Fong, Tsim Sha Tsui, Chun Shui Tang",
          titleChinese: "葵芳尖沙咀春水堂",
          icon: "Coffee",
          description:
            "晚上先到葵芳，然後前往尖沙咀的春水堂，這是一家著名的台灣茶飲店，以珍珠奶茶和台灣小吃聞名。尖沙咀是香港的主要購物和娛樂區之一，有許多國際品牌和本地特色店鋪。",
          descriptionChinese:
            "In the evening, we'll first go to Kwai Fong, then to Chun Shui Tang in Tsim Sha Tsui, a famous Taiwanese tea shop known for bubble tea and Taiwanese snacks. Tsim Sha Tsui is one of Hong Kong's main shopping and entertainment districts with many international brands and local specialty shops.",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2129&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.363091472723!2d114.16965673955077!3d22.31897470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f179a6bb57%3A0x8c3a7e5f1c2e4bd9!2z5aWl5rW35biC!5e0!3m2!1szh-TW!2shk!4v1617235689721!5m2!1szh-TW!2shk",
    },
    {
      day: 4,
      date: "April 5",
      location: "Hong Kong → Kumamoto",
      locationChinese: "香港 → 熊本",
      description: "今天我們將從香港飛往日本熊本，開始我們的日本九州之旅。",
      descriptionChinese: "Today we'll fly from Hong Kong to Kumamoto, Japan, starting our Kyushu journey.",
      activities: [
        {
          time: "11:40 - 15:40",
          title: "Flight to Kumamoto",
          titleChinese: "飛往熊本",
          details: ["Hong Kong Airlines HX686", "Flight time: 4 hours"],
          detailsChinese: ["香港航空 HX686", "飛行時間: 4小時"],
          icon: "Plane",
          description:
            "搭乘香港航空HX686航班從香港國際機場飛往熊本機場，飛行時間約4小時。抵達後，我們將租車並前往熊本市區的酒店入住。",
          descriptionChinese:
            "We'll take Hong Kong Airlines flight HX686 from Hong Kong International Airport to Kumamoto Airport, with a flight time of about 4 hours. Upon arrival, we'll rent a car and head to our hotel in downtown Kumamoto.",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13353.286167414673!2d130.7071823196716!3d32.8028659809599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f47f01a1b7c3%3A0x1e41d0c325b2a2f!2z54aK5pys5qmf!5e0!3m2!1szh-TW!2sjp!4v1617235689721!5m2!1szh-TW!2sjp",
    },
    {
      day: 5,
      date: "April 5",
      location: "Kumamoto",
      locationChinese: "熊本",
      description: "抵達熊本後，我們將參觀著名的熊本城和市區景點，體驗當地美食文化。",
      descriptionChinese:
        "After arriving in Kumamoto, we'll visit the famous Kumamoto Castle and downtown attractions, experiencing local food culture.",
      activities: [
        {
          time: "Afternoon",
          title: "Kumamoto Castle",
          titleChinese: "熊本城",
          details: ["350 yen entrance fee", "120 minutes tour", "One of Japan's most impressive castles"],
          detailsChinese: ["350円入場料", "120分鐘參觀", "日本最令人印象深刻的城堡之一"],
          icon: "Landmark",
          description:
            "熊本城是日本三大名城之一，建於1607年，是日本歷史上重要的文化遺產。2016年熊本地震後進行了大規模修復，現在部分區域已重新開放。城堡內有展示熊本歷史的博物館，從城牆上可以俯瞰整個熊本市區。熊本城的天守閣是日本最大的木造建築之一，其黑色外牆和白色牆面形成鮮明對比，被稱為「武者返」的曲線城牆設計獨特，是日本城堡建築的傑作。",
          descriptionChinese:
            "Kumamoto Castle is one of Japan's three premier castles, built in 1607, and an important cultural heritage site in Japanese history. After the 2016 Kumamoto earthquake, it underwent major restoration, and parts of it have now reopened. Inside the castle, there's a museum showcasing Kumamoto's history, and from the castle walls, you can overlook the entire Kumamoto city. The castle tower is one of the largest wooden structures in Japan, with its black exterior and white walls forming a striking contrast. The curved castle walls known as 'Musha-gaeshi' have a unique design and are a masterpiece of Japanese castle architecture.",
          image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?q=80&w=1974&auto=format&fit=crop",
        },
        {
          time: "Evening",
          title: "Downtown Shopping & Dining",
          titleChinese: "市區購物和用餐",
          details: ["Shimotori Shopping Street", "Horse Meat Sushi", "Kumamoto Ramen"],
          detailsChinese: ["下通商店街", "馬肉壽司", "熊本拉麵"],
          icon: "ShoppingBag",
          description:
            "晚上探索熊本市中心的下通商店街，這是熊本最熱鬧的購物區，有許多商店、餐廳和娛樂場所。品嚐熊本特色美食，如馬肉壽司（馬刺し）和熊本拉麵（濃厚豚骨湯底配蒜味油）。下通商店街全長約1公里，兩側店鋪林立，從國際品牌到本地特色店都有。馬肉壽司是熊本的特色料理，新鮮的馬肉切片搭配醬油和薑，口感鮮嫩。熊本拉麵則以濃郁的豚骨湯底和獨特的蒜味油聞名，是當地人最愛的美食之一。別忘了參觀熊本熊部長辦公室，這是熊本縣吉祥物熊本熊的官方商店，可以購買各種可愛的熊本熊周邊商品。",
          descriptionChinese:
            "In the evening, we'll explore Shimotori Shopping Street in downtown Kumamoto, the city's busiest shopping area with many shops, restaurants, and entertainment venues. We'll taste Kumamoto's specialty foods such as horse meat sushi (basashi) and Kumamoto ramen (rich pork bone broth with garlic oil). Shimotori Shopping Street is about 1 kilometer long, lined with shops ranging from international brands to local specialty stores. Horse meat sushi is a Kumamoto specialty, with fresh horse meat slices served with soy sauce and ginger, offering a tender texture. Kumamoto ramen is famous for its rich pork bone broth and unique garlic oil, one of the locals' favorite foods. Don't forget to visit Kumamon Square, the official store of Kumamoto Prefecture's mascot, Kumamon, where you can purchase various cute Kumamon merchandise.",
          image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.9769664976287!2d130.70718231521196!3d32.80286598096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f47f01a1b7c3%3A0x1e41d0c325b2a2f!2sKumamoto%20Castle!5e0!3m2!1sen!2sus!4v1585678123456!5m2!1sen!2sus",
    },
    {
      day: 6,
      date: "April 6",
      location: "Aso",
      locationChinese: "阿蘇",
      description: "今天我們將探索阿蘇火山區，欣賞壯麗的自然風光和獨特的火山地貌。",
      descriptionChinese:
        "Today we'll explore the Aso Volcano area, admiring the magnificent natural scenery and unique volcanic landforms.",
      activities: [
        {
          time: "Morning",
          title: "Kusasenri & Aso Shrine",
          titleChinese: "草千里與阿蘇神社",
          details: ["Grassland with grazing horses", "One of Japan's oldest shrines"],
          detailsChinese: ["有馬匹放牧的草原", "日本最古老的神社之一"],
          icon: "Mountain",
          description:
            "早上前往草千里，這是一片美麗的草原，背景是阿蘇火山。草千里是阿蘇火山口內的一片廣闊草原，面積約785,000平方米，四季景色各異。春季草原上開滿野花，夏季綠草如茵，秋季草原呈金黃色，冬季則可能覆蓋白雪。在這裡可以看到放牧的馬匹，遠眺阿蘇五岳，還可以騎馬體驗。草原上有一個小湖泊「草千里池」，是火山噴發後形成的火口湖，湖水清澈，倒映著藍天和遠山，景色如畫。之後參觀阿蘇神社，這是日本最古老的神社之一，有1,200多年歷史，供奉著掌管火山的神明。阿蘇神社的建築風格獨特，以「楼門」（二層門）最為著名，被指定為日本重要文化財產。神社周圍環繞著古老的樹木和清澈的湧水，環境幽靜祥和。",
          descriptionChinese:
            "In the morning, we'll visit Kusasenri, a beautiful prairie with Aso Volcano in the background. Kusasenri is a vast grassland inside the Aso volcanic crater, covering about 785,000 square meters, with different scenery in each season. In spring, the prairie is filled with wildflowers; in summer, it's lush green; in autumn, the prairie turns golden; and in winter, it may be covered with snow. Here you can see grazing horses, view the five peaks of Aso, and experience horseback riding. There's a small lake on the prairie called 'Kusasenri Pond', a crater lake formed after volcanic eruptions. The lake water is clear, reflecting the blue sky and distant mountains, creating a picturesque scene. Afterwards, we'll visit Aso Shrine, one of Japan's oldest shrines with over 1,200 years of history, dedicated to the deity who controls the volcano. Aso Shrine has a unique architectural style, with its 'Romon' (two-story gate) being the most famous, designated as an important cultural property of Japan. The shrine is surrounded by ancient trees and clear spring water, creating a serene and peaceful environment.",
          image: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?q=80&w=2070&auto=format&fit=crop",
        },
        {
          time: "Afternoon",
          title: "Aso Volcano & Crater",
          titleChinese: "阿蘇火山與火山口",
          details: ["Active volcano", "Spectacular views", "Volcanic museum"],
          detailsChinese: ["活火山", "壯觀景色", "火山博物館"],
          icon: "Flame",
          description:
            "下午前往阿蘇火山口，這是日本最活躍的火山之一，也是世界上最大的活火山口之一。阿蘇火山口直徑約25公里，周長約128公里，是世界上少數可以近距離觀察的活火山之一。從阿蘇山纜車站搭乘纜車可以到達火山口觀察站，從這裡可以看到冒著硫磺煙霧的中岳火山口，景色非常壯觀。火山口呈現出獨特的翡翠綠色，這是由於火山口湖中含有硫磺和其他礦物質。參觀阿蘇火山博物館，了解阿蘇火山的地質歷史和火山活動。博物館內有詳細的展示和互動設施，介紹火山的形成過程、噴發歷史和對當地生態的影響。注意：根據火山活動情況，火山口可能會臨時關閉，請遵循當地安全指示。",
          descriptionChinese:
            "In the afternoon, we'll head to the Aso Volcano crater, one of Japan's most active volcanoes and one of the world's largest active volcanic craters. The Aso volcanic crater is about 25 kilometers in diameter with a circumference of about 128 kilometers, making it one of the few active volcanoes in the world that can be observed up close. From the Aso Mountain Ropeway Station, you can take a cable car to the crater observation station, from where you can see the Nakadake crater emitting sulfurous fumes, which is a spectacular sight. The crater displays a unique emerald green color due to the sulfur and other minerals in the crater lake. We'll visit the Aso Volcano Museum to learn about Aso's geological history and volcanic activity. The museum has detailed exhibits and interactive facilities, introducing the formation process of the volcano, eruption history, and its impact on the local ecology. Note: The crater may be temporarily closed depending on volcanic activity, please follow local safety instructions.",
          image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop",
        },
        {
          time: "Evening",
          title: "Aso Bear Ranch & Hot Springs",
          titleChinese: "阿蘇熊牧場與溫泉",
          details: ["Various bear species", "Natural hot springs"],
          detailsChinese: ["各種熊類", "天然溫泉"],
          icon: "Droplets",
          description:
            "傍晚參觀阿蘇熊牧場，這裡有多種熊類，包括日本黑熊、棕熊和北極熊。阿蘇熊牧場是日本最大的熊類保護區之一，佔地約10公頃，目前飼養了約70頭熊。遊客可以近距離觀察熊的生活習性，還可以購買特製的熊食餵食熊（在安全的環境下）。牧場內還有熊主題的紀念品商店和餐廳，提供熊主題的食品和紀念品。之後前往當地溫泉旅館，泡一泡舒緩疲勞，享受日本傳統溫泉文化。阿蘇地區的溫泉以其豐富的礦物質和療效聞名，有助於緩解疲勞和改善血液循環。晚餐品嚐阿蘇地區特色的山珍料理，如阿蘇赤牛肉和新鮮山菜。阿蘇赤牛是日本著名的和牛品種之一，肉質鮮嫩多汁，風味獨特。山菜則是採集自阿蘇山區的野生蔬菜，如蕨菜、蕗蕎等，清新爽口，營養豐富。",
          descriptionChinese:
            "In the evening, we'll visit the Aso Bear Ranch, which houses various bear species including Japanese black bears, brown bears, and polar bears. Aso Bear Ranch is one of the largest bear conservation areas in Japan, covering about 10 hectares and currently housing about 70 bears. Visitors can observe the bears' living habits up close and can purchase special bear food to feed the bears (in a safe environment). The ranch also has a bear-themed souvenir shop and restaurant, offering bear-themed food and souvenirs. Afterwards, we'll go to a local hot spring inn to soak and relieve fatigue, enjoying traditional Japanese onsen culture. The hot springs in the Aso region are known for their rich minerals and therapeutic effects, helping to relieve fatigue and improve blood circulation. For dinner, we'll taste Aso region specialties such as Aso red beef and fresh mountain vegetables. Aso red beef is one of Japan's famous Wagyu varieties, with tender and juicy meat and a unique flavor. Mountain vegetables are wild vegetables collected from the Aso mountain area, such as bracken and butterbur, which are fresh, crisp, and nutritious.",
          image: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2070&auto=format&fit=crop",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13353.286167414673!2d131.0871823196716!3d32.8828659809599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540e7ddf0e9a271%3A0x8c1f8c0c0c0c0c0c!2z6Zi_6JKy5bGx!5e0!3m2!1szh-TW!2sjp!4v1617235689721!5m2!1szh-TW!2sjp",
    },
    {
      day: 7,
      date: "April 7",
      location: "Yufuin",
      locationChinese: "由布院",
      description: "今天我們將前往由布院，這是一個風景如畫的溫泉小鎮，有許多特色商店和美麗的自然風光。",
      descriptionChinese:
        "Today we'll go to Yufuin, a picturesque hot spring town with many specialty shops and beautiful natural scenery.",
      activities: [
        {
          time: "Morning",
          title: "Yufuin Floral Village & Shopping Streets",
          titleChinese: "由布院花卉村與購物街",
          details: ["Peter Rabbit themed village", "Specialty shops", "Local crafts"],
          detailsChinese: ["彼得兔主題村", "特色商店", "當地手工藝品"],
          icon: "ShoppingBag",
          description:
            "早上探索由布院Floral Village，這是一個以彼得兔為主題的可愛小村莊，有許多精緻的商店和咖啡館。由布院Floral Village是一個英國風格的主題村落，佔地約5,000平方米，由20多間特色小店組成。村內有彼得兔主題商店，販售各種彼得兔周邊商品；英式下午茶店，提供正宗的英式茶點；手工藝品店，展示當地藝術家的作品。建築風格模仿英國鄉村，紅磚牆、木框窗和花園設計，營造出童話般的氛圍。之後沿著湯之坪街道漫步，這條街道兩旁有各種特色商店，如Snoopy茶屋、Miffy麵包店、貓頭鷹門店等。湯之坪街道全長約1.5公里，是由布院最熱鬧的商業街，有超過70家特色商店。除了動漫主題店外，還有許多販售當地特產的商店，如柚子胡椒、麻竹筍、由布院牛奶等。別忘了品嚐B-Speak的著名蛋糕卷和幸福麵包的美味甜點。B-Speak的蛋糕卷是由布院最著名的甜點之一，使用當地新鮮雞蛋和牛奶製作，口感輕盈鬆軟，每天限量供應，常常排隊購買。",
          descriptionChinese:
            "In the morning, we'll explore Yufuin Floral Village, a cute Peter Rabbit themed village with many exquisite shops and cafes. Yufuin Floral Village is a British-style themed village covering about 5,000 square meters, consisting of more than 20 specialty shops. The village has Peter Rabbit themed stores selling various Peter Rabbit merchandise; English afternoon tea shops offering authentic English tea sets; craft shops showcasing works by local artists. The architectural style mimics British countryside, with red brick walls, wooden frame windows, and garden designs, creating a fairy-tale atmosphere. Afterwards, we'll stroll along Yunotsubo Street, which is lined with various specialty shops such as the Snoopy Tea House, Miffy Bakery, Owl Store, etc. Yunotsubo Street is about 1.5 kilometers long and is the busiest commercial street in Yufuin, with over 70 specialty shops. Besides anime-themed stores, there are many shops selling local specialties such as yuzu pepper, bamboo shoots, and Yufuin milk. Don't forget to taste B-Speak's famous cake rolls and Happy Bread's delicious pastries. B-Speak's cake rolls are one of Yufuin's most famous desserts, made with fresh local eggs and milk, with a light and fluffy texture, available in limited quantities daily and often with long queues.",
          image: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2070&auto=format&fit=crop",
        },
        {
          time: "Afternoon",
          title: "Kinrin Lake & Scenic Views",
          titleChinese: "金鱗湖與風景",
          details: ["Hot spring lake", "Beautiful reflections", "Surrounding nature"],
          detailsChinese: ["溫泉湖", "美麗倒影", "周圍自然風光"],
          icon: "Waves",
          description:
            "下午前往金鱗湖，這是一個被稱為「由布院的寶石」的溫泉湖。金鱗湖面積約6,600平方米，最深處約1.5米，是由溫泉水和地下水混合形成的湖泊。湖名「金鱗」來源於清晨陽光照射在湖面上，水面閃爍如金色魚鱗的景象。湖水溫度常年保持在約18度，即使在寒冷的冬天也不會結冰，湖面常年冒著溫泉蒸氣，特別是在清晨和黃昏時分，景色非常夢幻。湖邊有許多藝術畫廊和咖啡館，可以一邊欣賞湖景一邊休息。從湖邊的小山丘上可以俯瞰整個由布院盆地和遠處的由布岳。由布岳是一座雙峰火山，海拔約1,584米，被稱為「九州富士山」，四季景色各異，是由布院的象徵。沿著湖邊的步道漫步，可以欣賞到不同角度的湖景和周圍的自然風光，步道全長約1公里，步行約需30分鐘。",
          descriptionChinese:
            "In the afternoon, we'll visit Kinrin Lake, a hot spring lake known as the 'Jewel of Yufuin'. Kinrin Lake covers about 6,600 square meters with a maximum depth of about 1.5 meters, formed by a mixture of hot spring water and groundwater. The lake's name 'Kinrin' (golden scales) comes from the scene of morning sunlight reflecting on the lake surface, making it sparkle like golden fish scales. The lake water maintains a temperature of about 18 degrees Celsius year-round, never freezing even in cold winters. The lake surface emits hot spring steam year-round, creating a dreamy scene especially in the early morning and at dusk. There are many art galleries and cafes around the lake where you can rest while enjoying the lake view. From the small hill by the lake, you can overlook the entire Yufuin basin and the distant Mt. Yufu. Mt. Yufu is a twin-peaked volcano about 1,584 meters high, known as the 'Kyushu Mt. Fuji', with different scenery in each season and is a symbol of Yufuin. Walking along the lakeside path, you can enjoy different angles of the lake view and the surrounding natural scenery. The path is about 1 kilometer long and takes about 30 minutes to walk.",
          image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop",
        },
        {
          time: "Evening",
          title: "Traditional Ryokan Experience",
          titleChinese: "傳統日式旅館體驗",
          details: ["Private onsen", "Kaiseki dinner", "Tatami rooms"],
          detailsChinese: ["私人溫泉", "懷石料理晚餐", "榻榻米房間"],
          icon: "Home",
          description:
            "晚上入住由布院的傳統日式旅館（ryokan），體驗日本的傳統住宿文化。由布院的溫泉旅館多建於山坡上，可以欣賞到由布院盆地的美麗景色。旅館通常提供兩種溫泉浴：大浴場（公共溫泉）和露天風呂（戶外溫泉），有些高級旅館還提供客房內的私人溫泉。享受私人溫泉浴，穿著浴衣在旅館內放鬆。日式浴衣是輕便的棉質和服，旅館會提供給客人在館內穿著，穿著方法是左衽（右邊的衣襟在上），與和服相反。晚餐品嚐精緻的懷石料理，這是日本的高級傳統多道菜餐，使用當季的新鮮食材。懷石料理通常包括前菜、生魚片、煮物、烤物、蒸物、醋物、湯和甜點等多道菜，每道菜都精心擺盤，既美味又賞心悅目。在榻榻米房間享受寧靜的夜晚，感受日本的傳統生活方式。榻榻米是用稻草製成的傳統日本地板，鋪上柔軟的被褥作為床，提供舒適的睡眠體驗。",
          descriptionChinese:
            "In the evening, we'll stay at a traditional Japanese inn (ryokan) in Yufuin, experiencing traditional Japanese accommodation culture. Yufuin's hot spring inns are often built on hillsides, offering beautiful views of the Yufuin basin. The inn usually offers two types of hot spring baths: large public baths and open-air baths, with some high-end inns also providing private hot springs in the guest rooms. We'll enjoy private hot spring baths and relax in the inn wearing yukata. Yukata is a light cotton kimono that the inn provides for guests to wear within the premises, worn with the right side over the left, opposite to formal kimono. For dinner, we'll taste exquisite kaiseki cuisine, a high-end traditional Japanese multi-course meal using fresh seasonal ingredients. Kaiseki cuisine usually includes appetizers, sashimi, simmered dishes, grilled dishes, steamed dishes, vinegared dishes, soup, and desserts, each dish carefully presented, both delicious and visually appealing. We'll enjoy a peaceful night in tatami rooms, experiencing the traditional Japanese lifestyle. Tatami is a traditional Japanese floor made of straw, with soft futon bedding laid on top, providing a comfortable sleeping experience.",
          image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=2070&auto=format&fit=crop",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13353.286167414673!2d131.3671823196716!3d33.2628659809599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546b3d7a5507d65%3A0x8c1f8c0c0c0c0c0c!2z55Sx5biD6Zmi!5e0!3m2!1szh-TW!2sjp!4v1617235689721!5m2!1szh-TW!2sjp",
    },
    // Additional days would be added here
  ]

  return (
    <section id="itinerary" className="scroll-mt-16">
      <Card className="border-primary/20">
        <CardHeader className="border-b border-border">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            每日行程 | Daily Itinerary
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-3 bg-gray-50">
              <TabsTrigger value="all" className="data-[state=active]:bg-white">
                全部 | All
              </TabsTrigger>
              <TabsTrigger value="hong-kong" className="data-[state=active]:bg-white">
                香港 | Hong Kong
              </TabsTrigger>
              <TabsTrigger value="japan" className="data-[state=active]:bg-white">
                日本 | Japan
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="pt-4">
              <div className="space-y-8">
                {days.map((day) => (
                  <DayCard key={day.day} day={day} openMap={openMap} setOpenMap={setOpenMap} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hong-kong" className="pt-4">
              <div className="space-y-8">
                {days
                  .filter((day) => day.location.includes("Hong Kong"))
                  .map((day) => (
                    <DayCard key={day.day} day={day} openMap={openMap} setOpenMap={setOpenMap} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="japan" className="pt-4">
              <div className="space-y-8">
                {days
                  .filter(
                    (day) =>
                      day.location.includes("Kumamoto") ||
                      day.location.includes("Aso") ||
                      day.location.includes("Yufuin") ||
                      day.location.includes("Yanagawa") ||
                      day.location.includes("Dazaifu") ||
                      day.location.includes("Fukuoka"),
                  )
                  .map((day) => (
                    <DayCard key={day.day} day={day} openMap={openMap} setOpenMap={setOpenMap} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}

function DayCard({
  day,
  openMap,
  setOpenMap,
}: {
  day: DayData
  openMap: string | null
  setOpenMap: (url: string | null) => void
}) {
  const getIcon = (iconName: string | undefined) => {
    switch (iconName) {
      case "Landmark":
        return <Landmark className="h-4 w-4" />
      case "Coffee":
        return <Coffee className="h-4 w-4" />
      case "Utensils":
        return <Utensils className="h-4 w-4" />
      case "Camera":
        return <Camera className="h-4 w-4" />
      case "Train":
        return <Train className="h-4 w-4" />
      case "ShoppingBag":
        return <ShoppingBag className="h-4 w-4" />
      case "Mountain":
        return <Mountain className="h-4 w-4" />
      case "Waves":
        return <Waves className="h-4 w-4" />
      case "Droplets":
        return <Droplets className="h-4 w-4" />
      case "Flame":
        return <Flame className="h-4 w-4" />
      case "Home":
        return <Home className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="timeline-card">
      <div className="day-number">Day {day.day}</div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 p-6 bg-white border-r border-gray-100">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-1">
              {day.date} | {day.locationChinese}
            </h3>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              {day.location}
            </Badge>
            {day.description && <p className="mt-3 text-muted-foreground text-sm">{day.descriptionChinese}</p>}
          </div>

          <div className="space-y-6">
            {day.activities.map((activity, idx) => (
              <div key={idx} className="activity-item">
                <div className="activity-time">
                  {getIcon(activity.icon)}
                  <span className="ml-1">{activity.time}</span>
                </div>
                <h4 className="font-medium text-lg">
                  {activity.titleChinese} | {activity.title}
                </h4>
                {activity.description && (
                  <p className="mt-1 text-sm text-muted-foreground">{activity.descriptionChinese}</p>
                )}
                {activity.details && (
                  <ul className="mt-2 space-y-1">
                    {activity.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <span className="h-1 w-1 rounded-full bg-primary mr-2"></span>
                        <span>
                          {activity.detailsChinese?.[i] || ""} {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <Dialog open={openMap === day.mapUrl} onOpenChange={(open) => setOpenMap(open ? day.mapUrl : null)}>
              <DialogTrigger asChild>
                <button className="text-sm underline">查看地圖 | View Map</button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl w-[90vw] bg-white">
                <div className="aspect-video w-full">
                  <iframe
                    src={day.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="md:w-2/3 p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {day.activities.map(
              (activity, idx) =>
                activity.image && (
                  <div key={idx} className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src={activity.image || "/placeholder.svg"}
                      alt={`${activity.title} - ${day.location}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/70 text-white p-2 text-sm">
                      {activity.titleChinese} | {activity.title}
                    </div>
                  </div>
                ),
            )}
            {day.images.map((img, idx) => (
              <div key={`img-${idx}`} className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Day ${day.day} - ${day.location}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="map-embed aspect-[16/9] w-full">
            <iframe
              src={day.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

