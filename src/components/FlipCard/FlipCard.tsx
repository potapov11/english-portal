import React from 'react';
import styles from './FlipCard.module.scss';
import classNames from 'classnames';

export const FlipCard = () => {
	return (
		<div className={styles.card}>
			<div className={classNames(styles.side, styles.front)}>Front</div>
			<div className={classNames(styles.side, styles.back)}>Back</div>
		</div>
	);
};
