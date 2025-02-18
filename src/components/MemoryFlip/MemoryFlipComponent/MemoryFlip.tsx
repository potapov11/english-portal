import React from 'react';
import styles from './MemoryFlip.module.scss';
import { FlipCard } from '../FlipCard/FlipCard';
import classNames from 'classnames';

export const MemoryFlip = () => {
	return (
		<div className={classNames(styles.container, styles.memory_wrap)}>
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
			<FlipCard />
		</div>
	);
};
