import { createSlice } from "@reduxjs/toolkit";

export const quoterSlice = createSlice({
  name: "quoter",
  initialState: {
    tag: "",
    quote: {
      content: "The human spirit must prevail overtechnology",
      author: "Albert Einstein",
    },
    bookmarks: [],
  },
  reducers: {
    updatetag: (state, action) => {
      state.tag = action.payload;
    },
    updatequote: (state, action) => {
      state.quote = action.payload;
    },
    updatebookmarks: (state, action) => {
      state.bookmarks = [...state.bookmarks, action.payload];
    },
    removeFromBookmarks: (state, action) => {
      const newBookmarks = [...state.bookmarks];
      newBookmarks.splice(action.payload, 1);
      state.bookmarks = newBookmarks;
    },
  },
});

export const { updatetag, updatequote, updatebookmarks, removeFromBookmarks } =
  quoterSlice.actions;

export default quoterSlice.reducer;
