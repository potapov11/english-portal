import { ADD_SELECTED_WORD_TYPE } from '../../utils/vars.js';
import { AddSelectedWordType } from '../../utils/types.ts';

const initialState = {
	selectedWordValue: '',
};

export const selectWordsReducer = (state = initialState, action: AddSelectedWordType): unknown => {
	switch (action.type) {
		case ADD_SELECTED_WORD_TYPE:
			return { ...state, selectedWordValue: action.payload };
		default:
			return state;
	}
};
