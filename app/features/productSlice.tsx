import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

const PRODUCTS_API = process.env.NEXT_PUBLIC_PRODUCTS_API;

interface Product {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
  rating: number;
}

interface ProductsState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[], void>(
  "products/fetchProducts",
  async () => {
    if (!PRODUCTS_API) {
      throw new Error(
        "NEXT_PUBLIC_PRODUCTS_API environment variable is not set"
      );
    }

    const response = await axios.get(PRODUCTS_API);
    return response.data.products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const selectAllProducts = (state: RootState): Product[] => state.products.items;
export const selectProductsStatus = (state: RootState): ProductsState['status'] => state.products.status;
export const selectProductsError = (state: RootState): string | null => state.products.error;

export default productsSlice.reducer;