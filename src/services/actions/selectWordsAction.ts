import { ADD_SELECTED_WORD_TYPE } from '../../utils/vars.js';

interface AddSelectedWordType {
	type: typeof ADD_SELECTED_WORD_TYPE;
}

export const selectWordAction = (): AddSelectedWordType => ({
	type: ADD_SELECTED_WORD_TYPE,
});
