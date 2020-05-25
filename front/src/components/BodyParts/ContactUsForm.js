import React from 'react';
import Form from './Form';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { contactFormEndpoint } from '../../config';
import schema from './ContactForm.validations';
import './ContactUsForm.scss';

class ContactUsForm extends Form {
  state = {
    firstName: '',
    lastName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    message: '',
    newsletter: true,
    errors: {},
    sent: false,
    loading: false
  };

  constructor(props) {
    super(props, schema);
  }
  toggleNewsletter = () => {
    console.log(this.state.newsletter);
    this.setState({
      newsletter: !this.state.newsletter
    });
  }

  handleFormSubmit = () => {
    console.log('submit');
    // if form is valid
    if(!this.validate()) {
      this.setErrors();
    }
    else {
      // do request to endpoint
      const {
        firstName,
        lastName,
        companyName,
        workEmail,
        phoneNumber,
        message,
        newsletter,
      } = this.state;

      this.doRequest({
        firstName,
        lastName,
        companyName,
        workEmail,
        phoneNumber,
        message,
        newsletter,
      })
    }
  }
  doRequest =(data)=> {
    this.setState({
      loading: true
    })
    fetch(contactFormEndpoint,{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(()=>{
      this.setState({
        firstName: '',
        lastName: '',
        companyName: '',
        workEmail: '',
        phoneNumber: '',
        message: '',
        newsletter: true,
        errors: {},
        sent: true,
        loading: false
      })
    }).catch((error)=>{
      console.log(error.message);
      alert('There was an error');
    })
  }

  render() {
    let header;
    if(this.state.sent) {
      header = (
        <h3>Thanks for contacting us!
        We will be getting in contact with you in the following 24 hrs</h3>
      )
    }
    else {
     header = (
      <h3>
        Give us a call at  
        <a href="tel:18448885565" className="link">(844) 888-5565</a> 
        or send us a message
      </h3>
     )
    }
    return (
      <Container className="contact-us-form">
        <h1 className="title"> Contact Us </h1>
        {header}
        <form onSubmit={this.handleFormSubmit}>
          <TextField id='firstName' label="First Name" className="text-field half"
            onChange = {this.handleFieldChanges}
            value = {this.state.firstName}
            error = {this.hasError('firstName')}
            helperText = {this.state.errors['firstName']}
          />
          <TextField id='lastName' label="Last Name" className="text-field half"
            onChange = {this.handleFieldChanges}
            value = {this.state.lastName}
            error = {this.hasError('lastName')}
            helperText = {this.state.errors['lastName']}
          />
          <TextField id='companyName' label="Company Name" className="text-field full"
            onChange = {this.handleFieldChanges}
            value = {this.state.companyName}
            error = {this.hasError('companyName')}
            helperText = {this.state.errors['companyName']}
          />
          <TextField id='workEmail' label="Work Email" className="text-field full"
            onChange = {this.handleFieldChanges}
            value = {this.state.workEmail}
            error = {this.hasError('workEmail')}
            helperText = {this.state.errors['workEmail']}
          />
          <TextField id='phoneNumber' label="Phone Number" className="text-field full"
            onChange = {this.handleFieldChanges}
            value = {this.state.phoneNumber}
            error = {this.hasError('phoneNumber')}
            helperText = {this.state.errors['phoneNumber']}
          />
          <TextField
            id='message'
            label="How can we help?"
            className="text-field full"
            multiline
            rows={4}
            onChange = {this.handleFieldChanges}
            value = {this.state.message}
            error = {this.hasError('message')}
            helperText = {this.state.errors['message']}
          />
          <FormControlLabel
            id="newsletter"
            className="full"
            control={<Checkbox name="checkedA" onChange = {this.toggleNewsletter} checked = {this.state.newsletter} />}
            label="Subscribe to newsletter"
          />
          <Button color="primary" variant="contained" disableElevation className="contact-button" 
            onClick={this.handleFormSubmit}>
            {this.state.loading && (<CircularProgress color='secondary' size={20} />)}
            {!this.state.loading && 
              (<span>Send Now </span>)
            }
            <FontAwesomeIcon className="icon" icon={faChevronRight} />
          </Button>
        </form>
      </Container>
    );
  }
}

export default ContactUsForm;
