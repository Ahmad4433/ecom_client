import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AdminSidebar from "./AdminSidebar";
import './layout.css'
const Layout = () => {
  const [pageName, setPageName] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    setPageName(path.startsWith("/admin"));
  }, [path]);

  if (pageName) {
    return (
      <>
        <div className="admin_layout_main" >
          <AdminSidebar />
          <div className="admin_outlet" >
            <Outlet />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
};

export default Layout;
