import PropTypes from 'prop-types';

export const NavItem = ({ link, orderNumber, children }) => {
  
  return (
    <li>
      <a href={link}>
        {orderNumber + 1}.{children}
      </a>
    </li>
  );
};

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  orderNumber: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};
