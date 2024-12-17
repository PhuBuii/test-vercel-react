// Import necessary libraries
import React, { useState } from "react";

const DragDrop = ({ label, onFileChange, acceptedFormats }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
      const droppedFile = droppedFiles[0];
      validateFile(droppedFile);
    }
  };

  const handleFileSelect = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const selectedFile = selectedFiles[0];
      validateFile(selectedFile);
    }
  };

  const validateFile = (file) => {
    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (acceptedFormats.includes(fileExtension)) {
      setFile(file);
      setError("");
      onFileChange(file);
    } else {
      setError(`Chỉ chấp nhận các định dạng: ${acceptedFormats.join(", ")}`);
      setFile(null);
      onFileChange(null);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setError("");
    onFileChange(null);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`border-2 ${
        file ? "border-solid border-blue-600" : "border-dashed border-gray-300"
      } rounded-md p-4 text-center cursor-pointer relative`}
    >
      <input
        type="file"
        onChange={handleFileSelect}
        className="hidden"
        id={label}
      />
      <label
        htmlFor={label}
        className="block text-sm text-gray-500 cursor-pointer"
      >
        {file ? file.name : label}
      </label>
      {file && (
        <button
          type="button"
          onClick={handleRemoveFile}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
        >
          <img src="/icons/x-close.svg" alt="Remove" className="h-4 w-4" />
        </button>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

const Form2 = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const handleSubmitForm = () => {
    if (!file1 || !file2) {
      alert("Vui lòng tải lên đầy đủ giấy tờ và logo nhãn hiệu.");
      return;
    }
    console.log("File giấy tờ:", file1);
    console.log("File logo:", file2);
  };
  return (
    <div className=" p-6 bg-white rounded-lg">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        ĐĂNG KÝ NHÃN HIỆU 2
      </h1>
      <form onSubmit={handleSubmitForm}>
        {/* Applicant Info */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">1. Người nộp đơn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Tên cá nhân*"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="Địa chỉ*"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="Điện thoại*"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="email"
              placeholder="Email*"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </div>

        {/* Trademark Info */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">2. Thông tin nhãn hiệu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Tên nhãn hiệu*"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="Lĩnh vực kinh doanh*"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="Tên lĩnh vực*"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </div>

        {/* Drag & Drop Components */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">
            3. Giấy tờ quyển / 4. Logo nhãn hiệu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DragDrop
              label="Kéo thả file giấy tờ để tải lên"
              acceptedFormats={["pdf"]}
              onFileChange={(file) => setFile1(file)}
            />
            <DragDrop
              label="Kéo thả file logo để tải lên"
              acceptedFormats={["png", "jpeg", "jpg", "svg"]}
              onFileChange={(file) => setFile2(file)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Nộp hồ sơ
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
