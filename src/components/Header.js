import { Navigation } from './Header/Navigation/Navigation';

export const Header = ({ text }) => {
  return (
    <header>
      <h1>Glavni naslov: {text}</h1>
      <Navigation />
    </header>
  );
};
