// components/NavBar.tsx
import React, { FC, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";

const NavBar: FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navItems}>
        <Image
          src="/images/logo2.png"
          alt="Logo"
          width={70}
          height={50}
          className={styles.logo}
        />
        <h1>Your Website Name</h1>
      </div>

      <div className={styles.navItems}>
        <Link href="/dashboard">Dashboard</Link>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={styles.userIcon}
        >
          <FaUserCircle size={45} />

          {isHovered && (
            <div className={styles.userMenu}>
              <Link href="/account">Account</Link>
              <Link href="/settings">Settings</Link>
              <Link href="/logout">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
