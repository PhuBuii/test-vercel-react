import React, { useState } from "react";
import DatePicker from "../../components/DatePicker";

const UserEdit = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [birth, setBirth] = useState("");
  const [onBoard, setOnBoard] = useState("");

  return (
    <div className=" py-6">
      <div className="bg-white rounded-lg p-6 border-b">
        <div className="flex justify-center border-b px-[15vw] ">
          <button
            className={`flex-1 py-3 text-center ${
              activeTab === "tab1"
                ? "border-b-2 border-blue-500 font-bold text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            Thông tin chung
          </button>
          <button
            className={`flex-1 py-3 text-center ${
              activeTab === "tab2"
                ? "border-b-2 border-blue-500 font-bold text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            Thông tin tài khoản
          </button>
        </div>

        <div className="mt-5 p-5 bg-white  rounded px-[15vw]">
          {activeTab === "tab1" && (
            <div>
              {/* Profile Header */}
              <div className="flex justify-between items-start  border-b">
                <div className="flex items-center space-x-4 pb-6">
                  <img
                    src="/images/user-profile.png"
                    alt="Avatar"
                    className="w-[84px] h-[84px] rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Đỗ Thị Thu Trang</h3>
                    <div className="text-gray-600 flex items-center gap-2">
                      <img src="/icons/profile.svg" alt="User icon" />
                      Chuyên viên
                    </div>
                    <div className="text-gray-600 flex items-center gap-2">
                      <img src="/icons/mail.svg" alt="Mail icon" />
                      infor@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              {/* General Information */}
              <div className="grid grid-cols-2 gap-4 my-4">
                <input
                  type="text"
                  placeholder="Nhập họ tên"
                  className="w-full border rounded-lg px-4 py-2 h-[52px]"
                />
                <div className="flex items-start justify-between gap-4">
                  <DatePicker
                    placeholder="Ngày sinh"
                    onChange={setBirth}
                    height={"52px"}
                  />
                  <select className=" w-full border rounded-md px-4 py-2 h-[52px]">
                    <option value="" hidden>
                      Giới tính
                    </option>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-lg px-4 py-2 h-[52px]"
                />
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="w-full border rounded-lg px-4 py-2 h-[52px]"
                />
                <input
                  type="text"
                  placeholder="Tỉnh/Thành phố"
                  className="w-full border rounded-lg px-4 py-2 h-[52px]"
                />
                <input
                  type="text"
                  placeholder="Quận/Huyện"
                  className="w-full border rounded-lg px-4 py-2 h-[52px]"
                />
                <input
                  type="text"
                  placeholder="Địa chỉ"
                  className="w-full border rounded-lg px-4 py-2 h-[52px] col-span-2"
                />
              </div>
              {/* Buttons */}
              <div className="flex justify-start space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Thêm mới
                </button>
              </div>
            </div>
          )}
          {activeTab === "tab2" && (
            <div>
              {/* Profile Header */}
              <div className="flex justify-between items-start  border-b">
                <div className="flex items-center space-x-4 pb-6">
                  <img
                    src="/images/user-profile.png"
                    alt="Avatar"
                    className="w-[84px] h-[84px] rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Đỗ Thị Thu Trang</h3>
                    <div className="text-gray-600 flex items-center gap-2">
                      <img src="/icons/profile.svg" alt="User icon" />
                      Chuyên viên
                    </div>
                    <div className="text-gray-600 flex items-center gap-2">
                      <img src="/icons/mail.svg" alt="Mail icon" />
                      infor@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              {/* General Information */}
              <div className="grid grid-cols-3 gap-4 my-4">
                <input
                  type="text"
                  placeholder="Mã số nhân viên"
                  className="w-full border rounded-lg px-4 py-2 h-[52px]"
                />
                <input
                  type="text"
                  placeholder="Tên tài khoản"
                  className="w-full border rounded-lg px-4 py-2 h-[52px]"
                />

                <input
                  type="text"
                  placeholder="Mật khẩu"
                  className="w-full border rounded-lg px-4 py-2 h-[52px]"
                />
                <select className=" w-full border rounded-md px-4 py-2 h-[52px]">
                  <option value="" hidden>
                    Chức vụ
                  </option>
                  <option value="01">Chức vụ 1</option>
                  <option value="02">Chức vụ 2</option>
                  <option value="03">Chức vụ 3</option>
                </select>
                <DatePicker
                  placeholder="Ngày vào làm"
                  onChange={setOnBoard}
                  height={"52px"}
                />
                <select className=" w-full border rounded-md px-4 py-2 h-[52px]">
                  <option value="" hidden>
                    Trạng thái
                  </option>
                  <option value="01">Đang hoạt động</option>
                  <option value="02">Không hoạt động</option>
                </select>
              </div>
              <div className="w-full grid grid-cols-2 gap-4 my-4">
                <select className=" w-full border rounded-md px-4 py-2 h-[52px]">
                  <option value="" hidden>
                    Phân quyền
                  </option>
                  <option value="01">User</option>
                  <option value="02">Admin</option>
                </select>
                <select className=" w-full border rounded-md px-4 py-2 h-[52px]">
                  <option value="" hidden>
                    Chi nhánh
                  </option>
                  <option value="01">Hồ Chí Minh</option>
                  <option value="02">Hà Nội</option>
                </select>
              </div>
              {/* Buttons */}
              <div className="flex justify-start space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Thêm mới
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
