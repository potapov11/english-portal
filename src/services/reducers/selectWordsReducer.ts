import { ADD_SELECTED_WORD_TYPE } from '../../utils/vars.js';

const initialState = {
	selectedWordValue: '',
};

interface AddSelectedWordType {
	type: typeof ADD_SELECTED_WORD_TYPE;
	payload: string;
}

export const selectWordsReducer = (state = initialState, action: AddSelectedWordType): unknown => {
	console.error(action, 'action');

	switch (action.type) {
		case ADD_SELECTED_WORD_TYPE:
			return { ...state, selectedWordValue: action.payload };
		default:
			return state;
	}
};
