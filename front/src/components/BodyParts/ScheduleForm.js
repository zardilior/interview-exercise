import React  from 'react';
import Container from '@material-ui/core/Container';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import './ScheduleForm.scss';
import CalendarColors from './CalendarColors.js'

class ContactUsForm extends React.Component {
  render() {
    const today = new Date();
    return (
      <Container className="schedule-form">
        <h1 className="title"> Let's Talk </h1>
        <h4> Select a Day</h4>
        <InfiniteCalendar 
          className="calendar"
          theme={CalendarColors}
          selected={today}
          disabledDays={[0,6]}
          minDate={today}
          height={350}
          width={350}
        />
      </Container>
    );
  }
}

export default ContactUsForm;
