import React from "react";
import { Link } from "react-router-dom";

const ServiceItems = ({ items }) => (
  <div className="grid grid-cols-6 gap-6">
    {items.map((item) => (
      <Link
        key={item.id}
        to={`/danh-sach-dich-vu/dich-vu/${item.form}`}
        className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-start hover:bg-blue-100"
      >
        <img
          src="/images/document-sign.png"
          alt="icon"
          className="w-12 h-12 mb-2"
        />
        <p className="text-center text-sm font-medium">{item.name}</p>
      </Link>
    ))}
  </div>
);

export default ServiceItems;
