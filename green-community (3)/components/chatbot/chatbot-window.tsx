"use client"

import type React from "react"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, Leaf } from "lucide-react"
import { useChatbot } from "./chatbot-provider"
import { sendMessageStart, sendMessageSuccess, receiveMessage } from "@/lib/slices/chatbot-slice"
import { v4 as uuidv4 } from "uuid"

export function ChatbotWindow() {
  const { isOpen, toggleChatbot } = useChatbot()
  const dispatch = useDispatch()
  const { messages, isLoading, sessionId } = useSelector((state: RootState) => state.chatbot)
  const [input, setInput] = useState("")

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim() || isLoading) return

    const userMessage = {
      id: uuidv4(),
      content: input,
      direction: "inbound" as const,
      timestamp: new Date().toISOString(),
    }

    dispatch(sendMessageStart())
    dispatch(sendMessageSuccess(userMessage))
    setInput("")

    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      const botMessage = {
        id: uuidv4(),
        content: getBotResponse(input),
        direction: "outbound" as const,
        timestamp: new Date().toISOString(),
      }
      dispatch(receiveMessage(botMessage))
    }, 1000)
  }

  // Simple bot response logic (would be replaced with actual AI in production)
  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! I'm your GreenCommunity assistant. How can I help you with sustainability today?"
    } else if (lowerMessage.includes("project") || lowerMessage.includes("initiative")) {
      return "We have many environmental projects you can join! Check out the Projects section to find initiatives in your area."
    } else if (lowerMessage.includes("carbon") || lowerMessage.includes("footprint")) {
      return "Our Carbon Footprint Tracker can help you monitor and reduce your environmental impact. Would you like to learn more about it?"
    } else if (lowerMessage.includes("marketplace") || lowerMessage.includes("product")) {
      return "Our Green Marketplace offers eco-friendly products from local vendors. You can browse products by category or eco-rating."
    } else if (lowerMessage.includes("education") || lowerMessage.includes("learn")) {
      return "We offer various educational resources on sustainability topics. Check out our articles, videos, and quizzes in the Education section."
    } else {
      return "Thank you for your message. Is there anything specific about environmental sustainability you'd like to know more about?"
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex h-[500px] w-[350px] flex-col rounded-lg border bg-background shadow-xl animate-fade-in">
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-primary" />
          <h3 className="font-medium">GreenCommunity Assistant</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={toggleChatbot} aria-label="Close chatbot">
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1 p-4">
        <div className="flex flex-col gap-4">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 p-4 text-center text-muted-foreground">
              <Leaf className="h-12 w-12 text-primary/50" />
              <p>Hi there! I'm your GreenCommunity assistant. How can I help you with sustainability today?</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex max-w-[80%] flex-col rounded-lg p-3 ${
                  message.direction === "inbound" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <span className="mt-1 text-right text-xs opacity-70">
                  {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex max-w-[80%] flex-col rounded-lg bg-muted p-3">
              <div className="flex gap-1">
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary"></div>
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary" style={{ animationDelay: "0.2s" }}></div>
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <form onSubmit={handleSendMessage} className="flex items-center gap-2 border-t p-4">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}

