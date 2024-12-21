import React from "react";

type Props = {
  children: React.ReactNode;
  onCLick: () => void;
};

const Button = ({ children, onCLick }: Props) => {
  return (
    <button
      onClick={onCLick}
      className="bg-green-500/40 hover:bg-green-700/40 hover:border-green-600 px-8 py-4 text-2xl"
    >
      {children}
    </button>
  );
};

export default Button;
