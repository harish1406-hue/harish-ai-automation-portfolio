"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  Braces,
  CheckCircle2,
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";
import StudioHero from "@/components/StudioHero";
import ProjectWorkflow from "@/components/ProjectWorkflow";
import { projects, skills } from "@/data/portfolio";

const nav = ["Work", "Capabilities", "Architecture", "Experience", "Contact"];

const whatsappUrl =
  "https://wa.me/37065425110?text=Hello%20Harish%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20role.";

const experience = [
  {
    date: "Dec 2025 — Apr 2026",
    role: "Head of AI and Automation",
    company: "Voila AI",
    location: "Nice, France",
    description:
      "Led AI and automation initiatives, translated operational requirements into scalable systems, and guided the delivery of workflow automation, AI integrations and internal tools.",
    highlights: [
      "AI automation strategy",
      "Workflow architecture",
      "Cross-functional delivery",
    ],
  },
  {
    date: "Jan 2025 — Present",
    role: "AI Automation Engineer",
    company: "Freelance",
    location: "Remote",
    description:
      "Designing and delivering tailored automation systems, custom APIs, AI workflows, RAG solutions and operational integrations for business processes.",
    highlights: [
      "n8n and API orchestration",
      "Custom AI integrations",
      "Business process automation",
    ],
  },
  {
    date: "Apr 2025 — Jun 2025",
    role: "AI Automation Consultant",
    company: "UNIS Company Inc.",
    location: "Walnut, California",
    description:
      "Delivered automation services connecting customer requests, product information, CRM records and operational processes.",
    highlights: [
      "Product recommendation automation",
      "CRM integration",
      "Automated quotation workflows",
    ],
  },
  {
    date: "Oct 2024 — Nov 2024",
    role: "AI Automation Projects Manager",
    company: "Cookiejar AI",
    location: "Kaunas, Lithuania",
    description:
      "Managed AI automation projects, translated business requirements and coordinated workflow implementation.",
    highlights: [
      "Project coordination",
      "Requirements translation",
      "Workflow implementation",
    ],
  },
  {
    date: "Jun 2024 — Sep 2024",
    role: "AI Automation Assistant",
    company: "Cookiejar AI",
    location: "Kaunas, Lithuania",
    description:
      "Supported AI automation delivery, workflow development, testing and technical documentation.",
    highlights: [
      "Workflow development",
      "Automation testing",
      "Technical documentation",
    ],
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] =
    useState<(typeof projects)[number] | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!activeProject) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modalRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
      if (event.key !== "Tab") return;
      const nodes = modalRef.current?.querySelectorAll<HTMLElement>('button, a[href], [tabindex="0"]');
      if (!nodes?.length) return;
      const first = nodes[0], last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = overflow; document.removeEventListener("keydown", onKey); previous?.focus(); };
  }, [activeProject]);

  const featured = useMemo(
    () => projects.filter((project) => project.featured),
    []
  );

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Harish Velayutham home">
          <span className="brand-mark">HV</span>
          <span>HARISH<span className="brand-sub"> / AI & AUTOMATION</span></span>
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <a
            className="button small"
            href="mailto:harishmech415@gmail.com"
          >
            <MessageCircle size={16} />
            Contact me
          </a>
        </nav>
      </header>

      <StudioHero />

      <section className="trust-strip" aria-label="Main technologies">
        <span>n8n</span>
        <span>Node.js</span>
        <span>Python</span>
        <span>FastAPI</span>
        <span>Supabase</span>
        <span>OpenAI</span>
        <span>Claude</span>
        <span>Gemini</span>
      </section>

      <section id="work" className="section-shell section-block">
        <div className="section-heading">
          <div>
            <span className="kicker">02 / Selected systems</span>
            <h2>Real problems. Connected systems.</h2>
          </div>
          <p>
            Explore the engineering behind each system: the challenge, the
            workflow, and the choices that make it reliable.
          </p>
        </div>

        <div className="project-grid">
          {featured.map((project, index) => (
            <article className="project-card" key={project.slug}>
              <div className="project-card-top"><div className="project-number">SYSTEM / 0{index + 1}</div></div>
              <ProjectWorkflow steps={project.architecture}/>
              <div className="project-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tag-row">
                {project.stack.slice(0, 5).map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>

              <button
                className="text-button"
                onClick={() => setActiveProject(project)}
              >
                View case study
                <ArrowRight size={17} />
              </button>
            </article>
          ))}
        </div>

        <div className="all-projects">
          <h3>Additional systems</h3>

          {projects
            .filter((project) => !project.featured && project.status !== "Source review pending")
            .map((project) => (
              <button
                key={project.slug}
                onClick={() => setActiveProject(project)}
                className="project-row"
              >
                <span>
                  <strong>{project.shortTitle}</strong>
                  <small>{project.category}</small>
                </span>

                <span className="row-status">{project.status}</span>
                <ArrowRight size={18} />
              </button>
            ))}
        </div>
      </section>

      <section id="capabilities" className="section-shell section-block">
        <div className="section-heading">
          <div>
            <span className="kicker">03 / Engineering toolkit</span>
            <h2>From workflow logic to user-facing visibility.</h2>
          </div>
          <p>
            I connect automation, intelligence, data and interfaces into
            maintainable systems.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.group}>
              <h3>{skill.group}</h3>

              <div className="skill-list">
                {skill.items.map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={15} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="architecture" className="architecture-section section-block">
        <div className="section-shell">
          <div className="section-heading light">
            <div>
              <span className="kicker">04 / System principles</span>
              <h2>AI that is observable, grounded and controlled.</h2>
            </div>

            <p>
              Every production-style workflow needs more than a model call. It
              needs context control, validation, traceability and clear failure
              paths.
            </p>
          </div>

          <div className="architecture-grid">
            <div className="architecture-card">
              <Bot />
              <h3>RAG and memory</h3>
              <p>
                Retrieve approved context, rank relevant chunks, preserve
                session memory and display sources used for the response.
              </p>
            </div>

            <div className="architecture-card">
              <ShieldCheck />
              <h3>Guardrails</h3>
              <p>
                Detect prompt-injection patterns, separate instructions from
                retrieved content, restrict tools, enforce schemas and route
                uncertain outputs for review.
              </p>
            </div>

            <div className="architecture-card">
              <Layers3 />
              <h3>Live dashboards</h3>
              <p>
                Track workflow runs, success rates, latency, processing stages,
                exceptions and business results through clear operational
                views.
              </p>
            </div>

            <div className="architecture-card">
              <Braces />
              <h3>Result tracing</h3>
              <p>
                Store request IDs, model and prompt versions, retrieved
                sources, validation results, tool calls and final outputs for
                auditability.
              </p>
            </div>
          </div>

          <div className="guardrail-flow">
            {[
              "Input sanitisation",
              "Policy check",
              "Trusted retrieval",
              "Tool allowlist",
              "Schema validation",
              "Human review",
            ].map((step, index) => (
              <div key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section section-block">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <span className="kicker">05 / Experience</span>
              <h2>Hands-on engineering shaped by operational delivery.</h2>
            </div>

            <p>
              Experience across AI automation leadership, client delivery,
              project coordination and production-oriented workflow
              development.
            </p>
          </div>

          <div className="experience-layout">
            <aside className="experience-intro">
              <span className="experience-count">5</span>
              <strong>Professional roles</strong>
              <p>
                From workflow implementation to leading AI automation
                initiatives.
              </p>
            </aside>

            <div className="experience-list">
              {experience.map((item, index) => (
                <article
                  className="experience-card"
                  key={`${item.date}-${item.role}`}
                >
                  <div className="experience-card-top">
                    <span className="experience-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="experience-date">{item.date}</span>
                  </div>

                  <div className="experience-card-content">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="experience-company">
                        {item.company}
                        <span>·</span>
                        {item.location}
                      </p>
                    </div>

                    <p className="experience-description">
                      {item.description}
                    </p>

                    <div className="experience-tags">
                      {item.highlights.map((highlight) => (
                        <span key={highlight}>{highlight}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell education-section">
        <div>
          <span className="kicker">Education</span>
          <h2>Engineering foundations with business systems thinking.</h2>
        </div>

        <div className="education-grid">
          <article>
            <span>2022 — 2024</span>
            <h3>Master&apos;s in Industrial Engineering and Management</h3>
            <p>Kaunas University of Technology · Lithuania</p>
          </article>

          <article>
            <span>2018 — 2021</span>
            <h3>Bachelor&apos;s in Mechanical Engineering</h3>
            <p>Sri Ramakrishna Institute of Technology · India</p>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-shell contact-inner">
          <div>
            <span className="kicker">06 / Contact</span>
            <h2>Let’s talk about your engineering team.</h2>
            <p>
              Interested in my experience in AI automation, backend integrations
              or intelligent workflows? Get in touch to discuss a role.
            </p>
          </div>

          <div className="contact-actions">
            <a
              className="button light-button"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              Contact me on WhatsApp
            </a>

            <a
              className="button outline-light"
              href="mailto:harishmech415@gmail.com"
            >
              <Mail size={18} />
              Send an email
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <span>© {new Date().getFullYear()} Harish Velayutham</span>
        <span>Full-Stack AI Automation Engineer</span>
      </footer>

      {activeProject && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} case study`}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              setActiveProject(null);
            }
          }}
        >
          <div className="modal" ref={modalRef}>
            <button
              className="modal-close"
              aria-label="Close case study"
              onClick={() => setActiveProject(null)}
            >
              <X />
            </button>

            <span className="kicker">{activeProject.category}</span>
            <h2>{activeProject.title}</h2>
            <p className="modal-intro">{activeProject.description}</p>

            <div className="case-grid">
              <section>
                <h3>The problem</h3>
                <p>{activeProject.problem}</p>
              </section>

              <section>
                <h3>The solution</h3>
                <p>{activeProject.solution}</p>
              </section>
            </div>

            <section>
              <h3>System architecture</h3>

              <div className="architecture-chain">
                {activeProject.architecture.map((step, index) => (
                  <div key={step}>
                    <span>{step}</span>
                    {index < activeProject.architecture.length - 1 && (
                      <ArrowRight size={15} />
                    )}
                  </div>
                ))}
              </div>
            </section>

            <div className="case-grid">
              <section>
                <h3>Core capabilities</h3>
                <ul>
                  {activeProject.capabilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3>Outcome</h3>
                <ul>
                  {activeProject.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="tag-row">
              {activeProject.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>

            {activeProject.github && (
              <a
                href={activeProject.github}
                target="_blank"
                rel="noreferrer"
                className="button secondary modal-link"
              >
                <ExternalLink size={17} />
                Repository link
              </a>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
