import React from "react";

const MyAccount = () => {
  const handleEditRedirect = () => {
    window.location.href = "/tai-khoan-cua-toi/chinh-sua";
  };

  return (
    <div className="py-6">
      <div className=" bg-white rounded-lg p-6">
        <div className="flex items-center mb-6 w-full border-b px-[15vw] py-4">
          <img src="/icons/user.svg" alt="user icon" />
          <h2>Thông tin chung</h2>
        </div>
        <div className="space-y-6 px-[15vw]">
          {/* Profile Header */}
          <div className="flex justify-between items-start  border-b">
            <div className="flex items-center space-x-4 pb-6">
              <img
                src="/images/example-logo.png"
                alt="Avatar"
                className="w-[84px] h-[84px] rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold">DVA Group</h3>
                <div className="text-gray-600 flex items-center gap-2">
                  <img src="/icons/mail.svg" alt="Mail icon" />
                  infor@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <img src="/icons/link.svg" alt="Hyperlink icon" />
                  <a
                    href="https://dvahitech.com"
                    className="text-blue-500 hover:underline"
                  >
                    https://dvahitech.com
                  </a>
                </div>
              </div>
            </div>
            <button
              onClick={handleEditRedirect}
              className="px-3 py-2 text-white text-sm bg-[#0457C2] rounded-lg hover:bg-blue-600 gap-2 flex"
            >
              <img src="/icons/edit.svg" alt="Edit icon" />
              Chỉnh sửa
            </button>
          </div>

          {/* General Information */}
          <div className="grid grid-cols-2 gap-4">
            <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
              <strong className="text-gray-700 text-sm">
                Tên công ty/tổ chức:
              </strong>
              DVA Group
            </p>
            <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
              <strong className="text-gray-700 text-sm">Ngày tạo:</strong>
              01/01/2024
            </p>
            <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3 ">
              <strong className="text-gray-700 text-sm">Email:</strong>
              infor@gmail.com
            </p>
            <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
              <strong className="text-gray-700 text-sm">Số điện thoại:</strong>
              0123 456 789
            </p>
            <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
              <strong className="text-gray-700 text-sm">Tỉnh/Thành phố:</strong>
              Bình Dương
            </p>
            <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
              <strong className="text-gray-700 text-sm">Quận/Huyện:</strong>
              Thủ Dầu Một
            </p>
            <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3 col-span-2">
              <strong className="text-gray-700 text-sm">Địa chỉ:</strong>
              145 Phú Lợi
            </p>
          </div>

          {/* Account Information */}
          <div>
            <div className="flex gap-2">
              <img src="/icons/bag.svg" alt="Bag icon" />
              Thông tin tài khoản
            </div>

            <div className="grid grid-cols-3 gap-4">
              <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
                <strong className="text-gray-700">Mã số nhân viên:</strong> 0001
              </p>
              <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
                <strong className="text-gray-700">Tên tài khoản:</strong>{" "}
                mail@gmail.com
              </p>
              <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
                <strong className="text-gray-700">Mật khẩu:</strong> 123456
              </p>
              <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3 col-span-3">
                <strong className="text-gray-700">Phân quyền:</strong> Admin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
