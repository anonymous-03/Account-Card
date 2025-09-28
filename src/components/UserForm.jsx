import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserForm({ setUser }) {
  const [form, setForm] = useState({
    name: "",
    accountNo: "",
    mobile: "",
    aadhar: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(form);
    navigate("/generate-card");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-lg w-80 space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4">Enter User Details</h2>

        {["name", "accountNo", "mobile", "aadhar"].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field === "accountNo" ? "Account No" : field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        ))}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Generate Card
        </button>
      </form>
    </div>
  );
}
