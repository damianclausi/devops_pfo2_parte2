import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contacto">
      <h2>Contacto</h2>
      <form action="#" method="post">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" />

        <button type="submit">Enviar Mensaje</button>
      </form>
    </section>
  );
};

export default Contact;