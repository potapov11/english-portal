import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames';
import { Hero } from '../../components/Hero/Hero';

export const Home = () => (
		<div className={classNames()}>
			<Hero />
		</div>
	);
