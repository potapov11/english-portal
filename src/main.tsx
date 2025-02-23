import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App.tsx';
import { Provider } from 'react-redux';
import store from './store.js';
import './styles/main.scss';

// export const store = createStore(rootReducer);

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
);
