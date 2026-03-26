import styles from "./button.module.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  label,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${className ?? ""}`}
    >
      <span className={styles.label}>{label}</span>
    </button>
  );
}
