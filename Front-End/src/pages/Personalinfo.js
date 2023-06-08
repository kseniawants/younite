import React from "react";
import Info from "../components/Info";
import Photo from "../components/Photo";
import "../styles/Pages.css";

const Personalinfo = () => {
  return (
    <div className="peInfo">
      <h1>建立帳號</h1>
      <div className="from">
        <Info />
        <div>
          <h3>大頭照上傳</h3>
          <Photo />

          <h3>個人檔案照片</h3>
          <Photo />
        </div>
      </div>
    </div>
  );
};

export default Personalinfo;
