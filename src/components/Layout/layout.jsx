import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { LayoutContainer } from "./Layout.styles";
import AppBar from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { getCurrent } from "store/thunk";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent())
      .unwrap()
      .then()
      .catch(e => console.log(e));
  }, [dispatch]);
  
    return (
    <LayoutContainer>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};

export default Layout