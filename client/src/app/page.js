import * as React from 'react';
import styles from "./page.module.css";
import ResponsiveAppBar from "@/src/app/components/AppBar";
import {Stack} from "@mui/material";
import Container from "@mui/material/Container";

export default function Home() {
  return (
      <main className={styles.main}>
        <ResponsiveAppBar/>
        <Stack direction="column">
          <Container style={{padding: 0, margin: 0, maxWidth:'100%'}}>
            <img src="https://i.imgur.com/srL97Eq.png"/>
          </Container>
          {new Array(100).fill().map((_, i) => (
              <div key={i} style={{ height: '70px', backgroundColor: 'yellow' }}>
                Dummy div {i}
              </div>
          ))}
        </Stack>
      </main>
  );
}
