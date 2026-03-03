import { Link } from "react-router-dom";
import styles from "./index.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Portifólio</h1>

      <nav className={styles.nav}>
        <Link to="/">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;