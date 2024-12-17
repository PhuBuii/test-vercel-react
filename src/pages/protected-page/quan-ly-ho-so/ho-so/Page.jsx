import React from "react";
import { useParams } from "react-router-dom";
import Form1 from "../forms/Form1";
import Form2 from "../forms/Form2";

const DocumentDetail = () => {
  const { slug } = useParams();

  const renderForm = () => {
    switch (slug) {
      case "form1":
        return <Form1 />;
      case "form2":
        return <Form2 />;
      default:
        return <h1>Form not found</h1>;
    }
  };

  return <div className="py-6">{renderForm()}</div>;
};

export default DocumentDetail;
