import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import * as My from '../components/StyledComponents';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1.5rem',
  },
  row_top_between: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  row_center_between: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  border_bottom: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.37)'
  },
  grid_panel: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 15
  }
}));

function ViewProfile() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <My.Row>
            <IconButton aria-label="Back" color="inherit">
              <KeyboardBackspaceIcon />
            </IconButton>
          </My.Row>
          <My.Row>
            <My.Avatar src="/img/erwin.jpg" alt="" />
            <My.IconButtonEl aria-label="Chat" color="inherit">
              <ChatBubbleOutlineIcon />
            </My.IconButtonEl>
            <My.IconButtonEl aria-label="Add" color="inherit">
              <AddCircleOutlineIcon />
            </My.IconButtonEl>
          </My.Row>
          <My.Row>
            <My.Name>Lindesy Mckenna</My.Name>
            <My.Job>Director</My.Job>
          </My.Row>
          <My.Row>
            <My.Description>This is my personal bio and description of what im doing on this platform</My.Description>
          </My.Row>
        </Grid>
        <Grid item xs={8}>
          <My.Row style={{position: 'relative'}}>
            <My.VideoPanel src="/img/video2.png" alt="" />
            <My.PlayButton aria-label="Play" color="inherit">
              <PlayArrowIcon />
            </My.PlayButton>
            <My.VideoTime>3:20</My.VideoTime>
          </My.Row>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <My.Row className={classes.border_bottom}>
            Skills
          </My.Row>
          <My.Row>
            <My.SkillButton variant="outlined" size="small">Directing</My.SkillButton>
            <My.SkillButton variant="outlined" size="small">Editing</My.SkillButton>
            <My.SkillButton variant="outlined" size="small">Sound Design</My.SkillButton>
          </My.Row>
          <My.Row className={`${classes.border_bottom} ${classes.row_center_between}`}>
            Location
            <label>Los Angeles</label>
          </My.Row>
          <My.Row>
            <My.MapBox>Map</My.MapBox>
          </My.Row>
        </Grid>
        <Grid item xs={8}>
          <My.Row className={classes.border_bottom}>
            Work
          </My.Row>
          <My.Row className={classes.grid_panel}>
            <My.WorkPanel>
              <My.WorkImg src="/img/work2.png" alt="" />
              <My.ProjectTitle>Project Title</My.ProjectTitle>
              <My.ProjectName>Project Name</My.ProjectName>
            </My.WorkPanel>
            <My.WorkPanel>
              <My.WorkImg src="/img/work3.png" alt="" />
              <My.ProjectTitle>Project Title</My.ProjectTitle>
              <My.ProjectName>Project Name</My.ProjectName>
            </My.WorkPanel>
            <My.WorkPanel>
              <My.WorkImg src="/img/work4.png" alt="" />
              <My.ProjectTitle>F.U VIRUS</My.ProjectTitle>
              <My.ProjectName>Project Name</My.ProjectName>
            </My.WorkPanel>
          </My.Row>
          <My.Row className={classes.border_bottom}>
            Credited
          </My.Row>
          <My.Row>
            <My.Credit>
              <My.CreditImg src="/img/work2.png" alt="" />
              <My.CreditText>
                <My.CreditDetail>
                  <My.ProjectTitle>Director</My.ProjectTitle>
                  <My.ProjectName>ProjectName</My.ProjectName>
                </My.CreditDetail>
                <My.CreditYear>2019</My.CreditYear>
              </My.CreditText>
            </My.Credit>
            <My.Credit>
              <My.CreditImg src="/img/work2.png" alt="" />
              <My.CreditText>
                <My.CreditDetail>
                  <My.ProjectTitle>Director</My.ProjectTitle>
                  <My.ProjectName>ProjectName</My.ProjectName>
                </My.CreditDetail>
                <My.CreditYear>2019</My.CreditYear>
              </My.CreditText>
            </My.Credit>
          </My.Row>
        </Grid>
      </Grid>
    </div>
  );
}

export default ViewProfile;
