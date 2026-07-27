import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://harish-ai-automation-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Harish Velayutham | Full-Stack AI Automation Engineer",
    template: "%s | Harish Velayutham",
  },

  description:
    "Portfolio of Harish Velayutham, a Full-Stack AI Automation Engineer building n8n workflows, RAG systems, custom FastAPI and Node.js APIs, AI guardrails, operational dashboards and traceable business automation.",

  applicationName: "Harish Velayutham Portfolio",

  authors: [
    {
      name: "Harish Velayutham",
      url: siteUrl,
    },
  ],

  creator: "Harish Velayutham",
  publisher: "Harish Velayutham",

  keywords: [
    "Harish Velayutham",
    "Full-Stack AI Automation Engineer",
    "AI Automation Engineer",
    "n8n Developer",
    "Workflow Automation",
    "RAG Engineer",
    "Retrieval-Augmented Generation",
    "FastAPI Developer",
    "Node.js Automation",
    "Python Automation",
    "AI Guardrails",
    "Prompt Injection Prevention",
    "Operational Dashboards",
    "AI Workflow Monitoring",
    "Supabase",
    "OpenAI",
    "Claude",
    "Gemini",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: "Harish Velayutham Portfolio",
    title: "Harish Velayutham | Full-Stack AI Automation Engineer",
    description:
      "AI automation, RAG systems, custom APIs, operational dashboards, AI guardrails and traceable workflow engineering.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Harish Velayutham | Full-Stack AI Automation Engineer",
    description:
      "AI automation, RAG systems, custom APIs, dashboards and secure workflow engineering.",
  },

  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Harish Velayutham — Full-Stack AI Automation Engineer",
  description:
    "Professional portfolio showcasing AI automation systems, RAG applications, custom APIs, operational dashboards and workflow engineering.",
  url: siteUrl,
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}/#harish-velayutham`,
    name: "Harish Velayutham",
    jobTitle: "Full-Stack AI Automation Engineer",
    email: "mailto:harishmech415@gmail.com",
    telephone: "+37065425110",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kaunas",
      addressCountry: "LT",
    },
    knowsAbout: [
      "AI automation",
      "Workflow automation",
      "n8n",
      "Retrieval-Augmented Generation",
      "FastAPI",
      "Node.js",
      "Python",
      "AI guardrails",
      "Prompt injection prevention",
      "Operational dashboards",
      "Workflow observability",
      "Supabase",
    ],
    sameAs: [
      "https://github.com/harish1406-hue"
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {children}
        <Analytics />
      </body>
    </html>
  );
}
