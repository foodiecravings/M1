import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Segment, Header, } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Report, ReportSchema } from '/imports/api/report/report';
import { withTracker } from 'meteor/react-meteor-data';
/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ContactUs extends React.Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  submit(data) {
    const { name } = data;
    Report.insert({ name }, this.insertCallback);
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Contact Us</Header>
          <p>Thank you for using FoodieCravings! Please complete the for below, so we can provide quick and efficient
            service. If this is an urgent matter please contact Customer Support:</p>
          <ul>
            <li>US: 808-525-8471</li>
            <li>Monday-Friday: 7:00AM - 10:30 PM HST</li>
          </ul>
          <AutoForm ref={(ref) => {
            this.formRef = ref;
          }} schema={ReportSchema} onSubmit={this.submit}>
            <Segment>
              <TextField name='name'/>
              <LongTextField name='description'/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Container>

    );
  }
}

export default ContactUs;
