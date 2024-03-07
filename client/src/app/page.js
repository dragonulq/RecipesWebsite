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
          <Container style={{padding: 0, margin: 0, maxWidth:'100%', display: 'flex', flexWrap: 'wrap'}}>
            <div style={{flex: 'auto', width: '65%'}}>
              <img style={{width: '100%', height: '100%'}} src="https://i.imgur.com/srL97Eq.png" id="fixedImage" />
            </div>
            <div style={{flex: 'auto', backgroundColor: "green", minWidth: '515px', minHeight: '650px', width: '35%'}}>


            </div>
          </Container>
          {new Array(100).fill().map((_, i) => (
              <div key={i} style={{height: '70px', backgroundColor: 'yellow' }}>
                Dummy div {i}
              </div>
          ))}
        </Stack>
      </main>
  );
}
