import photo from '../../assets/photo.jpg';
import football from '../../assets/football.webp';
import javaIcon from '../../assets/tech-stack/java.png';
import htmlIcon from '../../assets/tech-stack/html.png';
import cssIcon from '../../assets/tech-stack/css.png';
import pythonIcon from '../../assets/tech-stack/python.png';
import cplusplusIcon from '../../assets/tech-stack/cplusplus.png';
import csharpIcon from '../../assets/tech-stack/csharp.png';
import javascriptIcon from '../../assets/tech-stack/javascript.png';
import reactIcon from '../../assets/tech-stack/react.png';
import './AboutPage.css';

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

const workExperience = [
  {
    title: 'Operations & IT Support Intern',
    points: [
      'Helped maintain internal databases and CRM tools, provided basic IT support to staff.',
      'Assisted with administrative tasks and organized project-related information and data.',
      'Managed multiple tasks reliably and worked well both independently and with the team.',
    ],
  },
  {
    title: 'IT Specialist',
    points: [
      'Technical Support & Troubleshooting',
      'Setting Up Workstations',
      'User Account Management',
      'Software Installation & Updates',
      'Backup & Data Recovery',
      'Inventory Management',
      'Documentation & Reporting',
    ],
  },
  {
    title: 'IT Intern - Project Support',
    points: [
      'Assisted with CRM management, including updating internal databases and supporting outreach and communication tracking.',
      'Provided IT support for project meetings, including troubleshooting, presentation setup, and digital file organization.',
    ],
  },
];

export function AboutPage() {
  return (
    <main className="about-page">
      <section className="hero-section">
        <div className="hero-text">
          <p>
            Arsenie Bilba
            <br />
            "Made to Make"
          </p>
        </div>
        <div className="hero-photo">
          <img className="portrait-image" src={photo} alt="Arsenie Bilba" />
        </div>
      </section>

      <section className="section-block">
        <h1 className="section-title">Work Experience</h1>
        <div className="work-grid">
          {workExperience.map((job) => (
            <article className="work-card" key={job.title}>
              <h2>{job.title}</h2>
              {job.points.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h1 className="section-title">My Tech Stack</h1>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <div className="skill-icon-frame">
                <img src={skill.image} alt={`${skill.name} icon`} />
              </div>
              <span>{skill.name}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-grid">
        <div className="about-copy">
          <h1>My Passions Outside of Work</h1>
          <p>
            Outside of my professional experience, I&apos;m really passionate about
            football. It helps me stay active, teaches me teamwork, and gives me the
            perfect way to relax and recharge. Playing the game is more than just a
            hobby for me, it&apos;s something that keeps me motivated and plays an
            important role in my personal growth and development.
          </p>
        </div>
        <div className="about-image">
          <img src={football} alt="Football passion" />
        </div>
      </section>
    </main>
  );
}
