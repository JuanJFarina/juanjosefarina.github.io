import React, { useState } from 'react';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';
import { useTheme } from '../components/ThemeContext';

function isValidEmail(mail) {
  const regex = /^[^@]+@[^@.]+(\.[^.@]+)+$/;
  const isValid = regex.test(mail);
  return isValid;
}

export default function Contact() {
  const { theme } = useTheme();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const getIsFormValid = () => {
    if (firstName !== '' && isValidEmail(email) && message !== '') {
      return true;
    } else {
      return false;
    }
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  const handleSubmit = (e) => {
    alert('Message sent successfully!');
    clearForm();
  };

  const handleFirstName = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  return (
    <main className="container-fluid">
      <h1
        style={
          theme === 'light'
            ? { animation: 'dayLights 5s linear infinite' }
            : { animation: 'nightLights 5s linear infinite' }
        }
      >
        <Write text="Contact" time="1000" delay="0" />
      </h1>
      <div className="row">
        <div className="col-sm-2 d-none d-sm-block"></div>
        <div className="col-12 col-sm-8 contact">
          <br />
          <FadeIn fade="1000" delay="0">
            <h4>Don't hesitate to reach out to me!</h4>
            <p>Please use this form to send me a message:</p>
            <section>
              <form action="https://formspree.io/f/mvonnvea" method="POST">
                <fieldset className="container-fluid">
                  <div className="row">
                    <div className="col-6" style={{textAlign:'right'}}>
                      <div className="Field">
                        <label>
                            <sup>*</sup> First name
                        </label>
                        <input
                          placeholder="First name"
                          name="First name"
                          value={firstName}
                          onChange={handleFirstName}
                        />
                      </div>
                      <div className="Field">
                        <label>Last name</label>
                        <input
                          placeholder="Last name"
                          name="Last name"
                          value={lastName}
                          onChange={handleLastName}
                        />
                      </div>
                      <div className="Field">
                        <label>
                            <sup>*</sup> Email address
                        </label>
                        <input
                          placeholder="Email address"
                          name="Email address"
                          value={email}
                          onChange={handleEmail}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="Field">
                        <label style={{verticalAlign:'top'}}>
                            <sup>*</sup>Message
                        </label>
                        <textarea
                          placeholder="Message"
                          name="Message"
                          value={message}
                          onChange={handleMessage}
                          rows="5"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="submit"
                        disabled={!getIsFormValid()}
                        onSubmit={handleSubmit}
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </section>
          </FadeIn>
        </div>
        <div className="col-sm-2 d-none d-sm-block"></div>
      </div>
    </main>
  );
}