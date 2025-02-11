import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  info: string;
  price: number;
  imag: string;
  count: number;
}

export interface CounterState {
  query: string;
  value: number;
  items: Product[];
  cartItems: Product[]; // Manage cart separately
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CounterState = {
  query: "",
  value: 0,
  items: [],
  cartItems: [],
  status: "idle",
  error: null,
};

// Fetch Products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "https://679ab1f5747b09cdcccf8305.mockapi.io/shop-ari-zas"
    );
    if (!response.ok) throw new Error("Failed to fetch products!");
    return response.json();
  }
);

// Products slice for fetching and managing product state
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

// Cart slice to handle cart actions
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementCount: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.count += 1;
      }
    },
    decrementCount: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.count > 1) {
        item.count -= 1;
      }
    },
  },
});

// Counter slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // Action to update the search query
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { addToCart, removeFromCart, incrementCount, decrementCount } =
  cartSlice.actions;
export const { setSearchQuery } = searchSlice.actions;

// Export reducers
export const counterReducer = counterSlice.reducer;
export const productsReducer = productsSlice.reducer;
export const cartReducer = cartSlice.reducer;
export default searchSlice.reducer;
