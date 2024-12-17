import { useRef, useState } from "react";

const DragDrop = ({ label, onFileChange, acceptedFormats }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null); // Use a ref to access the file input programmatically

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

  // Programmatically trigger the file input click
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      onClick={handleClick} // Make the whole area clickable
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`border-2 w-full ${
        file ? "border-solid border-blue-600" : "border-dashed border-gray-300"
      } rounded-md p-4 text-center cursor-pointer relative flex flex-col justify-center items-center space-y-4`}
    >
      {file ? (
        <div className="flex items-center justify-center">
          <label
            htmlFor={label}
            className="block text-sm text-gray-500 cursor-pointer"
          >
            {file ? file.name : label}
          </label>
          <button
            type="button"
            onClick={handleRemoveFile}
            className="absolute right-2"
          >
            <img src="/icons/x-close.svg" alt="Remove" className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <>
          <input
            ref={fileInputRef} // Attach ref to file input
            type="file"
            onChange={handleFileSelect}
            className="hidden"
            id={label}
          />
          <img
            src="/images/drag-drop.png"
            alt="File Icon"
            className="w-[66px] h-[66px]"
          />
          <button
            type="button"
            className="font-sf-medium text-sm px-4 py-1 bg-[#0457C2] text-white rounded-lg"
          >
            Tải lên
          </button>
          <label
            htmlFor={label}
            className="block text-sm text-gray-500 cursor-pointer"
          >
            {file ? file.name : label}
          </label>{" "}
        </>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default DragDrop;
