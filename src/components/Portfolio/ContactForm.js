import React from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";

const StyledForm = styled.form`
  width: 80%;
  margin: auto;
  h2 {
    margin: 1em 0;
    font-size: 2.5em;
  }
  .group {
    width: 100%;
  }
  .form-display {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    .input-group {
      padding: 0 1em;
      margin: 1em 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      input {
        width: 100%;
        padding: 0.5em;
      }
    }
  }
  .form-submit {
    text-align: end;
    margin-right: 1em;
    button {
      cursor: pointer;
      background: ${theme.color.primary};
      color: white;
      padding: 0.5em 0.75em;
      border: none;
    }
  }
  min-height: 100vh;
  color: ${theme.color.primary};
`;

const ContactForm = ({ locale }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <Element name="contact">
      <StyledForm
        action="https://getform.io/f/b8c9b539-61bd-4bbf-9eec-5f9b91056856"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>N'hésitez pas à me contacter</h2>
        <div className="form-display">
          <div className="group">
            <div className="input-group">
              <label htmlFor="">{locale.firstname.title}</label>
              <input
                type="text"
                placeholder="Sherlock"
                name="firstname"
                ref={register({ required: true, maxLength: 80 })}
              />
              {errors.firstname && <span>{locale.firstname.error}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="">{locale.lastname.title}</label>
              <input
                type="text"
                placeholder="Holmes"
                name="lastname"
                ref={register({ maxLength: 100 })}
              />
              {errors.lastname && <span>{locale.lastname.error}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="">{locale.email.title}</label>
              <input
                type="text"
                placeholder="sherlock.holmes@elementary.com"
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              {errors.email && <span>{locale.email.error}</span>}
            </div>{" "}
            <div className="input-group">
              <label htmlFor="">{locale.tel.title}</label>
              <input
                type="tel"
                placeholder="06XXXXXXXX"
                name="tel"
                ref={register({ maxLength: 10 })}
              />
              {errors.tel && <span>{locale.tel.error}</span>}
            </div>
          </div>
          <div className="group">
            <div className="input-group">
              <label htmlFor="">{locale.message.title}</label>
              <textarea
                name="message"
                rows="7"
                ref={register({ required: true })}
              />
              {errors.message && <span>{locale.message.error}</span>}
            </div>
            <div className="form-submit">
              <button type="submit">Envoyer</button>
            </div>
          </div>
        </div>
      </StyledForm>
    </Element>
  );
};

export default ContactForm;
