import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

export const Header = () => {
	const location = useLocation();
	const [lightHeader, setLightHeader] = useState(false);

	useEffect(() => {
		if (location.pathname === '/memory') {
			setLightHeader(true);
		} else {
			setLightHeader(false);
		}
	}, [location]);

	return (
		<header className={styles.header}>
			<nav className={classNames(styles.header_nav, styles.container)}>
				<div className={classNames(styles.header_logo, { [styles.header_logo_white_mode]: lightHeader })}>Лого</div>
				<ul className={styles.header_list}>
					<li className={styles.header_list_item}>
						<Link to="/" className={classNames(styles.header_list_link, { [styles.header_list_link_white_mode]: lightHeader }, { [styles.header_current_item]: location.pathname === '/' })}>
							Корпоративное обучение
						</Link>
					</li>
					<li className={styles.header_list_item}>
						<Link
							to="/memory"
							className={classNames(styles.header_list_link, { [styles.header_list_link_white_mode]: lightHeader }, { [styles.header_current_item]: location.pathname === '/memory' })}>
							Запоминание
						</Link>
					</li>
					<li className={styles.header_list_item}>
						<Link to="/" className={classNames(styles.header_list_link, { [styles.header_list_link_white_mode]: lightHeader })}>
							Тексты
						</Link>
					</li>
					<li className={styles.header_list_item}>
						<Link to="/" className={classNames(styles.header_list_link, { [styles.header_list_link_white_mode]: lightHeader })}>
							Тесты
						</Link>
					</li>
				</ul>
				<div className={classNames(styles.header_info_right, { [styles.header_info_right_white_mode]: lightHeader })}>Информация справа</div>
			</nav>
		</header>
	);
};
