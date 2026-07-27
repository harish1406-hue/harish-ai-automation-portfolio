export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  capabilities: string[];
  architecture: string[];
  featured?: boolean;
  github?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    slug: "discord-payout-privacy-system",
    title: "Discord Payout Processing & Privacy Redaction System",
    shortTitle: "Discord Privacy Automation",
    category: "OCR · AI · Backend Automation",
    description:
      "An end-to-end pipeline that ingests payout images and PDFs, detects sensitive text, redacts it through a custom FastAPI service, structures payout data with AI and publishes sanitised updates to Discord.",
    problem:
      "Publishing payout updates required repetitive manual review, formatting and privacy checks. Sensitive names or identifiers could be exposed if moderation was inconsistent.",
    solution:
      "I designed a workflow orchestrated through automation tooling and a custom FastAPI redaction API. It preprocesses files, uses Tesseract with EasyOCR fallback, maps text coordinates, applies precise redaction and returns traceable structured results before Discord publishing.",
    impact: [
      "Reduced repetitive moderation work",
      "Standardised payout publication across channels",
      "Added privacy protection before public posting",
      "Created auditable request IDs, match details and output records",
    ],
    stack: ["FastAPI", "Python", "n8n", "Tesseract", "EasyOCR", "Pillow", "PyMuPDF", "Discord API"],
    capabilities: ["OCR fallback", "PDF processing", "Bearer authentication", "Coordinate-level masking", "Batch inputs", "Structured JSON traces"],
    architecture: ["Image/PDF ingestion", "Validation", "OCR extraction", "Target matching", "Redaction API", "AI structuring", "Discord publishing", "Trace log"],
    featured: true,
    status: "Production-style",
  },
  {
    slug: "multi-agent-rag-orchestration",
    title: "Multi-Agent RAG Response Orchestration System",
    shortTitle: "Multi-Agent RAG System",
    category: "RAG · Multi-Agent AI",
    description:
      "A modular conversational system combining retrieval-augmented generation, persistent memory and specialist agents for proposing, criticising and synthesising responses.",
    problem:
      "Single-model assistants can produce inconsistent answers, lose context and provide outputs without sufficient grounding or quality review.",
    solution:
      "I created modular n8n sub-workflows with a proposer, critic and synthesiser. Supabase stores session memory and file context, while retrieval supplies grounded evidence before a final response is generated.",
    impact: ["Improved response consistency", "Enabled persistent session memory", "Separated agent responsibilities", "Made individual agents independently maintainable"],
    stack: ["n8n", "Supabase", "PostgreSQL", "Gemini", "Claude", "OpenAI", "LangChain", "RAG"],
    capabilities: ["Vector retrieval", "Source grounding", "Session memory", "Agent evaluation", "Context filtering", "Response synthesis"],
    architecture: ["User request", "Input guardrails", "Retriever", "Context ranking", "Proposer", "Critic", "Synthesiser", "Output validation"],
    featured: true,
    status: "Modular prototype",
  },
  {
    slug: "invoice-intelligence",
    title: "Intelligent Invoice Processing & Validation Platform",
    shortTitle: "Invoice Intelligence",
    category: "Document AI · Operations",
    description:
      "A document-processing system that extracts structured invoice data from PDF, DOCX and image inputs, validates required fields and maps results into business systems.",
    problem:
      "Invoice details were manually copied into Airtable or spreadsheets, creating delays, inconsistent formatting and missing-field errors.",
    solution:
      "I built a customised upload and processing flow with OCR/AI extraction, field segregation, structured mapping and Slack notifications when information is incomplete.",
    impact: ["Reduced manual data entry", "Standardised extracted fields", "Made missing data visible immediately", "Supported multiple document formats"],
    stack: ["n8n", "OpenAI", "OCR", "Airtable", "Google Sheets", "Slack", "JSON Schema"],
    capabilities: ["Multi-format ingestion", "Structured extraction", "Field validation", "Human-in-the-loop review", "Missing-data alerts", "Result tracing"],
    architecture: ["Upload", "Document parsing", "AI extraction", "Schema validation", "Confidence checks", "Data mapping", "Slack review", "Storage"],
    featured: true,
    status: "Client automation",
  },
  {
    slug: "brand-visibility-intelligence",
    title: "Multi-LLM Brand Visibility Intelligence Platform",
    shortTitle: "Brand Visibility Intelligence",
    category: "Marketing AI · Analytics",
    description:
      "A repeatable workflow that evaluates brand visibility across multiple language models and produces structured, traceable results for reporting.",
    problem:
      "Brand teams lacked a consistent way to understand whether and how different AI models mention their company, products and URLs.",
    solution:
      "I created a custom intake form, conditional model routing, semantic checks and JSON parsing to compare responses from ChatGPT, Claude and Gemini.",
    impact: ["Enabled repeatable AI visibility analysis", "Created structured downstream-ready reports", "Supported user-selected model combinations", "Improved visibility of brand mentions and cited URLs"],
    stack: ["n8n", "OpenAI", "Claude", "Gemini", "LangChain", "JSON", "Custom Forms"],
    capabilities: ["Multi-model evaluation", "Conditional routing", "Mention extraction", "URL validation", "Semantic comparison", "Dashboard-ready output"],
    architecture: ["Brand form", "Prompt builder", "Model router", "Parallel evaluations", "Parser", "Semantic validator", "Results store", "Dashboard"],
    featured: true,
    status: "Analytics workflow",
  },
  {
    slug: "cms-media-generation",
    title: "AI-Powered CMS Media Generation Pipeline",
    shortTitle: "CMS Media Pipeline",
    category: "Generative AI · CMS Automation",
    description:
      "A scheduled workflow that retrieves glossary entries from a headless CMS, generates contextual visuals and updates the CMS with hosted media URLs.",
    problem: "Creating and attaching consistent illustrations to a growing glossary was slow and difficult to scale manually.",
    solution: "I automated GraphQL retrieval, prompt generation, ComfyUI rendering, AWS S3 uploads and GraphQL mutations, with Supabase tracking processed entries.",
    impact: ["Automated daily media creation", "Maintained reproducible processing state", "Reduced repetitive CMS work", "Enabled batch processing"],
    stack: ["n8n", "GraphQL", "ComfyUI", "LangChain", "Supabase", "AWS S3"],
    capabilities: ["Scheduled runs", "Prompt sanitisation", "Batch processing", "Status tracking", "Object storage", "CMS mutation"],
    architecture: ["CMS query", "Entry filter", "Prompt agent", "Image render", "Quality check", "S3 upload", "CMS update", "Processing log"],
    status: "Automated content pipeline",
  },
  {
    slug: "youtube-intelligence-digest",
    title: "Automated YouTube Intelligence & Email Digest",
    shortTitle: "YouTube Intelligence Digest",
    category: "Content Intelligence",
    description: "A scheduled content pipeline that retrieves new videos, extracts transcripts, normalises terminology and sends branded HTML summaries.",
    problem: "Keeping up with channel content and manually producing useful summaries consumed time every day.",
    solution: "I integrated the YouTube API, transcript extraction, LangChain/OpenAI summarisation and SMTP delivery into a hands-free daily workflow.",
    impact: ["Automated daily content curation", "Improved technical terminology accuracy", "Delivered branded summaries with links and thumbnails", "Removed repetitive monitoring"],
    stack: ["n8n", "YouTube API", "Kome AI", "LangChain", "OpenAI", "SMTP", "HTML"],
    capabilities: ["Transcript extraction", "Terminology correction", "Scheduled execution", "HTML generation", "Email delivery", "Source linking"],
    architecture: ["Channel check", "New-video filter", "Transcript", "Normalisation", "Summarisation", "HTML renderer", "Email delivery", "Run log"],
    status: "Scheduled automation",
  },
  {
    slug: "product-quotation-assistant",
    title: "AI Product Quotation & Recommendation Assistant",
    shortTitle: "Product Quotation Assistant",
    category: "Sales Automation",
    description: "An AI workflow that analyses customer emails and product links, checks CRM status and prepares personalised product quotations.",
    problem: "Quotation requests required manual customer checks, product matching, pricing review and email preparation.",
    solution: "I connected email intake, CRM identification, product-link analysis and recommendation logic into a single automated workflow.",
    impact: ["Reduced response time", "Improved quotation consistency", "Personalised recommendations using CRM context", "Automated repetitive product matching"],
    stack: ["n8n", "CRM APIs", "NLP", "Email", "OpenAI", "Product Data APIs"],
    capabilities: ["Customer identification", "Product-link analysis", "Recommendation logic", "Pricing context", "Personalised drafting", "Approval workflow"],
    architecture: ["Email intake", "CRM lookup", "Link analyser", "Product matcher", "Pricing rules", "Draft generator", "Human approval", "Reply"],
    status: "Client automation",
  },
  {
    slug: "recruitment-marketing-platform",
    title: "Automated Recruitment Marketing Platform",
    shortTitle: "Recruitment Automation",
    category: "Recruitment Operations",
    description: "A two-workflow system for generating job descriptions, UTM-tagged links, branded job posters and multi-platform job posts.",
    problem: "Recruiters repeatedly recreated copy, links and visual assets before publishing each vacancy across several channels.",
    solution: "I developed coordinated workflows for job distribution and configurable poster creation through a custom interface.",
    impact: ["Reduced repetitive recruitment marketing work", "Standardised job assets", "Improved campaign traceability with UTM links", "Enabled reusable poster templates"],
    stack: ["n8n", "AI Content Generation", "UTM Tracking", "Custom UI", "Social APIs", "Job Platforms"],
    capabilities: ["Job-description generation", "UTM creation", "Template selection", "Poster generation", "Multi-channel publishing", "Campaign tracking"],
    architecture: ["Job form", "Content generator", "UTM builder", "Poster workflow", "Approval", "Distribution", "Tracking dashboard", "Archive"],
    status: "Recruitment workflow",
  },
  {
    slug: "showroom-ai",
    title: "ShowroomAI — Intelligent Product Experience Platform",
    shortTitle: "ShowroomAI",
    category: "AI Product Experience",
    description: "A frontend-oriented AI product concept for presenting, exploring and understanding showroom or product information through a modern interactive experience.",
    problem: "Repository access was unavailable during portfolio preparation, so detailed functionality remains to be verified.",
    solution: "Included as a provisional project entry ready to be updated from the repository or ZIP source.",
    impact: ["Reserved as a product-focused case study", "Demonstrates frontend/product direction once verified"],
    stack: ["Frontend", "AI Integration", "Product Data"],
    capabilities: ["To be verified from source"],
    architecture: ["Frontend", "AI layer", "Product data", "User experience"],
    github: "https://github.com/harish1406-hue/showroom-ai.git",
    status: "Source review pending",
  },
  {
    slug: "meetingflow-ai",
    title: "MeetingFlow AI — Meeting Intelligence & Action Tracking",
    shortTitle: "MeetingFlow AI",
    category: "Meeting Automation",
    description: "An AI meeting workflow concept designed for meeting data, summaries, decisions, action items and operational follow-up.",
    problem: "Repository access was unavailable during portfolio preparation, so detailed functionality remains to be verified.",
    solution: "Included as a provisional project entry ready to be updated from the repository or ZIP source.",
    impact: ["Reserved as a strong collaboration-product case study", "Suitable for live action tracking and meeting dashboards once verified"],
    stack: ["Frontend", "AI", "Workflow Automation", "Meeting Data"],
    capabilities: ["To be verified from source"],
    architecture: ["Meeting input", "AI processing", "Decision extraction", "Action tracker", "Dashboard"],
    github: "https://github.com/harish1406-hue/meetingflow-ai.git",
    status: "Source review pending",
  },
];

export const skills = [
  { group: "Automation", items: ["n8n", "Make.com", "Zapier", "Webhooks", "Event-driven workflows", "API orchestration"] },
  { group: "Backend", items: ["Node.js", "TypeScript", "Python", "FastAPI", "Flask", "REST APIs"] },
  { group: "AI & RAG", items: ["OpenAI", "Claude", "Gemini", "Ollama", "LangChain", "RAG", "Multi-agent systems"] },
  { group: "Data", items: ["Supabase", "PostgreSQL", "SQL", "Airtable", "Google Sheets", "Vector search"] },
  { group: "Frontend & Insights", items: ["Next.js", "React", "Dashboards", "Live status tracking", "Result tracing", "Responsive UI"] },
  { group: "Reliability & Security", items: ["Prompt-injection guardrails", "Input validation", "Schema enforcement", "Logging", "Retries", "Human approval"] },
];
