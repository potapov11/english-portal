import React from 'react';
import styles from './Text.module.scss';

interface TextProps {
	id?: number;
	description?: string;
	questions: string[];
	title?: string;
	imgSrc: string;
}

export const Text: React.FC<TextProps> = ({ description, questions, title, imgSrc }) => (
	<div className={styles.text_wrapper}>
		<h2>{title}</h2>
		<img src={imgSrc} alt="photo" />
		<p>{description}</p>
		<div>{questions?.length > 0 && questions.map((item) => <p key={item}>{item}</p>)}</div>
	</div>
);
