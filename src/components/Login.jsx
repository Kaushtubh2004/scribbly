import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Handle successful login
      alert("Login successful!");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full p-8 shadow-lg border border-black rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-black text-center">Login to Scribbly</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-black mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-black rounded focus:outline-none"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-black mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-black rounded focus:outline-none"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
        <div className="w-full flex justify-center">dnot remember password?&nbsp; <NavLink to="/forgotpassword" className="text-gray-500 underline">Forget password</NavLink></div>
      </div>
      
    </div>
  );
};

export default Login;
