import { List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import { RefObject } from 'react';

interface SectionRef {
  ref: RefObject<HTMLElement>;
  label: string;
}

interface Props {
  sectionRefs: SectionRef[];
}

export default function NavigationBar({ sectionRefs }: Props): JSX.Element {
  const handleScrollToSection = (ref: RefObject<HTMLElement>): void => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Stack
      sx={{
        padding: 2,
        height: '100%',
        position: 'fixed',
      }}
      spacing={4}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Navigation
      </Typography>
      <List component="nav">
        {sectionRefs.map(({ ref, label }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton onClick={(): void => handleScrollToSection(ref)}>
              <ListItemText
                color="inherit"
                primary={label}
                primaryTypographyProps={{ align: 'center' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
