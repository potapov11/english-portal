import React from 'react';
import styles from './Memory.module.scss';
import classNames from 'classnames';
import { MemoryFlip } from '../../components/MemoryFlip/MemoryFlipComponent/MemoryFlip.tsx';

export const MemoryPage = () => {
	return (
		<div className={classNames(styles.memory)}>
			<MemoryFlip />
			<p>
				stylesksl;dkfks;dfks;dlfk Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti nobis deserunt est reiciendis vel odio ratione consectetur quasi. Rem provident dolores
				mollitia quam quis reprehenderit consequuntur distinctio, facere quasi.
			</p>
		</div>
	);
};
