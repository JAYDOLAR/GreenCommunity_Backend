import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Resource {
  id: string
  title: string
  description: string
  resourceType: string
  link: string
  topic: string
  language: string
}

interface EducationState {
  resources: Resource[]
  filteredResources: Resource[]
  currentResource: Resource | null
  isLoading: boolean
  error: string | null
}

const initialState: EducationState = {
  resources: [],
  filteredResources: [],
  currentResource: null,
  isLoading: false,
  error: null,
}

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    fetchResourcesStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    fetchResourcesSuccess: (state, action: PayloadAction<Resource[]>) => {
      state.isLoading = false
      state.resources = action.payload
      state.filteredResources = action.payload
    },
    fetchResourcesFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    setCurrentResource: (state, action: PayloadAction<Resource>) => {
      state.currentResource = action.payload
    },
    clearCurrentResource: (state) => {
      state.currentResource = null
    },
    filterResources: (state, action: PayloadAction<{ topic?: string; type?: string; language?: string }>) => {
      const { topic, type, language } = action.payload
      state.filteredResources = state.resources.filter((resource) => {
        return (
          (!topic || resource.topic === topic) &&
          (!type || resource.resourceType === type) &&
          (!language || resource.language === language)
        )
      })
    },
    clearFilters: (state) => {
      state.filteredResources = state.resources
    },
  },
})

export const {
  fetchResourcesStart,
  fetchResourcesSuccess,
  fetchResourcesFailure,
  setCurrentResource,
  clearCurrentResource,
  filterResources,
  clearFilters,
} = educationSlice.actions

export default educationSlice.reducer

