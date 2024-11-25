import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

import {
  Visibility,
  VisibilityOff,
  RestartAlt,
  ArrowForwardIos,
} from "@mui/icons-material";
import { GetScrollRestorationKeyFunction } from "react-router-dom";
import { useUser } from "../Context/UserContext";

const Login = () => {
  const { setToken } = useUser();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [logInFormData, setLogInFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogInFormInputs = (event) => {
    const { name, value } = event.target;
    setLogInFormData((prevLogInFormData) => {
      return { ...prevLogInFormData, [name]: value };
    });
  };

  const handleLogInFormSubmit = (event) => {
    event.preventDefault();
    if (
      logInFormData.email === "Demo@gmail.com" &&
      logInFormData.password === "Demo@123"
    ) {
      setToken("12345678");
      navigate("/");
      console.log("navigate to home");
    }
    setLogInFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div className="max-w-xs m-auto md:max-w-sm lg:w-[24rem] border p-6 rounded-lg flex flex-col gap-10 md:mt-16 border-[#bbb]">
        <div className="flex w-full flex-col dark:bg-stone-900 gap-6">
          <h1 className="text-center text-2xl">
            <div className="w-[80px] mx-auto rounded-md overflow-hidden">
              <b>Food App</b>
            </div>
          </h1>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleLogInFormSubmit}
          >
            <TextField
              name="email"
              label="Email"
              type="text"
              value={logInFormData.email}
              onChange={handleLogInFormInputs}
              required
            />

            <FormControl variant="outlined">
              <InputLabel htmlFor="login_password">Password</InputLabel>
              <OutlinedInput
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={logInFormData.password}
                onChange={handleLogInFormInputs}
                id="login_password"
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <div className="flex justify-between gap-2">
              <Button
                type="submit"
                className="basis-1/2"
                disabled={!logInFormData.email || !logInFormData.password}
              >
                Log in
              </Button>
              <IconButton
                position="bottom"
                title="Clear Credentials"
                onClick={() => {
                  setLogInFormData({ email: "", password: "" });
                }}
              >
                <RestartAlt />
              </IconButton>
              <Button
                className="w-full basis-1/2"
                type="button"
                // disabled={!state.userList[0]?.email}
                onClick={() => {
                  setLogInFormData({
                    email: "Demo@gmail.com",
                    password: "Demo@123",
                  });
                }}
              >
                Fill Credentials
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
