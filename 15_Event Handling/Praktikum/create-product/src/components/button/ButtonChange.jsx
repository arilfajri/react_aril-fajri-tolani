import React, { useState } from "react";

function ButtonChange() {
  const [language, setLanguage] = useState("en");

  function handleLanguageChange() {
    setLanguage(language === "en" ? "id" : "en");
  }

  return (
    <div>
      <h1>{language === "en" ? "Create a New Product" : "Buat Produk Baru"}</h1>
      <label>
        {language === "en" ? "Title" : "Judul"}
        <input type="text" />
      </label>
      <label>
        {language === "en" ? "Description" : "Deskripsi"}
        <textarea />
      </label>
      <button onClick={handleLanguageChange}>
        {language === "en" ? "Switch to Indonesian" : "Ganti ke Bahasa Inggris"}
      </button>
    </div>
  );
}

export default ButtonChange;
