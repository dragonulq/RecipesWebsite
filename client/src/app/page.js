import * as React from 'react';
import styles from "./page.module.css";
import ResponsiveAppBar from "@/src/app/components/AppBar";

export default function Home() {
  return (
      <main className={styles.main}>
        <ResponsiveAppBar/>

      </main>
  );
}
