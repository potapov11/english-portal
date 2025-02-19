import React from 'react';
import styles from './MemoryFlip.module.scss';
import { FlipCard } from '../FlipCard/FlipCard';
import classNames from 'classnames';
import { words } from '../../../utils/vars.js';
import { IWordItem } from '../../../utils/types.ts';
import { motion } from 'framer-motion';

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

// Варианты анимации для контейнера
const containerVariants = {
	hidden: {}, // Начальное состояние контейнера
	visible: {
		transition: { staggerChildren: 0.05 }, // Задержка между дочерними элементами
	},
};

export const MemoryFlip = (): React.JSX.Element => (
	<motion.ul initial="hidden" animate="visible" variants={containerVariants} className={classNames(styles.container, styles.memory_wrap, 'queue-simple')}>
		{words?.length > 0 &&
			words.map((item: IWordItem) => (
				<motion.li key={item.id} variants={itemVariants} className="queue-item">
					<FlipCard englishWord={item.english} russianWord={item.russian} />
				</motion.li>
			))}
	</motion.ul>
);
