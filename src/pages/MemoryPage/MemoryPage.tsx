import React, { useState } from 'react';
import styles from './Memory.module.scss';
import classNames from 'classnames';
import { MemoryFlip } from '../../components/MemoryFlip/MemoryFlipComponent/MemoryFlip.tsx';
import { SelectBar } from '../../components/SelectBar/SelectBar.tsx';
// import { MixWords } from '../../components/MixWords/MixWords.tsx';

export const MemoryPage = (): React.JSX.Element => {
	// eslint-disable-next-line
	const [page, setPage] = useState(1);
	// eslint-disable-next-line
	const [limit, setLimit] = useState(18);

	return (
		<div className={classNames(styles.memory)}>
			<div className={classNames(styles.memory_wrap, styles.container)}>
				<div>
					<SelectBar />
					{/* <MixWords setPage={setPage} page={page} /> */}
				</div>
				<MemoryFlip page={page} limit={limit} />
			</div>
		</div>
	);
};
