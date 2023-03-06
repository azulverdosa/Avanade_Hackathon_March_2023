import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MainListItems, SecondaryListItems, FavouritesList } from './listItems';
import Chart from './Chart';
import Highlights from './Highlights';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import useQueryFilters from '../customHooks/useQueryFilters';
import Trending from './Trending';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  })
);

const mdTheme = createTheme();

function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [showHighlights, setShowHighlights] = React.useState(false);
  const [showTrending, setShowTrending] = React.useState(false);

  const { queryResults, makeRequest, metricStates, setMetrics } = useQueryFilters();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const createReport = (e) => {
    e.preventDefault();

    makeRequest();
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                'display': 'flex',
                'alignItems': 'center',
                'flex': 1,
                '& > *': {
                  m: 1,
                },
              }}
            >
              <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                BRIDGE
              </Typography>
              <ButtonGroup variant="text" aria-label="text button group" color="inherit">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowHighlights(true);
                    setShowTrending(false);
                  }}
                >
                  Activity Log
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowTrending(true);
                    setShowHighlights(false);
                  }}
                >
                  Articles
                </Button>
                <Button component="button" variant="body2" href="https://www.udemy.com/">
                  Learning Tools
                </Button>
              </ButtonGroup>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />

          <List component="nav">
            <MainListItems states={metricStates} setStates={setMetrics} />

            <Box sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
              <Button
                style={{ marginBottom: 8, marginLeft: 16, marginTop: 8, marginRight: 16 }}
                variant="contained"
                color="success"
                onClick={createReport}
              >
                Create Report
              </Button>
            </Box>

            <Divider sx={{ my: 1 }} />

            <SecondaryListItems states={metricStates} setStates={setMetrics} />
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
              <Button
                style={{ marginBottom: 8, marginLeft: 16, marginTop: 8, marginRight: 16 }}
                variant="contained"
                color="success"
                onClick={createReport}
              >
                Create Report
              </Button>
            </Box>

            <Divider sx={{ my: 1 }} />

            <FavouritesList states={metricStates} setStates={setMetrics} />
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
              <Button
                style={{ marginBottom: 8, marginLeft: 16, marginTop: 8, marginRight: 16 }}
                variant="contained"
                color="success"
                onClick={createReport}
              >
                Create Report
              </Button>
            </Box>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12}>
                <Chart queryResults={queryResults} />
              </Grid>

              {/* Recent Highlights */}

              <Grid item xs={12}>
                <Highlights show={showHighlights} />
              </Grid>

              {/* Trending */}
              <Grid item xs={12}>
                <Trending show={showTrending} />
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;
