import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategories: [],
    selectedRating: null,
    priceRange: 200,
    selectedTags: [],
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        toggleCategory(state, action) {
            const cat = action.payload;
            state.selectedCategories.includes(cat)
                ? state.selectedCategories = state.selectedCategories.filter(c => c !== cat)
                : state.selectedCategories.push(cat);
        },

        setRating(state, action) {
            state.selectedRating = action.payload;
        },

        setPriceRange(state, action) {
            state.priceRange = action.payload;
        },

        toggleTag(state, action) {
            const tag = action.payload;
            state.selectedTags.includes(tag)
                ? state.selectedTags = state.selectedTags.filter(t => t !== tag)
                : state.selectedTags.push(tag);
        },

        clearFilters() {
            return initialState;
        }
    }
});

export const {
    toggleCategory,
    setRating,
    setPriceRange,
    toggleTag,
    clearFilters
} = filterSlice.actions;

export default filterSlice.reducer;
