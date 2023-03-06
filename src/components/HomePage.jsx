import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';

export default function Home({ show }) {
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
          <Box style={{ display: 'flex' }}>
            <Box>
              <Typography component="p" variant="h4">
                Welcome To BRIDGE
              </Typography>

              <p>
                Bridge is a dashboard tool for a company's HR team to easily monitor their company
                culture in a quantitative and effective way.
                <br />
                <br />
                The gender gap in pay has remained relatively stable in the United States over the
                past 20 years or so. In 2022, women earned an average of 82% of what men earned,
                according to a new Pew Research Center analysis of median hourly earnings of both
                full and part-time workers. These results are similar to where the pay gap stood in
                2002, when women earned 80% as much as men.
                <br />
                <br />
                At the heart of this issue, we believe that companies could be more transparent
                about their hiring practices but also monitor the diversity of their employee more
                regularly, striving to Bridge the gap and promote fair treatment of all employees,
                no matter their gender or background.
              </p>
            </Box>
          </Box>
        </Paper>
      </div>
    )
  );
}
