import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import App from './components/App/App.tsx';

createRoot(document.getElementById('root')!).render(
	<Router>
		<App />
	</Router>,
);
