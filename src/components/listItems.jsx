import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import { Box } from '@mui/system';

import Checkboxes from './Checkboxes';

export const mainListItems = (
  <React.Fragment>
    {/* --------------------playing around----------------------- */}

    <Checkboxes label={'heart'} />

    <Checkbox
      // {...label}
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite />}
      // checked={checked}
      // onChange={handleChange}
      // inputProps={{ 'aria-label': 'controlled' }}
    />
    <Checkbox
      // {...label}
      icon={<BookmarkBorderIcon />}
      label="End"
      labelPlacement="end"
      checkedIcon={<BookmarkIcon />}
    />

    <FormControlLabel value="end" control={<Checkbox />} label="End" labelPlacement="end" />

    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Create Report</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                // checked={gilad}
                // onChange={handleChange}
                name="age"
              />
            }
            label="Age"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={jason}
                // onChange={handleChange}
                name="gender"
              />
            }
            label="Gender"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={antoine}
                // onChange={handleChange}
                name="seniority"
              />
            }
            label="Seniority (Years in Company)"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={antoine}
                // onChange={handleChange}
                name="salary"
              />
            }
            label="Yearly Salary (including Bonus)"
          />

          <FormControlLabel
            control={
              <Checkbox
                // checked={antoine}
                // onChange={handleChange}
                name="senipromotionsority"
              />
            }
            label="Number of Promotions"
          />

          <FormControlLabel
            control={
              <Checkbox
                // checked={antoine}
                // onChange={handleChange}
                name="range"
              />
            }
            label="Date Range"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </Box>

    {/* --------------------playing around----------------------- */}

    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <BabyChangingStationIcon />
      </ListItemIcon>
      <ListItemText primary="RANDOM" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <BabyChangingStationIcon />
      </ListItemIcon>
      <ListItemText primary="RANDOM" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary=" My Orders" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>

    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
