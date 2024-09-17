import React, { useState } from "react";
import "./accountVeify.css";
import useProvideGeneralHooks from "../../hooks/useProvideGeneralHooks";
import Input from "../ui/Input";
import Label from "../ui/Label";
import Button from "../ui/Button";
import FormBox from "../ui/FormBox";
import httpAction from "../../utils/httpAction";
import apiActions from "../../utils/apiActions";
import toast from "react-hot-toast";
const ForgetPassword = () => {
  const { Link, navigate, dispatch, loading, setLoading } =
    useProvideGeneralHooks();
  const [email, setEmail] = useState("");
  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const result = await dispatch(
      httpAction(apiActions().forgotPassword({ email }))
    );
    setLoading(false);
    if (result?.status) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("otpToken", result?.token);
      toast.success(result?.message);
      navigate("/account/verify");
    }
  };

  return (
    <div className="account_verify_main">
      <form onSubmit={submitHandler}>
        <FormBox>
          <div>
            <Label>Enter your registered email</Label>
            <Input
              type="email"
              placeholder="email"
              onChange={emailChange}
              value={email}
              required
            />
          </div>
          <Button disabled={loading}>
            {loading ? "Sending..." : "Send OTP"}
          </Button>
          <div>
            <Link to="/login" className="account_verify_otp_resend">
              Back to login?
            </Link>
          </div>
        </FormBox>
      </form>
    </div>
  );
};

export default ForgetPassword;
