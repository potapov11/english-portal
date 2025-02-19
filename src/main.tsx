import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import App from './components/App/App.tsx';
import rootReducer from './services/reducers/root-reducer.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export const store = createStore(rootReducer);

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
);
