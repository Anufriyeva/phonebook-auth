import { useSelector } from "react-redux";
import { HeaderContainer } from "./AppBar.styles";
import { getToken } from "store/selectors";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";

const AppBar = () => {
  const isAuth = useSelector(getToken);

  return (
    <HeaderContainer>
      <Navigation />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </HeaderContainer>
  );
};

export default AppBar