
import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h2>Contato</h2>

      <div className={styles.info}>
        <p>Email: jonaseduardo879@gmail.com</p>
        <p>GitHub: github.com/Eduardo349</p>
        <p>Telefone: (51) 99423-8039</p>
      </div>

      <form className={styles.form}>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu email" required />
        <textarea placeholder="Sua mensagem" rows="5" required></textarea>
        <button type="submit">Enviar mensagem</button>
      </form>
    </section>
  );
}

export default Contact;