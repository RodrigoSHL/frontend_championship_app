import React from 'react';
import { SwiperItemType } from './types';
import SwiperItem from './SwiperItem';
import styles from './Swiper.module.css'

// exported so we can use later in tests
export type Props = {
  items: Array<SwiperItemType>;
};

function Swiper({ items }: Props) {
  return (
    <div className={styles.swiperContainer}>
      <ul className={styles.swiperList}>
        {items.map((item, idx) => (
          <SwiperItem key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default Swiper;