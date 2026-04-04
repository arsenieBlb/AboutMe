import './HomePage.css';
import javaIcon from '../../assets/tech-stack/java.png';
import htmlIcon from '../../assets/tech-stack/html.png';
import cssIcon from '../../assets/tech-stack/css.png';
import pythonIcon from '../../assets/tech-stack/python.png';
import cplusplusIcon from '../../assets/tech-stack/cplusplus.png';
import csharpIcon from '../../assets/tech-stack/csharp.png';
import javascriptIcon from '../../assets/tech-stack/javascript.png';
import reactIcon from '../../assets/tech-stack/react.png';

const skills = [
  { name: 'Java', image: javaIcon },
  { name: 'HTML', image: htmlIcon },
  { name: 'CSS', image: cssIcon },
  { name: 'Python', image: pythonIcon },
  { name: 'C++', image: cplusplusIcon },
  { name: 'C#', image: csharpIcon },
  { name: 'JavaScript', image: javascriptIcon },
  { name: 'React', image: reactIcon },
  {
    name: 'Node.js',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'TypeScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'SQL',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
];

export function HomePage() {
  return (
    <main className="home-page">
      <section className="skills-section">
        <div className="skills-header">
          <p className="skills-eyebrow">Experience</p>
          <h1>My Tech Stack</h1>
          <p className="skills-copy">
            A React version of your starter layout, using the same folder-based
            structure as the `ecommerce-project` example and local images from
            your provided code where available.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <div className="skill-icon-wrap">
                <img className="skill-icon" src={skill.image} alt={`${skill.name} icon`} />
              </div>
              <span>{skill.name}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
