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
const Register = () => {
  const { Link, dispatch, navigate, loading, setLoading } =
    useProvideGeneralHooks();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerUser } = apiActions();
  const nameChange = (event) => {
    setName(event.target.value);
  };
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
      httpAction(registerUser({ name, email, password }))
    );
    setLoading(false);
    if (result?.status) {
      toast.success(result?.message);
      navigate("/login");
    }
  };

  return (
    <div className="register_main">
      <div className="register_header">
        <p className="register_wellcome">
          Wellcome to <span className="register_company">Ecom</span>
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <FormBox>
          <div className="register_form_item">
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="username"
              required
              value={name}
              onChange={nameChange}
            />
          </div>
          <div className="register_form_item">
            <Label>Your Email</Label>
            <Input
              type="email"
              placeholder="email"
              onChange={emailChange}
              value={email}
              required
            />
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
            {loading ? "Please Wait..." : "Register"}
          </Button>
          <div className="register_form_options">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </FormBox>
      </form>
    </div>
  );
};

export default Register;
