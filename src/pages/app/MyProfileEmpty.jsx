import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
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

function MyProfile() {
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
          <My.Row className={classes.row_top_between}>
            <My.Avatar src="/img/erwin.jpg" alt="" />
            <My.EditButton variant="outlined" size="small">
              Edit Profile
            </My.EditButton>
          </My.Row>
          <My.Row>
            <My.Name>Will Erwin</My.Name>
            <My.Job>Set Designer</My.Job>
          </My.Row>
          <My.Row>
            <My.Description>This is my personal bio and description of what im doing on this platform</My.Description>
          </My.Row>
        </Grid>
        <Grid item xs={8}>
          <My.Row style={{position: 'relative'}}>
            <My.VideoPanel src="/img/video1.png" alt="" />
            <My.PlayButton aria-label="Play" color="inherit">
              <PlayArrowIcon />
            </My.PlayButton>
            <My.VideoTime>3:20</My.VideoTime>
            <My.VideoEditButton variant="outlined" size="small">
              Edit
            </My.VideoEditButton>
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
            <My.LocationButton size="small">Set Your Location</My.LocationButton>
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
            <My.AddWorkPanel>
              + Add Work
            </My.AddWorkPanel>
          </My.Row>
          <My.Row className={classes.border_bottom}>
            Credited
          </My.Row>
          <My.Row>
            <My.EmptyCredit>You Have No Credited Work</My.EmptyCredit>
          </My.Row>
        </Grid>
      </Grid>
    </div>
  );
}

export default MyProfile;
