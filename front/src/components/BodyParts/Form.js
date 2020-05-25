import React from 'react';
import Ajv from 'ajv';
class Form extends React.Component {
  aliasedErrors = {
    'should NOT be shorter than 1 characters': 'is required',
    'should match pattern "^([0-9][ \\-,\\(\\)]*){10}$"': 'Valid Phone, 10 digits, Required',
    'should match format "email"': 'Should be a valid email'
  }
  constructor(props,schema) {
    super(props);
    const ajv = new Ajv({allErrors: true});
    this.ajvValidate = ajv.compile(schema);
  }
  validate = () => {
    return this.ajvValidate(this.state);
  }
  handleFieldChanges = (event) => {
    let nam = event.target.id;
    let val = event.target.value;
    this.setState({[nam]: val},() =>{
      this.validate();
      this.setFieldError(nam);
    });
  }
  hasError = (field) => {
    return this.state.errors[field] !== undefined
  }
  getErrorOrAlias = (errorMessage) => {
    return this.aliasedErrors[errorMessage] || errorMessage;
  }
  setFieldError =(field) => {
    if(this.ajvValidate.errors) {
      const fieldError = this.ajvValidate.errors.find((error) => error.dataPath === '.'+field);
      if(fieldError !== undefined){
        const errors = { ...this.state.errors } 
        errors[field] = this.getErrorOrAlias(fieldError.message) 
        this.setState({
          errors
        });
      }
      else {
        const errors= { ...this.state.errors}
        delete errors[field]
        this.setState({
          errors
        })
      }
    }
    else {
      const errors= { ...this.state.errors}
      delete errors[field]
      this.setState({
        errors
      })
    }
  }
  setErrors =() => {
    if(this.ajvValidate.errors){
      const errors = this.ajvValidate.errors.reduce(
        (obj,error) => {
          const errors = {...obj};
          const key = error.dataPath.slice(1);
          errors[key] = this.getErrorOrAlias(error.message);
          return errors;
        },{})

      this.setState({
        errors
      });
    }
  }
}
export default Form;
