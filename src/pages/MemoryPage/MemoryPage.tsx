import React from 'react';
import styles from './Memory.module.scss';
import { FlipCard } from '../../components/FlipCard/FlipCard';
import classNames from 'classnames';

export const MemoryPage = () => {
	return (
		<div className={classNames(styles.memory)}>
			<div className="memorycards">
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
			<p>
				stylesksl;dkfks;dfks;dlfk Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti nobis deserunt est reiciendis vel odio ratione consectetur quasi. Rem provident dolores
				mollitia quam quis reprehenderit consequuntur distinctio, facere quasi.
			</p>
		</div>
	);
};
