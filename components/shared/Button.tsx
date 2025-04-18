interface ButtonProps {
  text: string;
  className: React.ReactNode;
}

const Button = ({ text, className }: ButtonProps) => {
  return (
    <button
      className={`px-6 py-4 rounded-[14px] border border-[#191A23] hover:bg-primary duration-500 hover:border-none transition-all ${className}`}
    >
      {text}
    </button>
  );
};
export default Button;
