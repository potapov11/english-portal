import React from 'react';
import styles from './FlipCard.module.scss';
import classNames from 'classnames';

interface ComponentProps {
	englishWord: string;
	russianWord: string;
}

export const FlipCard = ({ englishWord, russianWord }: ComponentProps) => {
	return (
		<div className={styles.card}>
			<div className={classNames(styles.side, styles.front)}>{englishWord}</div>
			<div className={classNames(styles.side, styles.back)}>{russianWord}</div>
		</div>
	);
};
