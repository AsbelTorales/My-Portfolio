import React, { useState } from 'react';

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  // useState se usa manejar el estado de los datos del formulario.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Función para manejar cambios en los campos del formulario, handleChange actualiza el estado del formulario cuando el usuario cambia el valor de un campo de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el envío del formulario, handleSubmit previene el comportamiento predeterminado del formulario.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Enviar datos del formulario a Formspree utilizando fetch.
    const response = await fetch('https://formspree.io/f/xpwawqwj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    // Manejar la respuesta de Formspree
    if (response.ok) {
      alert('Mensaje enviado con éxito!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      alert('Hubo un error al enviar el mensaje.');
    }
  };
//Se muestran los datos de contacto y enlaces a redes sociales.
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Contact me!</h3>

          <p className="contact__description">
            If you have a project in mind, an idea to share, or simply want to connect, don't hesitate to get in touch. I am always open to new opportunities and collaborations.
          </p>

          {/* Información de contacto */}
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">toralesasbel@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+52 296 9613706</h4>
              </div>
            </div>
          </div>

          {/* Enlaces a redes sociales */}
          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/asbeltorales/" className="contact__social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com/AsbelTorales" className="contact__social-link">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Formulario de contacto, Cada campo tiene un name atributo para que Formspree pueda reconocer los datos enviados. */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input 
                type="text"
                placeholder='Your Name'
                className="form__control" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form__input-div">
              <input 
                type="email"
                placeholder='Your Email'
                className="form__control" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form__input-div">
              <input 
                type="text"
                placeholder='Your Subject'
                className="form__control" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea 
              placeholder='Your Message'
              className="form__control textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
           {/* Botón de envío que llama a handleSubmit al hacer clic */}
          <button className="button" type="submit">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
