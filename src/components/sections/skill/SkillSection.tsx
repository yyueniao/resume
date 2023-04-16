import { Box, Stack, Typography } from '@mui/material';

export default function SkillSection(): JSX.Element {
  return (
    <Stack>
      <Typography variant="h3">SKILLS</Typography>
      <Stack>
        <Box>
          <Typography variant="h6">Coding</Typography>
          <Stack>
            <Typography variant="body1">HTML</Typography>
            <Typography variant="body1">CSS</Typography>
            <Typography variant="body1">JavaScript</Typography>
            <Typography variant="body1">TypeScript</Typography>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h6">Languages</Typography>
          <Stack>
            <Typography variant="body1">Mandarin</Typography>
            <Typography variant="body1">English</Typography>
            <Typography variant="body1">Malay</Typography>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h6">Tools/Others</Typography>
          <Stack>
            <Typography variant="body1">Github/Gitlab</Typography>
            <Typography variant="body1">VsCode</Typography>
            <Typography variant="body1">Scrum/Agile</Typography>
            <Typography variant="body1">Postman</Typography>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
