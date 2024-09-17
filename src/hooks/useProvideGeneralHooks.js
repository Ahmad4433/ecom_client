import { Link, useNavigate, Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const useProvideGeneralHooks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  return {
    navigate,
    Link,
    dispatch,
    useSelector,
    Navigate,
    loading,
    setLoading,
    Outlet
  
  };
};

export default useProvideGeneralHooks;
