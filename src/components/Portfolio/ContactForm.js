import React from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 75%;
  }
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
        <input
          type="text"
          placeholder="Sherlock"
          name="firstname"
          ref={register({ required: true, maxLength: 80 })}
        />
        {errors.firstname && <span>{locale.firstname.error}</span>}
        <input
          type="text"
          placeholder="Holmes"
          name="lastname"
          ref={register({ maxLength: 100 })}
        />
        {errors.lastname && (
          <span>{locale.lastname.error}</span>
        )}
        <input
          type="text"
          placeholder="sherlock.holmes@elementary.com"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>{locale.email.error}</span>}
        <input
          type="tel"
          placeholder="06XXXXXXXX"
          name="tel"
          ref={register({ maxLength: 10 })}
        />
        {errors.tel && <span>{locale.tel.error}</span>}
        <textarea name="message" ref={register({ required: true })} />
        {errors.message && (
          <span>{locale.message.error}</span>
        )}
        <button type="submit">Envoyer</button>
      </StyledForm>
    </Element>
  );
};

export default ContactForm;
