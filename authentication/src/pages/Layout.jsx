import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthProvider";
import Toolbar from "@/components/Toolbar/Toolbar";

const Layout = () => {
  const { isAuthenticated } = useContext(AuthContext);


  return (
    <>
      <Toolbar isAuthenticated={isAuthenticated} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
