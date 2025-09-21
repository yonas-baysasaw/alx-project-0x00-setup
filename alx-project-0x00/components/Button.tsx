import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ styles, title, className }) => {
  return <button className={`${className} ${styles} border-2`}>{title}</button>;
};

export default Button;
