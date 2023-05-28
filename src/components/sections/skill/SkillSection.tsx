import { Box, Stack, Typography } from '@mui/material';

export default function SkillSection(): JSX.Element {
  return (
    <Stack component="section" alignItems="center">
      <Typography variant="h3">SKILLS</Typography>
      <Stack>
        <Box>
          <Typography variant="h6">Coding</Typography>
          <Stack>
            <Typography variant="body1">HTML</Typography>
            <Typography variant="body1">CSS</Typography>
            <Typography variant="body1">JavaScript</Typography>
            <Typography variant="body1">TypeScript</Typography>
            <Typography variant="body1">React</Typography>
            <Typography variant="body1">NextJs</Typography>
            <Typography variant="body1">PHP Laravel</Typography>
            <Typography variant="body1">C#/.NET</Typography>
            <Typography variant="body1">ASP.NET</Typography>
            <Typography variant="body1">Java Spring</Typography>
            <Typography variant="body1">Haskell</Typography>
            <Typography variant="body1">Bash Script</Typography>
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
