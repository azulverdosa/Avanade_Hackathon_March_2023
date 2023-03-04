import { Tabs, Tab } from '@mui/material';

export default function NavBar() {
  return (
    <Tabs centered>
      {/* value={value} onChange={handleChange} */}
      <Tab label="Move me  " />
      <Tab label="to the" />
      <Tab label="top" />
    </Tabs>
  );
}
