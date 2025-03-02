import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface CarbonRecord {
  id: string
  userId: string
  recordDate: string
  carbonScore: number
  details: Record<string, any>
}

interface CarbonState {
  records: CarbonRecord[]
  currentRecord: CarbonRecord | null
  totalScore: number
  averageScore: number
  isLoading: boolean
  error: string | null
}

const initialState: CarbonState = {
  records: [],
  currentRecord: null,
  totalScore: 0,
  averageScore: 0,
  isLoading: false,
  error: null,
}

const carbonSlice = createSlice({
  name: "carbon",
  initialState,
  reducers: {
    fetchRecordsStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    fetchRecordsSuccess: (state, action: PayloadAction<CarbonRecord[]>) => {
      state.isLoading = false
      state.records = action.payload

      // Calculate total and average scores
      if (action.payload.length > 0) {
        state.totalScore = action.payload.reduce((sum, record) => sum + record.carbonScore, 0)
        state.averageScore = state.totalScore / action.payload.length
      } else {
        state.totalScore = 0
        state.averageScore = 0
      }
    },
    fetchRecordsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    addRecord: (state, action: PayloadAction<CarbonRecord>) => {
      state.records.push(action.payload)

      // Update total and average scores
      state.totalScore += action.payload.carbonScore
      state.averageScore = state.totalScore / state.records.length
    },
    setCurrentRecord: (state, action: PayloadAction<CarbonRecord>) => {
      state.currentRecord = action.payload
    },
    clearCurrentRecord: (state) => {
      state.currentRecord = null
    },
  },
})

export const {
  fetchRecordsStart,
  fetchRecordsSuccess,
  fetchRecordsFailure,
  addRecord,
  setCurrentRecord,
  clearCurrentRecord,
} = carbonSlice.actions

export default carbonSlice.reducer

