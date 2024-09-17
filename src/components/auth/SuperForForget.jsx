import React, { useEffect, useState } from "react";
import useProvideGeneralHooks from "../../hooks/useProvideGeneralHooks";
import httpAction from "../../utils/httpAction";
import apiActions from "../../utils/apiActions";
import LoadigBackdrop from "../ui/LoadigBackdrop";
const SuperForForget = () => {
  const { Navigate, Outlet, dispatch } = useProvideGeneralHooks();
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verify = async () => {
      setLoading(true);
      const result = await dispatch(
        httpAction(
          apiActions().verifyAccess({ token: localStorage.getItem("otpToken") })
        )
      );
      setLoading(false);
      if (result?.status) {
        setIsAuth(true);
      }
    };
    verify();
  }, []);

  if (loading) {
    return (
        <LoadigBackdrop open={loading} handleClose={()=>setLoading(false)} />
    );
  }
  if (!isAuth) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

export default SuperForForget;
