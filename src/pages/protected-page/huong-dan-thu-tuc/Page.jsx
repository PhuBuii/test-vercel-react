import React from "react";

const Guide = () => {
  const services = [
    {
      id: 1,
      name: "THỦ TỤC ĐĂNG KÝ NHÃN HIỆU",
      pdfLink: "https://example.com/pdf1",
    },
    {
      id: 2,
      name: "THỦ TỤC ĐĂNG KÝ NHÃN HIỆU",
      pdfLink: "https://example.com/pdf2",
    },
    {
      id: 3,
      name: "THỦ TỤC ĐĂNG KÝ NHÃN HIỆU",
      pdfLink: "https://example.com/pdf3",
    },
    {
      id: 4,
      name: "THỦ TỤC ĐĂNG KÝ NHÃN HIỆU",
      pdfLink: "https://example.com/pdf4",
    },
    {
      id: 5,
      name: "THỦ TỤC ĐĂNG KÝ NHÃN HIỆU",
      pdfLink: "https://example.com/pdf5",
    },
  ];

  return (
    <div className="py-6">
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-6 w-1/3">
          <div className="relative w-2/3 flex items-center">
            <input
              type="text"
              placeholder="Tìm kiếm dịch vụ"
              className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-blue-500 w-full"
            />
            <span className="absolute right-3 cursor-pointer">
              <img src="/icons/search-black.svg" alt="Search icon" />
            </span>
          </div>
          <select className="w-1/3 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-blue-500">
            <option value="all">Tất cả các dịch vụ</option>
            <option value="service1">Dịch vụ 1</option>
            <option value="service2">Dịch vụ 2</option>
          </select>
        </div>
        <button className="bg-[#0457C2] text-white px-4 py-2 rounded-lg text-sm font-be-vietnam-medium flex items-center justify-center gap-2">
          <img src="/icons/search.svg" alt="Search icon" />
          Tìm kiếm
        </button>
      </div>

      {/* Service List */}
      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-3/5 bg-white rounded-lg flex items-center justify-between px-5 py-[13.5px] border border-[#EAEAEA]"
          >
            <div className="flex gap-2 items-center">
              <img
                src="/images/document.png"
                alt="document icon"
                className="w-5 h-5"
              />
              <p className="text-gray-700 text-sm font-sf-medium">
                {service.name}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/images/pdf-icon.png"
                alt="PDF icon"
                className="w-6 h-6"
              />
              <a
                href={service.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Mở file PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
