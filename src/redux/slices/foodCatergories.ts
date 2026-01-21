
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFoodCategories } from '../../api/services/foods/getFoodCategories';
import { toast } from 'sonner';

export interface FoodCategory {
 name: string;
 is_active: boolean;
 id: number;
 image?: string;
}

interface FoodCategoriesState {
  allCategories: FoodCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: FoodCategoriesState = {
  allCategories: [],
  loading: false,
  error: null,
};

export const fetchAllCategories = createAsyncThunk<FoodCategory[]>(
  'foodCategories/fetchAllCategories',
  async (_, { rejectWithValue }) => {
    try {
      return await getFoodCategories();
    } catch (err: any) {
      toast.error(err.message || 'An error occurred');  
      return rejectWithValue(err.message || 'An error occurred');
    }
  }
);

export const foodCategoriesSlice = createSlice({
  name: 'foodCategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.allCategories = action.payload;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'An error occurred';
      });
  },
});

export default foodCategoriesSlice.reducer;
