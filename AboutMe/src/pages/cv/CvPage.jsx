import frontPhoto from '../../assets/frontPhoto.png';
import './CvPage.css';

const experienceItems = [
  {
    date: 'Sep 2024-Jun 2025',
    company: 'American Chamber of Commerce',
    title: 'Operations & IT Support Intern',
    points: [
      'Helped maintain internal databases and CRM tools, provided basic IT support to staff.',
      'Assisted with administrative tasks and organized project-related information and data.',
      'Managed multiple tasks reliably and worked well both independently and with the team.',
    ],
  },
  {
    date: 'Jun 2024-Aug 2024',
    company: 'Chamber of Commerce and Industry',
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
    date: 'Jun 2023-Dec 2023',
    company: 'Agency for Social and Economic Development Initiatives',
    title: 'IT Intern - Project Support',
    points: [
      'Assisted with CRM management, including updating internal databases and supporting outreach and communication tracking.',
      'Provided IT support for project meetings, including troubleshooting, presentation setup, and digital file organization.',
      'Represented Moldova at an international youth conference, serving as technical manager and cultural facilitator in a multinational team.',
    ],
  },
];

const educationItems = [
  {
    date: 'From 01/09/2025',
    text: 'VIA University Software Technology Engineering',
  },
  {
    date: '01/09/2022-31/05/2025',
    text: 'International Baccalaureat I.P. Liceul Teoretic Ion Creanga | Chisinau, Moldova',
  },
];

export function CvPage() {
  return (
    <main className="cv-page">
      <div className="cv-container">
        <aside className="cv-sidebar">
          <div className="cv-profile">
            <div className="cv-photo">
              <img src={frontPhoto} alt="Arsenie Bilba profile" />
            </div>
            <div className="cv-name">
              <h1>Arsenie Bilba</h1>
            </div>
            <hr />
            <div className="cv-section">
              <h2>Contact</h2>
              <p>
                bilba.arsenie@gmail.com
                <br />
                +4550299777
              </p>
            </div>
            <hr />
            <div className="cv-section">
              <h2>Skills</h2>
              <p>Team Collaboration</p>
              <p>Technical Writing</p>
              <p>Git</p>
              <p>Networking</p>
              <p>SQL</p>
              <p>Python</p>
            </div>
            <hr />
            <div className="cv-section">
              <h2>Language</h2>
              <p>Romanian native</p>
              <p>English C1</p>
              <p>Started studying Danish</p>
            </div>
          </div>
        </aside>

        <section className="cv-main">
          <h2>Experience</h2>
          <hr />
          <div className="cv-experience-list">
            {experienceItems.map((item) => (
              <div className="cv-experience-item" key={`${item.date}-${item.company}`}>
                <div className="cv-meta">
                  <p>{item.date}</p>
                  <p className="cv-company">{item.company}</p>
                </div>
                <div className="cv-details">
                  <h2>{item.title}</h2>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <h2>Education</h2>
          <hr />
          <div className="cv-education-list">
            {educationItems.map((item) => (
              <div className="cv-education-item" key={`${item.date}-${item.text}`}>
                <p>{item.date}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="cv-volunteer">
            <h2>Volunteer Work at National Center of Anticorruption:</h2>
            <hr />
            <p>
              Helped plan and coordinate school events aimed at educating students about
              the importance of integrity, ethical choices, and personal responsibility in
              daily life.
            </p>
            <p>
              Delivered presentations and shared relatable examples to engage students and
              encourage honest, respectful behavior within the school community.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
