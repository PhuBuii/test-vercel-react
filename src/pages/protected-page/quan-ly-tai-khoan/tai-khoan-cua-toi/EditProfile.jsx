import React, { useState } from "react";

const EditUserInfo = () => {
  const [imageSrc, setImageSrc] = useState("/images/example-logo.png");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="py-6">
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center mb-6 w-full border-b px-[15vw] py-4">
          <img src="/icons/user.svg" alt="user icon" />
          <h2>Thông tin chung</h2>
        </div>
        <form className="space-y-6 px-[15vw]">
          {/* Profile Header */}
          <div className="flex justify-between items-start border-b">
            <div className="flex items-center space-x-4 pb-6">
              <div className="relative w-[84px] h-[84px] cursor-pointer hover:opacity-30">
                {/* Avatar */}
                <img
                  src={imageSrc}
                  alt="Avatar"
                  className="w-full h-full rounded-lg object-cover"
                  style={{
                    objectFit:
                      imageSrc === "/images/example-logo.png"
                        ? "cover"
                        : "contain",
                  }}
                />
                {/* Mask with Camera Icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="/icons/camera-icon.svg"
                    alt="Camera Icon"
                    className="w-8 h-8 text-white"
                  />
                </div>
                {/* Hidden input for file selection */}
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  <input type="text" className="border rounded-lg " />
                </h3>
                <div className="text-gray-600 flex items-center gap-2">
                  <img src="/icons/mail.svg" alt="Mail icon" />
                  <input type="mail" className="border rounded-lg" />
                </div>
                <div className="flex items-center gap-2">
                  <img src="/icons/link.svg" alt="Hyperlink icon" />
                  <input type="text" className="border rounded-lg " />
                </div>
              </div>
            </div>
          </div>

          {/* General Information */}
          <div className="grid grid-cols-2 gap-4">
            <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
              <strong className="text-gray-700 text-sm">
                Tên công ty/tổ chức:
              </strong>
              <input type="text" className="border rounded-lg px-3 py-2" />
            </p>
            <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
              <strong className="text-gray-700 text-sm">Ngày tạo:</strong>
              <input type="text" className="border rounded-lg px-3 py-2" />
            </p>
            <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3 ">
              <strong className="text-gray-700 text-sm">Email:</strong>
              <input type="mail" className="border rounded-lg px-3 py-2" />
            </p>
            <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
              <strong className="text-gray-700 text-sm">Số điện thoại:</strong>
              <input type="text" className="border rounded-lg px-3 py-2" />
            </p>
            <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
              <strong className="text-gray-700 text-sm">Tỉnh/Thành phố:</strong>
              <input type="text" className="border rounded-lg px-3 py-2" />
            </p>
            <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
              <strong className="text-gray-700 text-sm">Quận/Huyện:</strong>
              <input type="text" className="border rounded-lg px-3 py-2" />
            </p>
            <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3 col-span-2">
              <strong className="text-gray-700 text-sm">Địa chỉ:</strong>
              <input type="text" className="border rounded-lg px-3 py-2" />
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
                <strong className="text-gray-700">Mã số nhân viên:</strong>{" "}
                <input type="text" className="border rounded-lg px-3 py-2" />
              </p>
              <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
                <strong className="text-gray-700">Tên tài khoản:</strong>{" "}
                <input type="text" className="border rounded-lg px-3 py-2" />
              </p>
              <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3">
                <strong className="text-gray-700">Mật khẩu:</strong>{" "}
                <input type="text" className="border rounded-lg px-3 py-2" />
              </p>
              <p className="flex flex-col border-b border-[#A2A1A810] gap-1 py-3 col-span-3">
                <strong className="text-gray-700">Phân quyền:</strong>{" "}
                <input type="text" className="border rounded-lg px-3 py-2" />
              </p>
            </div>
          </div>
          {/*Button*/}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
            >
              Chỉnh sửa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserInfo;
