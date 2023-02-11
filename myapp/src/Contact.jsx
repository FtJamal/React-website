import React from 'react';
import styled from "styled-components";
// import { Button } from './styles/Button'

function Contact() {

  return (
    <Wrapper>
      <h2 className='common-heading'>
        feel free to contact us
      </h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7235.476996892361!2d67.07150321906522!3d24.940976864392393
      !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f5c017f9499%3A0xc8aa9d57f8e656dc!2sFederal%20B%20Area%20Block%2017%
      20Gulberg%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1675777659036!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mnqypnzp" method='POST' className='contact-inputs'>
            <input
              type="text"
              name='username'
              placeholder='USERNAME'

              required />

            <input type="email"
              name="email"
              placeholder='EMAIL'
              required />

            <textarea name="message" cols="30" rows="6" required></textarea>
            <input type="submit" value="send" className='btn' />
          </form>
        </div>
      </div>

    </Wrapper>


  )
}

const Wrapper = styled.section`
padding: 5rem 0;
input{
  padding:10px
}
textarea{
  padding:10px
}
.container {
  margin-top: 6rem;
  text-align: center;
  .contact-form {
    max-width: 40rem;
    margin: auto;
    .contact-inputs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        color : white;
        background-color : #6254F3;
        width : 100px;
        padding : 10px;
        border-radius : 10px;
        border: 2px solid ${({ theme }) => theme.colors.btn};
        
        &:hover {
          background-color: rgb(0 0 0 /0%);
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }

  `;

export default Contact;