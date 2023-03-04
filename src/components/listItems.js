import * as React from 'react';
// import { useState } from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import ListItemIcon from '@mui/material/ListItemIcon';
import AgeIcon from '@mui/icons-material/SixtyFpsSelect';
import GenderIcon from '@mui/icons-material/Wc';
import PromotionsIcon from '@mui/icons-material/FileUpload';
import SalaryIcon from '@mui/icons-material/AttachMoney';
import RaiseIcon from '@mui/icons-material/PriceCheck';
import DateRangeIcon from '@mui/icons-material/CalendarMonth';
import SeniorityIcon from '@mui/icons-material/Update';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { FormLabel } from '@mui/material';
import { pink } from '@mui/material/colors';

const handleButtonClick = (e) => {
  e.preventDefault();
  // setSelect(true);
  alert('clicked');
};

export const mainListItems = (
  // const [selected, setSelected] = useState(false);

  <React.Fragment>
    <ListSubheader component="div" inset>
      <FormLabel component="legend">CREATE REPORT</FormLabel>
    </ListSubheader>

    <ListItemButton onClick={handleButtonClick}>
      <ListItemIcon>
        <AgeIcon />
      </ListItemIcon>
      <ListItemText primary="Age" />
    </ListItemButton>

    <ListItemButton onClick={handleButtonClick}>
      <ListItemIcon>
        {/* <BabyChangingStationIcon /> */}
        <GenderIcon />
      </ListItemIcon>
      <ListItemText primary="Gender" />
    </ListItemButton>

    <ListItemButton onClick={handleButtonClick}>
      <ListItemIcon>
        <SeniorityIcon />
      </ListItemIcon>
      <ListItemText primary="Seniority" />
    </ListItemButton>

    <ListItemButton onClick={handleButtonClick}>
      <ListItemIcon>
        <SalaryIcon />
      </ListItemIcon>
      <ListItemText primary="Yearly Salary" />
    </ListItemButton>

    <ListItemButton onClick={handleButtonClick}>
      <ListItemIcon>
        <PromotionsIcon />
      </ListItemIcon>
      <ListItemText primary="Number of Promotions" />
    </ListItemButton>

    <ListItemButton divider={true} selected={true} onClick={handleButtonClick}>
      <ListItemIcon>
        <RaiseIcon />
      </ListItemIcon>
      <ListItemText primary="Salary Increases (Number of Raises??)" />
    </ListItemButton>

    <ListItemButton
      sx={{
        backgroundColor: pink[800],
      }}
      divider={true}
      selected={true}
      onClick={handleButtonClick}
    >
      <ListItemIcon>
        <DateRangeIcon />
      </ListItemIcon>
      <ListItemText primary="Date Range" />
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
      <ListItemText primary="Year-end" />
    </ListItemButton>
  </React.Fragment>
);
