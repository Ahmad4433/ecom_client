import React, { useState } from "react";
import useProvideGeneralHooks from "../../hooks/useProvideGeneralHooks";
import Input from "../ui/Input";
import "./register.css";
import Button from "../ui/Button";
import Label from "../ui/Label";
import FormBox from "../ui/FormBox";
import httpAction from "../../utils/httpAction";
import apiActions from "../../utils/apiActions";
import toast from "react-hot-toast";

const Login = () => {
  const { Link, dispatch, navigate, loading, setLoading } =
    useProvideGeneralHooks();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (evet) => {
    setEmail(evet.target.value);
  };
  const passChange = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const result = await dispatch(
      httpAction(apiActions().loginUser({ email, password }))
    );
    setLoading(false);
    if (result?.status) {
      toast.success(result?.message);
      localStorage.setItem("accessToken", result?.token?.accessToken);
      localStorage.setItem("refreshToken", result?.token?.refreshToken);
      navigate("/");
    }
  };

  return (
    <div className="register_main">
      <div className="register_header">
        <p className="register_wellcome">Wellcome back</p>
      </div>

      <form onSubmit={submitHandler}>
        <FormBox>
          <div className="register_form_item">
            <Label>Your Email</Label>
            <Input
              type="email"
              placeholder="email"
              onChange={emailChange}
              value={email}
              required
            />
            <Link to="/forget/password" className="forget_password">
              Forget password?
            </Link>
          </div>
          <div className="register_form_item">
            <Label>Your Password</Label>
            <Input
              type="password"
              required
              placeholder="password"
              value={password}
              onChange={passChange}
            />
          </div>
          <Button disabled={loading}>
            {loading ? "Please Wait..." : "Login"}
          </Button>
          <div className="register_form_options">
            <Link to="/register">Don't have an account? Create One</Link>
          </div>
        </FormBox>
      </form>
    </div>
  );
};

export default Login;
