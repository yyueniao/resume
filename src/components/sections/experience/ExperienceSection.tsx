import { Stack, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';

export default function ExperienceSection(): JSX.Element {
  return (
    <Stack alignItems="center">
      <Typography variant="h3">WORK EXPERIENCE</Typography>
      <Stepper orientation="vertical" activeStep={0}>
        <Step>
          <StepLabel>Work 1</StepLabel>
          <StepContent>This is my first job.</StepContent>
        </Step>
        <Step>
          <StepLabel>Work 2</StepLabel>
          <StepContent>This is my second job.</StepContent>
        </Step>
        <Step>
          <StepLabel>Work 3</StepLabel>
          <StepContent>This is my third job.</StepContent>
        </Step>
      </Stepper>
    </Stack>
  );
}
