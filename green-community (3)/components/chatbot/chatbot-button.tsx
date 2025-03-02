"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useChatbot } from "./chatbot-provider"

export function ChatbotButton() {
  const { toggleChatbot } = useChatbot()

  return (
    <Button
      onClick={toggleChatbot}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg eco-gradient"
      size="icon"
      aria-label="Open chatbot"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}

