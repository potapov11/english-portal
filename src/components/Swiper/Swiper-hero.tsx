import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Swiper-hero.module.scss';
import classNames from 'classnames';

// Основной компонент
export const HeroSwiper = () => {
	return (
		<Swiper spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }} navigation>
			<SwiperSlide>
				<div className={classNames(styles.hero_img_wrap, styles.hero_img_wrap_first)}></div>
			</SwiperSlide>
			<SwiperSlide>
				<div className={classNames(styles.hero_img_wrap, styles.hero_img_wrap_second)}>{/* <img className={styles.hero_img} src={silde2} alt="silde2" /> */}</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className={classNames(styles.hero_img_wrap, styles.hero_img_wrap_third)}></div>
			</SwiperSlide>
		</Swiper>
	);
};
