import { NavItem } from '../NavItem/NavItem';

export const Navigation = () => {
  const navItem = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <ul>
      {navItem.map((item, i) => (
        <NavItem key={item.name} link={item.link} orderNumber={i}>
        <span>{item.name} </span>
        </NavItem>
      ))}
    </ul>
  );
};
