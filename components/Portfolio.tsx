"use client";

import { useMemo, useState } from "react";
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
import { projects, skills } from "@/data/portfolio";

const nav = ["Work", "Capabilities", "Architecture", "Experience", "Contact"];

const whatsappUrl =
  "https://wa.me/37065425110?text=Hello%20Harish%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20AI%20automation%20project.";

const experience = [
  {
    date: "Dec 2025 — May 2026",
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

  const featured = useMemo(
    () => projects.filter((project) => project.featured),
    []
  );

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Harish Velayutham home">
          <span className="brand-mark">HV</span>
          <span>Harish Velayutham</span>
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
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
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} />
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" />
            Full-Stack AI Automation Engineer
          </div>

          <h1>I build reliable AI systems that move work forward.</h1>

          <p className="hero-text">
            Workflow automation, RAG, custom APIs, operational dashboards and
            secure AI integrations built for real business processes.
          </p>

          <div className="hero-actions">
            <a className="button" href="#work">
              Explore selected work
              <ArrowRight size={18} />
            </a>

            <a
              className="button secondary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              Let&apos;s talk on WhatsApp
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin size={16} />
              Kaunas, Lithuania
            </span>

            <span>
              <Zap size={16} />
              Available for AI automation projects
            </span>
          </div>
        </div>

        <div
          className="system-visual system-visual-redesigned"
          aria-label="Four-stage AI automation system overview"
        >
          <div className="visual-header">
            <div>
              <span className="visual-label">SYSTEM ARCHITECTURE</span>
              <strong>From business input to traceable result</strong>
            </div>

            <span className="live">
              <i />
              Operational
            </span>
          </div>

          <div className="system-stages">
            <article className="system-stage">
              <span className="stage-number">01</span>
              <div>
                <small>CAPTURE</small>
                <strong>Business inputs</strong>
                <p>Forms, emails, APIs, documents and application events.</p>
              </div>
            </article>

            <article className="system-stage">
              <span className="stage-number">02</span>
              <div>
                <small>ORCHESTRATE</small>
                <strong>Workflow logic</strong>
                <p>n8n, APIs, validation rules, routing and retry handling.</p>
              </div>
            </article>

            <article className="system-stage">
              <span className="stage-number">03</span>
              <div>
                <small>UNDERSTAND</small>
                <strong>AI and RAG</strong>
                <p>Retrieve context, reason, validate and apply guardrails.</p>
              </div>
            </article>

            <article className="system-stage">
              <span className="stage-number">04</span>
              <div>
                <small>DELIVER</small>
                <strong>Action and evidence</strong>
                <p>Business output, dashboard visibility, alerts and traces.</p>
              </div>
            </article>
          </div>

          <div className="system-summary">
            <div>
              <span>Visibility</span>
              <strong>Live dashboards</strong>
            </div>
            <div>
              <span>Reliability</span>
              <strong>Failure handling</strong>
            </div>
            <div>
              <span>Security</span>
              <strong>AI guardrails</strong>
            </div>
          </div>
        </div>
      </section>

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
            <span className="kicker">Selected work</span>
            <h2>Systems designed around real operational problems.</h2>
          </div>
          <p>
            Each case study explains the problem, architecture, reliability
            approach and business outcome—not only the tools used.
          </p>
        </div>

        <div className="project-grid">
          {featured.map((project, index) => (
            <article className="project-card" key={project.slug}>
              <div className="project-number">0{index + 1}</div>
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
            .filter((project) => !project.featured)
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
            <span className="kicker">Capabilities</span>
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
              <span className="kicker">Engineering approach</span>
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
              <span className="kicker">Experience</span>
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
            <span className="kicker">Start a conversation</span>
            <h2>Have a process that should run better?</h2>
            <p>
              Let&apos;s turn it into a reliable automation system with clear
              data, controlled AI and measurable outcomes.
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
              Let&apos;s talk on WhatsApp
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
          <div className="modal">
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
