
// Importa o estilo (CSS Module) 
import styles from "./Project.module.css";

//Importa a lista de projetos 
import projects from "../data/projects";

function Projects() {
  return (
    //seção de projetos 
    <section className={styles.sectionDark}>

      {/*Container grid*/}
    <div className={styles.container}>
      {projects.map((project) => (

        //Card individual
        <div key={project.id} className={styles.card}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

      ))}
      
    </div>
    </section>
  );
}

export default Projects;


