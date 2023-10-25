import { Link, NavContainer } from "./AuthNav.styles";

const AuthNav = () => {
  
  return (
    <NavContainer>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </NavContainer>
  );
};

export default AuthNav