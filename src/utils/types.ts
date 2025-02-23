import { ADD_SELECTED_WORD_TYPE } from './vars.js';

export interface IWordItem {
	id: string;
	english: string;
	russian: string;
}

export interface AddSelectedWordType {
	type: typeof ADD_SELECTED_WORD_TYPE;
	payload: string;
}
