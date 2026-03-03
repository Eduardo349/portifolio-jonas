import projects from "../components/data/projects";
import styles from "./Pages.module.css";
import Projects from "../components/Projects";

function ProjectPage() {
  return (
     
    <section className={styles.container}>
      <h1 className={styles.title}>Meus Projetos</h1>
        < Projects />
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
            />

            

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className={styles.tech}>
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>

            <div className={styles.links}>
              <a href={project.github} target="_blank">GitHub</a>
              <a href={project.demo} target="_blank">Demo</a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectPage;