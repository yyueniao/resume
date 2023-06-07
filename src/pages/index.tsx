import NavigationBar from '@/components/navigation/NavigationBar';
import AboutMeSection from '@/components/sections/aboutMe/AboutMeSection';
import EducationSection from '@/components/sections/education/EducationSection';
import ExperienceSection from '@/components/sections/experience/ExperienceSection';
import ProjectSection from '@/components/sections/project/ProjectSection';
import SkillSection from '@/components/sections/skill/SkillSection';
import { Divider, Grid, Stack } from '@mui/material';
import { useRef } from 'react';

export default function Home(): JSX.Element {
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);

  return (
    <Grid container>
      <Grid item xs={2}>
        <NavigationBar
          sectionRefs={[
            { ref: aboutMeRef, label: 'About Me' },
            { ref: experienceRef, label: 'Experience' },
            { ref: educationRef, label: 'Education' },
            { ref: projectRef, label: 'Project' },
            { ref: skillRef, label: 'Skill' },
          ]}
        />
      </Grid>
      <Grid item xs>
        <Stack alignItems="center" spacing={10} divider={<Divider flexItem />} sx={{ p: 2 }}>
          <AboutMeSection ref={aboutMeRef} />
          <ExperienceSection ref={experienceRef} />
          <EducationSection ref={educationRef} />
          <ProjectSection ref={projectRef} />
          <SkillSection ref={skillRef} />
        </Stack>
      </Grid>
    </Grid>
  );
}
