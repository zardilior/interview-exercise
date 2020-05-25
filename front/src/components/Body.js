import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Body.scss';
import ContactUsForm from './BodyParts/ContactUsForm';
import ScheduleForm from './BodyParts/ScheduleForm';

class Body extends React.Component {
  render() {
    return (
      <Grid
        className="body"
        container
        justify="space-around"
        alignItems="flex-start"
      >
        <div className="half">
          <ScheduleForm>
          </ScheduleForm>
        </div>
        <div className="half">
          <ContactUsForm>
          </ContactUsForm>
        </div>
      </Grid>
    );
  }
}

export default Body;
