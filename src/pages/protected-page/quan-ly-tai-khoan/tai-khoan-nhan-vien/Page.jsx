import { useState } from "react";
import CustomTable from "../../components/CustomeTable";

const StaffList = () => {
  const data = Array.from({ length: 60 }, (_, index) => ({
    id: index + 1,
    manv: `NV${(index + 1).toString().padStart(3, "0")}`,
    hoten: "Đỗ Thị Thu Trang",
    mail: "info@gmail.com",
    phone: "01234567890",
    chinhanh: "Tên chi nhánh",
    trangThai: index % 3 === 0 ? "Đang hoạt động" : "Không hoạt động",
  }));

  // Append `trangThaiColor` based on `trangThai`
  const updatedData = data.map((item) => ({
    ...item,
    trangThaiColor:
      item.trangThai === "Đang hoạt động" ? "bg-green-500" : "bg-gray-300",
  }));

  const columns = [
    { key: "id", title: "", align: "text-center" },
    { key: "manv", title: "Mã nhân viên", color: "text-[#0954E9]" },
    { key: "hoten", title: "Họ tên" },
    { key: "mail", title: "Tên tài khoản" },
    { key: "phone", title: "Số điện thoại" },
    { key: "chinhanh", title: "Chi nhánh" },
    {
      key: "trangThai",
      title: "Trạng thái",
      render: (value, item) => (
        <span
          className={`text-white px-3 py-1 rounded-full text-xs ${item.trangThaiColor}`}
        >
          {value}
        </span>
      ),
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const addNew = () => {
    window.location.href = "/tai-khoan-nhan-vien/tao-nhan-vien-moi";
  };
  return (
    <div className="py-6">
      <div className="flex items-center justify-between rounded-lg mb-6">
        <div className=" flex w-2/3 items-center space-x-6 z-0">
          {/* Search Input */}
          <div className=" relative flex items-center w-2/5">
            <input
              type="text"
              placeholder="Tìm kiếm dịch vụ"
              className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-blue-500 w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute right-3 cursor-pointer">
              <img src="/icons/search-black.svg" alt="Search icon" />
            </span>
          </div>
          {/* Filter Button */}
          <div className="w-1/5 ">
            <div className="px-4 py-2 w-2/5 bg-white border border-gray-200 space-x-[23px] min-w-[120px] flex items-center justify-center rounded-lg">
              <p>Bộ lọc</p>
              <img
                src="/icons/filter-icon.svg"
                alt="Filter icon"
                className="w=[20px] h-[20px]"
              />
            </div>
          </div>
        </div>
        <button
          onClick={addNew}
          className="bg-[#0457C2] text-white px-4 py-2 rounded-lg text-sm font-be-vietnam-medium flex items-center justify-center gap-2"
        >
          <img src="/icons/user-plus.svg" alt="Search icon" />
          Tạo mới
        </button>
      </div>

      <CustomTable
        data={updatedData}
        columns={columns}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        onRowClick={(item) => console.log("Clicked:", item)}
        setView={true}
        setEdit={true}
        basePath="/tai-khoan-nhan-vien/nhan-vien"
      />
    </div>
  );
};

export default StaffList;
