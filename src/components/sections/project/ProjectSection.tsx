import { Stack, Typography } from '@mui/material';
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
        <ProjectCard
          title={'Visitor Management System'}
          image={'/visitorManagementSystemThumbnail.png'}
          description={
            'A visitor management system for staff to register visitors, monitor activity. Built with Laravel, Bootstrap, and MySQL.'
          }
          githubLink={'https://github.com/yyueniao/visitor-management-system'}
          websiteLink={null}
        />
        <ProjectCard
          title={'Calculator'}
          image={'/calculatorThumbnail.png'}
          description={'A simple calculator web application by Svelte.'}
          githubLink={'https://github.com/yyueniao/calculator'}
          websiteLink={null}
        />
      </Stack>
    </Stack>
  );
});
export default ProjectSection;
