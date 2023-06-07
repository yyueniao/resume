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
        bgcolor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.text.primary,
        padding: 2,
        height: '100%',
        position: 'fixed',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Navigation
      </Typography>
      <List component="nav" aria-label="sections navigation">
        {sectionRefs.map(({ ref, label }) => (
          <ListItem disablePadding>
            <ListItemButton onClick={(): void => handleScrollToSection(ref)}>
              <ListItemText color="inherit" primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
