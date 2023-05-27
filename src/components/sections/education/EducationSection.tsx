import { Stack, Typography } from '@mui/material';

export default function EducationSection(): JSX.Element {
  return (
    <Stack alignItems="center">
      <Typography variant="h3">EDUCATION</Typography>
      <Stack>
        <Typography variant="h6">Fudan University</Typography>
        <Typography variant="body1">Mathematics and Applied Mathematics</Typography>
        <Typography variant="body1">2018-2022</Typography>
        <Typography variant="body2">
          I received my Bachelor's degree in Mathematics and Applied Mathematics, with a focus on
          subjects relevant to my current role as a software developer such as graph theory, data
          structures, deep learning, and mathematical modeling. Before starting my studies, I
          received a full amount scholarship (Shanghai Government Scholarship Class A) for the
          duration of my time at university. During my studies, I also independently developed a
          Discord bot for the student union, written in Python.
        </Typography>
      </Stack>
    </Stack>
  );
}
