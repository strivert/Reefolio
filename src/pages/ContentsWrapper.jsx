import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
  },
  toolbar: {
    backgroundColor: theme.palette.background.paper,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
}));

export default function ContentsWapper(props) {
  const classes = useStyles();

  return (
    <Container>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <IconButton aria-label="Search" color="inherit">
            <SearchIconEl />
          </IconButton>
          <IconButton aria-label="Notifications" edge="end" color="inherit">
            <NotificationsIconEl />
            <Badge />
          </IconButton>
          <Typography type="title" color="inherit" style={{ borderLeft: '2px solid lightgray', color: '#252733', padding: '0 25px', marginLeft: 25 }}>Jones Ferdinand</Typography>
          <Avatar src='/img/avatar.jpg' alt="" />
        </Toolbar>
      </AppBar>
      {props.children}
    </Container>
  );
}

const Container = styled.div`
  margin-left: 60px;
  padding: 0 25px;
`;

const SearchIconEl = styled(SearchIcon) ({
  color: 'lightgray'
});

const NotificationsIconEl = styled(NotificationsIcon) ({
  color: 'lightgray',
});

const Avatar = styled.img`
  width: 35px;
  height: 35px;
`;

const Badge = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #3751FF;
  border: 1px solid white;
  left: 25px;
  top: 15px;
`;