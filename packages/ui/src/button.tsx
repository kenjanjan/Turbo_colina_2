import { cn } from "./utils";

const Button = ({ className, text }: { className: string; text: string }) => {
  return (
    <div className={cn("bg-green-500 text-white", { className })}>{text}</div>
  );
};

export default Button;
