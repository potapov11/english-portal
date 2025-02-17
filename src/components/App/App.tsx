import { Header } from '../Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home/Home.tsx';
import { MemoryPage } from '../../pages/MemoryPage/MemoryPage.tsx';
import styles from './App.module.scss';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/memory" element={<MemoryPage />} />
			</Routes>
		</>
	);
}

export default App;
