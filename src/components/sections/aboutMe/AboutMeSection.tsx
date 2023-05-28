import { Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function AboutMeSection(): JSX.Element {
  return (
    <Stack alignItems="center">
      <Typography variant="h3">ABOUT ME</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Image priority src="/photo.jpg" alt="Profile picture" width={200} height={245} />
        </Grid>
        <Grid item xs={12} sm>
          <Stack>
            <Typography variant="h4">Ng Say Peng</Typography>
            <Typography variant="body1">
              Software Developer, graduated from Fudan University
            </Typography>
            <Typography variant="body2">
              I am a software developer with experience in both frontend and backend development. I
              have expertise in a variety of technologies such as TypeScript, JavaScript, PHP
              Laravel, jQuery, React, NextJS, Java, bash, and Haskell. I am skilled in writing MySQL
              and PostgreSQL queries to manage databases and have experience in writing unit tests
              in Java and Haskell.
            </Typography>
            <Typography variant="body2">
              During my bachelor's degree in Mathematics and Applied Mathematics from Fudan
              University, I focused on relevant subjects such as graph theory, data structures, deep
              learning, and mathematical modeling. I also developed a Discord bot for the student
              union independently, written in Python. Additionally, I have received the Shanghai
              Municipal Government Scholarship Class A.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
