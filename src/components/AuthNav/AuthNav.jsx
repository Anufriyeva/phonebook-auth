import { Link, NavContainer } from "./AuthNav.styles";

const AuthNav = () => {
  
  return (
    <NavContainer>
      <Link to="/register">Signup</Link>
      <Link to="/login">Login</Link>
    </NavContainer>
  );
};

export default AuthNav