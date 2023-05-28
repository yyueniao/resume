import { Stack, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';
import { useState } from 'react';

export default function ExperienceSection(): JSX.Element {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index: number): void => {
    setActiveStep(index);
  };
  return (
    <Stack component="section" alignItems="center">
      <Typography variant="h3">WORK EXPERIENCE</Typography>
      <Stepper orientation="vertical" activeStep={activeStep}>
        <Step completed={false}>
          <StepLabel>
            <Typography
              variant="h6"
              onClick={(): void => handleStepClick(0)}
              sx={{ cursor: 'pointer' }}
            >
              DCConnect Global Limited
            </Typography>
          </StepLabel>
          <StepContent>
            <Typography variant="body1">Software Developer</Typography>
            <Typography variant="body2">Aug 2022 - Present</Typography>
            <Typography variant="body2">
              I was responsible for a variety of tasks including frontend and backend development,
              unit testing, and code maintenance. I utilized a wide range of technologies such as
              TypeScript, PHP Laravel, jQuery, React, NextJS, Java, bash, and Haskell to build web
              applications, and I used Git as a version control tool. Furthermore, I have extensive
              experience writing MySQL and PostgreSQL queries to manipulate and manage databases.
            </Typography>
            <Typography variant="body2">
              One of my notable projects involved writing an algorithm in Haskell based on KSPwLO,
              which was designed to find the K shortest paths in a graph, taking into account both
              price and latency. I also have experience writing unit tests in both Java and Haskell
              to ensure the reliability of my code. In addition, I have been involved in refactoring
              a project written in React, TypeScript and NextJS to make the code more maintainable
              and readable.
            </Typography>
          </StepContent>
        </Step>
        <Step completed={false}>
          <StepLabel>
            <Typography
              variant="h6"
              onClick={(): void => handleStepClick(1)}
              sx={{ cursor: 'pointer' }}
            >
              Experian
            </Typography>
          </StepLabel>
          <StepContent>
            <Typography variant="body1">Software Engineer Intern</Typography>
            <Typography variant="body2">Jan 2022 - Apr 2022</Typography>
            <Typography variant="body2">
              As an intern, I contributed to the development of a platform using ASP.NET Core while
              working in a team that practiced agile methodologies and followed a Test Driven
              Development (TDD) workflow. My responsibilities included writing end-to-end automation
              test code using Angular. The products I worked on included credit and information
              services, as well as decisioning and analytics tools.
            </Typography>
          </StepContent>
        </Step>
        <Step completed={false}>
          <StepLabel>
            <Typography
              variant="h6"
              onClick={(): void => handleStepClick(2)}
              sx={{ cursor: 'pointer' }}
            >
              SmartB Solutions
            </Typography>
          </StepLabel>
          <StepContent>
            <Typography variant="body1">Programmer Internship</Typography>
            <Typography variant="body2">Apr 2021 - Jul 2021</Typography>
            <Typography variant="body2">
              I developed web pages and a mobile app using JavaScript, gaining practical experience
              and the ability to learn new technologies. I also performed UI/UX design work. The
              product I worked on was a customizable ERP system with cloud capabilities, designed to
              help clients manage complex stock movements and automate business processes.
            </Typography>
          </StepContent>
        </Step>
      </Stepper>
    </Stack>
  );
}
