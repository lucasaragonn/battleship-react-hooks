import React from 'react';
import styles from './menu.module.scss';

interface MenuItems {
  text: string;
  link: string;
}

const Menu = ({ items }: { items: MenuItems[] }) => {
  return (
    <div className={styles.menu}>
      <h1>BattleShip Game</h1>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
