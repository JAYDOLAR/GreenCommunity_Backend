import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Message {
  id: string
  content: string
  direction: "inbound" | "outbound"
  timestamp: string
}

interface ChatbotState {
  messages: Message[]
  isOpen: boolean
  isLoading: boolean
  sessionId: string | null
  error: string | null
}

const initialState: ChatbotState = {
  messages: [],
  isOpen: false,
  isLoading: false,
  sessionId: null,
  error: null,
}

const chatbotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    toggleChatbot: (state) => {
      state.isOpen = !state.isOpen
    },
    initSession: (state, action: PayloadAction<string>) => {
      state.sessionId = action.payload
    },
    sendMessageStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    sendMessageSuccess: (state, action: PayloadAction<Message>) => {
      state.isLoading = false
      state.messages.push(action.payload)
    },
    receiveMessage: (state, action: PayloadAction<Message>) => {
      state.isLoading = false
      state.messages.push(action.payload)
    },
    sendMessageFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    clearMessages: (state) => {
      state.messages = []
    },
  },
})

export const {
  toggleChatbot,
  initSession,
  sendMessageStart,
  sendMessageSuccess,
  receiveMessage,
  sendMessageFailure,
  clearMessages,
} = chatbotSlice.actions

export default chatbotSlice.reducer

