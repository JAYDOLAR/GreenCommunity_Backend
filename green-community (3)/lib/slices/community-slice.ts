import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Post {
  id: string
  userId: string
  username: string
  title: string
  content: string
  category: string
  createdAt: string
  updatedAt: string
  commentCount: number
}

interface Comment {
  id: string
  postId: string
  userId: string
  username: string
  content: string
  createdAt: string
  updatedAt: string
}

interface CommunityState {
  posts: Post[]
  filteredPosts: Post[]
  currentPost: Post | null
  comments: Comment[]
  isLoading: boolean
  error: string | null
}

const initialState: CommunityState = {
  posts: [],
  filteredPosts: [],
  currentPost: null,
  comments: [],
  isLoading: false,
  error: null,
}

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    fetchPostsStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    fetchPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.isLoading = false
      state.posts = action.payload
      state.filteredPosts = action.payload
    },
    fetchPostsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    setCurrentPost: (state, action: PayloadAction<Post>) => {
      state.currentPost = action.payload
    },
    clearCurrentPost: (state) => {
      state.currentPost = null
      state.comments = []
    },
    fetchCommentsSuccess: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload
    },
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload)
    },
    filterPosts: (state, action: PayloadAction<{ category?: string; search?: string }>) => {
      const { category, search } = action.payload
      state.filteredPosts = state.posts.filter((post) => {
        return (
          (!category || post.category === category) &&
          (!search ||
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.content.toLowerCase().includes(search.toLowerCase()))
        )
      })
    },
    clearFilters: (state) => {
      state.filteredPosts = state.posts
    },
  },
})

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  setCurrentPost,
  clearCurrentPost,
  fetchCommentsSuccess,
  addComment,
  filterPosts,
  clearFilters,
} = communitySlice.actions

export default communitySlice.reducer

