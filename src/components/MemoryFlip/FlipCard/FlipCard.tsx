import React from 'react';
import styles from './FlipCard.module.scss';
import classNames from 'classnames';

interface ComponentProps {
	englishWord: string;
	russianWord: string;
}

export const FlipCard = ({ englishWord, russianWord }: ComponentProps): React.JSX.Element => (
	<div className={styles.card}>
		<div className={classNames(styles.side, styles.front)}>
			<p className={styles.cardWord}>{englishWord}</p>
		</div>
		<div className={classNames(styles.side, styles.back)}>
			<p className={styles.cardWord}>{russianWord}</p>
		</div>
	</div>
);
