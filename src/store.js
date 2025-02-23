import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './Redux/slices/wordsSlice.ts';

const store = configureStore({
	reducer: {
		words: wordReducer,
	},
});

export default store;
