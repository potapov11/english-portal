import React from 'react';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero.tsx';
import { HeroSwiper } from '../Swiper/Swiper-hero.tsx';
import styles from './App.module.scss';

function App() {
	return (
		<>
			<Header />
			<Hero />
		</>
	);
}

export default App;
