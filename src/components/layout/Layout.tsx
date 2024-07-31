import type React from "react";

import Navbar from "../navbar/Navbar";

import styles from "./layout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  );
}
