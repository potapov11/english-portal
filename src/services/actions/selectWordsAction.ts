import { ADD_SELECTED_WORD_TYPE } from '../../utils/vars.js';
import { AddSelectedWordType } from '../../utils/types.ts';

export const selectWordAction = (newValue: string): AddSelectedWordType => ({
	type: ADD_SELECTED_WORD_TYPE,
	payload: newValue,
});
