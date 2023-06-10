import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import Link from 'next/link';

interface Props {
  title: string;
  image: string;
  description: string;
  githubLink: string;
  websiteLink: string | null;
}

export default function ProjectCard({
  title,
  image,
  description,
  githubLink,
  websiteLink,
}: Props): JSX.Element {
  return (
    <Card sx={{ border: '1px solid black', width: '300px', flexShrink: 0 }}>
      <CardHeader title={title} subheader="Apr 2023" />
      <CardMedia component="img" alt="Resume" image={image} />
      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton LinkComponent={Link} href={githubLink} target="_blank">
          <GitHubIcon color="primary" />
        </IconButton>
        <IconButton
          LinkComponent={Link}
          disabled={websiteLink === null}
          href={websiteLink ?? '#'}
          sx={{ color: (theme) => (websiteLink === null ? 'grey' : theme.palette.primary.main) }}
          target="_blank"
        >
          <LaunchIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
