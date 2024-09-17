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
const AccountVerify = () => {
  const { Link, navigate, dispatch, loading, setLoading } =
    useProvideGeneralHooks();
  const [otp, setOtp] = useState("");
  const otpChange = (event) => {
    if (event.target.value.length > 6) {
      return;
    }
    setOtp(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setLoading(true);
    const result = await dispatch(
      httpAction(
        apiActions().verifyOtp({
          otp: otp,
        })
      )
    );
    setLoading(false);
    if (result?.status) {
      navigate("/update/password");
    }
  };

  const resendOtp = async () => {
    const result = await dispatch(
      httpAction(
        apiActions().forgotPassword({
          email: localStorage.getItem("userEmail"),
        })
      )
    );

    if (result?.status) {
      toast.success(result.message);
    }
  };

  return (
    <div className="account_verify_main">
      <form onSubmit={submitHandler}>
        <FormBox>
          <div>
            <Label>6-Digit OTP</Label>
            <Input
              type="number"
              placeholder="enter otp here"
              onChange={otpChange}
              value={otp}
              required
            />
          </div>
          <Button disabled={loading}>
            {loading ? "please wait..." : "Verify"}
          </Button>
          <div>
            <Link onClick={resendOtp} className="account_verify_otp_resend">
              Resend OTP?
            </Link>
          </div>
        </FormBox>
      </form>
    </div>
  );
};

export default AccountVerify;
