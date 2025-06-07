"use client";
import { useState, useRef } from "react";

export default function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Header */}
        <h3 className="text-2xl font-bold text-center text-gray-800">
          OTP VERIFICATION
        </h3>
        <p className="text-sm text-green-600 text-center mt-2">
          An OTP has been sent to <b>********k876@gmail.com</b>
        </p>
        <p className="text-sm text-gray-700 text-center font-semibold mt-1">
          Please enter OTP to verify
        </p>

        {/* OTP Input Fields */}
        <div className="flex justify-center gap-2 mt-5">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 border border-green-500 rounded-sm text-center text-lg font-semibold focus:outline-hidden focus:ring-2 focus:ring-green-600 transition-all"
            />
          ))}
        </div>

        {/* Display OTP */}
        <div className="text-center mt-5">
          <p
            className={`text-xl font-bold ${
              otp.join("").length === 6 ? "text-green-600" : "text-red-600"
            }`}
          >
            {otp.join("") || "______"}
          </p>
        </div>
      </div>
    </div>
  );
}
