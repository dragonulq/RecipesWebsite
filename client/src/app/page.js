import * as React from 'react';
import styles from "./page.module.css";
import ResponsiveAppBar from "@/src/app/components/AppBar";
import {Stack} from "@mui/material";
import Container from "@mui/material/Container";

export default function Home() {

  return (
      <main className={styles.main}>
        <ResponsiveAppBar/>
        <Stack>
          <Container style={{padding: 0, margin: 0, maxWidth:'100%', display: 'flex', flexWrap: 'wrap'}}>
            <div style={{flex: 'auto', width: '58%'}}>
              <img style={{width: '100%', height: '100%'}} src="https://mail.google.com/mail/u/0?ui=2&ik=05131f0376&attid=0.1&permmsgid=msg-f:1793607911932573054&th=18e42ce49912357e&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8FWSNl7cC8PhFgqMbVlmzqz3dYS2b1nXreI45xx_bFRvlXiXWDs_qbnHONak57w_jdvL8QSqOZLTmkAbBN1FgoiCZpLssUZI8fNzLq5hljDCwn3tr913vT0pQ&disp=emb" alt="Missing image" id="fixedImage" />
            </div>
            <div style={{flex: 'auto', backgroundColor: "green", minWidth: '515px', minHeight: '650px', width: '42%'}}>


            </div>
          </Container>
          <div>
            <img style={{width: '120px', height: '120px'}} src="https://mail.google.com/mail/u/0?ui=2&ik=05131f0376&attid=0.1&permmsgid=msg-f:1793607911932573054&th=18e42ce49912357e&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8FWSNl7cC8PhFgqMbVlmzqz3dYS2b1nXreI45xx_bFRvlXiXWDs_qbnHONak57w_jdvL8QSqOZLTmkAbBN1FgoiCZpLssUZI8fNzLq5hljDCwn3tr913vT0pQ&disp=emb"/>
          </div>
          {new Array(100).fill().map((_, i) => (
              <div key={i} style={{height: '70px', backgroundColor: 'yellow' }}>
                Dummy div {i}
              </div>
          ))}
        </Stack>
      </main>
  );
}
