import { ADD_SELECTED_WORD_TYPE } from '../../utils/vars.js';

const initialState = {
	selectedWordValue: '',
};

export const selectWordsReducer = (state = initialState, action: OrderAction): OrderState => {
	console.log(action);

	switch (action.type) {
		case ADD_SELECTED_WORD_TYPE:
			return { ...state, selectedWordValue: action.payload };
		default:
			return state;
	}
};
