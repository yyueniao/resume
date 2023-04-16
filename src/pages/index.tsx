import AboutMeSection from '@/components/sections/aboutMe/AboutMeSection';
import EducationSection from '@/components/sections/education/EducationSection';
import ExperienceSection from '@/components/sections/experience/ExperienceSection';
import ProjectSection from '@/components/sections/project/ProjectSection';
import SkillSection from '@/components/sections/skill/SkillSection';
import { Stack } from '@mui/material';

export default function Home(): JSX.Element {
  return (
    <Stack alignItems="center">
      <AboutMeSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectSection />
      <SkillSection />
    </Stack>
  );
}
