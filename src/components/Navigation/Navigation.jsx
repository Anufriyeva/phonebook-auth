import { useSelector } from "react-redux";
import { getToken } from "store/selectors";
import { Link } from "./Navigation.styles";

export const Navigation = () => {
  const isAuth = useSelector(getToken);

  return (
    <nav>
      {/* <Link to="/">Home</Link> */}
      {isAuth && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};