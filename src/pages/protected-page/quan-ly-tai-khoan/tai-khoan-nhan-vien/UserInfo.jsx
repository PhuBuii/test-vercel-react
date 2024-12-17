import React, { useState } from "react";

// Dummy data for now, replace with API response in the future
const dummyData = {
  generalInfo: {
    fullName: "Đỗ Thị Thu Trang",
    dob: "01/01/2024",
    gender: "Nữ",
    email: "infor@gmail.com",
    phone: "0123 456 789",
    city: "Bình Dương",
    district: "Thủ Dầu Một",
    address: "145 Phú Lợi",
  },
  accountInfo: {
    employeeId: "0001",
    username: "Trangdtt",
    password: "1234",
    position: "leader",
    joinDate: "01/01/2024",
    status: "Nhân viên chính thức",
    role: "Admin",
  },
};

const InfoItem = ({ label, value, className = "" }) => (
  <p
    className={`flex flex-col border-b border-[#A2A1A810] gap-1 py-3 ${className}`}
  >
    <strong className="text-gray-700 text-sm">{label}</strong>
    {value}
  </p>
);

const ProfileHeader = ({ name, email, role, onEdit }) => (
  <div className="flex justify-between items-start border-b pb-6">
    <div className="flex items-center space-x-4">
      <img
        src="/images/user-profile.png"
        alt="Avatar"
        className="w-[84px] h-[84px] rounded-lg"
      />
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="text-gray-600 flex items-center gap-2">
          <img src="/icons/profile.svg" alt="User icon" />
          {role}
        </div>
        <div className="text-gray-600 flex items-center gap-2">
          <img src="/icons/mail.svg" alt="Mail icon" />
          {email}
        </div>
      </div>
    </div>
    <button
      className="px-3 py-2 text-white text-sm bg-[#0457C2] rounded-lg hover:bg-blue-600 flex items-center gap-2"
      onClick={onEdit}
    >
      <img src="/icons/edit.svg" alt="Edit icon" />
      Chỉnh sửa
    </button>
  </div>
);

const UserInfo = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const { generalInfo, accountInfo } = dummyData;

  return (
    <div className="py-6">
      <div className="bg-white rounded-lg p-6 border-b">
        {/* Tabs */}
        <div className="flex justify-center border-b px-[15vw]">
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

        {/* Tab Content */}
        <div className="mt-5 p-5 bg-white rounded px-[15vw]">
          {activeTab === "tab1" && (
            <div>
              <ProfileHeader
                name={generalInfo.fullName}
                email={generalInfo.email}
                role="Chuyên viên"
                onEdit={() => console.log("Edit General Info")}
              />
              <div className="grid grid-cols-2 gap-4 mt-3">
                <InfoItem label="Họ và tên" value={generalInfo.fullName} />
                <div className="flex items-center justify-between">
                  <InfoItem
                    label="Ngày sinh"
                    value={generalInfo.dob}
                    className="w-1/2"
                  />
                  <InfoItem
                    label="Giới tính"
                    value={generalInfo.gender}
                    className="w-1/2"
                  />
                </div>
                <InfoItem label="Email" value={generalInfo.email} />
                <InfoItem label="Số điện thoại" value={generalInfo.phone} />
                <InfoItem label="Tỉnh/Thành phố" value={generalInfo.city} />
                <InfoItem label="Quận/Huyện" value={generalInfo.district} />
                <InfoItem
                  label="Địa chỉ"
                  value={generalInfo.address}
                  className="col-span-2"
                />
              </div>
            </div>
          )}

          {activeTab === "tab2" && (
            <div>
              <ProfileHeader
                name={generalInfo.fullName}
                email={generalInfo.email}
                role="Chuyên viên"
                onEdit={() => console.log("Edit Account Info")}
              />
              <div className="grid grid-cols-3 gap-4 mt-3">
                <InfoItem
                  label="Mã số nhân viên"
                  value={accountInfo.employeeId}
                />
                <InfoItem label="Tên tài khoản" value={accountInfo.username} />
                <InfoItem label="Mật khẩu" value={accountInfo.password} />
                <InfoItem label="Chức vụ" value={accountInfo.position} />
                <InfoItem label="Ngày vào làm" value={accountInfo.joinDate} />
                <InfoItem label="Trạng thái" value={accountInfo.status} />
                <InfoItem label="Phân quyền" value={accountInfo.role} />
                <InfoItem
                  label="Địa chỉ"
                  value={generalInfo.address}
                  className="col-span-2"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
