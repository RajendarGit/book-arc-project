import { configureStore } from '@reduxjs/toolkit'
import productsSliceReducer from './features/productSlice'
import cartReducer from './features/cartSlice'

export const store = configureStore({
  reducer: {
    products: productsSliceReducer,
    cart: cartReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch