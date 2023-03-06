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
import DateRangeIcon from '@mui/icons-material/CalendarMonth';
import SeniorityIcon from '@mui/icons-material/Update';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import { Button, ButtonGroup, FormLabel } from '@mui/material';

import { METRIC_NAMES } from '../customHooks/useQueryFilters';

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

    <ListItemButton
      selected={states[METRIC_NAMES.position]}
      onClick={setStates(METRIC_NAMES.position)}
    >
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Position" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <DateRangeIcon />
      </ListItemIcon>
      <ListItemText primary="Date Range" />
    </ListItemButton>
  </React.Fragment>
);

export const SecondaryListItems = ({ states, setStates }) => (
  <React.Fragment>
    <ListSubheader component="div" inset>
      <FormLabel component="legend">Lifestyle Reports</FormLabel>
    </ListSubheader>

    <ListItemButton selected={states[METRIC_NAMES.vacay]} onClick={setStates(METRIC_NAMES.vacay)}>
      <ListItemIcon>
        <BeachAccessIcon />
      </ListItemIcon>
      <ListItemText primary="Vacation Time" />
    </ListItemButton>

    <ListItemButton
      selected={states[METRIC_NAMES.worklife]}
      onClick={setStates(METRIC_NAMES.worklife)}
    >
      <ListItemIcon>
        <AddHomeWorkIcon />
      </ListItemIcon>
      <ListItemText primary="Work-Life" />
    </ListItemButton>

    <ListItemButton
      selected={states[METRIC_NAMES.satisfaction]}
      onClick={setStates(METRIC_NAMES.satisfaction)}
    >
      <ListItemIcon>
        <ThumbUpOffAltIcon />
      </ListItemIcon>
      <ListItemText primary="Job Satisfaction" />
    </ListItemButton>
  </React.Fragment>
);

export const FavouritesList = ({ states, setStates }) => (
  <React.Fragment>
    <ListSubheader component="div" inset>
      <FormLabel component="legend">Favourites Reports</FormLabel>
    </ListSubheader>

    <ListItemButton
      selected={states[METRIC_NAMES.femalesAtWork]}
      onClick={setStates(METRIC_NAMES.femalesAtWork)}
    >
      <ListItemIcon>
        <FavoriteBorderIcon />
      </ListItemIcon>
      <ListItemText primary="Females at Work" />
    </ListItemButton>

    <ListItemButton
      selected={states[METRIC_NAMES.finance]}
      onClick={setStates(METRIC_NAMES.finance)}
    >
      <ListItemIcon>
        <FavoriteBorderIcon />
      </ListItemIcon>
      <ListItemText primary="Finance" />
    </ListItemButton>
  </React.Fragment>
);
