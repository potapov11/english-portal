import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.header_nav}>
				<div>Лого</div>
				<ul className={styles.header_list}>
					<li className={styles.header_list_item}>
						<Link to="/">Корпоративное обучение</Link>
					</li>
					<li className={styles.header_list_item}>
						<Link to="/">Запоминание</Link>
					</li>
					<li className={styles.header_list_item}>
						<Link to="/">Тексты</Link>
					</li>
					<li className={styles.header_list_item}>
						<Link to="/">Тесты</Link>
					</li>
				</ul>
				<div>Информация справа</div>
			</nav>
		</header>
	);
};
