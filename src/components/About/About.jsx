import style from '../../styles/about.module.css';

function About() {

    return (
        <section id="about" className={style.section}>
            <h2 className="fade-up">Sobre Mim</h2>

            <h2 className='fade-up delay-1'>Desenvolvedor Front-End</h2>
            
            <p className="fade-up delay-2" >
                Sou desenvolvedor front-end em início de carreira, focado na criação de interfaces modernas, organizadas e funcionais.
                Tenho estudado e praticado diariamente para evoluir minhas habilidades em React, JavaScript e boas práticas de desenvolvimento.
                Busco minha primeira oportunidade profissional para aplicar o que venho construindo e continuar crescendo na área de tecnologia.
            </p >

            <h3 className="fade-up delay-3">Atualmente Estudando</h3>
            <p className="fade-up delay-4">TypeScript e boas práticas de arquitetura em React.</p>


            <div className={style.aboutContainer}>

                <div className={style.skill}>
                    <div className={`${style.circle} ${style.html}`}>90%</div>
                    <p>HTML</p>
                </div>

                <div className={style.skill}>
                    <div className={`${style.circle} ${style.css}`}>85%</div>
                    <p>CSS</p>
                </div>

                <div className={style.skill}>
                    <div className={`${style.circle} ${style.js}`}>75%</div>
                    <p>JavaScript</p>
                </div>

                <div className={style.skill}>
                    <div className={`${style.circle} ${style.react}`}>70%</div>
                    <p>React</p>
                </div>

                <div className={style.skill}>
                    <div className={`${style.circle} ${style.github}`}>80%</div>
                    <p>GitHub</p>
                </div>

                <div className={style.skill}>
                    <div className={`${style.circle} ${style.vercel}`}>75%</div>
                    <p>Vercel</p>
                </div>

            </div>
        </section>

    )
}

export default About;