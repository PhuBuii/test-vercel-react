import { useState } from "react";

const Support = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    note: "",
  });

  const contact = [
    {
      image: "/icons/telephone.svg",
      alt: "telephone icon",
      title: "Điện thoại",
      text: "+13456789012",
    },
    {
      image: "/icons/email.svg",
      alt: "email icon",
      title: "Email",
      text: "infor@poha.com",
    },
    {
      image: "/icons/location.svg",
      alt: "location icon",
      title: "Địa chỉ",
      text: "145 Phú Lợi, Thủ Dầu Một, Bình Dương",
    },
  ];

  const formFormat = [
    {
      label: "Họ tên",
      type: "text",
      name: "fullName",
      placeholder: "Họ tên",
      value: formData.fullName,
    },
    {
      label: "Số điện thoại",
      type: "text",
      name: "phone",
      placeholder: "Số điện thoại",
      value: formData.phone,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Nhập email",
      value: formData.email,
    },
    {
      label: "Lời nhắn",
      type: "textarea",
      name: "note",
      placeholder: "Để lại lời nhắn",
      value: formData.note,
      rows: 4,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      note: "",
    });
  };

  return (
    <div className="pt-6 flex flex-col lg:flex-row gap-6">
      {/* Contact Information */}
      <div className="lg:w-1/2 bg-white rounded-xl h-auto lg:h-[455px] py-6 px-8">
        <p className="font-sf-semibold text-xl">Bạn cần trợ giúp?</p>
        <p className="mt-4 text-sm text-[#606060]">
          We are here to assist you with any questions, concerns, or issues you
          may have. Our dedicated support team is committed to providing you
          with the best service.
        </p>
        <div className="mt-8 space-y-6">
          {contact.map((item, index) => (
            <div
              key={index}
              className="border border-[#E1E5F3] rounded-lg flex justify-between items-center p-4"
            >
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.alt} />
                <p className="text-sm">{item.title}</p>
              </div>
              <p className="font-sf-semibold text-sm text-[#1C1A3C]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Support Form */}
      <form
        className="lg:w-1/2 flex flex-col items-end"
        onSubmit={handleSubmit}
      >
        <div className="space-y-4 bg-white rounded-xl w-full h-auto lg:h-[455px] py-6 px-8">
          {formFormat.map((input, index) => (
            <div key={index} className="w-full flex flex-col space-y-2">
              <label htmlFor={input.name} className="text-sm">
                {input.label}
              </label>
              {input.type === "textarea" ? (
                <textarea
                  name={input.name}
                  id={input.name}
                  rows={input.rows}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm text-[#817F9B] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              ) : (
                <input
                  type={input.type}
                  name={input.name}
                  id={input.name}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm text-[#817F9B] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="bg-blue-500 p-[10px] font-sf-medium mt-6 text-white rounded-lg hover:bg-blue-600"
        >
          Gửi ngay
        </button>
      </form>
    </div>
  );
};

export default Support;
