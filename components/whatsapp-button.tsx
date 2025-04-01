"use client"

import { Phone } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"

export default function WhatsAppButton() {
  const { toast } = useToast()

  const handleClick = () => {
    // Open WhatsApp with the phone number
    window.open(`https://wa.me/85298066356`, "_blank")

    // Show toast notification
    toast({
      title: "WhatsApp Contact",
      description: "Opening WhatsApp chat with Kit (+852 98066356)",
    })
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleClick}
            className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors"
            aria-label="Contact via WhatsApp"
          >
            <Phone className="h-6 w-6" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>聯繫 Kit: +852 98066356</p>
          <p>Contact Kit: +852 98066356</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

