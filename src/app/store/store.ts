import { configureStore } from '@reduxjs/toolkit'
import {counterReducer, productsReducer , cartReducer} from '../../features/counter/counterSlice'
import searchReducer from "../../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productsReducer,
    cart: cartReducer,
    search: searchReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch