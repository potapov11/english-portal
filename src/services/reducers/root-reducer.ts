// import { dataReducer } from './data-reducer/data-reducer';
// import { constructorReducer } from './constructor-reducer/constructor-reducer';
// import { modalIngredientReducer } from './modal-ingredient-reducer/modal-ingredient-reducer';
// import { orderReducer } from './order-reducer/order-reducer';
// import { userReducer } from './login-reducer/login-reducer';
// import { orderSocketReducer } from './order-socket-reducer/order-socket-reducer';
import { selectWordsReducer } from './selectWordsReducer.ts';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	// data: dataReducer,
	// constructorReducer: constructorReducer,
	// modalIngredientReducer: modalIngredientReducer,
	// orderReducer: orderReducer,
	// loginReducer: userReducer,
	// orderSocketReducer: orderSocketReducer,
	selectWordsReducer: selectWordsReducer,
});

export default rootReducer;
