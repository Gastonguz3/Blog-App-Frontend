import type { ReactNode } from "react";

interface InputFieldProps {
  id: string;
  label: string;
  icon: ReactNode;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string,
}

const InputField = ({id,label,icon, type,value,onChange, placeholder}: InputFieldProps) => {
  return (
    <div className="relative pt-4">
      <label
        htmlFor={id}
        className="text-md font-medium text-black z-10"
      >
        {label}
      </label>

      <div className="relative">
        <span className="absolute text-gray-400 left-4 top-1/2 transform -translate-y-1/2">
          {icon}
        </span>

        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className="w-full border border-black rounded-lg px-12 py-3 focus:outline-none  focus:border-blue-500"
          placeholder={placeholder}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default InputField;