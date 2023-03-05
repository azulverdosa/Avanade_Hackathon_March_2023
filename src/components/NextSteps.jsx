import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Box } from '@mui/system';

export default function NextSteps() {
  return (
    <React.Fragment>
      <Title>Suggestions based on Your results</Title>
      <Box style={{ display: 'flex', flexDirection: 'column' }} sx={{ mt: 1 }}>
        <Typography color="text.secondary" sx={{ flex: 7 }}>
          What to do next
        </Typography>

        <ol>
          <li>
            Implement gender neutral recruitment processes Carefully word your job adverts. Research
            shows that adjectives such as 'competitive'' and 'determined'' put off women. On the
            other hand, words such as 'collaborative'' and 'cooperative'' tend to attract more women
            than men. Standardise interviews, anonymise resumes and use blind evaluation processes.
            Companies have found that blind evaluation procedures — including work sample tests and
            neuroscientific tests of an applicant''s aptitude and skills — have helped them recruit
            from more diverse backgrounds.{' '}
          </li>
          <br />
          <li>
            Review salaries and standardise pay Frequently review salaries for parity between
            genders and races. When recruiting, set the pay range offered based on years' experience
            with some leeway for special achievements, not on how well the candidate negotiated
            their last pay package.
          </li>
          <br />
          <li>
            Provide training on unconscious bias Educate employees about their own unconscious bias.
            Although this does not guarantee that attitudes will change, it does help employees to
            understand their biases and to work towards eliminating them.
          </li>
        </ol>

        <div>
          <Link color="primary" href="#">
            See More
          </Link>
        </div>
      </Box>
    </React.Fragment>
  );
}
