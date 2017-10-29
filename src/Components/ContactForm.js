import React, { Component } from 'react';
import '../Styles/Projects.css';

class ContactForm extends Component {
  render() {
    return (
      <section className="contact-section section">
        <div className="container">
          <h3 className="section-title">Contact</h3>

          <div className="flex-container">
            <div className="flex-item">
              <form id="contact_form" action="#">
              	<div class="row">
              		<label for="name">Your name: </label>
              		<input id="name" class="input" name="name" type="text" />
              	</div>
              	<div class="row">
              		<label for="email">Your email: </label>
              		<input id="email" class="input" name="email" type="text" />
              	</div>
              	<div class="row">
              		<label for="message">Your message: </label>
              		<textarea id="message" class="input" name="message" rows="7" cols="30"></textarea>
              	</div>
              	{/*<input id="submit_button" type="submit" value="Send email" />*/}
              </form>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default ContactForm;
