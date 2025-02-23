import React from 'react';
import styles from './Texts.module.scss';
import { BASE_DB_URL, textsImgs } from '../../utils/vars.js';
import { UseFetch } from '../../hooks/UseFetch.tsx';
import classNames from 'classnames';
import { Text } from '../../components/Text/Text.tsx';

interface IQuestion {
	question: string;
	options: string[];
	correctAnswer: string;
}

interface IText {
	id: number;
	title: string;
	description: string;
	questions: string[];
	test: IQuestion[];
}

export const Texts = () => {
	const { serverData } = UseFetch(`${BASE_DB_URL}/texts`);

	return (
		<section className={classNames(styles.texts)}>
			<div className={classNames(styles.container, styles.texts_wrap)}>
				{serverData?.length > 0 && serverData.map((item: IText, index: number) => <Text key={item.id} imgSrc={textsImgs[index]} {...item} />)}
			</div>
		</section>
	);
};
