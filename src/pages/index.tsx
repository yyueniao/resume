import AboutMeSection from '@/components/sections/aboutMe/AboutMeSection';
import EducationSection from '@/components/sections/education/EducationSection';
import ExperienceSection from '@/components/sections/experience/ExperienceSection';
import { Stack } from '@mui/material';

export default function Home(): JSX.Element {
  return (
    <Stack>
      <AboutMeSection />
      <ExperienceSection />
      <EducationSection />
    </Stack>
  );
}
