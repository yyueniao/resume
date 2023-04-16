import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function AboutMeSection(): JSX.Element {
  return (
    <Stack>
      <Typography variant="h3">ABOUT ME</Typography>
      <Stack direction="row" spacing={3}>
        <Image priority src="/profilePicture.png" alt="Profile picture" width={200} height={245} />
        <Stack>
          <Typography variant="h4">Yue Yue Niao</Typography>
          <Typography variant="body1">I am a software developer! Nice to meet you.</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
