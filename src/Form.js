import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправленные данные:", formData);
  };

  return (
    <div className="center">
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Имя:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Номер телефона:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email адрес:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit" className="submit ">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
