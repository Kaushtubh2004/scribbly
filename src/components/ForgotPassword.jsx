import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [otpSent, setOtpSent] = useState(false); // Control enabling/disabling

    const handleOtpButton = (e) => {
        e.preventDefault(); // Prevent form submission
        if (email.trim() !== "") {
            // Here you can trigger actual OTP sending logic
            setOtpSent(true); // Enable OTP and Password fields
        } else {
            alert("Please enter a valid email address");
        }
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="max-w-md w-full p-8 shadow-lg border border-black rounded-xl">
                <h2 className="text-3xl font-bold mb-6 text-black text-center">Reset Your Password</h2>
                <form className="space-y-6">

                    <div>
                        <label className="block text-black mb-1">Email</label>
                        <div className="flex justify-between gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-black rounded focus:outline-none"
                                required
                            />
                            <button
                                onClick={handleOtpButton}
                                className="w-60 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
                            >
                                Send OTP
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-black mb-1">OTP</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-black rounded focus:outline-none"
                            disabled={!otpSent}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-black mb-1">New Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-black rounded focus:outline-none"
                            disabled={!otpSent}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                    >
                        Confirm
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
