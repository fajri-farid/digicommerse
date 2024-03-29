"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { siteUrl } from "@/config/siteUrl";

export const Login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChangeInput(event) {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  }

  async function handleLogin() {
    const { email, password } = loginData;

    if (!email || !password) {
      console.log("All field must be filled");
      return;
    }

    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
    });

    const data = await res.json();
    console.log(data);
    // if (res.status === 401 || res.status === 404) {
    //   const { errorMessage } = await res.json();
    //   toast.error(errorMessage);
    //   return;
    // }

    // const { data, message } = await res.json();
    // localStorage.setItem("user", JSON.stringify(data));
    // toast.success(message);
    // // router.push("/");
    // window.location.replace(siteUrl);
  }

  return (
    <main className="space-y-6">
      <div className="font-medium tracking-tight text-base">Digicommerce.</div>
      <div className="">
        <h1>Login</h1>
        <p>Welcome back!</p>
      </div>
      <div className="space-y-3">
        <input
          name="email"
          placeholder="email@domain.com"
          onChange={handleChangeInput}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          onChange={handleChangeInput}
        />
        <button className="btn-md" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div>
        <div>
          Don&apos;t have an account ?{" "}
          <Link href="/register" className="link">
            <span>Register</span>
          </Link>
        </div>
      </div>
    </main>
  );
};
