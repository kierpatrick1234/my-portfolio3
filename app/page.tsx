import { InspectHero } from "@/components/InspectHero";
import { SideNav } from "@/components/SideNav";
import { experience, profile, projects, skills } from "@/data/resume";

export default function Home() {
  const fullName = `${profile.firstName} ${profile.lastName}`;

  return (
    <div className="shell">
      <a href="#main" className="skip">
        Skip to content
      </a>
      <SideNav name={fullName} />

      <main id="main">
        <section id="about" className="hero" aria-label="About">
          <InspectHero firstName={profile.firstName} lastName={profile.lastName} />
          <div className="hero-copy">
            <p className="role">
              {profile.role}, based in {profile.location}
            </p>
            <p className="summary">{profile.summary}</p>
            <p className="availability">
              <span className="dot" aria-hidden="true" />
              {profile.availability}
            </p>
          </div>
        </section>

        <section id="work" className="block">
          <h2>Selected work</h2>
          <p className="block-intro">Open a project to see the problem, what I did, and how it turned out.</p>
          <div className="projects">
            {projects.map((p) => (
              <details key={p.title} className="project">
                <summary>
                  <span className="p-year">{p.year}</span>
                  <span className="p-main">
                    <span className="p-title">{p.title}</span>
                    <span className="p-line">{p.oneLiner}</span>
                  </span>
                  <span className="p-toggle" aria-hidden="true" />
                </summary>
                <div className="p-body">
                  <dl>
                    <div>
                      <dt>My role</dt>
                      <dd>{p.role}</dd>
                    </div>
                    <div>
                      <dt>Problem</dt>
                      <dd>{p.problem}</dd>
                    </div>
                    <div>
                      <dt>What I did</dt>
                      <dd>
                        <ul>
                          {p.approach.map((a) => (
                            <li key={a}>{a}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div>
                      <dt>Result</dt>
                      <dd className="outcome">{p.outcome}</dd>
                    </div>
                    <div>
                      <dt>Built with</dt>
                      <dd>
                        <ul className="chips">
                          {p.stack.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                  {p.href && (
                    <a className="p-link" href={p.href}>
                      View {p.title}
                    </a>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section id="experience" className="block">
          <h2>Experience and education</h2>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.title + e.start}>
                <span className="t-date">
                  {e.start} to {e.end}
                </span>
                <div>
                  <h3>{e.title}</h3>
                  <p className="t-org">{e.org}</p>
                  <ul>
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="block">
          <h2>Skills</h2>
          <div className="skills">
            {skills.map((g) => (
              <div key={g.group}>
                <h3>{g.group}</h3>
                <ul>
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="block contact">
          <h2>Contact</h2>
          <p className="block-intro">Have a project or a role in mind? Email is the fastest way to reach me.</p>
          <a className="mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <ul className="socials">
            {profile.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="foot">
          <p>
            © {new Date().getFullYear()} {fullName}. Designed and built by me with Next.js.
          </p>
        </footer>
      </main>
    </div>
  );
}
