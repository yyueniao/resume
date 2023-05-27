import { Card, CardContent, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function ProjectSection(): JSX.Element {
  return (
    <Stack alignItems="center">
      <Typography variant="h3">PROJECTS</Typography>
      <Stack spacing={2}>
        <Card sx={{ border: '1px solid black' }}>
          <CardContent>
            <Typography variant="h6">Resume</Typography>
            <Link href="https://github.com/yyueniao/resume">Github Link</Link>
            <Typography variant="body2">Yes, you are currently watching this project!</Typography>
          </CardContent>
        </Card>
        <Card sx={{ border: '1px solid black' }}>
          <CardContent>
            <Typography variant="h6">Calculator</Typography>
            <Link href="https://github.com/yyueniao/calculator">Github Link</Link>
            <Typography variant="body2">A simple calculator web application by Svelte.</Typography>
          </CardContent>
        </Card>
        <Card sx={{ border: '1px solid black' }}>
          <CardContent>
            <Typography variant="h6">Java Servlet web application</Typography>
            <Link href="https://github.com/yyueniao/javaServlet">Github Link</Link>
            <Typography variant="body2">
              A simple web application using Java Servlet and Jquery
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}
