import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Project {
  id: string
  name: string
  description: string
  location: string
  startDate: string
  endDate: string | null
  category: string
  createdBy: string
  participants: number
}

interface ProjectsState {
  projects: Project[]
  userProjects: Project[]
  currentProject: Project | null
  isLoading: boolean
  error: string | null
}

const initialState: ProjectsState = {
  projects: [],
  userProjects: [],
  currentProject: null,
  isLoading: false,
  error: null,
}

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetchProjectsStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    fetchProjectsSuccess: (state, action: PayloadAction<Project[]>) => {
      state.isLoading = false
      state.projects = action.payload
    },
    fetchUserProjectsSuccess: (state, action: PayloadAction<Project[]>) => {
      state.isLoading = false
      state.userProjects = action.payload
    },
    fetchProjectsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    setCurrentProject: (state, action: PayloadAction<Project>) => {
      state.currentProject = action.payload
    },
    clearCurrentProject: (state) => {
      state.currentProject = null
    },
  },
})

export const {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchUserProjectsSuccess,
  fetchProjectsFailure,
  setCurrentProject,
  clearCurrentProject,
} = projectsSlice.actions

export default projectsSlice.reducer

