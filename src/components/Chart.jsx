import * as React from 'react';
// import { ResponsiveContainer } from 'recharts';
import Title from './Title';

import useQueryFilters from '../customHooks/useQueryFilters';
import { Box, Link, Paper } from '@mui/material';
import EmployeeInformation from './EmployeeInformation';
import NextSteps from './NextSteps';
import SaveIcon from '@mui/icons-material/Save';

export default function Chart() {
  const { queryResults } = useQueryFilters();

  function preventDefault(event) {
    event.preventDefault();
  }

  return (
    queryResults && (
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
        }}
      >
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          <Title>Your Results</Title>
          <Box style={{ display: 'flex' }}>
            <img style={{ height: 'auto', width: '100%' }} alt="graph" src={queryResults} />
          </Box>
          <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
            Save Results
            {/* <SaveIcon /> */}
          </Link>
          <Box style={{ display: 'flex', flexDirection: 'column' }} sx={{ mt: 3 }}>
            <EmployeeInformation />
          </Box>
          <Box style={{ display: 'flex', flexDirection: 'column' }} sx={{ mt: 3 }}>
            <NextSteps />
          </Box>
        </Box>
      </Paper>
    )
  );
}
