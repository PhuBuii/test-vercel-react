import { useState, useRef } from "react";

const CustomPlaceholderField = ({
  placeholder,
  type = "text",
  isTextarea = false,
  required = true,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null); // Ref for input/textarea

  const handlePlaceholderClick = () => {
    setIsFocused(true);
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the actual input/textarea
    }
  };

  return (
    <div className="relative w-full">
      {/* Custom placeholder */}
      {!isFocused && !value && (
        <div
          className="absolute left-2 top-3 text-gray-500 pointer-events-none cursor-text"
          onClick={handlePlaceholderClick}
        >
          {placeholder} {required && <span className="text-red-500">*</span>}
        </div>
      )}

      {/* Input or Textarea */}
      {!isTextarea ? (
        <input
          ref={inputRef}
          type={type}
          value={value}
          required={required} // Correctly apply `required` prop
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="border border-gray-300 rounded-md py-3 px-4 w-full focus:outline-blue-500"
        />
      ) : (
        <textarea
          ref={inputRef}
          value={value}
          required={required} // Correctly apply `required` prop
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="border border-gray-300 rounded-md py-3 px-4 w-full focus:outline-blue-500"
          rows={4}
        ></textarea>
      )}
    </div>
  );
};

export default CustomPlaceholderField;
