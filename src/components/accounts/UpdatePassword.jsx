import React, { useState } from "react";
import "./updatePassword.css";
import Input from "../ui/Input";
import Label from "../ui/Label";
import FormBox from "../ui/FormBox";
import Button from "../ui/Button";
import useProvideGeneralHooks from "../../hooks/useProvideGeneralHooks";
import httpAction from "../../utils/httpAction";
import apiActions from "../../utils/apiActions";
import toast from "react-hot-toast";
const UpdatePassword = () => {
  const { Link, dispatch, navigate, loading, setLoading } =
    useProvideGeneralHooks();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const confirmPassChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const result = await dispatch(
      httpAction(
        apiActions().updatePassword({
          token: localStorage.getItem("otpToken"),
          password,
          confirmPassword,
        })
      )
    );
    setLoading(false);
    if (result?.status) {
      toast.success(result?.message);
      localStorage.removeItem("userEmail");
      localStorage.removeItem("otpToken");
      navigate("/login");
    }
  };

  return (
    <div className="update_password_main">
      <div className="update_password_header">
        <p>Please update your password before 5 min's</p>
      </div>

      <form onSubmit={submitHandler}>
        <FormBox>
          <div>
            <Label>new password</Label>
            <Input
              type="text"
              placeholder="password"
              value={password}
              onChange={passwordChange}
              required
            />
          </div>
          <div>
            <Label>confirm password</Label>
            <Input
              type="text"
              placeholder="confirm password"
              required
              value={confirmPassword}
              onChange={confirmPassChange}
            />
          </div>
          <Button disabled={loading}>
            {loading ? "please wait..." : "update password"}
          </Button>
          <Link to="/login" className="back_to_login_Link">
            Back to Login?
          </Link>
        </FormBox>
      </form>
    </div>
  );
};

export default UpdatePassword;
