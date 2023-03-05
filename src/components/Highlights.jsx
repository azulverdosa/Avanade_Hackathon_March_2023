import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Box } from '@mui/system';

function preventDefault(event) {
  event.preventDefault();
}

export default function Highlights() {
  return (
    // <React.Fragment>
    <Box style={{ display: 'flex' }}>
      <Box>
        <Title>Highlights</Title>
        <Typography component="p" variant="h4">
          Cindy Lauper
        </Typography>

        <Box style={{ display: 'flex' }}>
          <img
            style={{ height: 'auto', width: '50%' }}
            alt="employee headshot"
            src="https://i.scdn.co/image/ab6761610000e5eb5744116186e523c459e8c9e1"
          />
        </Box>
        <Typography component="p" variant="h4">
          Promoted to CEO on 15 March, 2023
        </Typography>

        <Typography component="p" color="text.secondary" sx={{ flex: 1 }}>
          Biography
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            Full Profile
          </Link>
        </div>
      </Box>
    </Box>
    // </React.Fragment>
  );
}
