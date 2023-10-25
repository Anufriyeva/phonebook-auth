import { useSelector } from "react-redux";
import { HeaderContainer } from "./AppBar.styles";

const AppBar = () => {
  const isAuth = useSelector(getToken);

  return (
      <HeaderContainer>
          <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderContainer>
  );
};

export default AppBar