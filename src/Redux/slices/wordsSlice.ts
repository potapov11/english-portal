interface Todo {
	id: number;
	text: string;
}

const initialState: Todo[] = [];

import { createSlice } from '@reduxjs/toolkit';

const wordSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addWords: (state, action) => {
			state.splice(0, state.length);
			state.push({ id: Date.now(), text: action.payload });
		},
	},
});

export const { addWords } = wordSlice.actions;
export default wordSlice.reducer;
