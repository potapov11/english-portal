import React from 'react';
import { Header } from '../Header/Header';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home/Home.tsx';
import { Texts } from '../../pages/Texts/Texts.tsx';
import { MemoryPage } from '../../pages/MemoryPage/MemoryPage.tsx';
// import styles from './App.module.scss';

const App = (): React.JSX.Element => (
	<>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/memory" element={<MemoryPage />} />
			<Route path="/texts" element={<Texts />} />
		</Routes>
	</>
);

export default App;
