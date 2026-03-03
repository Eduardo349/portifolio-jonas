import agencia from "../../assets/agencia.jpg";
import petstyle from "../../assets/petstyle.jpg";
import diario from "../../assets/diario.jpg";


const projects = [
  {
    id: 1,
    title: "Agencia criativa Web",
    description:
      "Projeto de site institucional desenvolvido com HTML5 e SCSS modular, organizado com boas práticas, versionado no GitHub e publicado na Vercel.",
    technologies: ["HTML5", "SASS (SCSS)", "Estrutura modular com @use", "Variáveis ​​e mixins", "Metodologia BEM", "compilador CSS"],
    github: "https://github.com/Eduardo349/agencia-criativa-Web.git",
    demo: "https://agencia-criativa-web-xi.vercel.app",
    image: agencia,
  },
  {
    id: 2,
    title: "Pet&Style",
    description:
      "A Pet&Style é uma loja virtual fictícia desenvolvida com HTML5 e Tailwind CSS, aplicando responsividade mobile-first com uso de Flexbox e Grid.",
    technologies: ["HTML5", "Tailwind CSS"],
    github: "https://github.com/Eduardo349/petstyle-loja-virtual.git",
    demo: "https://petstyle-loja-virtual-nine.vercel.app",
    image: petstyle,
  },
  {
    id: 3,
    title: "Diario de bordo",
    description:
      "O Diário de Bordo é um PWA que permite registrar atividades diárias com persistência local, funcionamento offline e possibilidade de instalação na tela inicial.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Service Worker", "Aplicativo Web", "Manifesto", "Chrome DevTools", "Lighthouse"],
    github: "https://github.com/Eduardo349/diario-de-bordo.git",
    demo: "https://diario-de-bordo-ebon.vercel.app",
    image: diario,
  },
];

export default projects;