import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Box } from '@mui/system';

function preventDefault(event) {
  event.preventDefault();
}

export default function Trending() {
  return (
    // <React.Fragment>
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      <Box>
        <Title id="trending">Trending</Title>

        {/* <Box style={{ display: 'flex' }}>
          <img
            style={{ height: 'auto', width: '100%', objectFit: 'scale-down' }}
            alt="employee headshot"
            src="https://i.scdn.co/image/ab6761610000e5eb5744116186e523c459e8c9e1"
          />
        </Box> */}
        <Typography component="p" variant="h4">
          Gender pay gap in U.S. hasn't changed much in two decades
        </Typography>

        <Typography component="p" color="text.secondary" sx={{ flex: 1 }}>
          BY CAROLINA ARAGÃO
        </Typography>
        <p>
          The gender gap in pay has remained relatively stable in the United States over the past 20
          years or so. In 2022, women earned an average of 82% of what men earned, according to a
          new Pew Research Center analysis of median hourly earnings of both full- and part-time
          workers. These results are similar to where the pay gap stood in 2002, when women earned
          80% as much as men.
        </p>
        <div>
          <Link
            color="primary"
            href="https://www.pewresearch.org/fact-tank/2023/03/01/gender-pay-gap-facts/"
            onClick={preventDefault}
          >
            Full Article
          </Link>
        </div>
      </Box>
      <Box>
        <Typography component="p" variant="h4">
          Discrimination in the workplace: A complete overview and what to do about it{' '}
        </Typography>

        <Typography component="p" color="text.secondary" sx={{ flex: 1 }}>
          By ALLYAYA COOKS-CAMPBEL
        </Typography>
        <p>
          Discrimination in the workplace happens when a person or a group of people is treated
          unfairly or unequally because of specific characteristics. These protected characteristics
          include race, ethnicity, gender identity, age, disability, sexual orientation, religious
          beliefs, or national origin. Discrimination in the workplace can happen between coworkers,
          with job applicants, or between employees and their employers. Whether on purpose or by
          accident, discrimination, regardless of intention, is illegal.
        </p>
        <div>
          <Link
            color="primary"
            href="https://www.betterup.com/blog/discrimination-in-workplace"
            onClick={preventDefault}
          >
            Full Article
          </Link>
        </div>
      </Box>
    </Box>
    // </React.Fragment>
  );
}
