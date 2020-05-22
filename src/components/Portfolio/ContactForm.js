import React, { useState } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";
import { Icon, InlineIcon } from "@iconify/react";
import sendAltFilled from "@iconify/icons-carbon/send-alt-filled";

const StyledForm = styled.form`
  width: 80%;
  margin: 1em auto;
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
    box-shadow: 0px 10px 15px 5px rgba(0, 20, 90, 0.2);
    textarea {
      border: none;
      border-bottom: 2px solid ${theme.color.primary};
    }
    .input-group {
      padding: 0 1em;
      margin: 1em 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      input {
        width: 100%;
        padding: 0.5em;
        border: none;
        border-bottom: 2px solid ${theme.color.primary};
        &[placeholder] {
          color: ${theme.color.primary};
          opacity: 0.5;
        }
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
      border-radius: 0.3em;
      text-transform: uppercase;
      svg {
        margin: 0 0.5em;
      }
      &:hover {
        animation: pulse;
        animation-duration: 0.5s;
      }
    }
  }
  min-height: 100vh;
  color: ${theme.color.primary};
  @media (max-width: 768px) {
    text-align: center;
    .form-display {
      flex-direction: column;
    }
  }
`;

const ContactForm = ({ locale, isVisible }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data, e) => {
    cogoToast.loading(locale.loading.content, { color: theme.color.primary });
    axios({
      method: "post",
      url: "https://getform.io/f/b8c9b539-61bd-4bbf-9eec-5f9b91056856",
      data,
    })
      .then(r => {
        cogoToast.success(locale.success.content, {
          color: theme.color.primary,
        });
        e.target.reset();
      })
      .catch(r => {
        cogoToast.error(locale.error.content, { color: theme.color.primary });
      });
  };
  return (
    <Element name="contact">
      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        className={isVisible ? "card animate__animated animate__fadeIn" : ""}
      >
        <h2>{locale.title}</h2>
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
              <button type="submit">
                <InlineIcon icon={sendAltFilled} />
                {locale.button.content}
              </button>
            </div>
          </div>
        </div>
      </StyledForm>
    </Element>
  );
};

export default ContactForm;
