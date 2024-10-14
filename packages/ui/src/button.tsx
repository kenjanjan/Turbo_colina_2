"use client"; // Add this line to make this a Client Component

import { cn } from "./utils";

const Button = ({ className, text, alertText }: { className: string; text: string;   alertText?: () => void; // Ensure this is a function type
}) => {
  return (
    <div   onClick={() => { 
      if (alertText) alertText(); // Call the function when clicked
    }}// You directly pass the function, no need for an arrow function if it's just invoking the function.
    className={cn("bg-green-500 text-white", { className })}>{text}</div>
  );
};

export default Button;
