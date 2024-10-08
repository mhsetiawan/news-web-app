import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk for fetching Indonesia news data
export const fetchIndonesiaNews = createAsyncThunk(
  "news/fetchIndonesiaNews",
  async (page) => {
    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }?q=indonesia&fq=glocations:(%22indonesia%22)&sort=newest&page=${
        page || 0
      }&api-key=${import.meta.env.VITE_API_KEY}`
    );
    const json = await response.json();
    const data = await json.response.docs;
    const articlesCount = json.response.meta.hits;
    return { data, articlesCount };
  }
);
// Define the async thunk for fetching programming news data
export const fetchProgrammingNews = createAsyncThunk(
  "news/fetchProgrammingNews",
  async (page) => {
    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }?q=computer&fq=news_desk:(%22Technology%22)&sort=newest&page=${
        page || 0
      }&api-key=${import.meta.env.VITE_API_KEY}`
    );
    const json = await response.json();
    const data = await json.response.docs;
    const articlesCount = json.response.meta.hits;
    return { data, articlesCount };
  }
);
// Define the async thunk for fetching search news data
export const fetchSearchNews = createAsyncThunk(
  "news/fetchSearchNews",
  async ({ currentPage: page, query }) => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}?q=${query}&sort=newest&page=${
        page || 0
      }&api-key=${import.meta.env.VITE_API_KEY}`
    );

    const json = await response.json();
    const data = await json.response.docs;
    const articlesCount = json.response.meta.hits;
    return { data, articlesCount };
  }
);

// Define the indonesia news slice
const indonesiaNewsSlice = createSlice({
  name: "indonesiaNews",
  initialState: {
    data: [],
    dataCount: 0,
    isLoading: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIndonesiaNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIndonesiaNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.dataCount = action.payload.articlesCount;
      })
      .addCase(fetchIndonesiaNews.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      });
  },
});

// Define the programming news slice
const programmingNewsSlice = createSlice({
  name: "programmingNews",
  initialState: {
    data: [],
    dataCount: 0,
    isLoading: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgrammingNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProgrammingNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.dataCount = action.payload.articlesCount;
      })
      .addCase(fetchProgrammingNews.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      });
  },
});
// Define the search news slice
const searchNewsSlice = createSlice({
  name: "searchNews",
  initialState: {
    data: [],
    dataCount: 0,
    isLoading: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.dataCount = action.payload.articlesCount;
      })
      .addCase(fetchSearchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      });
  },
});

export { indonesiaNewsSlice, programmingNewsSlice, searchNewsSlice };
