import React, { useState } from "react";
import DatePicker from "../../components/DatePicker";

const EmployeeForm = () => {
  const [image, setImage] = useState(null);
  const [birth, setBirth] = useState("");
  const [onBoard, setOnBoard] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Chuyển ảnh thành URL để hiển thị
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="py-6">
      <div className="bg-white p-6 px-[15vw] rounded-lg">
        <div className="flex items-center gap-2 mb-6">
          <img src="/icons/user.svg" alt="User Icons" />
          <h2>Thông tin chung</h2>
        </div>
        <form>
          {/*Image*/}
          <div className="flex items-center">
            <label
              htmlFor="image-upload"
              className="cursor-pointer w-28 h-28 bg-gray-100 flex items-center justify-center rounded-md overflow-hidden relative hover:opacity-60"
            >
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center text-gray-400">
                  <img src="/icons/camera-icon.svg" alt="Camera icon" />
                </div>
              )}

              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
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

          <div className="flex items-center gap-2 mb-6">
            <img src="/icons/bag.svg" alt="User Icons" />
            <h2>Thông tin tài khoản</h2>
          </div>
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
            <button type="button" className="px-4 py-2 bg-gray-300 rounded-md">
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Thêm mới
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
