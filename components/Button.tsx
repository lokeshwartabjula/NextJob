// components/Button.tsx
import React, { FC, ReactNode } from "react";
import styles from "../styles/Button.module.css";

type ButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ children, icon, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
