import React from 'react';
import { SwiperItemType } from './types';
import styles from "./Swiper.module.css";

// exported so we can use later in tests
export type Props = SwiperItemType;

function SwiperItem({ imageSrc, imageAlt }: Props) {
  return (
    <li className={styles.swiperItem}>
      <img src={imageSrc} alt={imageAlt} className={styles.swiperImg} />
    </li>
  );
}

export default SwiperItem;