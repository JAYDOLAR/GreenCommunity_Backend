import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/auth-slice"
import projectsReducer from "./slices/projects-slice"
import educationReducer from "./slices/education-slice"
import communityReducer from "./slices/community-slice"
import marketplaceReducer from "./slices/marketplace-slice"
import carbonReducer from "./slices/carbon-slice"
import chatbotReducer from "./slices/chatbot-slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectsReducer,
    education: educationReducer,
    community: communityReducer,
    marketplace: marketplaceReducer,
    carbon: carbonReducer,
    chatbot: chatbotReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

