import React from 'react';
import styles from './MemoryFlip.module.scss';
import { FlipCard } from '../FlipCard/FlipCard';
import classNames from 'classnames';
import { words } from '../../../utils/vars.js';
import { IWordItem } from '../../../utils/types.ts';

export const MemoryFlip = () => {
	return (
		<div className={classNames(styles.container, styles.memory_wrap)}>
			{words?.length > 0 &&
				words.map((item: IWordItem) => {
					return <FlipCard englishWord={item.english} russianWord={item.russian} key={item.id} />;
				})}
		</div>
	);
};
