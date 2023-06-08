import { Card, CardContent, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { forwardRef } from 'react';
import ProjectCard from './ProjectCard';

const ProjectSection = forwardRef<HTMLElement>(function ProjectSection(_props, ref) {
  return (
    <Stack component="section" alignItems="center" ref={ref}>
      <Typography variant="h3">PROJECTS</Typography>
      <Stack spacing={2}>
        <ProjectCard
          title={'Resume'}
          image={'/resumeThumbnail.png'}
          description={
            'Yes, you are currently looking at this project! It is written by React, TypeScript and Next.js.'
          }
          githubLink={'https://github.com/yyueniao/resume'}
          websiteLink={'https://online-resume-sepia.vercel.app/'}
        />
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
});
export default ProjectSection;
