import React, { useState } from "react";
import FilterBar from "./components/FilterBar";
import CustomTable from "../components/CustomeTable";

const DocumentManage = () => {
  const data = Array.from({ length: 60 }, (_, index) => ({
    id: index + 1,
    hoSo: index % 3 === 0 ? "NH" : index % 3 === 1 ? "SC" : "KD",
    ten: "Chuyển giao quyền sử dụng nhãn hiệu",
    mau: "/images/example-logo.png",
    soDon: `4-2021-${String(index + 1).padStart(5, "0")}`,
    ngayNopHoSo: "12/11/2024",
    phanLoai: index % 2 === 0 ? "1234" : "ABCD",
    soBang: "12345678910",
    trangThai:
      index % 3 === 0 ? "Nộp đơn" : index % 3 === 1 ? "Hợp lệ" : "Cấp bằng",
    trangThaiColor:
      index % 3 === 0
        ? "bg-orange-500"
        : index % 3 === 1
        ? "bg-blue-500"
        : "bg-green-500",
    form: index % 3 === 0 ? "form1" : "form2",
  }));

  const columns = [
    { key: "id", title: "STT", align: "text-center" },
    { key: "hoSo", title: "Hồ sơ", align: "text-center" },
    { key: "ten", title: "Tên" },
    {
      key: "mau",
      title: "Mẫu",
      padding: "p-8",
      render: (value) => (
        <img src={value} alt="Hình mẫu" className="w-14 h-14" />
      ),
    },
    { key: "soDon", title: "Số đơn", color: "text-[#0954E9]" },
    { key: "ngayNopHoSo", title: "Ngày nộp hồ sơ" },
    { key: "phanLoai", title: "Phân loại" },
    { key: "soBang", title: "Số bằng" },
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

  return (
    <div className="pt-6 space-y-6">
      <FilterBar />
      {/*Table*/}
      <CustomTable
        data={data}
        columns={columns}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        onRowClick={(item) => console.log("Clicked:", item)}
      />
    </div>
  );
};

export default DocumentManage;
