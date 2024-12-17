import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const loginMethods = [
    {
      name: "Google",
      text: "Đăng nhập với Google",
      url_img: "/logos/google.svg",
      handleLogin: () => alert("Đăng nhập bằng Google"),
    },
    {
      name: "Facebook",
      text: "Đăng nhập với Facebook",
      url_img: "/logos/facebook.svg",
      handleLogin: () => alert("Đăng nhập bằng Facebook"),
    },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-[36px] xl:px-[86px] 2xl:px-[136px]">
      <h1 className="text-2xl font-be-vietnam-semiBold font-bold mb-3 2xl:mb-6">
        Đăng nhập
      </h1>

      {/* Social Media Buttons */}
      <div className="flex flex-col gap-4 w-full">
        {loginMethods.map((method, idx) => (
          <button
            className="w-full flex items-center justify-center gap-[10px] px-[22px] py-[16px] border border-[#E1E5F3] rounded-lg hover:bg-gray-100"
            key={idx}
            onClick={method.handleLogin}
          >
            <img
              src={method.url_img}
              alt={`${method.name} icon`}
              className="w-[20px] h-[20px]"
            />
            <span className="text-lg text-[#817F9B] font-sf-medium leading-[1.3]">
              {method.text}
            </span>
          </button>
        ))}
      </div>

      {/* Separator */}
      <div className="flex items-center my-4 2xl:my-8 w-full">
        <hr className=" w-1/5 flex-grow border-t border-[#E1E5F3]" />
        <span className="px-2 text-sm text-[#817F9B]">
          Hoặc đăng nhập bằng Email
        </span>
        <hr className="w-1/5 flex-grow border-t border-[#E1E5F3]" />
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
        {/* Email Input */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="email"
            className="text-[14px] font-graphikl-medium text-[#1C1A3C]"
          >
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="Email đăng nhập"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 pl-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span className="absolute left-3 top-3 mt-0.5 text-gray-400">
              <img src="/icons/sms.svg" alt="Email Icon" className="w-5 h-5" />
            </span>
          </div>
        </div>

        {/* Password Input */}
        <div className="flex flex-col space-y-2 mt-1">
          <label
            htmlFor="password"
            className="text-[14px] font-graphikl-medium text-[#1C1A3C]"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 pl-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span className="absolute left-3 top-3 mt-0.5 text-gray-400">
              <img
                src="/icons/lock.svg"
                alt="Password Icon"
                className="w-5 h-5"
              />
            </span>
            <span
              className="absolute right-3 top-3 mt-0.5 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <img
                src={
                  showPassword ? "/icons/eye-slash.svg" : "/icons/fi-eye.svg"
                }
                alt="Toggle Password Visibility"
                className="w-5 h-5"
              />
            </span>
          </div>
        </div>
        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="mr-2" />
            Nhớ mật khẩu
          </label>
          <Link
            to="/forgot-password"
            className="text-sm font-sf-medium text-blue-500 hover:underline"
          >
            Quên mật khẩu
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-3 font-sf-medium bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Đăng nhập
        </button>
      </form>

      {/* Signup Link */}
      <div className="mt-4 text-sm">
        Chưa có tài khoản?{" "}
        <Link
          to="/signup"
          className="text-blue-500 font-sf-medium hover:underline"
        >
          Đăng ký
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
