import { useLocation } from "react-router-dom";

const Form2 = () => {
  const location = useLocation();
  const documentData = location.state;
  const data = [
    { stt: 1, content: "Nộp hồ sơ", date: "12/11/2024", link: "Tài liệu" },
    {
      stt: 2,
      content: "Thông báo bổ sung",
      date: "12/11/2024",
      link: "Tài liệu",
    },
    {
      stt: 3,
      content: "Trả lời thông báo bổ sung",
      date: "12/11/2024",
      link: "Tài liệu",
    },
    { stt: 4, content: "QĐ hợp lệ", date: "13/11/2024", link: "Tài liệu" },
    { stt: 5, content: "TB nội dung", date: "13/11/2024", link: "Tài liệu" },
    { stt: 6, content: "Trả lời TBND", date: "13/11/2024", link: "Tài liệu" },
    {
      stt: 7,
      content: "Nộp phí cấp bằng",
      date: "13/11/2024",
      link: "Tài liệu",
    },
    { stt: 8, content: "Văn bằng", date: "14/11/2024", link: "Tài liệu" },
  ];
  if (!documentData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-white rounded-lg shadow-lg px-[10vw] py-4">
      <h1 className="w-full text-center font-sf-semibold text-[#0457C2] text-2xl uppercase border-b p-4">
        {documentData.ten} 2
      </h1>

      {/*Content*/}
      <div className="mt-10">
        {/*Content-1*/}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 mb-8">
          <div className="flex items-center">
            <strong className="w-40">Số đơn:</strong>
            <span>{documentData.soDon}</span>
          </div>
          <div className="flex items-center">
            <strong className="w-40">Ngày nộp đơn:</strong>
            <span>{documentData.ngayNopHoSo || "11/11/2024"}</span>
          </div>
          <div className="flex items-center">
            <strong className="w-40">Ngày QĐ hợp lệ:</strong>
            <span>{documentData.ngayQDHopLe || "11/11/2024"}</span>
          </div>
          <div className="flex items-center">
            <strong className="w-40">Số bằng:</strong>
            <span>{documentData.soBang}</span>
          </div>
          <div className="flex items-center">
            <strong className="w-40">Ngày cấp bằng:</strong>
            <span>{documentData.ngayCapBang || "11/11/2024"}</span>
          </div>
          <div className="flex items-center">
            <strong className="w-40">Ngày hết hạn:</strong>
            <span>{documentData.ngayHetHan || "11/11/2024"}</span>
          </div>
          <div className="flex items-center">
            <strong className="w-40">Nhãn hiệu:</strong>
            <span>{documentData.nhanHieu || "sohuutritue.vn"}</span>
          </div>
        </div>

        {/*Logo*/}
        <div className="w-full flex items-center justify-center mt-8 mb-6">
          <img
            src="/images/document-logo.png"
            alt="So huu tri tue logo"
            className="w-[92px] h-[92px]"
          />
        </div>

        {/*Content-2*/}
        <div className="mt-6 mb-8">
          <div className="flex items-start">
            <strong className="w-40">Phân loại HH/DV:</strong>
            <span> Tên</span>
          </div>
          <div className="flex items-start">
            <strong className="w-40">Nhóm 09:</strong>
            <span>Phần mềm lập trình</span>
          </div>
          <div className="flex items-start">
            <strong className="w-40">Nhóm 45:</strong>
            <span>Dịch vụ sở hữu trí tuệ, dịch vụ luật sư</span>
          </div>
          <div className="flex items-start">
            <strong className="w-40">Chủ đơn:</strong>
            <span>
              Công ty TNHH Masterbrand
              <br />
              Số 104/13 Nguyễn Thái Sơn, Phường 3, Quận Gò Vấp, TP. Hồ Chí Minh
            </span>
          </div>
        </div>

        {/* Table Section*/}
        <div className="bg-white rounded-lg ">
          <h2 className="text-white bg-[#0457C2] px-6 py-[18px] rounded-t-lg">
            Tiến trình hồ sơ
          </h2>
          <table className="w-full text-left border rounded-b-lg">
            <thead>
              <tr className="bg-gray-200 font-sf-medium">
                <th className="p-3">STT</th>
                <th className="p-3">Nội dung xử lý</th>
                <th className="p-3">Ngày hoàn thành</th>
                <th className="p-3">Tài liệu</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-blue-50 border-b">
                  <td className="p-3">{item.stt}</td>
                  <td className="p-3">{item.content}</td>
                  <td className="p-3">{item.date}</td>
                  <td className="p-3 text-blue-600">
                    <a href="/">{item.link}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="relative -top-[1px] p-3 border rounded-b-lg"></div>
        </div>

        {/*Button*/}
        <div className="w-full flex items-center justify-center gap-3 mt-8 mb-10">
          <button className="flex items-center justify-center border border-[#0457C2] rounded-lg py-2 px-[10px] gap-[5px]">
            <img src="/icons/blue-eye.svg" alt="Eye icon" />
            Xem hồ sơ
          </button>
          <button className="flex items-center justify-center border border-[#0457C2] rounded-lg py-2 px-[10px] gap-[5px]">
            <img src="/icons/download.svg" alt="Download icon" />
            Tải hồ sơ
          </button>
        </div>

        {/*Footer*/}
        <p className="w-full text-center text-[#333333]">
          Nguồn: Sohuutritue.vn - Nền tảng dịch vụ Sở hữu trí tuệ số 1 Việt Nam!
          <br /> Hotline: 08 1900 9697 Email: luatsu@sohuutritue.vn
        </p>
      </div>
    </div>
  );
};

export default Form2;
