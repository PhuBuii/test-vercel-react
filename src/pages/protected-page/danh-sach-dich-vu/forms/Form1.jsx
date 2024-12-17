// Import necessary libraries
import React, { useState } from "react";
import DragDrop from "../../components/DragDrop";
import CustomPlaceholderField from "../../components/CustomInput";

const Form1 = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!file1 || !file2) {
      alert("Vui lòng tải lên đầy đủ giấy tờ và logo nhãn hiệu.");
      return;
    }
    console.log("File giấy tờ:", file1);
    console.log("File logo:", file2);
  };

  return (
    <div className="  bg-white p-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        ĐĂNG KÝ NHÃN HIỆU
      </h1>
      <form onSubmit={handleSubmitForm} className="space-y-8">
        {/* Applicant Info */}
        <div>
          <h2 className="font-sf-semibold mb-4">1. Người nộp đơn</h2>
          <div className="flex flex-col items-center justify-center gap-4">
            <CustomPlaceholderField placeholder="Tên chủ đơn" />
            <CustomPlaceholderField placeholder="Địa chỉ" />
            <div className="flex gap-6 w-full">
              <CustomPlaceholderField placeholder="Email" type="email" />
              <CustomPlaceholderField placeholder="Số điện thoại" type="tel" />
            </div>
          </div>
        </div>

        {/* Trademark Info */}
        <div>
          <h2 className="font-sf-semibold mb-4">2. Thông tin dịch vụ</h2>
          <div className="flex flex-col items-center justify-center gap-4">
            <CustomPlaceholderField placeholder="Tên sáng chế" />
            <CustomPlaceholderField placeholder="Lĩnh vực kĩ thuật" />
            <CustomPlaceholderField placeholder="Tóm tắt sáng chế" isTextarea />
          </div>
        </div>

        {/* Drag & Drop Components */}
        <div className="flex justify-between gap-6 w-full">
          <div className="w-full">
            <h2 className="text-lg font-semibold mb-4">3. Giấy ủy quyền</h2>
            <DragDrop
              label="Kéo thả file giấy tờ để tải lên"
              acceptedFormats={["pdf"]}
              onFileChange={(file) => setFile1(file)}
            />
          </div>
          <div className="w-full">
            <h2 className="text-lg font-semibold mb-4">4. Logo, nhãn hiệu</h2>
            <DragDrop
              label="Kéo thả file logo để tải lên"
              acceptedFormats={["png", "jpeg", "jpg", "svg"]}
              onFileChange={(file) => setFile2(file)}
            />
          </div>
        </div>

        {/* Submit Button */}
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
            Nộp hồ sơ
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form1;
