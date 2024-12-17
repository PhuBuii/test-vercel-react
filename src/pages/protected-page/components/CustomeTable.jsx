import React from "react";
import { useNavigate } from "react-router-dom";

const CustomTable = ({
  columns,
  data,
  onRowClick,
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage,
  setView = true,
  setEdit = false,
  basePath = "/quan-ly-ho-so/ho-so",
}) => {
  const navigate = useNavigate();
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, data.length);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handleDetail = (item) => {
    navigate(`${basePath}/${item.form || item.id}`, { state: item });
  };

  const handleEdit = (item) => {
    navigate(`${basePath}/${item.form || item.id}/chinh-sua`, { state: item });
  };
  return (
    <div className="bg-white rounded-lg shadow-lg px-6 py-4 pb-0">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b font-sf-semibold text-[#0267FF] uppercase text-sm">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`py-2 ${col.padding || "px-4"} ${
                  col.align || "text-start"
                }`}
              >
                {col.title}
              </th>
            ))}
            {(setView || setEdit) && <th className="px-4 py-2 text-start"></th>}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr
              key={item.id || index}
              onClick={() => onRowClick && onRowClick(item)}
              className="hover:bg-blue-100 border-b cursor-pointer"
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={` h-[72px] px-4 py-2 ${
                    column.align || "text-start"
                  } ${column.color || ""}`}
                >
                  {column.render
                    ? column.render(item[column.key], item)
                    : item[column.key]}
                </td>
              ))}
              {(setView || setEdit) && (
                <td className="py-2 border-b border-gray-200 text-center">
                  {setView && (
                    <button
                      className="text-blue-500 hover:underline cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDetail(item);
                      }}
                      title="Xem chi tiết"
                    >
                      <img src="/icons/eye.svg" alt="Eye icon" />
                    </button>
                  )}
                  {setEdit && (
                    <button
                      className="text-blue-500 hover:underline cursor-pointer pl-4"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(item);
                      }}
                      title="Chỉnh sửa"
                    >
                      <img src="/icons/edit-black.svg" alt="Edit icon" />
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination & Items Per Page */}
      <div className="flex justify-between items-center mt-4 px-6 py-4">
        <div className="text-sm">
          Hiển thị
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="ml-2 p-1 border border-gray-300 rounded"
          >
            {[5, 10, 20, 30, 50].map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </div>
        <div className="text-sm">
          Hiển thị {startIndex} đến {endIndex} trong tổng số {data.length} bản
          ghi
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="p-1 rounded hover:bg-gray-200"
          >
            <img src="/icons/left-arrow.svg" alt="Left arrow" />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 ${
                currentPage === index + 1
                  ? "border border-blue-500 text-blue-500"
                  : ""
              } rounded hover:bg-blue-200`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="p-1 rounded hover:bg-gray-200"
          >
            <img src="/icons/right-arrow.svg" alt="Right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
