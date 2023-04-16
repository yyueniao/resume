import { Stack, Typography } from '@mui/material';

export default function EducationSection(): JSX.Element {
  return (
    <Stack alignItems="center">
      <Typography variant="h3">EDUCATION</Typography>
      <Stack>
        <Typography variant="h6">University Name</Typography>
        <Typography variant="body1">2018-2022</Typography>
        <Typography variant="body2">My education details</Typography>
      </Stack>
    </Stack>
  );
}
