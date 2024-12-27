import React, { useContext, useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const LoginPopup = ({ setShowLogin }) => {
  const [state, setState] = useState("Login");
  const url = "http://localhost:4000";
  const { token, setToken } = useContext(ShopContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlerChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);

  const handlerLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;

    if (state === "Login") {
      newUrl += "/api/user/userlogin";
    } else {
      newUrl += "/api/user/userregister";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="absolute h-full w-full bg-black/40 z-50 flexCenter ">
      <form
        onSubmit={handlerLogin}
        className="bg-white w-[366px] p-7 rounded-xl shadow-md"
      >
        <div className="flex justify-between items-baseline">
          <h4 className="bold-28">{state}</h4>
          <FaXmark
            onClick={() => setShowLogin(false)}
            className="medium-20 text-slate-900/70 cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-4 my-6">
          {state === "Sign Up" && (
            <input
              name="name"
              type="text"
              placeholder="Name"
              onChange={handlerChange}
              value={data.name}
              required
              className="bg-primary border p-2 pl-4 rounded-md outline-none"
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handlerChange}
            value={data.email}
            required
            className="bg-primary border p-2 pl-4 rounded-md outline-none"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handlerChange}
            value={data.password}
            required
            className="bg-primary border p-2 pl-4 rounded-md outline-none"
          />
        </div>

        <button type="submit" className="btn-secondary rounded-md w-full ">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="flex items-baseline gap-x-3 mt-6 mb-4">
          <input type="checkbox" required />
          <p>
            By Continuing you agree to our <span>Terms of Service</span> and{" "}
            <span>Privacy Policy</span>{" "}
          </p>
        </div>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-secondary cursor-pointer"
            >
              Login
            </span>{" "}
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-secondary cursor-pointer"
            >
              Sing Up
            </span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
