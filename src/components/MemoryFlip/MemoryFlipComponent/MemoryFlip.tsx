import React from 'react';
import styles from './MemoryFlip.module.scss';
import { FlipCard } from '../FlipCard/FlipCard';
import classNames from 'classnames';
import { IWordItem } from '../../../utils/types.ts';
import { motion } from 'framer-motion';
import { BASE_DB_URL } from '../../../utils/vars.js';
import { useFetchWords } from '../../../hooks/useFetchWords.tsx';

interface MemoryFlipProps {
	page: number;
	limit: number;
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.05 },
	},
};

export const MemoryFlip: React.FC<MemoryFlipProps> = ({ page, limit }): React.JSX.Element => {
	const { wordsState, isLoading } = useFetchWords(BASE_DB_URL, page, limit);

	if (isLoading) {
		return <p>Загрузка ....</p>;
	}

	return (
		<motion.ul initial="hidden" animate="visible" variants={containerVariants} className={classNames(styles.container, styles.memory_wrap, 'queue-simple')}>
			{wordsState?.length > 0 &&
				wordsState.map((item: IWordItem) => (
					<motion.li key={item.id} variants={itemVariants} className="queue-item">
						<FlipCard englishWord={item.english} russianWord={item.russian} />
					</motion.li>
				))}
		</motion.ul>
	);
};
