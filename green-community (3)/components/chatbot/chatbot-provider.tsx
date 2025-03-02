"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { initSession } from "@/lib/slices/chatbot-slice"
import { ChatbotButton } from "./chatbot-button"
import { ChatbotWindow } from "./chatbot-window"

type ChatbotContextType = {
  isOpen: boolean
  toggleChatbot: () => void
}

const ChatbotContext = createContext<ChatbotContextType>({
  isOpen: false,
  toggleChatbot: () => {},
})

export const useChatbot = () => useContext(ChatbotContext)

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    // Generate a unique session ID when the component mounts
    const sessionId = uuidv4()
    dispatch(initSession(sessionId))
  }, [dispatch])

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <ChatbotContext.Provider value={{ isOpen, toggleChatbot }}>
      {children}
      <ChatbotButton />
      <ChatbotWindow />
    </ChatbotContext.Provider>
  )
}

