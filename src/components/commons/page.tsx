import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  state?: "default" | "active" | "disabled";
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

const buttonClasses = {
  primary: {
    default: "bg-[#633CFF] text-white hover:bg-[#BEADFF]",
    active: "bg-[#633CFF] text-white hover:bg-[#BEADFF]",
    disabled: "bg-[#633CFF] text-white opacity-25 cursor-not-allowed",
  },
  secondary: {
    default: "border border-[#633CFF] text-[#633CFF] hover:bg-[#EFEBFF]",
    active: "border border-[#633CFF] text-[#633CFF] hover:bg-[#EFEBFF]",
    disabled:
      "border border-[#633CFF] text-[#633CFF] opacity-25 cursor-not-allowed",
  },
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  state = "default",
  onClick,
  className = "",
  children,
}) => {
  const variantClasses = buttonClasses[variant][state];

  return (
    <button
      className={`flex items-center justify-center py-[11px] px-[27px] rounded-lg transition duration-150 ease-in-out ${variantClasses}`}
      onClick={state !== "disabled" ? onClick : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
