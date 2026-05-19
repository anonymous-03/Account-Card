import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserForm({ setUser }) {
  const [form, setForm] = useState({
    name: "",
    accountNo: "",
    mobile: "",
    aadhar: "",
    bank: "NULL",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    if (form.bank === "NULL") {
      alert("Please select a bank");
      return;
    }
    setUser(form);
    navigate("/generate-card");
  };

  return (
    
    <div className="flex justify-center items-center h-screen bg-gray-100 page-container">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-lg w-80 space-y-4 form-group"
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

        <select id="bank" name="bank" className="w-full p-2 border rounded" required onChange={handleChange} value={form.bank}>
          <option value="NULL">-- Choose Bank --</option>
          <option value="BGB">Bihar Gramin Bank</option>
          <option value="UBI">Union Bank of India</option>

        </select>

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
