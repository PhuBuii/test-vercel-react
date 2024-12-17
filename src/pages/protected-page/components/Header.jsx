import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/danh-sach-dich-vu":
        setTitle("Dịch vụ");
        break;
      case "/quan-ly-ho-so":
        setTitle("Quản lý hồ sơ");
        break;
      case "/huong-dan-thu-tuc":
        setTitle("Hướng dẫn thủ tục");
        break;
      case "/tai-khoan-cua-toi":
        setTitle("Tài khoản của tôi");
        break;
      case "/tai-khoan-nhan-vien":
        setTitle("Tài khoản nhân viên");
        break;
      case "/ho-tro":
        setTitle("Hỗ trợ");
        break;
      default:
        setTitle("Dịch vụ");
    }
  }, [location.pathname]);

  const notification_data = [
    {
      type: "Warning",
      icon: "/images/warning-icon.png",
      id: "0000001",
      text: "Yêu cầu bổ sung chứng từ",
    },
    {
      type: "Notification",
      icon: "/images/notification-icon.png",
      id: "0000002",
      text: "Đang được xử lý",
    },
    {
      type: "Notification",
      icon: "/images/notification-icon.png",
      id: "0000003",
      text: "Đã gửi thành công",
    },
  ];

  return (
    <header className="h-[88px] fixed top-0 w-full md:w-[calc(100vw-264px)] px-6 py-5 rounded-b-lg bg-header-gradient flex justify-between items-center z-10">
      <h1 className="font-sf-semibold text-xl text-white">{title}</h1>
      <div className="flex items-center gap-5">
        {/* Notification Icon */}
        <div className="relative">
          <img
            src="/icons/notification-white.svg"
            alt="notification icon"
            className="cursor-pointer"
            onClick={toggleNotification}
          />
          {notification_data.length ? (
            <div className="rounded-full w-2 h-2 bg-red-600 border border-white absolute top-0 right-0.5"></div>
          ) : (
            ""
          )}
        </div>

        {/* User Info */}
        <div className="w-[208px] rounded-lg border border-[#A2A1A820] bg-white p-1 flex justify-between">
          <div className="flex gap-2 items-center">
            <img
              src="/images/user-avatar.png"
              alt="user avatar"
              className="rounded-lg w-10 h-10"
            />
            <div className="flex flex-col justify-center">
              <p className="text-base font-sf-medium">TimCook</p>
              <p className="text-xs font-be-vietnam-light text-[#A2A1A8]">
                HR Manager
              </p>
            </div>
          </div>
          <img src="/icons/arrow-down.svg" alt="arrow down" />
        </div>
      </div>

      {/* Notification Popup */}
      {isNotificationOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
            onClick={toggleNotification}
          ></div>

          {/* Popup */}
          <div className="fixed top-0 right-0 w-full md:w-[20vw] h-screen bg-white z-50 shadow-lg rounded-l-lg">
            <div className="w-full border-b p-6 pb-4 flex justify-between items-center">
              <h2 className="font-sf-semibold text-xl text-[#056BDA]">
                Thông báo
              </h2>
              <img
                src="/icons/x-close.svg"
                alt="Close icon"
                onClick={toggleNotification}
                className="cursor-pointer"
              />
            </div>
            <ul className="px-6">
              {notification_data.length > 0 ? (
                notification_data.map((data) => (
                  <li
                    key={data.id}
                    className="py-6 border-b flex items-center justify-start gap-3"
                  >
                    <img src={data.icon} alt={data.type} className="w-8 h-8" />
                    <p className="truncate">
                      Hồ sơ{" "}
                      <span className="text-[#056BDA] font-sf-medium">
                        {data.id}
                      </span>{" "}
                      {data.text}
                    </p>
                  </li>
                ))
              ) : (
                <li className="py-6 flex items-center justify-center gap-3">
                  <img
                    src="/images/notification-icon.png"
                    alt="Notification"
                    className="w-8 h-8"
                  />
                  <p>Không có thông báo nào</p>
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
