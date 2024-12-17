import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const signupMethods = [
    {
      name: "Google",
      text: "Đăng nhập với Google",
      url_img: "/logos/google.svg",
      handleSignup: () => alert("Đăng nhập bằng Google"),
    },
    {
      name: "Facebook",
      text: "Đăng nhập với Facebook",
      url_img: "/logos/facebook.svg",
      handleSignup: () => alert("Đăng nhập bằng Facebook"),
    },
  ];
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-[36px] xl:px-[86px] 2xl:px-[136px]">
      <h1 className="text-2xl font-be-vietnam-semiBold font-bold mb-3 2xl:mb-6">
        Đăng ký
      </h1>

      {/* Social Media Buttons */}
      <div className="flex 2xl:flex-col gap-4 w-full">
        {signupMethods.map((method, idx) => (
          <button
            className="w-full flex items-center justify-center gap-[10px] px-[22px] py-[16px] border border-[#E1E5F3] rounded-lg hover:bg-gray-100"
            key={idx}
            onClick={method.handleSignup}
          >
            <img
              src={method.url_img}
              alt={`${method.name} icon`}
              className="w-[20px] h-[20px]"
            />
            <span className="hidden 2xl:block text-lg font-sf-medium text-[#817F9B] leading-[1.3]">
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

      {/* Register Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 rounded-lg"
      >
        {/* Full Name */}
        <div className=" w-full flex flex-col space-y-2">
          <label
            htmlFor="fullName"
            className="hidden 2xl:block font-graphikl-medium text-[14px] text-[#1C1A3C]"
          >
            Họ tên
          </label>
          <div className="relative">
            <input
              type="text"
              name="fullName"
              placeholder="Tên doanh nghiệp"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 pl-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span className="absolute left-3 top-3 mt-0.5 text-gray-400">
              <img
                src="/icons/fi-user.svg"
                alt="Full Name Icon"
                className="w-5 h-5"
              />
            </span>
          </div>
        </div>
        {/* Email */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="email"
            className=" hidden 2xl:block text-[14px] font-graphikl-medium text-[#1C1A3C]"
          >
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Nhập Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 pl-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span className="absolute left-3 top-3 mt-0.5 text-gray-400">
              <img src="/icons/sms.svg" alt="Email Icon" className="w-5 h-5" />
            </span>
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="password"
            className="hidden 2xl:block text-[14px] font-graphikl-medium text-[#1C1A3C]"
          >
            Mật khẩu
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Mật khẩu"
              value={formData.password}
              onChange={handleChange}
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
                alt="Toggle Password"
                className="w-5 h-5"
              />
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="confirmPassword"
            className=" hidden 2xl:block text-[14px] font-graphikl-medium text-[#1C1A3C]"
          >
            Nhập lại mật khẩu
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 pl-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span className="absolute left-3 top-3 mt-0.5 text-gray-400">
              <img
                src="/icons/lock.svg"
                alt="Confirm Password Icon"
                className="w-5 h-5"
              />
            </span>
            <span
              className="absolute right-3 top-3 mt-0.5 text-gray-400 cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              <img
                src={
                  showConfirmPassword
                    ? "/icons/eye-slash.svg"
                    : "/icons/fi-eye.svg"
                }
                alt="Toggle Confirm Password"
                className="w-5 h-5"
              />
            </span>
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <span className="text-sm">
            Tôi đồng ý với các{" "}
            <Link
              to="/terms"
              className="text-blue-500 font-sf-medium hover:underline"
            >
              Điều khoản dịch vụ
            </Link>
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 font-sf-medium text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Đăng ký
        </button>
      </form>

      {/* Login Link */}
      <div className="mt-4 text-sm">
        Đã có tài khoản?{" "}
        <Link
          to="/login"
          className="text-blue-500 font-sf-medium hover:underline"
        >
          Đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
