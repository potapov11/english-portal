import React from 'react';
import styles from './Memory.module.scss';
import classNames from 'classnames';
import { MemoryFlip } from '../../components/MemoryFlip/MemoryFlipComponent/MemoryFlip.tsx';
import { SelectBar } from '../../components/SelectBar/SelectBar.tsx';

export const MemoryPage = (): React.JSX.Element => (
	<div className={classNames(styles.memory)}>
		<div className={classNames(styles.memory_wrap, styles.container)}>
			<SelectBar />
			<MemoryFlip />
		</div>
	</div>
);
