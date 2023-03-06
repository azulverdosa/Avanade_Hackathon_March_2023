import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';

function preventDefault(event) {
  event.preventDefault();
}

export default function Trending({ show }) {
  return (
    show && (
      <div>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            margin: 1,
          }}
        >
          <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
              <Title id="trending">Trending</Title>

              <Typography component="p" variant="h4">
                Gender pay gap in U.S. hasn't changed much in two decades
              </Typography>

              <Typography component="p" color="text.secondary" sx={{ flex: 1 }}>
                BY CAROLINA ARAGÃO
              </Typography>
              <p>
                The gender gap in pay has remained relatively stable in the United States over the
                past 20 years or so. In 2022, women earned an average of 82% of what men earned,
                according to a new Pew Research Center analysis of median hourly earnings of both
                full- and part-time workers. These results are similar to where the pay gap stood in
                2002, when women earned 80% as much as men.
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
          </Box>
        </Paper>

        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            margin: 1,
          }}
        >
          <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
              <Typography component="p" variant="h4">
                Discrimination in the workplace: A complete overview and what to do about it{' '}
              </Typography>

              <Typography component="p" color="text.secondary" sx={{ flex: 1 }}>
                By ALLYAYA COOKS-CAMPBEL
              </Typography>
              <p>
                Discrimination in the workplace happens when a person or a group of people is
                treated unfairly or unequally because of specific characteristics. These protected
                characteristics include race, ethnicity, gender identity, age, disability, sexual
                orientation, religious beliefs, or national origin. Discrimination in the workplace
                can happen between coworkers, with job applicants, or between employees and their
                employers. Whether on purpose or by accident, discrimination, regardless of
                intention, is illegal.
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
        </Paper>

        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            margin: 1,
          }}
        >
          <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
              <Title id="trending">Trending</Title>

              <Typography component="p" variant="h4">
                How to Improve Your Work-Life Balance Today{' '}
              </Typography>

              <Typography component="p" color="text.secondary" sx={{ flex: 1 }}>
                BY MARISA SANFILIPPO
              </Typography>
              <p>
                Balancing your professional and personal life can be challenging, but it's
                essential. Here's how to improve your work-life balance today. Often, work takes
                precedence over everything else in our lives. Our desire to succeed professionally
                can push us to set aside our own well-being. Creating a harmonious work-life balance
                or work-life integration is critical, though, to improve not only our physical,
                emotional and mental well-being, but it’s also important for our career.
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
          </Box>
        </Paper>
      </div>
    )
  );
}
