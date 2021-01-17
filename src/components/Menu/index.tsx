import { url } from 'inspector';
import React from 'react';

interface MenuItems {
  text: string;
  link: string;
}

const Menu = ({ items }: { items: MenuItems[] }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <a href={item.link}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
