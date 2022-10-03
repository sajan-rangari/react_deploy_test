const Header = ({ title }) => {
  return <header>{title}</header>;
};

Header.defaultProps = {
  title: "Default Users List",
};

export default Header;
