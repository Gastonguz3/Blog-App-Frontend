import { Eye, EyeOff } from "lucide-react";
import { useState, type ReactNode } from "react";

interface PasswordFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: ReactNode;
  id: string;
  label: string;
  placeholder: string
}

const PasswordField = ({ value, onChange, icon, id, label, placeholder}: PasswordFieldProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative pt-4">
      <label
        htmlFor={id}
        className="text-md font-medium text-black"
      >
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </span>

        <input
          type={show ? "text" : "password"}
          id={id}
          value={value}
          onChange={onChange}
          className="w-full border border-black rounded-lg px-12 py-3 focus:outline-none  focus:border-blue-500"
          placeholder={placeholder}
          autoComplete="off"
        />

        <span
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {show ? (
                <EyeOff className="w-7 h-7 cursor-pointer" />
              ) : (
                <Eye className="w-7 h-7 cursor-pointer" />
              )}
        </span>
      </div>
    </div>
  );
};

export default PasswordField;