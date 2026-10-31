import Image from "next/image";
import type { ReactNode } from "react";
import {
  certifications,
  contact,
  courses,
  education,
  experience,
  languages,
  learningSkills,
  profile,
  projects,
  recommendation,
  site,
  skills,
  targetRoles,
} from "@/lib/data";
import {
  DownloadIcon,
  ExternalIcon,
  GitHubIcon,
  KubeIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";

const nav = [
  { href: "#about", label: "About" },
  { href: "#certifications", label: "Certifications" },
  { href: "#recommendation", label: "Recommendation" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: site.url,
  image: `${site.url}${profile.photo}`,
  jobTitle: "DevOps / Platform Engineer",
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  sameAs: [contact.linkedin, contact.github, contact.credly],
  knowsAbout: ["Kubernetes", "DevOps", "Platform Engineering", "Linux", "AWS"],
  hasCredential: certifications.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c.name,
    url: c.verifyUrl,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-5 sm:px-8">
        <Hero />
        <About />
        <Certifications />
        <Recommendation />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          owais<span className="text-accent">.io</span>
        </a>
        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 md:ml-2"
          >
            Contact
          </a>
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="grid items-center gap-10 py-10 sm:py-16 md:grid-cols-[1fr_auto] md:py-24">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Open to DevOps / Platform roles
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-4 flex items-center gap-2 text-lg font-medium text-accent sm:text-xl">
          <KubeIcon width={22} height={22} />
          {profile.headline}
        </p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Five CNCF Kubernetes certifications, a homelab cluster built from scratch with kubeadm,
          and a career change from finance into cloud-native infrastructure. I focus on{" "}
          {profile.focus.join(", ")}.
        </p>
        <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <PinIcon width={15} height={15} /> {profile.location}
          </span>
          <span>{profile.availability}</span>
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <MailIcon /> Email me
          </a>
          <a
            href={profile.cv}
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent"
          >
            <DownloadIcon /> Download CV
          </a>
          <IconLink href={contact.linkedin} label="LinkedIn">
            <LinkedInIcon />
          </IconLink>
          <IconLink href={contact.github} label="GitHub">
            <GitHubIcon />
          </IconLink>
        </div>
      </div>
      <div className="relative order-first mx-auto mb-2 w-40 sm:w-56 md:order-none md:mx-0 md:mb-0 md:w-64">
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent/10 to-transparent blur-2xl" />
        <Image
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={400}
          height={400}
          priority
          className="relative aspect-square w-full rounded-[1.75rem] border border-border object-cover shadow-xl"
        />
        <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs shadow-md">
          <KubeIcon width={14} height={14} className="text-accent" /> Kubestronaut
        </div>
      </div>
    </section>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground sm:w-11 sm:px-0"
    >
      {children}
      <span className="sm:hidden">{label}</span>
    </a>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border py-16 sm:py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-surface p-6 ${className}`}>{children}</div>
  );
}

function Tag({ children, dashed = false }: { children: ReactNode; dashed?: boolean }) {
  return (
    <span
      className={`inline-block rounded-md border px-2.5 py-1 font-mono text-xs ${
        dashed ? "border-dashed border-border text-muted" : "border-border bg-background"
      }`}
    >
      {children}
    </span>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="From finance to cloud-native">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {profile.story.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <Card>
          <h3 className="text-sm font-semibold">Looking for</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {targetRoles.map((r) => (
              <li key={r} className="flex gap-2">
                <span className="text-accent">→</span> {r}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">
            Long-term direction: platform engineering and Kubernetes security.
          </p>
          <h3 className="mt-6 text-sm font-semibold">Languages</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {languages.map((l) => (
              <li key={l.name}>
                <Tag>
                  {l.name} · <span className="text-muted">{l.level}</span>
                </Tag>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" eyebrow="02 · Certifications" title="Kubestronaut — all five CNCF Kubernetes certifications">
      <p className="-mt-4 mb-8 max-w-2xl text-muted">
        The CNCF Kubestronaut title is awarded for holding all five Kubernetes certifications at
        once. Earned in October 2026. Every badge below links to its Credly verification page.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <li key={c.code}>
            <a
              href={c.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent"
            >
              {c.badge && (
                <Image src={c.badge} alt={`${c.code} badge`} width={72} height={72} className="size-16 shrink-0 sm:size-18" />
              )}
              <div className="min-w-0">
                <p className="font-mono text-sm font-semibold text-accent">{c.code}</p>
                <p className="mt-0.5 text-sm font-medium leading-snug">{c.name}</p>
                <p className="mt-1.5 inline-flex items-center gap-1 text-xs text-muted">
                  Issued {c.issued}
                  <ExternalIcon width={12} height={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <a
        href={contact.credly}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
      >
        View all badges on Credly <ExternalIcon width={14} height={14} />
      </a>
    </Section>
  );
}

function Recommendation() {
  const r = recommendation;
  return (
    <Section id="recommendation" eyebrow="03 · Recommendation" title="Reference letter from the CNCF">
      <Card className="relative overflow-hidden bg-gradient-to-br from-accent-soft to-surface p-7 sm:p-10">
        <span aria-hidden className="pointer-events-none absolute -top-6 right-4 font-serif text-[10rem] leading-none text-accent/10 sm:right-8">
          &rdquo;
        </span>
        <figure className="relative">
          <blockquote className="max-w-3xl text-xl font-medium leading-snug tracking-tight sm:text-2xl">
            &ldquo;{r.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
              <KubeIcon width={20} height={20} />
            </span>
            <span>
              <span className="block text-sm font-semibold">{r.author}</span>
              <span className="block text-sm text-muted">{r.authorTitle}</span>
            </span>
          </figcaption>
        </figure>
        <div className="relative mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            <span className="text-2xl font-semibold text-foreground">{r.holders}</span>{" "}
            Kubestronauts worldwide as of {r.holdersAsOf}, per CNCF program records.
          </p>
          <a
            href={r.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Read the full letter (PDF) <ExternalIcon width={15} height={15} />
          </a>
        </div>
      </Card>
      <h3 className="mt-10 text-sm font-semibold">What the letter says a Kubestronaut can do</h3>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {r.competencies.map((c) => (
          <li key={c.title} className="rounded-2xl border border-border bg-surface p-5">
            <p className="font-semibold">{c.title}</p>
            <p className="mt-1.5 text-sm text-muted">{c.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="04 · Projects" title="What I'm building">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.name} className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                <span className="size-1.5 rounded-full bg-current" />
                {p.status}
              </span>
              {p.started && <span className="text-xs text-muted">Started {p.started}</span>}
            </div>
            <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 text-muted">{p.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5 pt-1 md:mt-auto md:pt-5">
              {p.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
            {p.repo ? (
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                <GitHubIcon width={15} height={15} /> View on GitHub
              </a>
            ) : (
              <p className="mt-4 text-xs text-muted">Repository link coming soon</p>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="05 · Skills" title="Technical skills">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((s) => (
          <Card key={s.group}>
            <h3 className="text-sm font-semibold">{s.group}</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {s.items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </Card>
        ))}
        <Card className="border-dashed">
          <h3 className="text-sm font-semibold">Currently learning</h3>
          <p className="mt-1 text-xs text-muted">Hands-on through the fintech portfolio project, not production experience yet.</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {learningSkills.map((i) => (
              <Tag key={i} dashed>
                {i}
              </Tag>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="06 · Experience" title="Before DevOps">
      <p className="-mt-4 mb-8 max-w-2xl text-muted">
        Over a decade in finance and government administration: careful record-keeping,
        reconciliation and reporting, which carries over directly into running reliable systems.
      </p>
      <ol className="relative space-y-8 border-l border-border pl-6">
        {experience.map((j) => (
          <li key={`${j.org}-${j.role}`} className="relative">
            <span className="absolute -left-[1.85rem] top-1.5 size-3 rounded-full border-2 border-accent bg-background" />
            <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold">{j.role}</h3>
              <p className="font-mono text-xs text-muted">{j.period}</p>
            </div>
            <p className="mt-0.5 text-sm text-muted">
              {j.org} · {j.location}
            </p>
            {j.description && <p className="mt-2 max-w-3xl text-sm text-muted">{j.description}</p>}
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="07 · Education" title="Education & training">
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((e) => (
          <Card key={e.title}>
            <p className="font-mono text-xs text-muted">{e.period}</p>
            <h3 className="mt-2 font-semibold">{e.title}</h3>
            <p className="mt-1 text-sm text-muted">{e.org}</p>
            {e.note && <p className="mt-3 text-xs text-accent">{e.note}</p>}
          </Card>
        ))}
      </div>
      <div className="mt-5 space-y-2">
        {courses.map((c) => (
          <p key={c.title} className="text-sm text-muted">
            <span className="font-medium text-foreground">Course:</span> {c.title} — {c.note}
          </p>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const items = [
    { href: `mailto:${contact.email}`, label: contact.email, icon: <MailIcon /> },
    { href: contact.whatsapp, label: `WhatsApp ${contact.phone}`, icon: <WhatsAppIcon />, external: true },
    { href: `tel:${contact.phone.replace(/\s/g, "")}`, label: contact.phone, icon: <PhoneIcon /> },
    { href: contact.linkedin, label: "linkedin.com/in/owais-io", icon: <LinkedInIcon />, external: true },
    { href: contact.github, label: "github.com/owais-io", icon: <GitHubIcon />, external: true },
  ];
  return (
    <Section id="contact" eyebrow="08 · Contact" title="Let's talk">
      <Card className="bg-gradient-to-br from-accent-soft to-surface p-8 sm:p-10">
        <p className="max-w-2xl text-lg text-muted">
          Hiring for a junior DevOps, Cloud or Platform role, or just want to chat about
          Kubernetes and career changes? I&apos;d love to hear from you.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {items.map((i) => (
            <li key={i.href}>
              <a
                href={i.href}
                {...(i.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm transition-colors hover:border-accent"
              >
                <span className="text-accent">{i.icon}</span>
                <span className="truncate">{i.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>© {profile.name}</p>
        <p className="font-mono text-xs">kubectl get owais -o wide</p>
      </div>
    </footer>
  );
}
