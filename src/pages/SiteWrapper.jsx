import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container'

function TabPanel(props) {
    const {children, value, index, classes, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
              <>
                  {children}
              </>
            )}
        </div>
    );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh',
    alignContent: 'center',
    background: 'url(/img/clipart.svg) no-repeat 23px 40px',
  },
  mui_tab_root: {
    width: 100,
    minWidth: '50px !important',
    height: '100px !important',
    fontFamily: 'Plain',
    fontWeight: 'normal',
    fontSize: 13,
    letterSpacing: '-0.04em',
    lineHeight: '109.5%',
  },
  indicator: {
    backgroundColor: '#4441D3',
    height: 100,
  },
  tabs: {
    paddingTop: 'calc(50vh - 150px)',
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 70,
    marginLeft: -15,
    position: 'absolute',
    height: '100vh',
  },
  default_tab:{
    color: 'black',
    transform: 'rotate(-90deg)',
    height: 100,
  },
  active_tab:{
    color: '#4441D3',
    transform: 'rotate(-90deg)',
    height: 100,
  },
  tab_panel: {
    width: '100%',
  }
}));

export default function SiteWapper(props) {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <TabsWrapper className={classes.root}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          classes={{indicator: classes.indicator}}
          className={classes.tabs}
        >
          <Tab label="Charts" {...a11yProps(0)} classes={{root: classes.mui_tab_root}} className={value === 0 ? classes.active_tab : classes.default_tab} />
          <Tab label="People" {...a11yProps(1)} classes={{root: classes.mui_tab_root}} className={value === 1 ? classes.active_tab : classes.default_tab} />
          <Tab label="Projects" {...a11yProps(2)} classes={{root: classes.mui_tab_root}} className={value === 2 ? classes.active_tab : classes.default_tab} />
        </Tabs>
        <TabPanel value={value} index={0} className={classes.tab_panel}>
          {props.children}
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tab_panel}>
          {props.children}
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tab_panel}>
          {props.children}
        </TabPanel>
      </TabsWrapper>
    </Container>
  );
}

const TabsWrapper = styled.div`
`;
