import * as React from 'react';
// import { useState } from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import ListItemIcon from '@mui/material/ListItemIcon';
import AgeIcon from '@mui/icons-material/SixtyFpsSelect';
import GenderIcon from '@mui/icons-material/Wc';
import PromotionsIcon from '@mui/icons-material/FileUpload';
import SalaryIcon from '@mui/icons-material/AttachMoney';
import RaiseIcon from '@mui/icons-material/PriceCheck';
import DateRangeIcon from '@mui/icons-material/CalendarMonth';
import SeniorityIcon from '@mui/icons-material/Update';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReportIcon from '@mui/icons-material/Assessment';

import { FormLabel } from '@mui/material';
import { pink } from '@mui/material/colors';

import { METRIC_NAMES } from '../customHooks/useQueryFilters';

const handleButtonClick = (e) => {
  e.preventDefault();
  // setSelect(true);
  alert('clicked');
};

export const MainListItems = ({ states, setStates }) => (
  <React.Fragment>
    <ListSubheader component="div" inset>
      <FormLabel component="legend">Report Parameters</FormLabel>
    </ListSubheader>

    <ListItemButton selected={states[METRIC_NAMES.age]} onClick={setStates(METRIC_NAMES.age)}>
      <ListItemIcon>
        <AgeIcon />
      </ListItemIcon>
      <ListItemText primary="Age" />
    </ListItemButton>

    <ListItemButton selected={states[METRIC_NAMES.gender]} onClick={setStates(METRIC_NAMES.gender)}>
      <ListItemIcon>
        <GenderIcon />
      </ListItemIcon>
      <ListItemText primary="Gender" />
    </ListItemButton>

    <ListItemButton
      selected={states[METRIC_NAMES.seniority]}
      onClick={setStates(METRIC_NAMES.seniority)}
    >
      <ListItemIcon>
        <SeniorityIcon />
      </ListItemIcon>
      <ListItemText primary="Seniority" />
    </ListItemButton>

    <ListItemButton selected={states[METRIC_NAMES.salary]} onClick={setStates(METRIC_NAMES.salary)}>
      <ListItemIcon>
        <SalaryIcon />
      </ListItemIcon>
      <ListItemText primary="Salary" />
    </ListItemButton>

    <ListItemButton
      selected={states[METRIC_NAMES.promotions]}
      onClick={setStates(METRIC_NAMES.promotions)}
    >
      <ListItemIcon>
        <PromotionsIcon />
      </ListItemIcon>
      <ListItemText primary="Promotions" />
    </ListItemButton>

    <ListItemButton selected={states[METRIC_NAMES.raises]} onClick={setStates(METRIC_NAMES.raises)}>
      <ListItemIcon>
        <RaiseIcon />
      </ListItemIcon>
      <ListItemText primary="Raises" />
    </ListItemButton>

    <ListItemButton
      sx={{
        backgroundColor: pink[800],
      }}
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
