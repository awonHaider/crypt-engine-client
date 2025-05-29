import React, { useState } from "react";
import CustomButton from "../Components/CustomButton.jsx";

const OnetimepadCipher = () => {
  const [isF1Focused, setIsF1Focused] = useState(false);
  const [plainText, setPlainText] = useState("");
  const [key, setKey] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEncrypt = async () => {
    if (!plainText.trim() || !key.trim()) {
      setError("Please enter both plain text and key");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/encrypt/one-time-pad",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            plainText: plainText,
            key: key,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Encryption failed");
      }

      const data = await response.json();
      setCipherText(data.cipherText);
    } catch (err) {
      setError(err.message || "Key must match plaintext length (letters only)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="api-section pl-[2rem] mb-[2rem] md:pl-[8rem] md:pt-[5rem]">
        <h3 className="mb-6 text-xl font-bold">One Time Pad Cipher</h3>

        <h3 className="mb-1 text-sm font-semibold">Plain Text:</h3>
        <div
          className={`mb-6 border border-[#E0E0E0] rounded-md w-[90%] md:w-[75%] lg:w-[60%] py-2 px-4 
                ${isF1Focused ? "bg-[#F5F5F5]" : "bg-transparent"}`}
          onFocus={() => setIsF1Focused(true)}
          onBlur={() => setIsF1Focused(false)}
        >
          <input
            className="text-sm w-full bg-transparent outline-none"
            placeholder="Enter plain text (letters only)"
            type="text"
            value={plainText}
            onChange={(e) => setPlainText(e.target.value)}
          />
        </div>

        <h3 className="mb-1 text-sm font-semibold">Cipher Key:</h3>
        <div
          className={`mb-6 border border-[#E0E0E0] rounded-md w-[90%] md:w-[75%] lg:w-[60%] py-2 px-4 
                ${isF1Focused ? "bg-[#F5F5F5]" : "bg-transparent"}`}
          onFocus={() => setIsF1Focused(true)}
          onBlur={() => setIsF1Focused(false)}
        >
          <input
            className="text-sm w-full bg-transparent outline-none"
            placeholder={`Enter key (must be ${plainText.length} letters)`}
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <CustomButton
          title={loading ? "Encrypting..." : "Encrypt It"}
          onClick={handleEncrypt}
          disabled={loading || !plainText || !key}
        />

        {cipherText && (
          <>
            <h3 className="mb-4 mt-8 text-sm font-semibold">Cipher Text:</h3>
            <div className="md:w-[60%] lg:w-[50%]">
              <p className="text-[#828282] mb-6 break-all">{cipherText}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OnetimepadCipher;
